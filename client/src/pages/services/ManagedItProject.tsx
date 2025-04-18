import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Briefcase, Target, Clock, Users, CheckSquare, BarChart3, FileText, Cpu, Shield } from 'lucide-react';

const ManagedItProjectPage = () => {
  return (
    <ServicePageLayout
      title="Managed IT Project Management"
      category="IT Managed Services"
      description="Our Managed IT Project Management service delivers expert coordination and oversight for your technology initiatives, ensuring they are completed on time, within budget, and aligned with business objectives, while minimizing risk and maximizing value."
      heroIcon={<Briefcase className="h-8 w-8" />}
      
      overview="Successful technology initiatives require expert project management to navigate complex technical, resource, and timeline challenges. Our Managed IT Project Management service provides dedicated project managers with deep technical expertise who ensure that your IT projects are delivered successfully from conception to completion. We bring proven methodologies, best practices, and industry experience to guide projects through proper planning, risk management, stakeholder communication, and quality assurance processes."
      
      steps={[
        {
          title: "Requirements Gathering",
          description: "Define clear project objectives, scope, deliverables, and success criteria through stakeholder interviews and workshops."
        },
        {
          title: "Project Planning",
          description: "Develop comprehensive project plans including timelines, resource allocation, budget, risk assessment, and quality measures."
        },
        {
          title: "Team Coordination",
          description: "Assemble and coordinate the right technical resources, defining clear roles, responsibilities, and communication protocols."
        },
        {
          title: "Execution Management",
          description: "Oversee project execution with regular status tracking, obstacle clearance, and proactive issue management."
        },
        {
          title: "Quality Assurance",
          description: "Implement testing and verification procedures to ensure deliverables meet requirements and quality standards."
        },
        {
          title: "Project Closure",
          description: "Complete knowledge transfer, documentation, stakeholder sign-off, and post-implementation support planning."
        }
      ]}
      
      benefits={[
        {
          title: "Predictable Outcomes",
          content: "Achieve consistent, predictable results through structured methodologies and experienced management."
        },
        {
          title: "Resource Optimization",
          content: "Maximize efficient use of technical resources and budget through effective planning and coordination."
        },
        {
          title: "Risk Reduction",
          content: "Identify and mitigate potential issues early, minimizing their impact on project timelines and budgets."
        },
        {
          title: "Quality Assurance",
          content: "Ensure deliverables meet business requirements through rigorous quality control processes."
        },
        {
          title: "Business Alignment",
          content: "Maintain focus on business objectives and ROI throughout the project lifecycle."
        }
      ]}
      
      deliverables={[
        {
          title: "Project Charter",
          description: "Formal document defining project goals, scope, stakeholders, constraints, and success metrics."
        },
        {
          title: "Detailed Project Plan",
          description: "Comprehensive timeline with milestones, dependencies, resource allocations, and critical path analysis."
        },
        {
          title: "Risk Management Plan",
          description: "Documented risks with probability, impact assessments, and mitigation strategies."
        },
        {
          title: "Status Reporting",
          description: "Regular progress reports with metrics, milestone tracking, issue management, and forecast updates."
        },
        {
          title: "Change Management Documentation",
          description: "Structured process for evaluating, approving, and implementing changes to project scope or requirements."
        },
        {
          title: "Project Closure Report",
          description: "Final analysis of project performance against objectives, lessons learned, and recommendations for future improvements."
        }
      ]}
      
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Project Timeline */}
          <rect x="100" y="150" width="400" height="50" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          <text x="300" y="140" textAnchor="middle" fontSize="14" fill="#00E5FF">Project Timeline</text>
          
          {/* Timeline Milestones */}
          <line x1="150" y1="150" x2="150" y2="200" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3,2"/>
          <line x1="250" y1="150" x2="250" y2="200" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3,2"/>
          <line x1="350" y1="150" x2="350" y2="200" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3,2"/>
          <line x1="450" y1="150" x2="450" y2="200" stroke="#00E5FF" strokeWidth="1" strokeDasharray="3,2"/>
          
          <circle cx="150" cy="175" r="10" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="150" y="178" textAnchor="middle" fontSize="10" fill="#00E5FF">1</text>
          <text x="150" y="215" textAnchor="middle" fontSize="10" fill="#00E5FF">Start</text>
          
          <circle cx="250" cy="175" r="10" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="250" y="178" textAnchor="middle" fontSize="10" fill="#00E5FF">2</text>
          <text x="250" y="215" textAnchor="middle" fontSize="10" fill="#00E5FF">Planning</text>
          
          <circle cx="350" cy="175" r="10" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="350" y="178" textAnchor="middle" fontSize="10" fill="#00E5FF">3</text>
          <text x="350" y="215" textAnchor="middle" fontSize="10" fill="#00E5FF">Execution</text>
          
          <circle cx="450" cy="175" r="10" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1.5"/>
          <text x="450" y="178" textAnchor="middle" fontSize="10" fill="#00E5FF">4</text>
          <text x="450" y="215" textAnchor="middle" fontSize="10" fill="#00E5FF">Closure</text>
          
          {/* Progress Indicator */}
          <rect x="100" y="175" width="200" height="10" rx="5" fill="#00B2A9" fillOpacity="0.3"/>
          <circle cx="300" cy="175" r="8" fill="#00E5FF">
            <animate attributeName="cx" values="150;350;350" dur="8s" repeatCount="indefinite"/>
          </circle>
          
          {/* Project Manager */}
          <circle cx="300" cy="100" r="20" fill="#0A1024" stroke="#EB3443" strokeWidth="1.5"/>
          <circle cx="300" cy="85" r="10" fill="#0A1024" stroke="#EB3443" strokeWidth="1.5"/>
          <text x="300" y="105" textAnchor="middle" fontSize="10" fill="#EB3443">PM</text>
          
          {/* Connection Lines */}
          <line x1="300" y1="120" x2="300" y2="150" stroke="#EB3443" strokeWidth="1" strokeDasharray="4,2"/>
          
          {/* Team Members */}
          <circle cx="200" cy="300" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <circle cx="200" cy="290" r="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="200" y="305" textAnchor="middle" fontSize="8" fill="#00E5FF">Dev</text>
          
          <circle cx="250" cy="300" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <circle cx="250" cy="290" r="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="250" y="305" textAnchor="middle" fontSize="8" fill="#00E5FF">QA</text>
          
          <circle cx="300" cy="300" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <circle cx="300" cy="290" r="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="300" y="305" textAnchor="middle" fontSize="8" fill="#00E5FF">Infra</text>
          
          <circle cx="350" cy="300" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <circle cx="350" cy="290" r="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="350" y="305" textAnchor="middle" fontSize="8" fill="#00E5FF">Sec</text>
          
          <circle cx="400" cy="300" r="15" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
          <circle cx="400" cy="290" r="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="1"/>
          <text x="400" y="305" textAnchor="middle" fontSize="8" fill="#00E5FF">BA</text>
          
          {/* Team Connections */}
          <line x1="300" y1="225" x2="300" y2="275" stroke="#EB3443" strokeWidth="1" strokeDasharray="4,2"/>
          <line x1="200" y1="275" x2="400" y2="275" stroke="#EB3443" strokeWidth="1" strokeDasharray="4,2"/>
          <line x1="200" y1="275" x2="200" y2="285" stroke="#EB3443" strokeWidth="1" strokeDasharray="4,2"/>
          <line x1="250" y1="275" x2="250" y2="285" stroke="#EB3443" strokeWidth="1" strokeDasharray="4,2"/>
          <line x1="300" y1="275" x2="300" y2="285" stroke="#EB3443" strokeWidth="1" strokeDasharray="4,2"/>
          <line x1="350" y1="275" x2="350" y2="285" stroke="#EB3443" strokeWidth="1" strokeDasharray="4,2"/>
          <line x1="400" y1="275" x2="400" y2="285" stroke="#EB3443" strokeWidth="1" strokeDasharray="4,2"/>
          
          {/* Project Documentation */}
          <rect x="480" y="270" width="50" height="60" rx="3" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <line x1="490" y1="280" x2="520" y2="280" stroke="#00B2A9" strokeWidth="1"/>
          <line x1="490" y1="290" x2="520" y2="290" stroke="#00B2A9" strokeWidth="1"/>
          <line x1="490" y1="300" x2="520" y2="300" stroke="#00B2A9" strokeWidth="1"/>
          <line x1="490" y1="310" x2="510" y2="310" stroke="#00B2A9" strokeWidth="1"/>
          <text x="505" y="260" textAnchor="middle" fontSize="10" fill="#00B2A9">Docs</text>
          
          {/* Animated Elements */}
          <circle cx="150" cy="175" r="13" fill="none" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.3">
            <animate attributeName="r" values="13;15;13" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="250" cy="175" r="13" fill="none" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.3">
            <animate attributeName="r" values="13;15;13" dur="2s" begin="0.5s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="0.3;0.1;0.3" dur="2s" begin="0.5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="350" cy="175" r="13" fill="none" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.3">
            <animate attributeName="r" values="13;15;13" dur="2s" begin="1s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="0.3;0.1;0.3" dur="2s" begin="1s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="450" cy="175" r="13" fill="none" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.3">
            <animate attributeName="r" values="13;15;13" dur="2s" begin="1.5s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="0.3;0.1;0.3" dur="2s" begin="1.5s" repeatCount="indefinite"/>
          </circle>
          
          {/* Communication Lines */}
          <path d="M400 300 L470 300" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2">
            <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
          </path>
        </svg>
      }
      
      relatedServices={[
        {
          title: "IT Annual Maintenance Contract",
          link: "/services/it-amc"
        },
        {
          title: "Cloud & On-Premise Infrastructure",
          link: "/services/cloud-on-prem-infrastructure"
        },
        {
          title: "Microsoft Services",
          link: "/services/microsoft-services"
        }
      ]}
    />
  );
};

export default ManagedItProjectPage;