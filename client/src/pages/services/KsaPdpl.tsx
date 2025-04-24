import { 
  FileText, 
  ShieldCheck, 
  Globe,
  Lock,
  ClipboardList,
  Server,
  UserCog
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const KsaPdplPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "KSA PDPL Compliance Services in Saudi Arabia",
    description: "Expert KSA Personal Data Protection Law (PDPL) compliance services in Saudi Arabia. Achieve regulatory compliance with Saudi Arabia's data protection law through our comprehensive implementation services with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Data Protection Compliance Services",
    areaServed: {
      "@type": "Country",
      name: "Kingdom of Saudi Arabia"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Organizations processing personal data in Saudi Arabia"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What is the KSA Personal Data Protection Law (PDPL)?",
      answer: "The Kingdom of Saudi Arabia Personal Data Protection Law (PDPL) is comprehensive data protection legislation that regulates the collection, processing, disclosure, and transfer of personal data in Saudi Arabia. Issued in September 2021 and implemented in March 2023, the law establishes rights for data subjects and obligations for organizations (controllers and processors) that handle personal data. The PDPL is enforced by the Saudi Data & AI Authority (SDAIA) and introduces significant compliance requirements for organizations operating in Saudi Arabia."
    },
    {
      question: "Which organizations need to comply with the KSA PDPL?",
      answer: "The KSA PDPL applies to all organizations (both public and private sector) that process personal data of individuals in Saudi Arabia, regardless of whether the organization is established within Saudi Arabia. This includes: 1) Organizations with operations or employees in Saudi Arabia, 2) Organizations offering products or services to individuals in Saudi Arabia, 3) Organizations processing personal data of Saudi residents, regardless of the organization's location. The law has extraterritorial scope, meaning even organizations without a physical presence in KSA may need to comply if they process Saudi residents' data."
    },
    {
      question: "What are the key requirements of the KSA PDPL?",
      answer: "Key requirements include: 1) Legal basis for processing personal data, 2) Transparency through privacy notices, 3) Implementing appropriate security measures, 4) Data subject rights fulfillment (access, correction, deletion), 5) Data breach notification within 72 hours, 6) Data Protection Impact Assessments for high-risk processing, 7) Appointment of a Data Protection Officer in certain cases, 8) Restrictions on cross-border data transfers, 9) Record keeping of processing activities, and 10) Obtaining SDAIA approval for certain processing activities."
    },
    {
      question: "What are the penalties for non-compliance with the KSA PDPL?",
      answer: "Penalties for non-compliance with the KSA PDPL can be severe, including: 1) Administrative fines up to 5 million Saudi Riyals (approximately $1.3 million USD) per violation, 2) Operational restrictions or suspension of data processing activities, 3) Criminal penalties for certain serious violations, 4) Reputational damage and business disruption. Each separate violation can attract its own penalty, potentially resulting in significant cumulative fines for systematic non-compliance."
    },
    {
      question: "How does the KSA PDPL compare to other data protection laws like GDPR?",
      answer: "The KSA PDPL shares similarities with the EU's GDPR but has important differences: 1) The PDPL has unique requirements regarding government data access, 2) It emphasizes local data storage more than GDPR, 3) It requires explicit SDAIA approval for certain types of processing, 4) Cross-border transfer mechanisms differ from GDPR, with more focus on governmental approval, 5) It has specific cultural and religious considerations unique to Saudi Arabia. Organizations compliant with GDPR will have a good foundation but will need to address KSA-specific requirements to achieve full PDPL compliance."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="KSA PDPL Compliance Services | Saudi Arabia Data Protection"
        description="Expert KSA PDPL compliance services in Saudi Arabia. Achieve regulatory compliance with Saudi Arabia's data protection law through our comprehensive implementation services with 22+ years of experience."
        url="/services/ksa-pdpl"
        type="website"
      />
      <ServicePageLayout
        title="KSA PDPL Compliance Services | Saudi Arabia Data Protection"
        category="KSA GRC Services"
        description="Achieve compliance with the Kingdom of Saudi Arabia Personal Data Protection Law (PDPL) through our comprehensive assessment and implementation services tailored for organizations operating in KSA. With 22+ years of experience in the GCC region."
        heroIcon={<Globe className="h-8 w-8" />}
        overview="The Kingdom of Saudi Arabia Personal Data Protection Law (PDPL) establishes comprehensive requirements for organizations processing personal data in KSA. Our KSA PDPL compliance service provides expert guidance through the entire compliance journey, from initial assessment to implementation of required controls, helping you protect personal data while meeting regulatory obligations in Saudi Arabia. With 22+ years of experience in the Saudi Arabian market and deep understanding of local regulatory requirements, our specialized consultants ensure your organization achieves and maintains compliance with this important legislation."
        steps={[
          {
            title: "KSA PDPL Gap Assessment & Readiness",
            description: "Comprehensive evaluation of your current data protection practices against KSA PDPL requirements to identify compliance gaps and priorities specific to Saudi Arabian regulatory expectations."
          },
          {
            title: "KSA-Specific Data Mapping & Processing Register",
            description: "Thorough discovery and documentation of all personal data processing activities to establish visibility and meet KSA PDPL record-keeping requirements including necessary documentation for SDAIA review."
          },
          {
            title: "KSA PDPL Compliance Program Development",
            description: "Creation of a structured KSA PDPL compliance program with clear policies, procedures, and controls tailored to your organization and aligned with Saudi Arabian regulatory expectations."
          },
          {
            title: "KSA PDPL Privacy Governance Framework",
            description: "Establishment of governance structures, including appointment of Data Protection Officer if required, with clear roles and responsibilities aligned with Saudi Arabian regulatory requirements."
          },
          {
            title: "KSA PDPL Data Subject Rights Management",
            description: "Development of efficient processes for managing data subject access requests and other rights under the KSA PDPL, with templates in both Arabic and English to ensure compliance with local language requirements."
          },
          {
            title: "KSA Cross-Border Transfer Mechanisms",
            description: "Implementation of appropriate safeguards for international data transfers in compliance with KSA PDPL requirements, including necessary approvals from Saudi Arabian authorities."
          },
          {
            title: "KSA PDPL Staff Training & Awareness",
            description: "Customized training for staff to ensure understanding of KSA PDPL requirements and compliance responsibilities, with special focus on Saudi Arabian regulatory nuances and expectations."
          }
        ]}
        benefits={[
          {
            title: "KSA Regulatory Compliance Assurance",
            content: "Achieve and maintain compliance with the KSA PDPL, avoiding potential penalties for violations which can reach up to 5 million SAR, while demonstrating commitment to Saudi Arabian regulations."
          },
          {
            title: "Enhanced KSA-Aligned Data Governance",
            content: "Establish robust data governance practices that improve how personal data is managed throughout your organization, aligned with Saudi Arabian regulatory expectations and cultural requirements."
          },
          {
            title: "Saudi Arabian Market Trust Building",
            content: "Demonstrate your commitment to data protection, creating trust with customers and partners in the Saudi Arabian market, vital for long-term business relationships in the Kingdom."
          },
          {
            title: "Saudi Vision 2030 Aligned Data Strategy",
            content: "Leverage personal data more effectively through clear understanding of lawful processing requirements and limitations, supporting Saudi Arabia's Vision 2030 digital transformation goals."
          },
          {
            title: "KSA Market Access & Expansion",
            content: "Meet requirements necessary for entering or maintaining presence in the Saudi Arabian market, one of the region's largest economies, with documented compliance that satisfies regulator inquiries."
          },
          {
            title: "Saudi Arabian Regulatory Relationship Management",
            content: "Develop positive engagement with SDAIA and other Saudi regulatory authorities through demonstrated compliance with local data protection requirements and cultural sensitivity."
          }
        ]}
        deliverables={[
          {
            title: "KSA PDPL Gap Assessment Report",
            description: "Detailed analysis of your current compliance status with prioritized recommendations for addressing identified gaps, tailored to Saudi Arabian regulatory expectations and timelines."
          },
          {
            title: "KSA PDPL Data Processing Register",
            description: "Comprehensive inventory of personal data processing activities, meeting KSA PDPL documentation requirements and prepared for potential SDAIA inspection or review."
          },
          {
            title: "KSA-Compliant Privacy Policies & Notices",
            description: "KSA PDPL-compliant privacy policies and notices for both internal and external stakeholders, in Arabic and English as required by Saudi Arabian regulations."
          },
          {
            title: "KSA PDPL Data Subject Rights Procedures",
            description: "Documented processes and templates for handling data subject requests in compliance with KSA PDPL requirements, with Arabic-language options as needed for Saudi implementation."
          },
          {
            title: "KSA PDPL Data Breach Response Plan",
            description: "Clear procedures for detecting, investigating, and reporting data breaches in accordance with KSA PDPL 72-hour notification requirement to Saudi Arabian authorities."
          },
          {
            title: "KSA PDPL Implementation Roadmap",
            description: "Structured action plan with clear timelines and responsibilities for achieving and maintaining KSA PDPL compliance, aligned with Saudi Arabian implementation deadlines and regulatory expectations."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* KSA Map Outline */}
            <path d="M290 140 L350 150 L370 180 L350 240 L320 260 L250 250 L230 220 L240 170 L260 150 Z" fill="#0A1024" stroke="#006C35" strokeWidth="2"/>
            
            {/* KSA Flag Colors */}
            <rect x="270" y="170" width="60" height="20" fill="#006C35" fillOpacity="0.3"/>
            <rect x="270" y="190" width="60" height="20" fill="#FFFFFF" fillOpacity="0.1"/>
            
            {/* Saudi Vision 2030 */}
            <rect x="410" y="230" width="60" height="30" rx="5" fill="#0A1024" stroke="#006C35" strokeWidth="1">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </rect>
            <text x="440" y="242" textAnchor="middle" fontSize="8" fill="#00E5FF">Vision</text>
            <text x="440" y="252" textAnchor="middle" fontSize="8" fill="#00E5FF">2030</text>
            
            <line x1="340" y1="230" x2="410" y2="245" stroke="#006C35" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
            </line>
            
            {/* Data Protection Elements */}
            <circle cx="300" cy="200" r="25" fill="#006C35" fillOpacity="0.1" stroke="#00E5FF" strokeWidth="1"/>
            <text x="300" y="205" textAnchor="middle" fontSize="10" fill="#00E5FF">PDPL</text>
            
            {/* Key Compliance Areas */}
            <circle cx="260" cy="180" r="12" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="260" y="183" textAnchor="middle" fontSize="6" fill="#00E5FF">Processing</text>
            
            <circle cx="340" cy="180" r="12" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="340" y="183" textAnchor="middle" fontSize="6" fill="#00E5FF">Transfers</text>
            
            <circle cx="260" cy="220" r="12" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="260" y="223" textAnchor="middle" fontSize="6" fill="#00E5FF">Rights</text>
            
            <circle cx="340" cy="220" r="12" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="340" y="223" textAnchor="middle" fontSize="6" fill="#00E5FF">Security</text>
            
            <circle cx="300" cy="240" r="12" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="300" y="243" textAnchor="middle" fontSize="6" fill="#00E5FF">DPO</text>
            
            {/* Connected Elements */}
            <rect x="180" y="150" width="50" height="30" rx="5" fill="#0A1024" stroke="#006C35" strokeWidth="1.5"/>
            <text x="205" y="170" textAnchor="middle" fontSize="8" fill="#00E5FF">Data Controller</text>
            
            <rect x="180" y="220" width="50" height="30" rx="5" fill="#0A1024" stroke="#006C35" strokeWidth="1.5"/>
            <text x="205" y="240" textAnchor="middle" fontSize="8" fill="#00E5FF">Data Processor</text>
            
            <rect x="370" y="180" width="60" height="40" rx="5" fill="#0A1024" stroke="#006C35" strokeWidth="1.5"/>
            <text x="400" y="200" textAnchor="middle" fontSize="8" fill="#00E5FF">SDAIA</text>
            <text x="400" y="212" textAnchor="middle" fontSize="6" fill="#00E5FF">Regulatory Authority</text>
            
            {/* Connection Lines */}
            <line x1="230" y1="165" x2="260" y2="180" stroke="#006C35" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="230" y1="235" x2="260" y2="220" stroke="#006C35" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="340" y1="180" x2="370" y2="190" stroke="#006C35" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="340" y1="220" x2="370" y2="210" stroke="#006C35" strokeWidth="1" strokeDasharray="5 3"/>
            
            {/* Animated Elements */}
            <circle cx="245" cy="173" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="230;260" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="165;180" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="245" cy="227" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="230;260" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="235;220" dur="3s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="355" cy="185" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="340;370" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="180;190" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="355" cy="215" r="3" fill="#00E5FF">
              <animate attributeName="cx" values="340;370" dur="3.5s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="220;210" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            
            {/* PDPL Shield Glow */}
            <circle cx="300" cy="200" r="30" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5">
              <animate attributeName="r" values="30;35;30" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="stroke-opacity" values="0.5;0.2;0.5" dur="4s" repeatCount="indefinite"/>
            </circle>
          </svg>
        }
        relatedServices={[
          {
            title: "SAMA Compliance",
            link: "/services/sama"
          },
          {
            title: "Saudi Aramco Cybersecurity",
            link: "/services/saudi-aramco"
          },
          {
            title: "UAE PDPL Compliance",
            link: "/services/uae-pdpl"
          },
          {
            title: "Data Privacy Framework",
            link: "/services/data-privacy"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="KSA PDPL Compliance FAQs"
        subtitle="Common questions about Saudi Arabia's data protection law compliance"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default KsaPdplPage;