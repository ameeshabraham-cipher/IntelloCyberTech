import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { AlertCircle, FileText, Clock, Users, Shield, Zap, CheckCircle, BookOpen, Network } from 'lucide-react';

const IncidentResponsePlanningPage = () => {
  return (
    <ServicePageLayout
      icon={<AlertCircle className="h-10 w-10" />}
      title="Incident Response Planning"
      subtitle="Customized Incident Response Plans and Playbooks"
      description="Our Incident Response Planning service helps organizations prepare for cyber incidents with comprehensive response strategies, customized playbooks, and implementation guidance. We help you establish the protocols, teams, and tools needed to effectively manage security incidents and minimize their impact."
      
      overview={`
        <p>Effective incident response requires thorough preparation before an incident occurs. Our service helps organizations develop robust incident response plans that enable quick, coordinated, and effective action when security incidents happen.</p>
        
        <p>We create customized playbooks tailored to your specific environment, risk profile, and organizational structure. These plans detail roles, responsibilities, communication protocols, and technical response procedures for different incident types, giving your team a clear roadmap during high-pressure situations.</p>
      `}
      
      keyBenefits={[
        {
          title: "Minimize Incident Impact",
          description: "Reduce financial and reputational damage by enabling faster detection, containment, and recovery.",
          icon: <Shield className="h-6 w-6 text-[hsl(var(--primary))]" />
        },
        {
          title: "Reduce Response Time",
          description: "Enable your team to respond quickly and effectively with clear predefined procedures and decision frameworks.",
          icon: <Clock className="h-6 w-6 text-[hsl(var(--primary))]" />
        },
        {
          title: "Meet Compliance Requirements",
          description: "Satisfy regulatory obligations for incident response planning and reporting across multiple frameworks.",
          icon: <CheckCircle className="h-6 w-6 text-[hsl(var(--primary))]" />
        },
        {
          title: "Build Team Confidence",
          description: "Empower your security and IT teams with the knowledge and tools to handle incidents effectively.",
          icon: <Users className="h-6 w-6 text-[hsl(var(--primary))]" />
        }
      ]}
      
      processSteps={[
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
      
      features={[
        {
          title: "Comprehensive IR Plan",
          description: "Complete incident response framework covering governance, roles and responsibilities, communication flows, and legal/regulatory considerations.",
          icon: <FileText className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Technical Response Playbooks",
          description: "Detailed step-by-step procedures for responding to specific incident types including malware, data breaches, ransomware, and insider threats.",
          icon: <BookOpen className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "IR Team Structure",
          description: "Defined team composition with clear roles, responsibilities, escalation paths, and authority levels for incident management.",
          icon: <Users className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Communication Templates",
          description: "Ready-to-use notification templates for stakeholders, customers, regulators, and media to ensure clear and consistent communications.",
          icon: <Network className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Tabletop Exercises",
          description: "Facilitated scenario-based exercises to test incident response procedures and team readiness in a controlled environment.",
          icon: <CheckCircle className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Incident Response Toolkit",
          description: "Collection of checklists, decision trees, and documentation templates to support efficient incident handling.",
          icon: <Zap className="h-12 w-12 text-[hsl(var(--primary))]" />
        }
      ]}
      
      faqs={[
        {
          question: "What should a good incident response plan include?",
          answer: "A comprehensive incident response plan should include governance structure, team roles and responsibilities, incident classification criteria, notification and escalation procedures, technical response playbooks for different incident types, communication templates, regulatory reporting requirements, and recovery procedures. It should be detailed enough to provide clear guidance while remaining flexible enough to adapt to unique scenarios."
        },
        {
          question: "How often should we review and update our incident response plan?",
          answer: "Incident response plans should be reviewed at least annually and updated whenever significant changes occur in your environment, such as new systems, applications, cloud services, or compliance requirements. Plans should also be updated after major incidents to incorporate lessons learned. Regular testing through tabletop exercises helps identify areas needing improvement."
        },
        {
          question: "How do you customize incident response plans for our specific environment?",
          answer: "We conduct a thorough assessment of your technical environment, business operations, industry-specific threats, compliance requirements, and organizational structure. This informs the development of tailored response procedures that address your specific risks and align with your operational realities and resource constraints."
        },
        {
          question: "How do we integrate incident response with our existing security operations?",
          answer: "We design incident response procedures that complement your existing security monitoring, alert management, and IT service management processes. This includes defining integration points, tool configurations, automation opportunities, and workflow transitions to ensure seamless operations during incidents."
        },
        {
          question: "What industries do you have experience with for incident response planning?",
          answer: "We have extensive experience developing incident response plans across various industries including financial services, healthcare, government, technology, manufacturing, and energy. Each industry has unique threat landscapes and regulatory requirements that we incorporate into our planning approach."
        }
      ]}
      
      cta={{
        title: "Are You Prepared for a Cyber Incident?",
        subtitle: "Develop an effective incident response strategy with our expert guidance.",
        buttonText: "Get Started with IR Planning",
        buttonLink: "/contact"
      }}
      
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