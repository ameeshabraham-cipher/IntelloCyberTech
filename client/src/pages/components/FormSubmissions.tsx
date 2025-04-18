import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { useScrollReveal } from '@/lib/animations';
import { ChevronLeft, DownloadIcon, EyeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getQueryFn } from '@/lib/queryClient';
import AdminNav from '@/components/AdminNav';

// Define the types for form data
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  service?: string;
}

interface FormSubmission {
  id: string;
  timestamp: string;
  data: ContactFormData;
}

interface ApiResponse {
  success: boolean;
  submissions: FormSubmission[];
}

interface DetailApiResponse {
  success: boolean;
  submission: FormSubmission;
}

const FormSubmissionsPage = () => {
  useScrollReveal();
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'detail'>('list');
  
  const { data, isLoading, isError, error } = useQuery<ApiResponse>({
    queryKey: ['/api/admin/form-submissions'],
    queryFn: getQueryFn({ on401: 'throw' }),
    refetchInterval: 30000, // Refetch every 30 seconds to get the latest submissions
  });
  
  const handleViewSubmission = (submission: FormSubmission) => {
    setSelectedSubmission(submission);
    setViewMode('detail');
  };
  
  const handleBackToList = () => {
    setViewMode('list');
    setSelectedSubmission(null);
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  const downloadAsJson = (submission: FormSubmission) => {
    const dataStr = JSON.stringify(submission, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `form_submission_${submission.id}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-10 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background to-background"></div>
        
        {/* Cyber grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(235, 52, 67, 0.03) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(235, 52, 67, 0.03) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {viewMode === 'detail' && (
              <Button
                variant="outline"
                className="mb-6"
                onClick={handleBackToList}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Submissions
              </Button>
            )}
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {viewMode === 'list' 
                ? 'Form Submissions' 
                : 'Submission Details'}
            </h1>
            <p className="text-muted-foreground">
              {viewMode === 'list' 
                ? 'View and manage contact form submissions from the website.' 
                : 'Detailed information about the selected form submission.'}
            </p>
            
            {viewMode === 'list' && <AdminNav />}
          </div>
        </div>
      </section>
      
      {/* Content */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {viewMode === 'list' ? (
              <>
                {isLoading ? (
                  // Loading state
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <Card key={i} className="bg-card/50 backdrop-blur-sm border border-[hsl(var(--secondary))]/10">
                        <CardHeader>
                          <Skeleton className="h-6 w-1/3 mb-2" />
                          <Skeleton className="h-4 w-1/4" />
                        </CardHeader>
                        <CardContent>
                          <Skeleton className="h-4 w-full mb-2" />
                          <Skeleton className="h-4 w-3/4" />
                        </CardContent>
                        <CardFooter>
                          <Skeleton className="h-10 w-24" />
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : isError ? (
                  // Error state
                  <Card className="bg-destructive/10 border-destructive">
                    <CardHeader>
                      <CardTitle>Error Loading Submissions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>There was an error loading the form submissions.</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {String(error)}
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  // Data loaded successfully
                  <div className="space-y-6">
                    {data?.submissions && data.submissions.length > 0 ? (
                      data.submissions.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).map((submission) => (
                        <Card key={submission.id} className="bg-card/50 backdrop-blur-sm border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300">
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle>{submission.data.name}</CardTitle>
                                <CardDescription>{submission.data.email}</CardDescription>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {submission.data.service || 'General Inquiry'}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-2">
                              <strong>Submitted:</strong> {formatDate(submission.timestamp)}
                            </p>
                            <p className="text-sm line-clamp-2">
                              {submission.data.message}
                            </p>
                          </CardContent>
                          <CardFooter className="flex justify-between">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleViewSubmission(submission)}
                              className="text-[hsl(var(--secondary))]"
                            >
                              <EyeIcon className="mr-2 h-4 w-4" />
                              View Details
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => downloadAsJson(submission)}
                            >
                              <DownloadIcon className="mr-2 h-4 w-4" />
                              Export
                            </Button>
                          </CardFooter>
                        </Card>
                      ))
                    ) : (
                      <Card className="bg-card/30 backdrop-blur-sm border border-[hsl(var(--secondary))]/10">
                        <CardHeader>
                          <CardTitle>No Submissions Yet</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>There are no form submissions to display.</p>
                        </CardContent>
                        <CardFooter>
                          <Link href="/">
                            <Button variant="outline">Back to Home</Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    )}
                  </div>
                )}
              </>
            ) : (
              // Submission detail view
              selectedSubmission && (
                <Card className="bg-card/50 backdrop-blur-sm border border-[hsl(var(--secondary))]/10">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl">{selectedSubmission.data.name}</CardTitle>
                        <CardDescription>
                          <a href={`mailto:${selectedSubmission.data.email}`} className="hover:underline">
                            {selectedSubmission.data.email}
                          </a>
                          {selectedSubmission.data.phone && (
                            <> • <a href={`tel:${selectedSubmission.data.phone}`} className="hover:underline">
                              {selectedSubmission.data.phone}
                            </a></>
                          )}
                        </CardDescription>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => downloadAsJson(selectedSubmission)}
                      >
                        <DownloadIcon className="mr-2 h-4 w-4" />
                        Export
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Submission ID</h3>
                      <p className="text-sm font-mono">{selectedSubmission.id}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Submission Time</h3>
                      <p>{formatDate(selectedSubmission.timestamp)}</p>
                    </div>
                    
                    {selectedSubmission.data.company && (
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Company</h3>
                        <p>{selectedSubmission.data.company}</p>
                      </div>
                    )}
                    
                    {selectedSubmission.data.service && (
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Service</h3>
                        <Badge variant="outline">{selectedSubmission.data.service}</Badge>
                      </div>
                    )}
                    
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Subject</h3>
                      <p>{selectedSubmission.data.subject || 'General Inquiry'}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Message</h3>
                      <div className="bg-background/50 p-4 rounded-md border border-[hsl(var(--secondary))]/10 whitespace-pre-wrap">
                        {selectedSubmission.data.message}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormSubmissionsPage;