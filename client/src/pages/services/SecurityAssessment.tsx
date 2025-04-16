import { 
  ClipboardCheck, 
  Shield, 
  AlertTriangle, 
  CheckCircle,
  BarChart2,
  FileText
} from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const SecurityAssessmentPage = () => {
  return (
    <ServicePageLayout
      title="Security Assessment"
      category="IT Security & Audit Services"
      description="Gain comprehensive visibility into your security posture with our detailed security assessment services targeting technology, people, and processes."
      heroIcon={<ClipboardCheck className="h-8 w-8" />}
      overview="In today's rapidly evolving threat landscape, understanding your organization's true security posture is essential for effective risk management and strategic security investment. Our comprehensive Security Assessment service delivers a holistic, multi-dimensional evaluation of your entire security ecosystem—examining people, processes, technology, and governance through the lens of industry-leading frameworks and real-world threat scenarios. Unlike narrow technical assessments that provide only partial visibility, our methodology evaluates security controls across your entire organization, identifying critical security gaps, control weaknesses, policy deficiencies, and implementation inconsistencies that create exploitable attack vectors. Through deep examination of both technical implementations and operational practices, we provide executive, strategic, and operational stakeholders with clear visibility into your current security maturity level, benchmark comparisons against industry peers and best practices, prioritized remediation guidance, and a structured roadmap for security improvement. This holistic approach ensures security investments target the highest-impact areas for risk reduction, compliance readiness, and overall security program maturity enhancement while aligning security improvements with your specific business context and objectives."
      steps={[
        {
          title: "Comprehensive Assessment Scoping & Discovery",
          description: "We begin with a thorough collaborative scoping process to precisely define assessment boundaries, objectives, and expectations—identifying all critical systems, applications, networks, data repositories, facility locations, business processes, and regulatory requirements to be evaluated while also collecting essential business context information (organizational structure, business objectives, strategic initiatives, industry challenges) that ensures our assessment focuses on what matters most to your organization."
        },
        {
          title: "Multi-Framework Control Mapping & Strategy",
          description: "Based on your industry, regulatory landscape, and specific security objectives, we select and customize the most appropriate combination of security frameworks and control catalogs (such as NIST CSF, ISO 27001, CIS Controls, MITRE ATT&CK, HIPAA, PCI DSS)—creating a comprehensive assessment framework that enables meaningful security maturity benchmarking, facilitates future compliance efforts, and ensures all critical security domains are thoroughly evaluated."
        },
        {
          title: "Security Architecture & Governance Review",
          description: "Our experts conduct a detailed analysis of your security governance structure and documentation ecosystem—examining policies, procedures, standards, guidelines, security architecture diagrams, network topologies, data flow mappings, and organizational structures to evaluate the completeness, appropriateness, and implementation effectiveness of your security governance framework and identify policy-practice gaps that create security inconsistencies."
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
          description: "We analyze all assessment findings in the specific context of your business environment—mapping identified vulnerabilities and control gaps to potential business impacts, compliance implications, and threat scenarios while considering your industry threat landscape, data sensitivity, business criticality, and risk tolerance to produce risk ratings that accurately reflect the true business significance of each finding."
        },
        {
          title: "Maturity Benchmarking & Gap Analysis",
          description: "Our detailed comparative analysis positions your security program against industry benchmarks—assessing security maturity across each domain using quantitative scoring models, comparing current state against target maturity levels appropriate for your organization size and industry, and identifying specific capability gaps that must be addressed to achieve desired security maturity and compliance objectives."
        },
        {
          title: "Prioritized Remediation Planning & Roadmap Development",
          description: "We develop comprehensive remediation strategies that transform findings into action—creating detailed improvement recommendations prioritized by risk reduction value, implementation complexity, resource requirements, and interdependencies, then organizing these recommendations into a phased roadmap with quick wins, short-term priorities, and longer-term strategic initiatives that provides a clear path to enhanced security maturity."
        }
      ]}
      benefits={[
        {
          title: "Holistic Security Visibility & Understanding",
          content: "Gain unprecedented clarity into your complete security ecosystem with our multi-dimensional assessment approach—eliminating security blind spots by examining technical, procedural, operational, governance, and human aspects of security simultaneously, providing all stakeholders with a comprehensive understanding of your true security posture beyond what typical technical-only assessments reveal."
        },
        {
          title: "Precision-Targeted Risk Reduction Strategy",
          content: "Transform security improvement from guesswork to strategy with our business-contextualized risk analysis—receiving meticulously prioritized remediation recommendations based on actual risk impact, exploitation likelihood, business criticality, implementation complexity, and resource requirements, enabling you to maximize risk reduction with available resources and demonstrate quantifiable security improvements to leadership."
        },
        {
          title: "Accelerated Security Maturity Evolution",
          content: "Compress your security program maturity timeline through our structured, proven methodology that identifies the most impactful improvement opportunities—leveraging our extensive cross-industry experience to help you bypass common maturity evolution pitfalls, implement security best practices aligned with your organization's size and industry, and achieve significant security posture improvements in months rather than years."
        },
        {
          title: "Strategic Roadmap for Security Excellence",
          content: "Receive a comprehensive, actionable security improvement roadmap that transforms assessment findings into a practical implementation plan—featuring phased initiatives organized into immediate remediation priorities, short-term quick wins, medium-term strategic improvements, and longer-term maturity enhancements, all carefully sequenced to build critical security capabilities while aligning with your business objectives and operational constraints."
        },
        {
          title: "Multi-Framework Compliance Preparation",
          content: "Establish an efficient foundation for regulatory compliance across multiple frameworks simultaneously—with detailed control gap analysis mapped to relevant standards (ISO 27001, SOC 2, PCI DSS, HIPAA, GDPR, etc.), allowing you to understand your compliance readiness, develop a unified compliance approach that satisfies multiple requirements efficiently, and significantly reduce the effort and cost of future compliance initiatives."
        },
        {
          title: "Credible Third-Party Security Validation",
          content: "Demonstrate your security commitment to stakeholders, partners, and customers with independent, expert assessment documentation—providing your business with validated evidence of security due diligence, executive-ready reports for board presentations, and objective third-party security validation increasingly requested by customers, partners, insurers, and regulatory bodies in today's security-conscious business environment."
        },
        {
          title: "Confident Security Investment Planning",
          content: "Eliminate wasteful security spending through our detailed assessment insights—identifying redundant controls, ineffective tools, capability gaps, and optimization opportunities across your security program, enabling data-driven decisions about security resources, technology investments, staffing needs, and structural improvements that deliver maximum security value while reducing unnecessary expenditures."
        },
        {
          title: "Comprehensive Security Metrics & Benchmarking",
          content: "Establish meaningful security measurement capabilities with our detailed maturity scoring framework—providing quantitative metrics across security domains, comparative benchmarking against industry peers and standards, progress tracking mechanisms, and performance indicators that transform abstract security concepts into measurable outcomes that resonate with executive stakeholders."
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
          title: "Multi-Framework Control Effectiveness Matrix",
          description: "Sophisticated cross-mapping of your security controls against multiple industry frameworks and standards (NIST CSF, ISO 27001, CIS Controls, etc.)—evaluating control design appropriateness, implementation completeness, operational effectiveness, and monitoring coverage with a detailed gap analysis that identifies missing, incomplete, or ineffective controls while highlighting compliance implications for each control deficiency."
        },
        {
          title: "Business-Contextualized Risk Register",
          description: "Detailed inventory of identified security risks presented in business context—featuring prioritized risk entries with severity ratings, exploitation likelihood, business impact analysis, compliance implications, affected assets, vulnerable components, and specific remediation guidance that transforms technical vulnerabilities into understandable business risks and provides clear remediation pathways for each identified issue."
        },
        {
          title: "Interactive Security Maturity Scorecards & Benchmarking",
          description: "Visually compelling representation of your security maturity across multiple domains and capabilities—containing quantitative maturity scoring, comparative benchmarking against industry peers and standards, historical progression tracking (for returning clients), target maturity objectives, and interactive dashboards that enable drill-down analysis and visualization options suitable for different stakeholder audiences."
        },
        {
          title: "Prioritized Remediation Strategy & Roadmap",
          description: "Actionable security improvement blueprint organized into a phased implementation approach—including immediate critical fixes (0-30 days), short-term quick wins (1-3 months), medium-term strategic improvements (3-9 months), and long-term maturity enhancements (9+ months) with detailed project planning guidance, resource requirements estimates, and interdependency mapping that provides a clear path to enhanced security posture."
        },
        {
          title: "Security Architecture Review & Improvement Recommendations",
          description: "Detailed analysis of your security architecture with specific enhancement guidance—including network segmentation recommendations, access control model improvements, encryption strategy refinements, security technology rationalization suggestions, cloud security architecture enhancements, and defense-in-depth strategy recommendations with supporting diagrams and deployment guidance tailored to your technical environment."
        },
        {
          title: "Security Budget Planning & Investment Guidance",
          description: "Comprehensive security investment planning support with detailed cost-benefit analysis—providing security budget planning templates, technology investment recommendations, staffing guidance, outsourcing considerations, and resource allocation strategies prioritized by risk reduction value with executive justification language that helps secure funding approval for critical security initiatives."
        },
        {
          title: "Custom Assessment Artifacts Based on Organizational Needs",
          description: "Additional specialized deliverables tailored to your specific organizational requirements—potentially including compliance readiness assessments, security awareness program recommendations, incident response capability evaluations, third-party risk management frameworks, secure development practice assessments, or other custom deliverables designed to address your unique security challenges and business objectives."
        }
      ]}
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Assessment Shield */}
          <path d="M300 100 Q360 120 360 190 Q360 260 300 300 Q240 260 240 190 Q240 120 300 100" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          
          {/* Radar Sweep */}
          <circle cx="300" cy="200" r="80" fill="none" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.2"/>
          <circle cx="300" cy="200" r="60" fill="none" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.3"/>
          <circle cx="300" cy="200" r="40" fill="none" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.4"/>
          <circle cx="300" cy="200" r="20" fill="none" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.5"/>
          
          <path d="M300 200 L380 200" stroke="#00B2A9" strokeWidth="1.5" strokeOpacity="0.8">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 300 200"
              to="360 300 200"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Assessment Domains */}
          <rect x="140" y="150" width="70" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="175" y="170" textAnchor="middle" fontSize="10" fill="#00E5FF">Technology</text>
          
          <rect x="140" y="190" width="70" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="175" y="210" textAnchor="middle" fontSize="10" fill="#00E5FF">People</text>
          
          <rect x="140" y="230" width="70" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="175" y="250" textAnchor="middle" fontSize="10" fill="#00E5FF">Process</text>
          
          {/* Assessment Elements */}
          <rect x="390" y="150" width="70" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="425" y="170" textAnchor="middle" fontSize="10" fill="#00E5FF">Controls</text>
          
          <rect x="390" y="190" width="70" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="425" y="210" textAnchor="middle" fontSize="10" fill="#00E5FF">Risks</text>
          
          <rect x="390" y="230" width="70" height="30" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="425" y="250" textAnchor="middle" fontSize="10" fill="#00E5FF">Maturity</text>
          
          {/* Connection Lines */}
          <line x1="210" y1="165" x2="240" y2="165" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="210" y1="205" x2="240" y2="205" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="210" y1="245" x2="240" y2="245" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="360" y1="165" x2="390" y2="165" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="360" y1="205" x2="390" y2="205" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          <line x1="360" y1="245" x2="390" y2="245" stroke="#00B2A9" strokeWidth="1" strokeDasharray="5 3"/>
          
          {/* Risk Points */}
          <circle cx="290" cy="150" r="5" fill="#FF5252" fillOpacity="0.8"/>
          <circle cx="330" cy="170" r="5" fill="#FF5252" fillOpacity="0.8"/>
          <circle cx="270" cy="210" r="5" fill="#FF5252" fillOpacity="0.8"/>
          <circle cx="310" cy="230" r="5" fill="#FF5252" fillOpacity="0.8"/>
          <circle cx="290" cy="260" r="5" fill="#FF5252" fillOpacity="0.8"/>
          
          {/* Control Points */}
          <circle cx="290" cy="150" r="8" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          <circle cx="330" cy="170" r="8" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          <circle cx="270" cy="210" r="8" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          <circle cx="310" cy="230" r="8" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          <circle cx="290" cy="260" r="8" fill="none" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.5"/>
          
          {/* Maturity Chart */}
          <path d="M240 330 L360 330" stroke="#00B2A9" strokeWidth="1"/>
          <path d="M240 330 L240 370" stroke="#00B2A9" strokeWidth="1"/>
          
          <rect x="250" y="350" width="15" height="20" fill="#00B2A9" fillOpacity="0.3" stroke="#00E5FF" strokeWidth="1"/>
          <rect x="275" y="340" width="15" height="30" fill="#00B2A9" fillOpacity="0.3" stroke="#00E5FF" strokeWidth="1"/>
          <rect x="300" y="355" width="15" height="15" fill="#00B2A9" fillOpacity="0.3" stroke="#00E5FF" strokeWidth="1"/>
          <rect x="325" y="335" width="15" height="35" fill="#00B2A9" fillOpacity="0.3" stroke="#00E5FF" strokeWidth="1"/>
          
          <text x="257" y="345" textAnchor="middle" fontSize="6" fill="#00E5FF">T</text>
          <text x="282" y="335" textAnchor="middle" fontSize="6" fill="#00E5FF">P</text>
          <text x="307" y="350" textAnchor="middle" fontSize="6" fill="#00E5FF">P</text>
          <text x="332" y="330" textAnchor="middle" fontSize="6" fill="#00E5FF">G</text>
          
          {/* Title */}
          <text x="300" y="85" textAnchor="middle" fontSize="16" fill="#00E5FF">Security Assessment</text>
          
          {/* Animated Elements */}
          <circle cx="225" cy="165" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="210;240" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="225" cy="205" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="210;240" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="225" cy="245" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="210;240" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="375" cy="165" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="390;360" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="375" cy="205" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="390;360" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="375" cy="245" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="390;360" dur="3s" repeatCount="indefinite"/>
          </circle>
        </svg>
      }
      relatedServices={[
        {
          title: "IT Security Audit",
          link: "/services/it-security-audit"
        },
        {
          title: "Penetration Testing",
          link: "/services/penetration-testing"
        },
        {
          title: "ISO 27001 Certification",
          link: "/services/iso27001"
        }
      ]}
    />
  );
};

export default SecurityAssessmentPage;