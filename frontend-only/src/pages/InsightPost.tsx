import { useParams, Link } from 'wouter';
import { Calendar, User, Tag, ChevronLeft, Share2 } from 'lucide-react';

export default function InsightPost() {
  const { slug } = useParams();

  // This would normally fetch the post data based on the slug
  // For this static version, we'll just show a placeholder
  const post = {
    title: slug ? `Article: ${slug.replace(/-/g, ' ')}` : 'Blog Post Title',
    date: 'October 15, 2023',
    author: 'Ahmed Mahmoud',
    category: 'Compliance',
    content: (
      <div className="prose dark:prose-invert prose-h2:text-2xl prose-h3:text-xl max-w-none">
        <p className="lead">
          This is a placeholder for the blog post content. In a complete implementation, this would
          display the full article content fetched from a content management system or API.
        </p>
        
        <h2>Introduction</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget nunc
          lobortis mattis aliquam faucibus. Viverra adipiscing at in tellus integer feugiat
          scelerisque varius morbi. Diam vel quam elementum pulvinar etiam non quam lacus
          suspendisse. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing.
        </p>
        
        <h2>Understanding the Requirements</h2>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
        <h3>Key Components</h3>
        <ul>
          <li>Component One - explanation and details about this component</li>
          <li>Component Two - explanation and details about this component</li>
          <li>Component Three - explanation and details about this component</li>
        </ul>
        
        <h2>Implementation Strategy</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.
        </p>
        
        <blockquote>
          <p>
            An important quote or highlight from the article that emphasizes a key point about the
            topic being discussed.
          </p>
        </blockquote>
        
        <h3>Best Practices</h3>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
        
        <h2>Conclusion</h2>
        <p>
          In conclusion, this placeholder article demonstrates how a complete blog post would be
          structured with proper headings, paragraphs, and formatting. The real implementation would
          fetch the actual content based on the provided slug parameter.
        </p>
      </div>
    ),
    tags: ['Compliance', 'UAE PDPL', 'Data Protection', 'Regulations'],
  };

  // Related posts would normally be fetched based on tags or category
  const relatedPosts = [
    {
      id: 1,
      slug: 'cloud-security-best-practices',
      title: 'Cloud Security Best Practices for UAE Businesses',
      date: 'September 28, 2023',
    },
    {
      id: 2,
      slug: 'iso-27001-certification',
      title: 'ISO 27001: The Path to Certification',
      date: 'August 22, 2023',
    },
    {
      id: 3,
      slug: 'zero-trust-architecture',
      title: 'Implementing Zero Trust Architecture',
      date: 'July 18, 2023',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 cyber-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back to Insights Link */}
            <Link href="/insights">
              <a className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Insights
              </a>
            </Link>

            {/* Post Header */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            {/* Post Meta */}
            <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-6 gap-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </span>
              <span className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </span>
            </div>

            {/* Featured Image Placeholder */}
            <div className="w-full h-64 md:h-96 bg-gradient-to-r from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mb-8">
              <span className="text-primary font-medium">Featured Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Post Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="bg-card rounded-xl border border-border p-6 md:p-8">
                {post.content}

                {/* Tags */}
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="flex items-center flex-wrap gap-2">
                    <Tag className="h-4 w-4 text-primary mr-2" />
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-card/80 px-3 py-1 rounded-full text-xs border border-border hover:border-primary/50 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="mt-8 pt-4">
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-4">Share this article:</span>
                    <div className="flex space-x-3">
                      <button className="p-2 rounded-full bg-card/80 border border-border hover:border-primary/50 transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                      {/* Social share buttons would go here */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="bg-card rounded-xl border border-border p-6 mt-8">
                <div className="flex items-start">
                  <div className="rounded-full bg-primary/10 p-4 mr-4">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{post.author}</h3>
                    <p className="text-muted-foreground mb-3">
                      Cybersecurity Expert with over 10 years of experience in compliance and
                      regulatory frameworks. Specializes in data protection and privacy regulations
                      in the Middle East region.
                    </p>
                    <div className="flex space-x-3">
                      {/* Social links would go here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Related Posts */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((post) => (
                    <div key={post.id} className="border-b border-border last:border-0 pb-4 last:pb-0">
                      <h4 className="font-medium mb-1">
                        <Link href={`/insights/${post.slug}`}>
                          <a className="hover:text-primary transition-colors">{post.title}</a>
                        </Link>
                      </h4>
                      <div className="text-sm text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5 inline-block mr-1" />
                        {post.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-card rounded-xl border border-border p-6 mt-6">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  {['Compliance', 'Cloud Security', 'Security Testing', 'Threat Intelligence', 'Best Practices'].map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                        {category}
                      </span>
                      <span className="text-xs bg-card/80 px-2 py-0.5 rounded-full border border-border">
                        {Math.floor(Math.random() * 10) + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-card rounded-xl border border-border p-6 mt-6">
                <h3 className="text-xl font-bold mb-4">Subscribe</h3>
                <p className="text-muted-foreground mb-4">
                  Stay updated with our latest insights and articles on cybersecurity.
                </p>
                <form>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
