import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { AlertCircle, FileText, Clock, Users, Shield, Zap, CheckCircle, BookOpen, Network } from 'lucide-react';

const IncidentResponsePlanningPage = () => {
  return (
    <ServicePageLayout
      title="Incident Response Planning"
      category="Cybersecurity Services"
      description="Our Incident Response Planning service helps organizations prepare for cyber incidents with comprehensive response strategies, customized playbooks, and implementation guidance. We help you establish the protocols, teams, and tools needed to effectively manage security incidents and minimize their impact."
      heroIcon={<AlertCircle className="h-8 w-8" />}
      
      overview="Effective incident response requires thorough preparation before an incident occurs. Our service helps organizations develop robust incident response plans that enable quick, coordinated, and effective action when security incidents happen. We create customized playbooks tailored to your specific environment, risk profile, and organizational structure. These plans detail roles, responsibilities, communication protocols, and technical response procedures for different incident types, giving your team a clear roadmap during high-pressure situations."
      
      benefits={[
        {
          title: "Minimize Incident Impact",
          content: "Reduce financial and reputational damage by enabling faster detection, containment, and recovery."
        },
        {
          title: "Reduce Response Time",
          content: "Enable your team to respond quickly and effectively with clear predefined procedures and decision frameworks."
        },
        {
          title: "Meet Compliance Requirements",
          content: "Satisfy regulatory obligations for incident response planning and reporting across multiple frameworks."
        },
        {
          title: "Build Team Confidence",
          content: "Empower your security and IT teams with the knowledge and tools to handle incidents effectively."
        },
        {
          title: "Improve Communication",
          content: "Establish clear communication channels and protocols to ensure timely and accurate information sharing during incidents."
        }
      ]}
      
      steps={[
        {
          title: "Incident Response Assessment",
          description: "Evaluate current incident response capabilities, identify gaps, and establish objectives for your incident response program."
        },
        {
          title: "IR Program Development",
          description: "Create a comprehensive incident response program including governance structure, team composition, and operational procedures."
        },
        {
          title: "Playbook Creation",
          description: "Develop detailed technical response procedures for specific incident types relevant to your environment and threat landscape."
        },
        {
          title: "Communication Planning",
          description: "Establish internal and external communication protocols, including notification procedures and messaging templates."
        },
        {
          title: "Documentation & Integration",
          description: "Finalize all documentation and integrate incident response procedures with existing security and IT operations."
        },
        {
          title: "Testing & Validation",
          description: "Conduct tabletop exercises and simulations to validate plans, identify improvements, and build team readiness."
        }
      ]}
      
      deliverables={[
        {
          title: "Incident Response Plan",
          description: "Complete incident response framework covering governance, roles and responsibilities, communication flows, and legal/regulatory considerations."
        },
        {
          title: "Technical Response Playbooks",
          description: "Detailed step-by-step procedures for responding to specific incident types including malware, data breaches, ransomware, and insider threats."
        },
        {
          title: "IR Team Structure",
          description: "Defined team composition with clear roles, responsibilities, escalation paths, and authority levels for incident management."
        },
        {
          title: "Communication Templates",
          description: "Ready-to-use notification templates for stakeholders, customers, regulators, and media to ensure clear and consistent communications."
        },
        {
          title: "Tabletop Exercise Materials",
          description: "Scenario-based exercise materials to test incident response procedures and team readiness in a controlled environment."
        },
        {
          title: "Incident Response Toolkit",
          description: "Collection of checklists, decision trees, and documentation templates to support efficient incident handling."
        }
      ]}
      
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Central Alert */}
          <circle cx="300" cy="180" r="60" fill="#0A1024" stroke="#EB3443" strokeWidth="2"/>
          <text x="300" y="155" textAnchor="middle" fontSize="18" fill="#EB3443">INCIDENT</text>
          <text x="300" y="175" textAnchor="middle" fontSize="18" fill="#EB3443">ALERT</text>
          <text x="300" y="195" textAnchor="middle" fontSize="12" fill="#EB3443">(Simulated Event)</text>
          
          {/* Response Phases */}
          <rect x="110" y="100" width="100" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="160" y="125" textAnchor="middle" fontSize="12" fill="#00E5FF">Preparation</text>
          
          <rect x="110" y="160" width="100" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="160" y="185" textAnchor="middle" fontSize="12" fill="#00E5FF">Detection</text>
          
          <rect x="110" y="220" width="100" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="160" y="245" textAnchor="middle" fontSize="12" fill="#00E5FF">Analysis</text>
          
          <rect x="390" y="100" width="100" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="440" y="125" textAnchor="middle" fontSize="12" fill="#00E5FF">Containment</text>
          
          <rect x="390" y="160" width="100" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="440" y="185" textAnchor="middle" fontSize="12" fill="#00E5FF">Eradication</text>
          
          <rect x="390" y="220" width="100" height="40" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="440" y="245" textAnchor="middle" fontSize="12" fill="#00E5FF">Recovery</text>
          
          {/* Connecting Lines */}
          <path d="M210 120 L240 180" stroke="#00E5FF" strokeWidth="1" strokeDasharray="4,2"/>
          <path d="M210 180 L240 180" stroke="#00E5FF" strokeWidth="1" strokeDasharray="4,2"/>
          <path d="M210 240 L240 180" stroke="#00E5FF" strokeWidth="1" strokeDasharray="4,2"/>
          
          <path d="M360 180 L390 120" stroke="#00E5FF" strokeWidth="1" strokeDasharray="4,2"/>
          <path d="M360 180 L390 180" stroke="#00E5FF" strokeWidth="1" strokeDasharray="4,2"/>
          <path d="M360 180 L390 240" stroke="#00E5FF" strokeWidth="1" strokeDasharray="4,2"/>
          
          {/* Team Response */}
          <rect x="250" y="290" width="100" height="50" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="300" y="310" textAnchor="middle" fontSize="12" fill="#00B2A9">Response</text>
          <text x="300" y="325" textAnchor="middle" fontSize="12" fill="#00B2A9">Team</text>
          
          <path d="M300 240 L300 290" stroke="#00B2A9" strokeWidth="1.5" strokeDasharray="3,2"/>
          
          {/* Playbooks */}
          <rect x="100" y="290" width="80" height="50" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="140" y="317" textAnchor="middle" fontSize="11" fill="#00B2A9">Playbooks</text>
          
          <path d="M180 315 L250 315" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
          
          {/* Communication */}
          <rect x="420" y="290" width="80" height="50" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <text x="460" y="310" textAnchor="middle" fontSize="11" fill="#00B2A9">Stakeholder</text>
          <text x="460" y="325" textAnchor="middle" fontSize="11" fill="#00B2A9">Comms</text>
          
          <path d="M350 315 L420 315" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
          
          {/* Animated Alert Pulse */}
          <circle cx="300" cy="180" r="65" fill="none" stroke="#EB3443" strokeWidth="1" strokeOpacity="0.7">
            <animate attributeName="r" values="65;75;65" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="0.7;0.2;0.7" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="300" cy="180" r="80" fill="none" stroke="#EB3443" strokeWidth="1" strokeOpacity="0.3">
            <animate attributeName="r" values="80;90;80" dur="2s" repeatCount="indefinite" begin="0.5s"/>
            <animate attributeName="stroke-opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" begin="0.5s"/>
          </circle>
        </svg>
      }
      
      relatedServices={[
        {
          title: "Threat Hunting",
          link: "/services/threat-hunting"
        },
        {
          title: "Security Program Development",
          link: "/services/security-program-development"
        },
        {
          title: "Business Continuity Planning",
          link: "/services/business-continuity"
        }
      ]}
    />
  );
};

export default IncidentResponsePlanningPage;