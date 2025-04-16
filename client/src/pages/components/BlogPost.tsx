import React from 'react';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Link } from 'wouter';

interface BlogPostProps {
  title: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  content: string;
  image?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  date,
  author,
  category,
  tags,
  content,
  image
}) => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/insights">
        <Button variant="ghost" className="mb-6 pl-0 hover:pl-2 transition-all">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Insights
        </Button>
      </Link>

      <Badge variant="outline" className="mb-4">{category}</Badge>
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h1>
      
      <div className="flex items-center text-sm text-muted-foreground mb-8">
        <Calendar className="mr-1 h-4 w-4" />
        <span>{date}</span>
        <span className="mx-2">•</span>
        <User className="mr-1 h-4 w-4" />
        <span>{author}</span>
      </div>

      <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden mb-8">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover" 
          />
        ) : (
          <div className="bg-background-dark h-full w-full flex items-center justify-center text-muted-foreground">
            <span className="text-lg">Featured Image</span>
          </div>
        )}
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
        {content ? (
          <div dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <div>
            <p>
              In today's rapidly evolving digital landscape, organizations face unprecedented challenges in safeguarding their information assets and maintaining regulatory compliance. This article explores key strategies and best practices for addressing these challenges effectively.
            </p>
            
            <h2>Understanding the Challenge</h2>
            <p>
              The cybersecurity threat landscape continues to evolve at an alarming pace, with attackers employing increasingly sophisticated techniques to compromise organizational defenses. Simultaneously, regulatory requirements are becoming more stringent, placing additional pressure on already stretched security teams.
            </p>
            
            <h2>Key Considerations</h2>
            <p>
              Organizations must adopt a comprehensive approach that addresses both technical and procedural aspects of security and compliance. This includes implementing robust security controls, establishing clear governance frameworks, and fostering a culture of security awareness throughout the organization.
            </p>
            
            <h2>Strategic Recommendations</h2>
            <p>
              1. <strong>Adopt a Risk-Based Approach</strong>: Focus resources on protecting your most critical assets by conducting regular risk assessments and prioritizing mitigation efforts accordingly.
            </p>
            <p>
              2. <strong>Implement Defense in Depth</strong>: Deploy multiple layers of security controls to protect critical systems and data, ensuring that the failure of any single control doesn't compromise overall security.
            </p>
            <p>
              3. <strong>Establish Clear Governance</strong>: Define clear roles, responsibilities, and processes for managing security and compliance across the organization.
            </p>
            <p>
              4. <strong>Leverage Automation</strong>: Implement automated tools and processes to enhance efficiency and effectiveness in security monitoring, compliance assessment, and incident response.
            </p>
            <p>
              5. <strong>Maintain Regulatory Awareness</strong>: Stay informed about evolving regulatory requirements and ensure your compliance program adapts accordingly.
            </p>
            
            <h2>Conclusion</h2>
            <p>
              By adopting a strategic, risk-based approach to security and compliance, organizations can effectively navigate the complex challenges of today's digital landscape while enabling continued innovation and growth.
            </p>
          </div>
        )}
      </div>

      <Separator className="my-8" />
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold mb-2">About the Author</h3>
        <p className="text-muted-foreground">
          {author} is a cybersecurity expert with extensive experience in helping organizations navigate complex security and compliance challenges. Their expertise spans across multiple domains including risk management, governance, and technical security controls.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;