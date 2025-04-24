import { 
  FileText, 
  Shield, 
  Building,
  Lock,
  ClipboardList,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const SamaPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "SAMA Cybersecurity Framework Compliance Services",
    description: "Expert SAMA Cybersecurity Framework compliance services in Saudi Arabia. Achieve regulatory compliance with Saudi Central Bank requirements through our comprehensive implementation services with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Financial Cybersecurity Compliance Services",
    areaServed: {
      "@type": "Country",
      name: "Kingdom of Saudi Arabia"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Financial institutions in Saudi Arabia including banks, insurance companies, fintech firms, and payment providers"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What is the SAMA Cybersecurity Framework?",
      answer: "The SAMA (Saudi Central Bank) Cybersecurity Framework is a comprehensive set of regulatory requirements and guidelines designed to enhance the cybersecurity posture of financial institutions in Saudi Arabia. It outlines controls, governance structures, and security practices that banks, insurance companies, payment service providers, and other financial organizations must implement to protect critical financial infrastructure, customer data, and financial systems from cyber threats. The framework is aligned with international standards while addressing specific requirements for the Saudi financial sector."
    },
    {
      question: "Which organizations need to comply with the SAMA Cybersecurity Framework?",
      answer: "Compliance with the SAMA Cybersecurity Framework is mandatory for all financial organizations under SAMA's supervision, including: 1) Banks and financial institutions operating in Saudi Arabia, 2) Insurance and reinsurance companies, 3) Finance companies and leasing providers, 4) Payment service providers and fintech companies, 5) Money exchange businesses, and 6) Credit information companies. Additionally, organizations that provide services to these regulated entities often need to demonstrate compliance with relevant parts of the framework as part of third-party risk management requirements."
    },
    {
      question: "What are the key domains covered by the SAMA Cybersecurity Framework?",
      answer: "The SAMA Cybersecurity Framework covers multiple domains and control categories, including: 1) Cybersecurity Governance & Strategy, 2) Risk Management & Compliance, 3) Cybersecurity Operations & Technology, 4) Third-Party & Supply Chain Risk, 5) Physical Security, 6) Asset Management, 7) Identity & Access Management, 8) Cryptography & Key Management, 9) Business Continuity Management, 10) Incident Management & Response, 11) Training & Awareness, and 12) Secure Development Lifecycle. Each domain contains specific controls that organizations must implement."
    },
    {
      question: "What are the penalties for non-compliance with the SAMA Cybersecurity Framework?",
      answer: "Non-compliance with the SAMA Cybersecurity Framework can result in significant regulatory consequences, including: 1) Formal warnings and notices from SAMA, 2) Financial penalties that can reach millions of Saudi Riyals, 3) Restrictions on certain business activities or operations, 4) Additional audit requirements and increased regulatory scrutiny, 5) Requirements to submit detailed remediation plans with strict deadlines, and 6) Potential impacts on banking licenses and operational approvals in severe cases. SAMA conducts regular audits and assessments to verify compliance with the framework."
    },
    {
      question: "How does the SAMA Cybersecurity Framework relate to other cybersecurity standards?",
      answer: "The SAMA Cybersecurity Framework draws from and aligns with several international standards and frameworks, including NIST CSF, ISO 27001, PCI DSS, and SWIFT CSCF. However, it includes specific requirements tailored to the Saudi financial sector and regulatory environment. While organizations with existing compliance with these international standards will have a solid foundation, they will still need to address SAMA-specific requirements and reporting. Our implementation approach leverages existing frameworks and controls while ensuring full compliance with SAMA's specific expectations."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="SAMA Cybersecurity Framework Compliance | Saudi Financial Services"
        description="Expert SAMA Cybersecurity Framework compliance services in Saudi Arabia. Achieve regulatory compliance with Saudi Central Bank requirements through our comprehensive implementation services with 22+ years of experience."
        url="/services/sama"
        type="website"
      />
      <ServicePageLayout
        title="SAMA Cybersecurity Framework Compliance | Saudi Financial Services"
        category="KSA Financial GRC Services"
        description="Achieve compliance with Saudi Central Bank (SAMA) Cybersecurity Framework through our comprehensive assessment and implementation services tailored for financial organizations operating in the Kingdom of Saudi Arabia. With 22+ years of experience in the GCC region."
        heroIcon={<Building className="h-8 w-8" />}
        overview="The Saudi Central Bank (SAMA) Cybersecurity Framework establishes comprehensive requirements for financial institutions in Saudi Arabia. Our SAMA compliance service provides expert guidance through the entire compliance journey, from initial assessment to implementation of required controls, helping financial organizations protect data and systems while meeting regulatory obligations. With 22+ years of experience in the Saudi Arabian financial sector and deep understanding of SAMA's regulatory expectations, our specialized consultants ensure your organization achieves and maintains compliance with this critical framework."
        steps={[
          {
            title: "SAMA Framework Gap Assessment & Readiness",
            description: "Comprehensive evaluation of your current security controls against SAMA Cybersecurity Framework requirements to identify compliance gaps and priorities specific to your financial institution category and operations."
          },
          {
            title: "Saudi Financial Cybersecurity Risk Assessment",
            description: "Thorough assessment of cybersecurity risks specific to your organization in alignment with SAMA's risk assessment requirements and Saudi Central Bank expectations for financial institutions."
          },
          {
            title: "SAMA Compliance Program Development",
            description: "Creation of a structured SAMA compliance program with clear policies, procedures, and controls tailored to your organization and the specific requirements of the Saudi financial sector."
          },
          {
            title: "SAMA Cybersecurity Governance Framework",
            description: "Establishment of governance structures with clear roles and responsibilities to meet SAMA's governance requirements, including committee structures, reporting lines, and board-level oversight mechanisms."
          },
          {
            title: "SAMA Security Controls Implementation",
            description: "Implementation and enhancement of security controls to address identified gaps and achieve SAMA compliance, with prioritization based on critical financial systems and Saudi Central Bank expectations."
          },
          {
            title: "SAMA Third-Party Risk Management",
            description: "Development of robust third-party risk management processes in line with SAMA requirements for vendor assessment, ongoing monitoring, and contract management in the Saudi financial ecosystem."
          },
          {
            title: "SAMA-Aligned Training & Awareness Program",
            description: "Customized training for staff to ensure understanding of SAMA Cybersecurity Framework requirements and compliance responsibilities, with Arabic and English language options tailored to your organization."
          }
        ]}
        benefits={[
          {
            title: "Saudi Financial Regulatory Compliance",
            content: "Achieve and maintain compliance with SAMA Cybersecurity Framework, avoiding potential regulatory penalties and restrictions imposed by the Saudi Central Bank on non-compliant financial institutions."
          },
          {
            title: "Enhanced Saudi Financial Security Posture",
            content: "Implement robust security controls that protect critical financial systems and data from cybersecurity threats specifically targeting Saudi Arabian financial institutions."
          },
          {
            title: "Saudi Customer & Partner Trust",
            content: "Demonstrate your commitment to security and regulatory compliance, building trust with customers and partners in the Saudi Arabian financial market and broader GCC region."
          },
          {
            title: "Saudi Financial Operational Resilience",
            content: "Improve your organization's ability to detect, respond to, and recover from cybersecurity incidents affecting financial operations in Saudi Arabia, reducing potential business disruption."
          },
          {
            title: "Saudi Financial Sector Competitive Advantage",
            content: "Differentiate your organization in the Saudi financial sector through demonstrated commitment to cybersecurity excellence and full alignment with the Saudi Central Bank's regulatory expectations."
          },
          {
            title: "Saudi Vision 2030 Financial Alignment",
            content: "Support Saudi Arabia's Vision 2030 goals for a robust digital financial ecosystem by implementing security controls that enable safe digital transformation and fintech innovation."
          }
        ]}
        deliverables={[
          {
            title: "SAMA Gap Assessment Report",
            description: "Detailed analysis of your current compliance status with prioritized recommendations for addressing identified gaps according to Saudi Central Bank expectations and financial sector requirements."
          },
          {
            title: "SAMA Cybersecurity Risk Register",
            description: "Comprehensive inventory of cybersecurity risks with clear mitigation strategies aligned with SAMA requirements and Saudi financial sector threat landscape."
          },
          {
            title: "SAMA-Aligned Policies & Procedures",
            description: "Comprehensive set of policies and procedures aligned with SAMA Cybersecurity Framework requirements, available in both Arabic and English formats to support regulatory compliance."
          },
          {
            title: "SAMA Security Controls Documentation",
            description: "Detailed documentation of implemented security controls mapped to SAMA requirements, providing evidence of compliance for Saudi Central Bank audits and assessments."
          },
          {
            title: "SAMA Incident Response Plan",
            description: "Clear procedures for detecting, investigating, and reporting cybersecurity incidents in accordance with SAMA requirements, including Saudi Central Bank notification protocols and timelines."
          },
          {
            title: "SAMA Implementation Roadmap",
            description: "Structured action plan with clear timelines and responsibilities for achieving and maintaining SAMA compliance, aligned with Saudi Central Bank deadlines and your organizational priorities."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* SAMA & Saudi Financial Theme */}
            <rect x="150" y="120" width="300" height="160" rx="10" fill="#0A1024" stroke="#006C35" strokeWidth="2"/>
            
            {/* Saudi Vision 2030 */}
            <rect x="430" y="200" width="60" height="30" rx="5" fill="#0A1024" stroke="#006C35" strokeWidth="1">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </rect>
            <text x="460" y="215" textAnchor="middle" fontSize="8" fill="#00E5FF">Vision 2030</text>
            <text x="460" y="225" textAnchor="middle" fontSize="8" fill="#00E5FF">رؤية ٢٠٣٠</text>
            
            <line x1="390" y1="190" x2="430" y2="215" stroke="#006C35" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
            </line>
            
            {/* Central Bank Symbol */}
            <rect x="270" y="140" width="60" height="40" fill="#006C35" fillOpacity="0.3"/>
            <circle cx="300" cy="160" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="300" y="164" textAnchor="middle" fontSize="12" fill="#00E5FF">SAMA</text>
            
            {/* Cybersecurity Framework Elements */}
            <circle cx="300" cy="200" r="30" fill="#006C35" fillOpacity="0.1" stroke="#00E5FF" strokeWidth="1"/>
            <text x="300" y="195" textAnchor="middle" fontSize="9" fill="#00E5FF">Cybersecurity</text>
            <text x="300" y="205" textAnchor="middle" fontSize="9" fill="#00E5FF">Framework</text>
            
            {/* Key Compliance Areas */}
            <circle cx="240" cy="180" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="240" y="183" textAnchor="middle" fontSize="7" fill="#00E5FF">Governance</text>
            
            <circle cx="360" cy="180" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="360" y="183" textAnchor="middle" fontSize="7" fill="#00E5FF">Risk</text>
            
            <circle cx="240" cy="220" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="240" y="223" textAnchor="middle" fontSize="7" fill="#00E5FF">Controls</text>
            
            <circle cx="360" cy="220" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="360" y="223" textAnchor="middle" fontSize="7" fill="#00E5FF">Response</text>
            
            <circle cx="300" cy="250" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="300" y="253" textAnchor="middle" fontSize="7" fill="#00E5FF">Reporting</text>
            
            {/* Financial Institution Elements */}
            <rect x="170" y="150" width="40" height="30" rx="5" fill="#0A1024" stroke="#006C35" strokeWidth="1.5"/>
            <text x="190" y="165" textAnchor="middle" fontSize="6" fill="#00E5FF">Banks</text>
            <text x="190" y="175" textAnchor="middle" fontSize="6" fill="#00E5FF">اﻟﺒﻨﻮك</text>
            
            <rect x="170" y="190" width="40" height="30" rx="5" fill="#0A1024" stroke="#006C35" strokeWidth="1.5"/>
            <text x="190" y="205" textAnchor="middle" fontSize="6" fill="#00E5FF">Insurance</text>
            <text x="190" y="215" textAnchor="middle" fontSize="6" fill="#00E5FF">اﻟﺘﺄﻣﻴﻦ</text>
            
            <rect x="170" y="230" width="40" height="30" rx="5" fill="#0A1024" stroke="#006C35" strokeWidth="1.5"/>
            <text x="190" y="245" textAnchor="middle" fontSize="6" fill="#00E5FF">Fintech</text>
            <text x="190" y="255" textAnchor="middle" fontSize="6" fill="#00E5FF">ﻓﻨﺘﻚ</text>
            
            <rect x="390" y="180" width="50" height="40" rx="5" fill="#0A1024" stroke="#006C35" strokeWidth="1.5"/>
            <text x="415" y="200" textAnchor="middle" fontSize="8" fill="#00E5FF">Saudi Central</text>
            <text x="415" y="210" textAnchor="middle" fontSize="8" fill="#00E5FF">Bank</text>
            
            {/* Connection Lines */}
            <line x1="210" y1="165" x2="240" y2="180" stroke="#006C35" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="210" y1="205" x2="240" y2="220" stroke="#006C35" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="210" y1="245" x2="300" y2="250" stroke="#006C35" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="360" y1="180" x2="390" y2="190" stroke="#006C35" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="360" y1="220" x2="390" y2="210" stroke="#006C35" strokeWidth="1" strokeDasharray="5 3"/>
            
            {/* Animated Elements */}
            <circle cx="225" cy="173" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="210;240" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="165;180" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="225" cy="213" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="210;240" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="205;220" dur="3s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="255" cy="247" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="210;300" dur="3.5s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="245;250" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="375" cy="185" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="360;390" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="180;190" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="375" cy="215" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="360;390" dur="3.5s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="220;210" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            
            {/* Framework Glow */}
            <circle cx="300" cy="200" r="35" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5">
              <animate attributeName="r" values="35;40;35" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="stroke-opacity" values="0.5;0.2;0.5" dur="4s" repeatCount="indefinite"/>
            </circle>
          </svg>
        }
        relatedServices={[
          {
            title: "KSA PDPL Compliance",
            link: "/services/ksa-pdpl"
          },
          {
            title: "Saudi Aramco Cybersecurity",
            link: "/services/saudi-aramco"
          },
          {
            title: "Penetration Testing",
            link: "/services/penetration-testing"
          },
          {
            title: "Cloud Security",
            link: "/services/cloud-security"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="SAMA Cybersecurity Framework FAQs"
        subtitle="Common questions about Saudi Central Bank cybersecurity compliance"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default SamaPage;