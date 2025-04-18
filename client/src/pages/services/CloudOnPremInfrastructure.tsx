import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Cloud, Server, Shield, Network, Database, Settings, Lock, CheckCircle, BarChart3 } from 'lucide-react';

const CloudOnPremInfrastructureDesignPage = () => {
  return (
    <ServicePageLayout
      title="Cloud & On-Premise Infrastructure Design"
      category="IT Managed Services"
      description="Our Cloud & On-Premise Infrastructure Design service provides comprehensive planning and implementation for hybrid IT environments. We design scalable, secure, and efficient infrastructure solutions that balance on-premise reliability with cloud flexibility to meet your specific business needs."
      heroIcon={<Cloud className="h-8 w-8" />}
      overview="In today's complex IT landscape, organizations need infrastructure that balances security, performance, cost-efficiency, and flexibility. Our Cloud and On-Premise Infrastructure Design service delivers strategic planning and implementation of hybrid environments that leverage the best of both worlds. Whether you're transitioning to the cloud, optimizing an existing hybrid setup, or designing new infrastructure from the ground up, our experts provide guidance at every step – from initial assessment to ongoing optimization."
      
      steps={[
        {
          title: "Infrastructure Assessment",
          description: "Evaluate current infrastructure components, identify bottlenecks, security vulnerabilities, and opportunities for optimization."
        },
        {
          title: "Requirements Analysis",
          description: "Define performance, security, compliance, and operational requirements that will shape the infrastructure design."
        },
        {
          title: "Architecture Design",
          description: "Create detailed infrastructure blueprints specifying hardware, networking, cloud services, and security controls."
        },
        {
          title: "Implementation Planning",
          description: "Develop migration strategies and implementation roadmaps to minimize disruption during transitional phases."
        },
        {
          title: "Deployment & Integration",
          description: "Implement the designed infrastructure with careful attention to security, performance, and integration points."
        },
        {
          title: "Validation & Optimization",
          description: "Test all components against requirements, fine-tune performance, and establish monitoring and management processes."
        }
      ]}
      
      benefits={[
        {
          title: "Optimized Resource Allocation",
          content: "Balance workloads between on-premise and cloud resources to achieve optimal performance and cost-efficiency."
        },
        {
          title: "Enhanced Security Posture",
          content: "Implement security controls across both environments with consistent policies and centralized visibility."
        },
        {
          title: "Improved Scalability",
          content: "Design infrastructure that can seamlessly scale up or down based on changing business requirements."
        },
        {
          title: "Business Continuity",
          content: "Create resilient architectures with redundancy across environments to minimize downtime risks."
        },
        {
          title: "Cost Optimization",
          content: "Reduce infrastructure costs by leveraging the right mix of on-premise and cloud resources based on workload requirements."
        }
      ]}
      
      deliverables={[
        {
          title: "Infrastructure Assessment Report",
          description: "Detailed analysis of current infrastructure with identified gaps, risks, and optimization opportunities."
        },
        {
          title: "Architecture Design Documentation",
          description: "Comprehensive infrastructure blueprints with hardware specifications, network diagrams, and cloud service configurations."
        },
        {
          title: "Implementation Roadmap",
          description: "Phased implementation plan with timelines, resource requirements, and risk mitigation strategies."
        },
        {
          title: "Security Architecture Document",
          description: "Detailed security controls, policies, and procedures for the hybrid environment with threat mitigation strategies."
        },
        {
          title: "Operational Procedures",
          description: "Documentation for ongoing management, monitoring, and maintenance of the hybrid infrastructure."
        },
        {
          title: "Knowledge Transfer Sessions",
          description: "Training sessions for IT staff to ensure effective management of the new infrastructure."
        }
      ]}
      
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* On-Premise Infrastructure */}
          <rect x="100" y="150" width="150" height="100" rx="10" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          <text x="175" y="140" textAnchor="middle" fontSize="14" fill="#00E5FF">On-Premise</text>
          
          {/* Cloud Infrastructure */}
          <path d="M450 150 Q480 130 510 150 Q530 170 510 190 Q480 210 450 190 Q430 170 450 150" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          <text x="470" y="140" textAnchor="middle" fontSize="14" fill="#00E5FF">Cloud</text>
          
          {/* On-Premise Components */}
          <rect x="120" y="170" width="30" height="30" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="135" y="190" textAnchor="middle" fontSize="10" fill="#00E5FF">DB</text>
          
          <rect x="160" y="170" width="30" height="30" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="175" y="190" textAnchor="middle" fontSize="10" fill="#00E5FF">APP</text>
          
          <rect x="200" y="170" width="30" height="30" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="215" y="190" textAnchor="middle" fontSize="10" fill="#00E5FF">SRV</text>
          
          <rect x="140" y="210" width="70" height="20" rx="3" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="175" y="224" textAnchor="middle" fontSize="10" fill="#00E5FF">Storage</text>
          
          {/* Cloud Components */}
          <circle cx="450" cy="165" r="15" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="450" y="169" textAnchor="middle" fontSize="9" fill="#00E5FF">VM</text>
          
          <circle cx="480" cy="185" r="15" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="480" y="189" textAnchor="middle" fontSize="9" fill="#00E5FF">DB</text>
          
          <circle cx="440" cy="195" r="15" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <text x="440" y="199" textAnchor="middle" fontSize="9" fill="#00E5FF">S3</text>
          
          {/* Hybrid Connection */}
          <path d="M250 200 C300 200, 350 200, 430 180" stroke="#00E5FF" strokeWidth="2" strokeDasharray="5,3"/>
          <circle cx="340" cy="190" r="25" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          <text x="340" y="194" textAnchor="middle" fontSize="10" fill="#00E5FF">VPN</text>
          
          {/* Security Shield */}
          <path d="M175 260 L175 310 L505 310 L505 260" stroke="#00B2A9" strokeWidth="1" strokeDasharray="4,2"/>
          <text x="340" y="290" textAnchor="middle" fontSize="14" fill="#00B2A9">Unified Security Layer</text>
          
          {/* Animated Elements */}
          <circle cx="175" cy="200" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="175;320;175" dur="5s" repeatCount="indefinite"/>
            <animate attributeName="fill-opacity" values="1;0.5;1" dur="5s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="470" cy="185" r="3" fill="#00E5FF">
            <animate attributeName="cx" values="470;350;470" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="fill-opacity" values="1;0.5;1" dur="4s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="340" cy="220" r="40" fill="none" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.3">
            <animate attributeName="r" values="40;45;40" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="0.3;0.1;0.3" dur="4s" repeatCount="indefinite"/>
          </circle>
        </svg>
      }
      
      relatedServices={[
        {
          title: "Cloud Security Architecture",
          link: "/services/cloud-security"
        },
        {
          title: "Network Infrastructure Security",
          link: "/services/network-security"
        },
        {
          title: "Disaster Recovery Planning",
          link: "/services/disaster-recovery"
        }
      ]}
    />
  );
};

export default CloudOnPremInfrastructureDesignPage;