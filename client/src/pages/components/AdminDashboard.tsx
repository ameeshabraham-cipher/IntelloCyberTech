import { Link } from 'wouter';
import { useScrollReveal } from '@/lib/animations';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ClipboardList, FileText, BarChart } from 'lucide-react';

const AdminDashboard = () => {
  useScrollReveal();

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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Access and manage website submissions and analytics.
            </p>
          </div>
        </div>
      </section>
      
      {/* Content */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle>Contact Form Submissions</CardTitle>
                  <CardDescription>
                    View and manage contact form submissions from website visitors.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <FileText className="h-24 w-24 text-[hsl(var(--secondary))]" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/admin/submissions">
                    <Button className="w-full">
                      View Submissions
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle>Assessment Requests</CardTitle>
                  <CardDescription>
                    View and manage security assessment requests from potential clients.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <ClipboardList className="h-24 w-24 text-[hsl(var(--secondary))]" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/admin/assessment-requests">
                    <Button className="w-full">
                      View Assessment Requests
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 md:col-span-2">
                <CardHeader>
                  <CardTitle>Website Analytics</CardTitle>
                  <CardDescription>
                    Monitor website traffic, user engagement and conversion rates.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <BarChart className="h-24 w-24 text-[hsl(var(--secondary))]" />
                  </div>
                  <p className="text-center text-muted-foreground mt-4">
                    Analytics functionality coming soon
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" disabled>
                    View Analytics
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;