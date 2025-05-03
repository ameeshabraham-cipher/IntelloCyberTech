import { Link } from 'wouter';
import { Calendar, User, ChevronRight } from 'lucide-react';

export default function Insights() {
  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      slug: 'understanding-uae-pdpl',
      title: 'Understanding the UAE Personal Data Protection Law',
      excerpt: 'A comprehensive guide to UAE PDPL requirements and how organizations can achieve compliance.',
      date: '2023-10-15',
      author: 'Ahmed Mahmoud',
      category: 'Compliance',
      image: '/placeholder-1.jpg',
    },
    {
      id: 2,
      slug: 'cloud-security-best-practices',
      title: 'Cloud Security Best Practices for UAE Businesses',
      excerpt: 'Essential security controls and configurations to protect your cloud infrastructure in the UAE region.',
      date: '2023-09-28',
      author: 'Fatima Ali',
      category: 'Cloud Security',
      image: '/placeholder-2.jpg',
    },
    {
      id: 3,
      slug: 'penetration-testing-guide',
      title: 'A Guide to Effective Web Application Penetration Testing',
      excerpt: 'Key methodologies and approaches for identifying and remediating web application vulnerabilities.',
      date: '2023-09-10',
      author: 'James Wilson',
      category: 'Security Testing',
      image: '/placeholder-3.jpg',
    },
    {
      id: 4,
      slug: 'iso-27001-certification',
      title: 'ISO 27001: The Path to Certification',
      excerpt: 'A step-by-step approach to achieving ISO 27001 certification for your organization.',
      date: '2023-08-22',
      author: 'Sarah Khan',
      category: 'Standards',
      image: '/placeholder-4.jpg',
    },
    {
      id: 5,
      slug: 'ransomware-prevention',
      title: 'Ransomware Prevention Strategies for 2023',
      excerpt: 'Practical steps to protect your organization from the growing threat of ransomware attacks.',
      date: '2023-08-05',
      author: 'Mohammed Al-Hashimi',
      category: 'Threats',
      image: '/placeholder-5.jpg',
    },
    {
      id: 6,
      slug: 'zero-trust-architecture',
      title: 'Implementing Zero Trust Architecture',
      excerpt: 'A practical guide to adopting zero trust principles in your security infrastructure.',
      date: '2023-07-18',
      author: 'Priya Sharma',
      category: 'Architecture',
      image: '/placeholder-6.jpg',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 cyber-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cybersecurity <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert perspectives on cybersecurity trends, compliance requirements, and best practices for organizations in the UAE and Middle East.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-card/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col h-full">
                {/* Post Image */}
                <div className="h-48 bg-gradient-to-r from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-primary font-medium">Featured Image Placeholder</span>
                </div>
                
                {/* Post Content */}
                <div className="p-6 flex-grow">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {post.date}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">
                    <Link href={`/insights/${post.slug}`}>
                      <a className="hover:text-primary transition-colors">{post.title}</a>
                    </Link>
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center text-sm">
                    <User className="h-3.5 w-3.5 mr-1 text-primary" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                {/* Read More Link */}
                <div className="px-6 pb-6 mt-auto">
                  <Link href={`/insights/${post.slug}`}>
                    <a className="text-primary font-medium flex items-center hover:underline">
                      Read More
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 md:py-24 cyber-grid-overlay">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated on Cybersecurity Trends
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Subscribe to our newsletter to receive the latest insights, news, and best practices in cybersecurity and compliance.
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button 
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
