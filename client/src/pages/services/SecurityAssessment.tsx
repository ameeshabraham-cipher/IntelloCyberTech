import { 
  ClipboardCheck, 
  Shield, 
  AlertTriangle, 
  CheckCircle,
  BarChart2,
  FileText
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';
import StructuredData from '@/components/StructuredData';
import FAQ from '@/components/FAQ';
import SocialMeta from '@/components/SocialMeta';

const SecurityAssessmentPage = () => {
  // Add schema.org structured data
  const serviceSchema = {
    name: "Dubai Security Assessment Services",
    description: "Comprehensive security assessment services in Dubai & UAE. Evaluate your organization's security posture with our expert cybersecurity team.",
    provider: {
      "@type": "Organization",
      name: "Intello Cyber Technologies"
    },
    serviceType: "Cybersecurity Assessment",
    areaServed: {
      "@type": "City",
      name: "Dubai, United Arab Emirates"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "UAE organizations requiring comprehensive security posture evaluation"
    }
  };

  // FAQ items for the page
  const faqItems = [
    {
      question: "What is included in your UAE security assessment service?",
      answer: "Our UAE security assessment service includes a comprehensive evaluation of your organization's security posture across multiple dimensions: technology infrastructure, applications, networks, people, processes, and governance. We examine security controls, identify vulnerabilities, evaluate policy effectiveness, and provide detailed remediation recommendations tailored to UAE regulatory requirements and regional threat landscape."
    },
    {
      question: "How does your security assessment help with UAE compliance requirements?",
      answer: "Our security assessments incorporate UAE-specific regulatory frameworks including the UAE Information Assurance Regulation, NESA standards, and sector-specific requirements from regulatory bodies such as the UAE Central Bank and regulatory authorities. We map all findings and recommendations to these frameworks, helping you demonstrate compliance with local requirements."
    },
    {
      question: "How long does a security assessment typically take in Dubai?",
      answer: "The duration of a security assessment in Dubai varies based on organizational size and complexity, typically ranging from 2-6 weeks. We work efficiently to minimize business disruption while maintaining assessment thoroughness, with dedicated UAE-based consultants managing the process."
    },
    {
      question: "What makes your Dubai security assessment different from others?",
      answer: "Our security assessments are distinguished by our deep understanding of the UAE threat landscape, regional regulatory environment, and cultural considerations that affect security implementation. Our Dubai-based team brings 22+ years of regional experience, combining global security best practices with local knowledge."
    },
    {
      question: "What deliverables will we receive from the security assessment?",
      answer: "You'll receive comprehensive documentation including an executive summary for leadership, detailed technical findings, a prioritized remediation roadmap, security maturity scorecards benchmarked against UAE industry peers, and actionable recommendations that consider UAE business context and regulatory requirements."
    }
  ];

  return (
    <>
      <StructuredData type="Service" data={serviceSchema} />
      <SocialMeta
        title="Security Assessment Services Dubai | Cybersecurity Evaluation UAE"
        description="Comprehensive security assessment services in Dubai. Our UAE cybersecurity experts evaluate your organization's security posture across technology, people, and processes with 22+ years of experience."
        url="/services/security-assessment"
        type="website"
      />
      <ServicePageLayout
        title="Security Assessment Services Dubai | Cybersecurity Evaluation UAE"
        category="IT Security & Audit Services"
        description="Comprehensive security assessment services in Dubai. Our UAE cybersecurity experts evaluate your organization's security posture across technology, people, and processes with 22+ years of experience."
        heroIcon={<ClipboardCheck className="h-8 w-8" />}
        overview="In today's rapidly evolving threat landscape, understanding your organization's true security posture is essential for effective risk management in the UAE. Our comprehensive Dubai-based Security Assessment service delivers a holistic, multi-dimensional evaluation of your entire security ecosystem—examining people, processes, technology, and governance through the lens of industry-leading frameworks, UAE regulatory requirements, and real-world regional threat scenarios. Unlike narrow technical assessments that provide only partial visibility, our methodology evaluates security controls across your entire organization, identifying critical security gaps, control weaknesses, policy deficiencies, and implementation inconsistencies that create exploitable attack vectors. Through deep examination of both technical implementations and operational practices, we provide executive, strategic, and operational stakeholders with clear visibility into your current security maturity level, benchmark comparisons against UAE industry peers and best practices, prioritized remediation guidance, and a structured roadmap for security improvement that considers local regulatory context."
        steps={[
          {
            title: "Comprehensive Assessment Scoping & Discovery",
            description: "We begin with a thorough collaborative scoping process to precisely define assessment boundaries, objectives, and expectations—identifying all critical systems, applications, networks, data repositories, facility locations, business processes, and UAE regulatory requirements to be evaluated while also collecting essential business context information that ensures our assessment focuses on what matters most to your organization."
          },
          {
            title: "Multi-Framework Control Mapping & Strategy",
            description: "Based on your industry, UAE regulatory landscape, and specific security objectives, we select and customize the most appropriate combination of security frameworks and control catalogs (such as NIST CSF, ISO 27001, UAE IA, NESA, CIS Controls, MITRE ATT&CK)—creating a comprehensive assessment framework that enables meaningful security maturity benchmarking, facilitates future compliance efforts, and ensures all critical security domains are thoroughly evaluated."
          },
          {
            title: "Security Architecture & Governance Review",
            description: "Our Dubai-based experts conduct a detailed analysis of your security governance structure and documentation ecosystem—examining policies, procedures, standards, guidelines, security architecture diagrams, network topologies, data flow mappings, and organizational structures to evaluate the completeness, appropriateness, and implementation effectiveness of your security governance framework and identify policy-practice gaps that create security inconsistencies."
          },
          {
            title: "Comprehensive Technical Control Assessment",
            description: "We perform in-depth technical evaluations across your entire technology landscape—inspecting network security architecture, access control mechanisms, authentication systems, endpoint protection, encryption implementations, secure development practices, cloud security configurations, data protection methods, system hardening, and vulnerability management processes through a combination of interviews, configuration reviews, tool-based analysis, and observational assessment."
          },
          {
            title: "Security Operations & Process Evaluation",
            description: "Our assessment thoroughly examines operational security processes and capabilities—evaluating incident detection and response procedures, security monitoring effectiveness, vulnerability and patch management programs, change management controls, backup and recovery processes, third-party security management, and security resource adequacy through interviews with key personnel, workflow analysis, process testing, and capability demonstrations."
          },
          {
            title: "Human Factors & Awareness Measurement",
            description: "We evaluate the critical human elements of your security posture—assessing security awareness programs, training effectiveness, security culture maturity, security role definitions, skill development opportunities, and organizational security behaviors through interviews across various organizational levels, awareness testing, program reviews, and cultural assessment techniques that identify human-factor vulnerabilities often missed in purely technical assessments."
          },
          {
            title: "Multi-Dimensional Control Testing",
            description: "For critical security controls, we conduct targeted hands-on testing—performing control validation exercises that verify control existence and effectiveness rather than merely documentation, including configuration validation, limited penetration testing, social engineering simulations, process walkthroughs, and tabletop exercises that reveal how controls perform under real-world conditions."
          },
          {
            title: "Business-Contextualized Risk Analysis",
            description: "We analyze all assessment findings in the specific context of your UAE business environment—mapping identified vulnerabilities and control gaps to potential business impacts, compliance implications, and threat scenarios while considering the regional threat landscape, data sensitivity, business criticality, and risk tolerance to produce risk ratings that accurately reflect the true business significance of each finding."
          },
          {
            title: "Maturity Benchmarking & Gap Analysis",
            description: "Our detailed comparative analysis positions your security program against UAE industry benchmarks—assessing security maturity across each domain using quantitative scoring models, comparing current state against target maturity levels appropriate for your organization size and industry, and identifying specific capability gaps that must be addressed to achieve desired security maturity and compliance objectives."
          },
          {
            title: "Prioritized Remediation Planning & Roadmap Development",
            description: "We develop comprehensive remediation strategies that transform findings into action—creating detailed improvement recommendations prioritized by risk reduction value, implementation complexity, resource requirements, and interdependencies, then organizing these recommendations into a phased roadmap with quick wins, short-term priorities, and longer-term strategic initiatives that provides a clear path to enhanced security maturity aligned with UAE best practices."
          }
        ]}
        benefits={[
          {
            title: "Holistic Security Visibility & Understanding",
            content: "Gain unprecedented clarity into your complete security ecosystem with our multi-dimensional assessment approach—eliminating security blind spots by examining technical, procedural, operational, governance, and human aspects of security simultaneously, providing all stakeholders with a comprehensive understanding of your true security posture beyond what typical technical-only assessments reveal."
          },
          {
            title: "UAE-Specific Risk Reduction Strategy",
            content: "Transform security improvement from guesswork to strategy with our business-contextualized risk analysis—receiving meticulously prioritized remediation recommendations based on actual risk impact, exploitation likelihood, business criticality, implementation complexity, and resource requirements, enabling you to maximize risk reduction with available resources while addressing UAE-specific threats and regulatory requirements."
          },
          {
            title: "Accelerated Security Maturity Evolution",
            content: "Compress your security program maturity timeline through our structured, proven methodology that identifies the most impactful improvement opportunities—leveraging our extensive cross-industry experience in the UAE to help you bypass common maturity evolution pitfalls, implement security best practices aligned with your organization's size and industry, and achieve significant security posture improvements in months rather than years."
          },
          {
            title: "Strategic Roadmap for Security Excellence",
            content: "Receive a comprehensive, actionable security improvement roadmap that transforms assessment findings into a practical implementation plan—featuring phased initiatives organized into immediate remediation priorities, short-term quick wins, medium-term strategic improvements, and longer-term maturity enhancements, all carefully sequenced to build critical security capabilities while aligning with your UAE business objectives and operational constraints."
          },
          {
            title: "UAE Multi-Framework Compliance Preparation",
            content: "Establish an efficient foundation for regulatory compliance across multiple frameworks simultaneously—with detailed control gap analysis mapped to relevant standards (UAE IA, NESA, ISO 27001, SOC 2, PCI DSS, HIPAA, GDPR, UAE PDPL, etc.), allowing you to understand your compliance readiness, develop a unified compliance approach that satisfies multiple requirements efficiently, and significantly reduce the effort and cost of future compliance initiatives."
          },
          {
            title: "Credible Third-Party Security Validation",
            content: "Demonstrate your security commitment to stakeholders, partners, and customers with independent, expert assessment documentation—providing your UAE business with validated evidence of security due diligence, executive-ready reports for board presentations, and objective third-party security validation increasingly requested by customers, partners, insurers, and regulatory bodies in today's security-conscious business environment."
          },
          {
            title: "Confident Security Investment Planning",
            content: "Eliminate wasteful security spending through our detailed assessment insights—identifying redundant controls, ineffective tools, capability gaps, and optimization opportunities across your security program, enabling data-driven decisions about security resources, technology investments, staffing needs, and structural improvements that deliver maximum security value while reducing unnecessary expenditures."
          },
          {
            title: "Dubai Security Metrics & Benchmarking",
            content: "Establish meaningful security measurement capabilities with our detailed maturity scoring framework—providing quantitative metrics across security domains, comparative benchmarking against UAE industry peers and standards, progress tracking mechanisms, and performance indicators that transform abstract security concepts into measurable outcomes that resonate with executive stakeholders."
          }
        ]}
        deliverables={[
          {
            title: "Strategic Executive Summary & Board Presentation",
            description: "Comprehensive yet concise executive-focused report that translates technical assessment findings into clear business language—featuring overall security posture evaluation, key risk themes, strategic recommendations, investment priorities, and business impact analysis with professionally designed visuals and presentation materials specifically crafted for C-suite and board communications that enable informed security governance and strategic decision-making."
          },
          {
            title: "Comprehensive Security Assessment Report",
            description: "Exhaustive documentation of all assessment findings across every evaluated security domain—including detailed observations, evidence collection, control effectiveness ratings, compliance implications, and remediation guidance organized by security domain with both high-level summaries and detailed technical analysis, providing complete transparency into your security posture while serving as authoritative documentation for auditors, regulators, and security team reference."
          },
          {
            title: "UAE Multi-Framework Control Effectiveness Matrix",
            description: "Sophisticated cross-mapping of your security controls against multiple industry frameworks and UAE standards—evaluating control design appropriateness, implementation completeness, operational effectiveness, and monitoring coverage with a detailed gap analysis that identifies missing, incomplete, or ineffective controls while highlighting compliance implications for each control deficiency."
          },
          {
            title: "Business-Contextualized Risk Register",
            description: "Detailed inventory of identified security risks presented in UAE business context—featuring prioritized risk entries with severity ratings, exploitation likelihood, business impact analysis, compliance implications, affected assets, vulnerable components, and specific remediation guidance that transforms technical vulnerabilities into understandable business risks and provides clear remediation pathways for each identified issue."
          },
          {
            title: "Interactive Security Maturity Scorecards & Benchmarking",
            description: "Visually compelling representation of your security maturity across multiple domains and capabilities—containing quantitative maturity scoring, comparative benchmarking against UAE industry peers and standards, historical progression tracking (for returning clients), target maturity objectives, and interactive dashboards that enable drill-down analysis and visualization options suitable for different stakeholder audiences."
          },
          {
            title: "Prioritized UAE Remediation Strategy & Roadmap",
            description: "Actionable security improvement blueprint organized into a phased implementation approach—including immediate critical fixes (0-30 days), short-term quick wins (1-3 months), medium-term strategic improvements (3-9 months), and long-term maturity enhancements (9+ months) with detailed project planning guidance, resource requirements estimates, and interdependency mapping that provides a clear path to enhanced security posture aligned with UAE requirements."
          },
          {
            title: "Security Architecture Review & Improvement Recommendations",
            description: "Detailed analysis of your security architecture with specific enhancement guidance—including network segmentation recommendations, access control model improvements, encryption strategy refinements, security technology rationalization suggestions, cloud security architecture enhancements, and defense-in-depth strategy recommendations with supporting diagrams and deployment guidance tailored to your UAE technical environment."
          },
          {
            title: "Security Budget Planning & Investment Guidance",
            description: "Comprehensive security investment planning support with detailed cost-benefit analysis—providing security budget planning templates, technology investment recommendations, staffing guidance, outsourcing considerations, and resource optimization suggestions that help you maximize security value from available resources while building sustainable security capabilities aligned with UAE business needs."
          }
        ]}
        animationSvg={
          <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Security Boundary */}
            <rect x="100" y="100" width="400" height="200" rx="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="2" strokeDasharray="5 5"/>
            
            {/* Security Layers */}
            <circle cx="300" cy="200" r="130" fill="none" stroke="#eb3443" strokeWidth="1" strokeOpacity="0.3"/>
            <circle cx="300" cy="200" r="100" fill="none" stroke="#eb3443" strokeWidth="1" strokeOpacity="0.5"/>
            <circle cx="300" cy="200" r="70" fill="none" stroke="#eb3443" strokeWidth="1" strokeOpacity="0.7"/>
            <circle cx="300" cy="200" r="40" fill="none" stroke="#eb3443" strokeWidth="1" strokeOpacity="0.9"/>
            
            {/* Security Shield */}
            <path d="M300 130 L340 150 V210 C340 240 320 270 300 280 C280 270 260 240 260 210 V150 L300 130Z" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
            <path d="M295 180 L315 180 M305 170 L305 200 M295 200 L315 200" stroke="#00E5FF" strokeWidth="2"/>
            
            {/* Security Assessment Elements */}
            <circle cx="380" cy="160" r="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5">
              <animate attributeName="fillOpacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite"/>
            </circle>
            <text x="380" y="164" textAnchor="middle" fontSize="8" fill="#FFFFFF">Policy</text>
            
            <circle cx="380" cy="240" r="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5">
              <animate attributeName="fillOpacity" values="0.5;0.2;0.5" dur="3s" repeatCount="indefinite"/>
            </circle>
            <text x="380" y="244" textAnchor="middle" fontSize="8" fill="#FFFFFF">Tech</text>
            
            <circle cx="220" cy="160" r="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5">
              <animate attributeName="fillOpacity" values="0.3;0.6;0.3" dur="5s" repeatCount="indefinite"/>
            </circle>
            <text x="220" y="164" textAnchor="middle" fontSize="8" fill="#FFFFFF">People</text>
            
            <circle cx="220" cy="240" r="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5">
              <animate attributeName="fillOpacity" values="0.4;0.7;0.4" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            <text x="220" y="244" textAnchor="middle" fontSize="8" fill="#FFFFFF">Process</text>
            
            {/* Lines connecting assessment elements */}
            <line x1="246" y1="160" x2="274" y2="160" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="246" y1="240" x2="274" y2="240" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="326" y1="160" x2="354" y2="160" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="326" y1="240" x2="354" y2="240" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="220" y1="186" x2="220" y2="214" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="380" y1="186" x2="380" y2="214" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="235" y1="175" x2="265" y2="185" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="235" y1="225" x2="265" y2="215" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="335" y1="185" x2="365" y2="175" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            <line x1="335" y1="215" x2="365" y2="225" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3 2"/>
            
            {/* Animated Assessment Elements */}
            <circle cx="270" cy="150" r="5" fill="#00E5FF" fillOpacity="0.7">
              <animate attributeName="cx" values="270;300;330;300;270" dur="10s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="150;130;150;170;150" dur="10s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="330" cy="150" r="5" fill="#00E5FF" fillOpacity="0.5">
              <animate attributeName="cx" values="330;300;270;300;330" dur="15s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="150;170;150;130;150" dur="15s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="300" cy="250" r="5" fill="#00E5FF" fillOpacity="0.6">
              <animate attributeName="cx" values="300;270;300;330;300" dur="12s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="250;230;210;230;250" dur="12s" repeatCount="indefinite"/>
            </circle>
            
            {/* UAE Element */}
            <rect x="450" y="175" width="40" height="50" rx="5" fill="#0A1024" stroke="#eb3443" strokeWidth="1.5"/>
            <text x="470" y="200" textAnchor="middle" fontSize="9" fill="#FFFFFF">UAE</text>
            <text x="470" y="210" textAnchor="middle" fontSize="6" fill="#FFFFFF">Compliance</text>
            
            <line x1="400" y1="200" x2="445" y2="200" stroke="#eb3443" strokeWidth="1.5" strokeDasharray="3 2">
              <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
            </line>
            
            {/* Assessment Report */}
            <rect x="170" y="320" width="260" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
            <text x="300" y="338" textAnchor="middle" fontSize="10" fill="#FFFFFF">Security Assessment Report</text>
            
            <line x1="300" y1="280" x2="300" y2="315" stroke="#00E5FF" strokeWidth="1" strokeDasharray="4 2"/>
          </svg>
        }
        relatedServices={[
          {
            title: "Penetration Testing",
            link: "/services/penetration-testing"
          },
          {
            title: "Cloud Security",
            link: "/services/cloud-security"
          },
          {
            title: "vCISO",
            link: "/services/vciso"
          },
          {
            title: "IT Security Audit",
            link: "/services/it-security-audit"
          }
        ]}
      />
      
      {/* FAQ section with structured data */}
      <FAQ 
        items={faqItems}
        title="Security Assessment FAQs"
        subtitle="Common questions about our security assessment services in the UAE"
        className="bg-muted/50 py-16"
      />
    </>
  );
};

export default SecurityAssessmentPage;