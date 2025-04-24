import { 
  Shield, 
  Building,
  BarChart2,
  Lock,
  CheckCircle,
  AlertTriangle,
  Server
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';
import StructuredData from '@/components/StructuredData';
import SocialMeta from '@/components/SocialMeta';
import FAQ from '@/components/FAQ';

const SaudiAramcoPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "Saudi Aramco Cybersecurity Compliance Services",
    description: "Expert Saudi Aramco cybersecurity compliance services. Achieve vendor qualification with Saudi Aramco through our comprehensive implementation services with 22+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Cybersecurity Compliance Services",
    areaServed: {
      "@type": "Country",
      name: "Kingdom of Saudi Arabia"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Saudi Aramco vendors, suppliers, and partners"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What are Saudi Aramco's cybersecurity requirements for vendors?",
      answer: "Saudi Aramco maintains strict cybersecurity requirements for vendors and suppliers to protect its critical infrastructure. These requirements cover areas including network security, access control, incident response, vulnerability management, secure development, and third-party risk management. Vendors must demonstrate compliance with these requirements through documentation, technical controls, and potentially security assessments or audits conducted by Saudi Aramco's cybersecurity teams."
    },
    {
      question: "Why is Saudi Aramco cybersecurity compliance important for vendors?",
      answer: "Compliance with Saudi Aramco's cybersecurity requirements is mandatory for organizations seeking to qualify as approved vendors or maintain existing business relationships with Saudi Aramco. Non-compliant vendors risk disqualification from tender processes, contract termination, or restrictions on access to Saudi Aramco systems and facilities. As Saudi Arabia's largest company and a critical infrastructure provider, Saudi Aramco maintains stringent security standards to protect its operations."
    },
    {
      question: "How does Saudi Aramco verify vendor cybersecurity compliance?",
      answer: "Saudi Aramco typically verifies compliance through a combination of documentation review, technical assessments, and in some cases on-site audits. Vendors must provide evidence of security controls implementation, policies and procedures, risk assessments, and other documentation. Saudi Aramco may also conduct technical testing or vulnerability assessments of vendor systems that connect to Saudi Aramco networks or process Saudi Aramco data."
    },
    {
      question: "What is the timeframe for achieving Saudi Aramco cybersecurity compliance?",
      answer: "The timeframe varies based on your organization's current security maturity and the specific requirements applicable to your vendor category. Typically, the process takes 3-6 months from initial assessment to completion of remediation activities and documentation. Our approach prioritizes critical requirements to help you achieve compliance as efficiently as possible while ensuring thorough implementation of all necessary controls."
    },
    {
      question: "Do you have experience with Saudi Aramco's vendor qualification process?",
      answer: "Yes, with over 22 years of experience, our team has successfully guided numerous organizations through Saudi Aramco's vendor qualification process across various industries. We understand Saudi Aramco's specific requirements, assessment methodologies, and compliance expectations. Our consultants maintain up-to-date knowledge of Saudi Aramco's evolving cybersecurity standards and have established relationships with key stakeholders in the Saudi Arabian cybersecurity ecosystem."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="Saudi Aramco Cybersecurity Compliance Services | Vendor Qualification"
        description="Expert Saudi Aramco cybersecurity compliance services. Achieve vendor qualification with Saudi Aramco through our comprehensive implementation services with 22+ years of experience."
        url="/services/saudi-aramco"
        type="website"
      />
      <ServicePageLayout
        title="Saudi Aramco Cybersecurity Compliance Services | Vendor Qualification"
        category="KSA GRC Services"
        description="Achieve compliance with Saudi Aramco's cybersecurity requirements through our comprehensive assessment and implementation services tailored for vendors, suppliers, and partners working with Saudi Aramco. With 22+ years of experience across the GCC region."
        heroIcon={<Building className="h-8 w-8" />}
        overview="Saudi Aramco maintains strict cybersecurity requirements for its suppliers, vendors, and partners to protect its critical infrastructure and sensitive data. Our Saudi Aramco Cybersecurity Compliance service provides expert guidance through the entire compliance journey, from initial assessment to implementation of required controls, helping organizations meet Saudi Aramco's cybersecurity standards and qualify as approved vendors. With 22+ years of experience in the Saudi Arabian market, our specialized consultants understand Saudi Aramco's specific requirements and assessment methodologies, ensuring a smooth and efficient compliance process."
        steps={[
          {
            title: "Saudi Aramco Requirements Assessment",
            description: "Comprehensive evaluation of your current security controls against Saudi Aramco's cybersecurity requirements to identify compliance gaps and priorities specific to your vendor category and scope of services."
          },
          {
            title: "Saudi Aramco-Aligned Security Risk Assessment",
            description: "Thorough assessment of cybersecurity risks specific to your organization in alignment with Saudi Aramco's risk assessment methodology and security expectations for vendors and partners."
          },
          {
            title: "Saudi Aramco Compliance Program Development",
            description: "Creation of a structured compliance program with clear policies, procedures, and controls tailored to your organization and Saudi Aramco's requirements, with documentation in both English and Arabic as needed."
          },
          {
            title: "Saudi Aramco Security Controls Implementation",
            description: "Implementation and enhancement of security controls to address identified gaps and achieve compliance with Saudi Aramco's requirements, with prioritization based on criticality and vendor qualification timelines."
          },
          {
            title: "Saudi Aramco Vendor Management Framework",
            description: "Development of robust subcontractor and vendor management processes in line with Saudi Aramco's supply chain security requirements and third-party risk management expectations."
          },
          {
            title: "Saudi Aramco Compliance Documentation",
            description: "Preparation of comprehensive documentation required for Saudi Aramco's vendor qualification and cybersecurity assessment processes, ensuring alignment with latest Saudi Aramco documentation standards."
          },
          {
            title: "Saudi Aramco Pre-Audit Assessment",
            description: "Thorough evaluation of your readiness for Saudi Aramco's cybersecurity audit or assessment with remediation of identified issues, including mock audit scenarios based on actual Saudi Aramco assessment methodologies."
          }
        ]}
        benefits={[
          {
            title: "Saudi Aramco Vendor Qualification",
            content: "Successfully qualify as a Saudi Aramco vendor or supplier by meeting their stringent cybersecurity requirements, opening access to business opportunities with Saudi Arabia's largest company."
          },
          {
            title: "Enhanced KSA-Focused Security Posture",
            content: "Implement robust security controls that protect your systems and data from advanced cybersecurity threats targeting organizations operating in the Saudi Arabian energy sector."
          },
          {
            title: "Saudi Arabian Market Competitive Advantage",
            content: "Differentiate your organization in the Saudi Arabian market through demonstrated commitment to high security standards that align with Saudi Aramco's requirements."
          },
          {
            title: "Saudi Aramco Business Continuity",
            content: "Maintain business relationships with Saudi Aramco by ensuring ongoing compliance with their security requirements and staying current with evolving Saudi Aramco cybersecurity standards."
          },
          {
            title: "Saudi Energy Sector Risk Reduction",
            content: "Significantly reduce security risks that could impact your operations and partnership with Saudi Aramco through comprehensive implementation of controls specific to energy sector requirements."
          },
          {
            title: "Saudi Vision 2030 Alignment",
            content: "Demonstrate alignment with Saudi Vision 2030 goals for enhanced cybersecurity and critical infrastructure protection, positioning your organization as a responsible partner in Saudi Arabia's digital transformation."
          }
        ]}
        deliverables={[
          {
            title: "Saudi Aramco Gap Assessment Report",
            description: "Detailed analysis of your current compliance status with prioritized recommendations for addressing identified gaps against Saudi Aramco requirements with clear implementation roadmap."
          },
          {
            title: "Saudi Aramco Security Risk Register",
            description: "Comprehensive inventory of cybersecurity risks with clear mitigation strategies aligned with Saudi Aramco expectations and industry-specific threat scenarios relevant to your operations."
          },
          {
            title: "Saudi Aramco Security Policies & Procedures",
            description: "Comprehensive set of policies and procedures aligned with Saudi Aramco's cybersecurity requirements, available in both English and Arabic formats as needed for regulatory compliance."
          },
          {
            title: "Saudi Aramco Security Controls Documentation",
            description: "Detailed documentation of implemented security controls mapped to Saudi Aramco requirements with evidence of effectiveness and implementation validation aligned with Saudi Aramco's expectations."
          },
          {
            title: "Saudi Aramco Incident Response Plan",
            description: "Clear procedures for detecting, investigating, and reporting cybersecurity incidents in accordance with Saudi Aramco requirements, including Saudi Aramco-specific notification procedures."
          },
          {
            title: "Saudi Aramco Vendor Qualification Package",
            description: "Complete documentation package required for Saudi Aramco's vendor cybersecurity qualification process, structured according to Saudi Aramco's latest vendor assessment formats and templates."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Saudi Aramco Theme */}
            <rect x="150" y="120" width="300" height="160" rx="10" fill="#0A1024" stroke="#00B2CE" strokeWidth="2"/>
            
            {/* Oil Industry Symbol */}
            <path d="M290 140 L310 140 L310 155 L290 155 Z" fill="#00B2CE" fillOpacity="0.3"/>
            <path d="M295 155 L305 155 L305 170 L295 170 Z" fill="#00B2CE" fillOpacity="0.3"/>
            <circle cx="300" cy="130" r="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            
            {/* Cybersecurity Framework Elements */}
            <circle cx="300" cy="200" r="30" fill="#00B2CE" fillOpacity="0.1" stroke="#00E5FF" strokeWidth="1"/>
            <text x="300" y="195" textAnchor="middle" fontSize="9" fill="#00E5FF">Aramco</text>
            <text x="300" y="205" textAnchor="middle" fontSize="9" fill="#00E5FF">Security</text>
            
            {/* Key Security Areas */}
            <circle cx="240" cy="180" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="240" y="183" textAnchor="middle" fontSize="7" fill="#00E5FF">Network</text>
            
            <circle cx="360" cy="180" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="360" y="183" textAnchor="middle" fontSize="7" fill="#00E5FF">OT/ICS</text>
            
            <circle cx="240" cy="220" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="240" y="223" textAnchor="middle" fontSize="7" fill="#00E5FF">Access</text>
            
            <circle cx="360" cy="220" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="360" y="223" textAnchor="middle" fontSize="7" fill="#00E5FF">Monitoring</text>
            
            <circle cx="300" cy="250" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
            <text x="300" y="253" textAnchor="middle" fontSize="7" fill="#00E5FF">Compliance</text>
            
            {/* KSA Element */}
            <rect x="450" y="160" width="50" height="30" rx="5" fill="#0A1024" stroke="#00B2CE" strokeWidth="1">
              <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </rect>
            <text x="475" y="177" textAnchor="middle" fontSize="8" fill="#00E5FF">KSA</text>
            <text x="475" y="185" textAnchor="middle" fontSize="7" fill="#00E5FF">المملكة</text>
            
            <line x1="390" y1="180" x2="450" y2="175" stroke="#00B2CE" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
            </line>
            
            {/* Vendor/Partner Elements */}
            <rect x="170" y="150" width="40" height="30" rx="5" fill="#0A1024" stroke="#00B2CE" strokeWidth="1.5"/>
            <text x="190" y="165" textAnchor="middle" fontSize="6" fill="#00E5FF">Vendors</text>
            <text x="190" y="175" textAnchor="middle" fontSize="6" fill="#00E5FF">الموردين</text>
            
            <rect x="170" y="190" width="40" height="30" rx="5" fill="#0A1024" stroke="#00B2CE" strokeWidth="1.5"/>
            <text x="190" y="205" textAnchor="middle" fontSize="6" fill="#00E5FF">Contractors</text>
            <text x="190" y="215" textAnchor="middle" fontSize="6" fill="#00E5FF">المقاولين</text>
            
            <rect x="170" y="230" width="40" height="30" rx="5" fill="#0A1024" stroke="#00B2CE" strokeWidth="1.5"/>
            <text x="190" y="245" textAnchor="middle" fontSize="6" fill="#00E5FF">Partners</text>
            <text x="190" y="255" textAnchor="middle" fontSize="6" fill="#00E5FF">الشركاء</text>
            
            <rect x="390" y="180" width="50" height="40" rx="5" fill="#0A1024" stroke="#00B2CE" strokeWidth="1.5"/>
            <text x="415" y="200" textAnchor="middle" fontSize="8" fill="#00E5FF">Saudi</text>
            <text x="415" y="210" textAnchor="middle" fontSize="8" fill="#00E5FF">Aramco</text>
            
            {/* Connection Lines */}
            <line x1="210" y1="165" x2="240" y2="180" stroke="#00B2CE" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="210" y1="205" x2="240" y2="220" stroke="#00B2CE" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="210" y1="245" x2="300" y2="250" stroke="#00B2CE" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="360" y1="180" x2="390" y2="190" stroke="#00B2CE" strokeWidth="1" strokeDasharray="5 3"/>
            <line x1="360" y1="220" x2="390" y2="210" stroke="#00B2CE" strokeWidth="1" strokeDasharray="5 3"/>
            
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
            
            {/* Security Glow */}
            <circle cx="300" cy="200" r="35" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5">
              <animate attributeName="r" values="35;40;35" dur="4s" repeatCount="indefinite"/>
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
            title: "KSA PDPL Compliance",
            link: "/services/ksa-pdpl"
          },
          {
            title: "Penetration Testing",
            link: "/services/penetration-testing"
          },
          {
            title: "Security Assessment",
            link: "/services/security-assessment"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="Saudi Aramco Cybersecurity Compliance FAQs"
        subtitle="Common questions about Saudi Aramco vendor cybersecurity requirements"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default SaudiAramcoPage;