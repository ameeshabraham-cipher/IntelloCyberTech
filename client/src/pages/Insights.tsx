import React, { useState } from 'react';
import { ChevronRight, Calendar, User, Tag, ArrowRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';

// Define the blog post structure
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  slug: string;
}

interface Category {
  name: string;
  slug: string;
  count: number;
}

// Sample blog posts data covering different service verticals
const blogPosts: BlogPost[] = [
  // GRC Services Blog Posts
  {
    id: '1',
    title: 'Navigating the Complex Landscape of ISO 27001:2022 Implementation',
    excerpt: 'The updated ISO 27001:2022 standard introduces significant changes to information security management systems. Learn how organizations can successfully adapt to these new requirements.',
    content: '',
    date: 'April 10, 2025',
    author: 'Ahmed Hassan',
    category: 'GRC Services',
    tags: ['ISO 27001', 'Information Security', 'Compliance', 'ISMS'],
    image: '/images/blog/iso-27001.svg',
    slug: 'navigating-complex-landscape-iso-27001-2022'
  },
  {
    id: '2',
    title: 'GDPR Four Years Later: Lessons Learned and Emerging Compliance Challenges',
    excerpt: 'As GDPR enforcement matures, organizations face new challenges in maintaining compliance. Explore key lessons and strategies for sustaining effective data protection practices.',
    content: '',
    date: 'April 5, 2025',
    author: 'Maria Rodriguez',
    category: 'GRC Services',
    tags: ['GDPR', 'Data Protection', 'Privacy', 'Compliance'],
    image: '/images/blog/gdpr.webp',
    slug: 'gdpr-four-years-later-lessons-challenges'
  },
  {
    id: '3',
    title: 'UAE PDPL: Strategic Approaches for Effective Implementation',
    excerpt: 'With the UAE Personal Data Protection Law now in effect, organizations must adapt quickly. Here is how to develop a strategic approach to PDPL compliance that aligns with your business objectives.',
    content: '',
    date: 'March 28, 2025',
    author: 'Fatima Al-Mansouri',
    category: 'GRC Services',
    tags: ['UAE PDPL', 'Data Protection', 'Compliance', 'Privacy'],
    image: '/images/blog/uae-pdpl.webp',
    slug: 'uae-pdpl-strategic-approaches-effective-implementation'
  },
  {
    id: '4',
    title: 'Preparing for SOC 2 Type II: Moving Beyond Initial Certification',
    excerpt: 'SOC 2 Type II requires demonstrating controls effectiveness over time. Discover practical strategies for maintaining continuous compliance and successful attestation.',
    content: '',
    date: 'March 21, 2025',
    author: 'Michael Chen',
    category: 'GRC Services',
    tags: ['SOC 2', 'Compliance', 'Auditing', 'Information Security'],
    image: '/images/blog/soc2.webp',
    slug: 'preparing-soc2-type-2-beyond-certification'
  },
  
  // IT Security & Audit Services Blog Posts
  {
    id: '5',
    title: 'Advanced Persistent Threats: Detection Strategies for the Modern Enterprise',
    excerpt: 'APTs continue to evolve in sophistication. Learn about advanced detection techniques and response strategies to protect your organization from these persistent threats.',
    content: '',
    date: 'March 15, 2025',
    author: 'James Wilson',
    category: 'IT Security & Audit Services',
    tags: ['APT', 'Threat Detection', 'Cybersecurity', 'Incident Response'],
    image: '/images/blog/apt.webp',
    slug: 'advanced-persistent-threats-detection-strategies'
  },
  {
    id: '6',
    title: 'Cloud Security Posture Management: Beyond Preventative Controls',
    excerpt: 'CSPM has evolved beyond simple preventative measures. Discover how modern CSPM practices integrate with broader security strategies for comprehensive cloud protection.',
    content: '',
    date: 'March 8, 2025',
    author: 'Sarah Johnson',
    category: 'IT Security & Audit Services',
    tags: ['Cloud Security', 'CSPM', 'DevSecOps', 'Infrastructure'],
    image: '/images/blog/cloud-security.webp',
    slug: 'cloud-security-posture-management-beyond-prevention'
  },
  {
    id: '7',
    title: 'Effective Security Assessment Frameworks for Hybrid Environments',
    excerpt: 'Hybrid infrastructures present unique security challenges. Explore comprehensive assessment methodologies designed specifically for complex hybrid environments.',
    content: '',
    date: 'March 1, 2025',
    author: 'Rajiv Patel',
    category: 'IT Security & Audit Services',
    tags: ['Security Assessment', 'Hybrid Cloud', 'Risk Management', 'Compliance'],
    image: '/images/blog/security-assessment.webp',
    slug: 'effective-security-assessment-frameworks-hybrid'
  },
  {
    id: '8',
    title: 'Web3 Security: Penetration Testing for Blockchain Applications',
    excerpt: 'Blockchain and Web3 technologies require specialized security testing approaches. Learn about effective pentesting strategies for decentralized applications and smart contracts.',
    content: '',
    date: 'February 22, 2025',
    author: 'Elena Petrova',
    category: 'IT Security & Audit Services',
    tags: ['Web3', 'Blockchain', 'Penetration Testing', 'Smart Contracts'],
    image: '/images/blog/web3-security.webp',
    slug: 'web3-security-pentesting-blockchain-applications'
  },
  
  // Cybersecurity Solutions Blog Posts
  {
    id: '9',
    title: 'Building an Effective Virtual CISO Program: Beyond Advisory Services',
    excerpt: 'Virtual CISO services can deliver strategic value beyond traditional advisory roles. Discover how to structure vCISO engagements for maximum organizational impact.',
    content: '',
    date: 'February 15, 2025',
    author: 'David Thompson',
    category: 'Cybersecurity Solutions',
    tags: ['vCISO', 'Security Leadership', 'Strategy', 'Program Management'],
    image: '/images/blog/vciso.webp',
    slug: 'building-effective-vciso-program-beyond-advisory'
  },
  {
    id: '10',
    title: 'Zero Trust Architecture: Implementation Strategies for the Financial Sector',
    excerpt: 'Financial institutions face unique challenges when implementing Zero Trust. Learn about sector-specific approaches that balance security with operational requirements.',
    content: '',
    date: 'February 8, 2025',
    author: 'Omar Al-Nasser',
    category: 'Cybersecurity Solutions',
    tags: ['Zero Trust', 'Financial Security', 'Architecture', 'Authentication'],
    image: '/images/blog/zero-trust.webp',
    slug: 'zero-trust-architecture-implementation-financial'
  },
  {
    id: '11',
    title: 'Cross-Border Data Transfers: Navigating Regulatory Complexity in MENA',
    excerpt: 'Data transfer regulations in the MENA region are evolving rapidly. Explore practical approaches to maintaining compliant cross-border data flows while supporting business operations.',
    content: '',
    date: 'February 1, 2025',
    author: 'Layla Ibrahim',
    category: 'Cybersecurity Solutions',
    tags: ['Data Privacy', 'Cross-Border', 'MENA', 'Compliance'],
    image: '/images/blog/data-transfers.webp',
    slug: 'cross-border-data-transfers-regulatory-complexity-mena'
  },
  {
    id: '12',
    title: 'Secure Multi-Cloud Strategy: Managing Security Across Diverse Ecosystems',
    excerpt: 'Multi-cloud deployments introduce complex security challenges. Discover integrated approaches to maintaining consistent security posture across diverse cloud providers.',
    content: '',
    date: 'January 25, 2025',
    author: 'Thomas Anderson',
    category: 'Cybersecurity Solutions',
    tags: ['Multi-Cloud', 'Cloud Security', 'DevSecOps', 'Governance'],
    image: '/images/blog/multi-cloud.webp',
    slug: 'secure-multi-cloud-strategy-diverse-ecosystems'
  },
  
  // AI-Powered Solutions Blog Posts
  {
    id: '13',
    title: 'AI in Compliance Automation: Beyond Rule-Based Systems',
    excerpt: 'AI-powered compliance automation is transforming GRC capabilities. Learn how advanced AI technologies are enabling more intelligent, adaptive compliance management.',
    content: '',
    date: 'January 18, 2025',
    author: 'Sophia Martinez',
    category: 'AI-Powered Solutions',
    tags: ['AI', 'Compliance', 'Automation', 'Machine Learning'],
    image: '/images/blog/ai-compliance.webp',
    slug: 'ai-compliance-automation-beyond-rule-based'
  },
  {
    id: '14',
    title: 'Ethical AI Governance: Building Responsible AI Systems in Regulated Industries',
    excerpt: 'Implementing AI in regulated sectors requires robust governance frameworks. Explore approaches for ensuring ethical, compliant AI deployments that mitigate organizational risk.',
    content: '',
    date: 'January 11, 2025',
    author: 'Karim Nasser',
    category: 'AI-Powered Solutions',
    tags: ['AI Ethics', 'Governance', 'Compliance', 'Risk Management'],
    image: '/images/blog/ethical-ai.webp',
    slug: 'ethical-ai-governance-regulated-industries'
  },
  {
    id: '15',
    title: 'Machine Learning for Threat Detection: Reducing False Positives in Enterprise Environments',
    excerpt: 'False positives remain a significant challenge in security monitoring. Discover how advanced ML models are improving detection accuracy while reducing alert fatigue.',
    content: '',
    date: 'January 4, 2025',
    author: 'Alex Rivera',
    category: 'AI-Powered Solutions',
    tags: ['Machine Learning', 'Threat Detection', 'SIEM', 'Security Operations'],
    image: '/images/blog/ml-threat-detection.webp',
    slug: 'machine-learning-threat-detection-false-positives'
  },
  {
    id: '16',
    title: 'Autonomous Security Response: AI-Powered Incident Containment Strategies',
    excerpt: 'AI is enabling more autonomous security response capabilities. Learn how organizations are implementing supervised autonomous containment to accelerate incident response.',
    content: '',
    date: 'December 28, 2024',
    author: 'Nadia Malik',
    category: 'AI-Powered Solutions',
    tags: ['AI', 'Incident Response', 'Automation', 'Security Operations'],
    image: '/images/blog/autonomous-security.webp',
    slug: 'autonomous-security-response-ai-incident-containment'
  },
  
  // Industry-Specific Blog Posts
  {
    id: '17',
    title: 'Healthcare Cybersecurity: Balancing Patient Care and Data Protection',
    excerpt: 'Healthcare organizations face unique cybersecurity challenges. Discover strategies for protecting sensitive patient data while maintaining clinical operational efficiency.',
    content: '',
    date: 'December 21, 2024',
    author: 'Jennifer Lee',
    category: 'Industry Insights',
    tags: ['Healthcare', 'Cybersecurity', 'HIPAA', 'Patient Data'],
    image: '/images/blog/healthcare-security.webp',
    slug: 'healthcare-cybersecurity-patient-care-data-protection'
  },
  {
    id: '18',
    title: 'Digital Banking Security: Emerging Threats and Defensive Strategies',
    excerpt: 'As digital banking continues to evolve, so do the threats targeting financial institutions. Explore the latest attack vectors and effective countermeasures for digital banking platforms.',
    content: '',
    date: 'December 14, 2024',
    author: 'Hassan Al-Farsi',
    category: 'Industry Insights',
    tags: ['Financial Services', 'Digital Banking', 'Cybersecurity', 'Fraud Prevention'],
    image: '/images/blog/digital-banking.webp',
    slug: 'digital-banking-security-threats-defensive-strategies'
  },
  {
    id: '19',
    title: 'Government Cybersecurity Frameworks: Adapting National Standards for MENA',
    excerpt: 'National cybersecurity frameworks are evolving in the MENA region. Learn how government entities are developing and implementing region-specific security standards.',
    content: '',
    date: 'December 7, 2024',
    author: 'Amira Saeed',
    category: 'Industry Insights',
    tags: ['Government', 'Cybersecurity', 'Frameworks', 'MENA'],
    image: '/images/blog/government-security.webp',
    slug: 'government-cybersecurity-frameworks-mena'
  },
  {
    id: '20',
    title: 'E-Commerce Security: Protecting Customer Data Through the Digital Journey',
    excerpt: 'E-commerce platforms process vast amounts of sensitive customer data. Discover comprehensive approaches to securing the entire customer journey from browsing to fulfillment.',
    content: '',
    date: 'November 30, 2024',
    author: 'Mark Johnson',
    category: 'Industry Insights',
    tags: ['E-Commerce', 'Customer Data', 'Security', 'PCI DSS'],
    image: '/images/blog/ecommerce-security.webp',
    slug: 'ecommerce-security-protecting-customer-data'
  }
];

// Categories for filtering
const categories: Category[] = [
  { name: 'All Posts', slug: 'all', count: blogPosts.length },
  { name: 'GRC Services', slug: 'grc-services', count: blogPosts.filter(post => post.category === 'GRC Services').length },
  { name: 'IT Security & Audit Services', slug: 'it-security-audit', count: blogPosts.filter(post => post.category === 'IT Security & Audit Services').length },
  { name: 'Cybersecurity Solutions', slug: 'cybersecurity-solutions', count: blogPosts.filter(post => post.category === 'Cybersecurity Solutions').length },
  { name: 'AI-Powered Solutions', slug: 'ai-powered-solutions', count: blogPosts.filter(post => post.category === 'AI-Powered Solutions').length },
  { name: 'Industry Insights', slug: 'industry-insights', count: blogPosts.filter(post => post.category === 'Industry Insights').length }
];

// Get all unique tags
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

const InsightsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter posts based on search, category, and tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category.toLowerCase().replace(/&/g, '').replace(/\s+/g, '-') === selectedCategory;
    
    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle category selection
  const handleCategorySelect = (slug: string) => {
    setSelectedCategory(slug);
    setSelectedTag(null); // Reset tag filter when category changes
  };

  // Handle tag selection
  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedTag(null);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-background-dark to-background py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Intello Cyber Insights</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Expert perspectives on cybersecurity, compliance, and emerging technologies in the digital landscape
          </p>
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search insights..."
                className="pl-10 pr-4 py-3 w-full rounded-full bg-background border-border"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li key={category.slug}>
                      <button
                        onClick={() => handleCategorySelect(category.slug)}
                        className={`flex justify-between w-full text-left py-1 px-2 rounded-md transition-colors ${
                          selectedCategory === category.slug
                            ? 'bg-primary/10 text-primary'
                            : 'hover:bg-muted'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-sm text-muted-foreground">({category.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={selectedTag === tag ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handleTagSelect(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Reset Filters */}
              {(searchQuery || selectedCategory !== 'all' || selectedTag) && (
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={resetFilters}
                >
                  Reset Filters
                </Button>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Filter Info */}
            {(selectedCategory !== 'all' || selectedTag || searchQuery) && (
              <div className="mb-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'} found 
                  {selectedCategory !== 'all' && ` in "${categories.find(c => c.slug === selectedCategory)?.name}"`}
                  {selectedTag && ` tagged with "${selectedTag}"`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
              </div>
            )}

            {/* Featured Post (first post in filtered list) */}
            {filteredPosts.length > 0 && (
              <div className="mb-12">
                <div className="group relative">
                  <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden">
                    <div className="bg-background-dark h-full w-full flex items-center justify-center text-muted-foreground">
                      <span className="text-lg">Featured Image</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Badge variant="outline" className="mb-2">{filteredPosts[0].category}</Badge>
                    <h2 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
                      <Link href={`/insights/${filteredPosts[0].slug}`} className="block">
                        {filteredPosts[0].title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground mb-3">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>{filteredPosts[0].date}</span>
                      <span className="mx-2">•</span>
                      <User className="mr-1 h-4 w-4" />
                      <span>{filteredPosts[0].author}</span>
                    </div>
                    <Link href={`/insights/${filteredPosts[0].slug}`} className="inline-flex items-center text-primary hover:text-primary/80">
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            <Separator className="my-8" />

            {/* Post Grid */}
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No posts found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
                <Button onClick={resetFilters}>Reset Filters</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.slice(1).map((post) => (
                  <div key={post.id} className="group">
                    <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden mb-4">
                      <div className="bg-background-dark h-full w-full flex items-center justify-center text-muted-foreground">
                        <span>Blog Image</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-2">{post.category}</Badge>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      <Link href={`/insights/${post.slug}`} className="block">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mb-3">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <User className="mr-1 h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <Link href={`/insights/${post.slug}`} className="inline-flex items-center text-sm text-primary hover:text-primary/80">
                      Read more <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsPage;