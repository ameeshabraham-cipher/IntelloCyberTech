import React from 'react';
import { useRoute } from 'wouter';
import BlogPost from './components/BlogPost';

// This would typically come from a database or API
// For this example, we'll define a static list of blog posts
const blogPosts = [
  {
    id: '1',
    title: 'Navigating the Complex Landscape of ISO 27001:2022 Implementation',
    content: '',
    date: 'April 10, 2025',
    author: 'Ahmed Hassan',
    category: 'GRC Services',
    tags: ['ISO 27001', 'Information Security', 'Compliance', 'ISMS'],
    slug: 'navigating-complex-landscape-iso-27001-2022',
    image: '/images/blog/iso-27001.svg'
  },
  {
    id: '2',
    title: 'GDPR Four Years Later: Lessons Learned and Emerging Compliance Challenges',
    content: '',
    date: 'April 5, 2025',
    author: 'Maria Rodriguez',
    category: 'GRC Services',
    tags: ['GDPR', 'Data Protection', 'Privacy', 'Compliance'],
    slug: 'gdpr-four-years-later-lessons-challenges',
    image: '/images/blog/gdpr.svg'
  },
  {
    id: '3',
    title: 'UAE PDPL: Strategic Approaches for Effective Implementation',
    content: '',
    date: 'March 28, 2025',
    author: 'Fatima Al-Mansouri',
    category: 'GRC Services',
    tags: ['UAE PDPL', 'Data Protection', 'Compliance', 'Privacy'],
    slug: 'uae-pdpl-strategic-approaches-effective-implementation',
    image: '/images/blog/uae-pdpl.svg'
  },
  {
    id: '4',
    title: 'Preparing for SOC 2 Type II: Moving Beyond Initial Certification',
    content: '',
    date: 'March 21, 2025',
    author: 'Michael Chen',
    category: 'GRC Services',
    tags: ['SOC 2', 'Compliance', 'Auditing', 'Information Security'],
    slug: 'preparing-soc2-type-2-beyond-certification',
    image: '/images/blog/soc2.svg'
  },
  {
    id: '5',
    title: 'Advanced Persistent Threats: Detection Strategies for the Modern Enterprise',
    content: '',
    date: 'March 15, 2025',
    author: 'James Wilson',
    category: 'IT Security & Audit Services',
    tags: ['APT', 'Threat Detection', 'Cybersecurity', 'Incident Response'],
    slug: 'advanced-persistent-threats-detection-strategies',
    image: '/images/blog/threat-detection.svg'
  },
  {
    id: '6',
    title: 'Cloud Security Posture Management: Beyond Preventative Controls',
    content: '',
    date: 'March 8, 2025',
    author: 'Sarah Johnson',
    category: 'IT Security & Audit Services',
    tags: ['Cloud Security', 'CSPM', 'DevSecOps', 'Infrastructure'],
    slug: 'cloud-security-posture-management-beyond-prevention',
    image: '/images/blog/cloud-security.svg'
  },
  {
    id: '7',
    title: 'Effective Security Assessment Frameworks for Hybrid Environments',
    content: '',
    date: 'March 1, 2025',
    author: 'Rajiv Patel',
    category: 'IT Security & Audit Services',
    tags: ['Security Assessment', 'Hybrid Cloud', 'Risk Management', 'Compliance'],
    slug: 'effective-security-assessment-frameworks-hybrid',
    image: '/images/blog/security-assessment.svg'
  },
  {
    id: '8',
    title: 'Web3 Security: Penetration Testing for Blockchain Applications',
    content: '',
    date: 'February 22, 2025',
    author: 'Elena Petrova',
    category: 'IT Security & Audit Services',
    tags: ['Web3', 'Blockchain', 'Penetration Testing', 'Smart Contracts'],
    slug: 'web3-security-pentesting-blockchain-applications',
    image: '/images/blog/web3-security.svg'
  },
  {
    id: '9',
    title: 'Building an Effective Virtual CISO Program: Beyond Advisory Services',
    content: '',
    date: 'February 15, 2025',
    author: 'David Thompson',
    category: 'Cybersecurity Solutions',
    tags: ['vCISO', 'Security Leadership', 'Strategy', 'Program Management'],
    slug: 'building-effective-vciso-program-beyond-advisory',
    image: '/images/blog/vciso.svg'
  },
  {
    id: '10',
    title: 'Zero Trust Architecture: Implementation Strategies for the Financial Sector',
    content: '',
    date: 'February 8, 2025',
    author: 'Omar Al-Nasser',
    category: 'Cybersecurity Solutions',
    tags: ['Zero Trust', 'Financial Security', 'Architecture', 'Authentication'],
    slug: 'zero-trust-architecture-implementation-financial',
    image: '/images/blog/zero-trust.svg'
  },
  {
    id: '11',
    title: 'Cross-Border Data Transfers: Navigating Regulatory Complexity in MENA',
    content: '',
    date: 'February 1, 2025',
    author: 'Layla Ibrahim',
    category: 'Cybersecurity Solutions',
    tags: ['Data Privacy', 'Cross-Border', 'MENA', 'Compliance'],
    slug: 'cross-border-data-transfers-regulatory-complexity-mena'
  },
  {
    id: '12',
    title: 'Secure Multi-Cloud Strategy: Managing Security Across Diverse Ecosystems',
    content: '',
    date: 'January 25, 2025',
    author: 'Thomas Anderson',
    category: 'Cybersecurity Solutions',
    tags: ['Multi-Cloud', 'Cloud Security', 'DevSecOps', 'Governance'],
    slug: 'secure-multi-cloud-strategy-diverse-ecosystems'
  },
  {
    id: '13',
    title: 'AI in Compliance Automation: Beyond Rule-Based Systems',
    content: '',
    date: 'January 18, 2025',
    author: 'Sophia Martinez',
    category: 'AI-Powered Solutions',
    tags: ['AI', 'Compliance', 'Automation', 'Machine Learning'],
    slug: 'ai-compliance-automation-beyond-rule-based'
  },
  {
    id: '14',
    title: 'Ethical AI Governance: Building Responsible AI Systems in Regulated Industries',
    content: '',
    date: 'January 11, 2025',
    author: 'Karim Nasser',
    category: 'AI-Powered Solutions',
    tags: ['AI Ethics', 'Governance', 'Compliance', 'Risk Management'],
    slug: 'ethical-ai-governance-regulated-industries'
  },
  {
    id: '15',
    title: 'Machine Learning for Threat Detection: Reducing False Positives in Enterprise Environments',
    content: '',
    date: 'January 4, 2025',
    author: 'Alex Rivera',
    category: 'AI-Powered Solutions',
    tags: ['Machine Learning', 'Threat Detection', 'SIEM', 'Security Operations'],
    slug: 'machine-learning-threat-detection-false-positives'
  },
  {
    id: '16',
    title: 'Autonomous Security Response: AI-Powered Incident Containment Strategies',
    content: '',
    date: 'December 28, 2024',
    author: 'Nadia Malik',
    category: 'AI-Powered Solutions',
    tags: ['AI', 'Incident Response', 'Automation', 'Security Operations'],
    slug: 'autonomous-security-response-ai-incident-containment'
  },
  {
    id: '17',
    title: 'Healthcare Cybersecurity: Balancing Patient Care and Data Protection',
    content: '',
    date: 'December 21, 2024',
    author: 'Jennifer Lee',
    category: 'Industry Insights',
    tags: ['Healthcare', 'Cybersecurity', 'HIPAA', 'Patient Data'],
    slug: 'healthcare-cybersecurity-patient-care-data-protection'
  },
  {
    id: '18',
    title: 'Digital Banking Security: Emerging Threats and Defensive Strategies',
    content: '',
    date: 'December 14, 2024',
    author: 'Hassan Al-Farsi',
    category: 'Industry Insights',
    tags: ['Financial Services', 'Digital Banking', 'Cybersecurity', 'Fraud Prevention'],
    slug: 'digital-banking-security-threats-defensive-strategies'
  },
  {
    id: '19',
    title: 'Government Cybersecurity Frameworks: Adapting National Standards for MENA',
    content: '',
    date: 'December 7, 2024',
    author: 'Amira Saeed',
    category: 'Industry Insights',
    tags: ['Government', 'Cybersecurity', 'Frameworks', 'MENA'],
    slug: 'government-cybersecurity-frameworks-mena'
  },
  {
    id: '20',
    title: 'E-Commerce Security: Protecting Customer Data Through the Digital Journey',
    content: '',
    date: 'November 30, 2024',
    author: 'Mark Johnson',
    category: 'Industry Insights',
    tags: ['E-Commerce', 'Customer Data', 'Security', 'PCI DSS'],
    slug: 'ecommerce-security-protecting-customer-data'
  }
];

const InsightPost: React.FC = () => {
  const [match, params] = useRoute('/insights/:slug');
  
  if (!match || !params?.slug) {
    return <div>Post not found</div>;
  }
  
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="mb-6 text-muted-foreground">
            The blog post you're looking for doesn't exist or has been moved.
          </p>
          <a href="/insights" className="text-primary hover:underline">
            Return to Insights
          </a>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-background min-h-screen">
      <BlogPost
        title={post.title}
        date={post.date}
        author={post.author}
        category={post.category}
        tags={post.tags}
        content={post.content}
        image={post.image}
      />
    </div>
  );
};

export default InsightPost;