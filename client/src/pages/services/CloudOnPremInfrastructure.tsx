import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Cloud, Server, Shield, Network, Database, Settings, Lock, CheckCircle, BarChart3 } from 'lucide-react';

const CloudOnPremInfrastructureDesignPage = () => {
  return (
    <ServicePageLayout
      icon={<Cloud className="h-10 w-10" />}
      title="Cloud & On-Premise Infrastructure Design"
      subtitle="Strategic IT Infrastructure Planning for Modern Organizations"
      description="Our Cloud & On-Premise Infrastructure Design service provides comprehensive planning and implementation for hybrid IT environments. We design scalable, secure, and efficient infrastructure solutions that balance on-premise reliability with cloud flexibility to meet your specific business needs."
      
      overview={`
        <p>In today's complex IT landscape, organizations need infrastructure that balances security, performance, cost-efficiency, and flexibility. Our Cloud and On-Premise Infrastructure Design service delivers strategic planning and implementation of hybrid environments that leverage the best of both worlds.</p>
        
        <p>Whether you're transitioning to the cloud, optimizing an existing hybrid setup, or designing new infrastructure from the ground up, our experts provide guidance at every step – from initial assessment to ongoing optimization.</p>
      `}
      
      keyBenefits={[
        {
          title: "Optimized Resource Allocation",
          description: "Balance workloads between on-premise and cloud resources to achieve optimal performance and cost-efficiency.",
          icon: <BarChart3 className="h-6 w-6 text-[hsl(var(--primary))]" />
        },
        {
          title: "Enhanced Security Posture",
          description: "Implement security controls across both environments with consistent policies and centralized visibility.",
          icon: <Shield className="h-6 w-6 text-[hsl(var(--primary))]" />
        },
        {
          title: "Improved Scalability",
          description: "Design infrastructure that can seamlessly scale up or down based on changing business requirements.",
          icon: <Settings className="h-6 w-6 text-[hsl(var(--primary))]" />
        },
        {
          title: "Business Continuity",
          description: "Create resilient architectures with redundancy across environments to minimize downtime risks.",
          icon: <CheckCircle className="h-6 w-6 text-[hsl(var(--primary))]" />
        }
      ]}
      
      processSteps={[
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
      
      features={[
        {
          title: "Hybrid Architecture Design",
          description: "Strategic distribution of workloads between on-premise and cloud environments based on security, performance, and cost considerations.",
          icon: <Cloud className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Network Infrastructure Planning",
          description: "Design secure, high-performance networking that connects on-premise and cloud resources with appropriate segmentation and controls.",
          icon: <Network className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Data Storage & Management",
          description: "Create efficient data storage solutions across environments with appropriate retention, backup, and disaster recovery capabilities.",
          icon: <Database className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Security Architecture",
          description: "Implement defense-in-depth security controls across all infrastructure components with unified monitoring and management.",
          icon: <Shield className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "On-Premise Infrastructure",
          description: "Design and optimize physical servers, storage systems, and network equipment for maximum reliability and performance.",
          icon: <Server className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Identity & Access Management",
          description: "Create unified identity systems that work across cloud and on-premise environments with appropriate access controls.",
          icon: <Lock className="h-12 w-12 text-[hsl(var(--primary))]" />
        }
      ]}
      
      faqs={[
        {
          question: "How do you determine what should stay on-premise vs. move to the cloud?",
          answer: "We conduct a thorough workload assessment evaluating factors like data sensitivity, compliance requirements, performance needs, access patterns, and cost implications. This analysis helps identify which systems benefit most from cloud flexibility and which are better suited for on-premise deployment."
        },
        {
          question: "How do you ensure security across hybrid environments?",
          answer: "We implement a unified security architecture with consistent controls, centralized identity management, encrypted communications, comprehensive monitoring, and coordinated incident response procedures across both environments. This creates a seamless security posture regardless of where data and applications reside."
        },
        {
          question: "Can you help migrate existing infrastructure to a hybrid model?",
          answer: "Yes, we specialize in designing and executing migration strategies that minimize disruption. We create detailed migration plans, establish temporary coexistence mechanisms, perform phased transitions, and ensure thorough testing at each step."
        },
        {
          question: "How do you address connectivity between cloud and on-premise resources?",
          answer: "We design secure, high-performance connectivity solutions using technologies like dedicated connections (AWS Direct Connect, Azure ExpressRoute), site-to-site VPNs, or software-defined networking. These connections are sized appropriately for expected traffic volumes and include redundancy for maximum reliability."
        },
        {
          question: "What ongoing support do you provide after implementation?",
          answer: "We offer infrastructure monitoring, regular performance reviews, security assessments, optimization recommendations, and technical support services. We can also provide training for your IT team and develop documentation for operational procedures."
        }
      ]}
      
      cta={{
        title: "Ready to Optimize Your IT Infrastructure?",
        subtitle: "Let our experts design the perfect hybrid environment for your business needs.",
        buttonText: "Schedule a Consultation",
        buttonLink: "/contact"
      }}
      
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