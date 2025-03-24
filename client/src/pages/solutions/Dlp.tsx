import React from 'react';
import { Lock, ShieldCheck, FileSearch, Users, Eye, Network, Server, Cloud } from 'lucide-react';
import SolutionPageLayout from '@/components/SolutionPageLayout';
import { TermTechTooltip, SecurityTechTooltip, InfoTechTooltip, FeatureTechTooltip } from '@/components/ui/tech-tooltips';

const DlpPage = () => {
  return (
    <SolutionPageLayout
      title="Data Loss Prevention (DLP)"
      category="Security Technology Solutions"
      description="Comprehensive solutions to detect and prevent data breaches, exfiltration, and unwanted destruction of sensitive data."
      heroIcon={<Lock className="h-12 w-12 text-[hsl(var(--secondary))]" />}
      problem={
        <div className="space-y-4">
          <p>
            Organizations store and process increasing volumes of sensitive data across dispersed environments, creating significant challenges in maintaining visibility and control over where data resides and how it's being used.
          </p>
          <p>
            The risk of <SecurityTechTooltip securityText="Data leakage occurs when sensitive information is inadvertently exposed outside authorized channels, often through employee mistakes rather than malicious actions." alertLevel="high">data leakage</SecurityTechTooltip> has escalated dramatically with remote work, cloud adoption, and the proliferation of personal devices, while compliance regulations like GDPR and industry standards impose strict requirements for data protection.
          </p>
          <p>
            Traditional security tools focus on perimeter protection but lack the specialized capabilities needed to identify sensitive data patterns, monitor data movements, and enforce consistent protection policies across all channels.
          </p>
        </div>
      }
      solution={
        <div className="space-y-4">
          <p>
            Our <TermTechTooltip term="Data Loss Prevention" definition="Technologies and processes that identify, monitor, and protect sensitive data across the enterprise, preventing unauthorized access, use, or transmission.">Data Loss Prevention</TermTechTooltip> solutions provide comprehensive visibility and control over sensitive information throughout its lifecycle, regardless of where it's stored or how it's used.
          </p>
          <p>
            With sophisticated <InfoTechTooltip infoTitle="Content Inspection" infoText="Advanced technologies that analyze content to identify sensitive data based on pre-defined patterns, fingerprints, machine learning, and other identification methods.">content inspection capabilities</InfoTechTooltip>, our platform accurately identifies regulated data, intellectual property, and confidential information based on both predefined and custom classification policies.
          </p>
          <p>
            We implement consistent protection across all data channels—endpoints, networks, cloud applications, and storage—with flexible response options ranging from monitoring and alerting to blocking and encryption, ensuring sensitive data remains protected without impeding legitimate business activities.
          </p>
        </div>
      }
      features={[
        {
          icon: <FileSearch className="h-6 w-6 text-[hsl(var(--secondary))]" />,
          title: "Content Discovery & Classification",
          description: "Automatically locate and classify sensitive data across your environment using advanced pattern recognition, fingerprinting, and machine learning techniques."
        },
        {
          icon: <Network className="h-6 w-6 text-[hsl(var(--secondary))]" />,
          title: "Network Monitoring & Protection",
          description: "Monitor data in transit across your network to detect and prevent unauthorized transmission of sensitive information through all channels."
        },
        {
          icon: <Server className="h-6 w-6 text-[hsl(var(--secondary))]" />,
          title: "Endpoint Protection",
          description: "Extend data protection to user devices with policies that prevent sensitive data from being copied to unauthorized applications, removable media, or cloud services."
        },
        {
          icon: <Cloud className="h-6 w-6 text-[hsl(var(--secondary))]" />,
          title: "Cloud Application Security",
          description: "Enforce DLP policies across cloud applications and storage to maintain consistent protection as data moves between on-premises and cloud environments."
        },
        {
          icon: <Users className="h-6 w-6 text-[hsl(var(--secondary))]" />,
          title: "User Activity Monitoring",
          description: "Track and analyze user interactions with sensitive data to detect suspicious behaviors and prevent insider threats."
        },
        {
          icon: <Eye className="h-6 w-6 text-[hsl(var(--secondary))]" />,
          title: "Policy Management & Reporting",
          description: "Centrally define, manage, and enforce protection policies with comprehensive dashboards and reports for compliance validation."
        }
      ]}
      benefits={[
        {
          title: "Prevent Data Breaches",
          description: "Stop sensitive information from leaving your organization through unauthorized channels, whether by accident or malicious intent."
        },
        {
          title: "Ensure Regulatory Compliance",
          description: "Meet requirements for data protection under regulations like GDPR, HIPAA, PCI DSS, and industry-specific standards."
        },
        {
          title: "Gain Data Visibility",
          description: "Discover where sensitive data resides across your environment and understand how it's being used and by whom."
        },
        {
          title: "Reduce Insider Threats",
          description: "Identify and address risky user behaviors before they result in data loss or compliance violations."
        },
        {
          title: "Enable Secure Collaboration",
          description: "Allow employees to work productively with sensitive information while maintaining appropriate safeguards."
        },
        {
          title: "Extend Protection Beyond Boundaries",
          description: "Maintain control over sensitive data even when it leaves your managed infrastructure or moves to the cloud."
        }
      ]}
      animationSvg={
        <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-lg mx-auto">
          {/* Central DLP Shield */}
          <g>
            <path d="M400,150 L500,200 L500,350 L400,400 L300,350 L300,200 Z" fill="transparent" stroke="hsl(var(--secondary))" strokeWidth="2" />
            <text x="400" y="290" textAnchor="middle" dominantBaseline="middle" fill="hsl(var(--secondary))" fontSize="24" fontWeight="bold">DLP</text>
            
            {/* Lock icon in shield */}
            <rect x="385" y="310" width="30" height="20" rx="2" fill="transparent" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
            <rect x="395" y="300" width="10" height="15" rx="2" fill="transparent" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
          </g>
          
          {/* Protected data elements */}
          <g>
            {/* Document 1 */}
            <rect x="180" y="250" width="50" height="70" rx="5" fill="transparent" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <line x1="190" y1="270" x2="220" y2="270" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <line x1="190" y1="280" x2="220" y2="280" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <line x1="190" y1="290" x2="220" y2="290" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <text x="205" y="235" textAnchor="middle" fill="hsl(var(--primary))" fontSize="12">Files</text>
            
            {/* Email */}
            <rect x="570" y="250" width="50" height="70" rx="5" fill="transparent" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <path d="M570,260 L595,280 L620,260" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="transparent" />
            <text x="595" y="235" textAnchor="middle" fill="hsl(var(--primary))" fontSize="12">Email</text>
            
            {/* Cloud */}
            <path d="M380,500 C360,480 330,480 310,490 C300,470 280,460 260,470 C240,440 200,440 180,470 C160,465 150,480 150,490 C130,490 120,510 130,530 C120,540 120,560 140,570 L380,570 C410,570 410,530 390,520 C410,500 400,480 380,500 Z" fill="transparent" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <text x="260" y="520" textAnchor="middle" fill="hsl(var(--primary))" fontSize="12">Cloud Storage</text>
            
            {/* Devices */}
            <rect x="550" y="500" width="70" height="50" rx="5" fill="transparent" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <rect x="560" y="510" width="50" height="30" rx="2" fill="transparent" stroke="hsl(var(--primary))" strokeWidth="1" />
            <text x="585" y="480" textAnchor="middle" fill="hsl(var(--primary))" fontSize="12">Endpoints</text>
          </g>
          
          {/* Protection lines */}
          <g>
            <path 
              d="M300,275 L230,275" 
              stroke="hsl(var(--secondary))" 
              strokeWidth="1.5"
              strokeDasharray="5,5"
              className="animate-pulse-line"
            />
            <path 
              d="M500,275 L570,275" 
              stroke="hsl(var(--secondary))" 
              strokeWidth="1.5"
              strokeDasharray="5,5"
              className="animate-pulse-line"
              style={{ animationDelay: '0.5s' }}
            />
            <path 
              d="M350,400 L300,520" 
              stroke="hsl(var(--secondary))" 
              strokeWidth="1.5"
              strokeDasharray="5,5"
              className="animate-pulse-line"
              style={{ animationDelay: '1s' }}
            />
            <path 
              d="M450,400 L550,520" 
              stroke="hsl(var(--secondary))" 
              strokeWidth="1.5"
              strokeDasharray="5,5"
              className="animate-pulse-line"
              style={{ animationDelay: '1.5s' }}
            />
          </g>
          
          {/* Protected data icons */}
          <g className="animate-pulse" style={{ animationDuration: '3s' }}>
            <circle cx="230" cy="275" r="8" fill="transparent" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
            <circle cx="570" cy="275" r="8" fill="transparent" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
            <circle cx="280" cy="520" r="8" fill="transparent" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
            <circle cx="585" cy="525" r="8" fill="transparent" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
          </g>
          
          <style jsx>{`
            @keyframes pulse-line {
              0%, 100% { stroke-opacity: 0.3; }
              50% { stroke-opacity: 1; }
            }
            .animate-pulse-line {
              animation: pulse-line 2s infinite;
            }
          `}</style>
        </svg>
      }
      relatedSolutions={[
        {
          title: "Email Security Solutions",
          link: "/solutions/email-security"
        },
        {
          title: "Cloud Security",
          link: "/services/cloud-security"
        },
        {
          title: "Security Information & Event Management",
          link: "/solutions/siem"
        },
        {
          title: "Endpoint Detection & Response",
          link: "/solutions/edr"
        }
      ]}
    />
  );
};

export default DlpPage;