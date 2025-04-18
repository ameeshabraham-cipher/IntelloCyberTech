import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Wrench, CheckCircle, Clock, BarChart3, Zap, Cpu, Shield, Calendar, HeartPulse } from 'lucide-react';

const ItAmcPage = () => {
  return (
    <ServicePageLayout
      title="IT Annual Maintenance Contract"
      category="IT Managed Services"
      description="Our IT Annual Maintenance Contract (AMC) provides comprehensive and proactive maintenance of your IT infrastructure, ensuring optimal performance, reduced downtime, and extended equipment life while providing predictable IT support costs."
      heroIcon={<Wrench className="h-8 w-8" />}
      
      overview="In today's technology-dependent business environment, maintaining IT systems in optimal condition is essential for operational continuity. Our IT Annual Maintenance Contract (AMC) service delivers comprehensive, proactive maintenance of your entire IT infrastructure through scheduled preventive maintenance, rapid troubleshooting, and ongoing system optimization. With our AMC service, you gain access to expert IT resources who understand your environment and can quickly resolve issues while extending the useful life of your hardware and software investments."
      
      steps={[
        {
          title: "Infrastructure Assessment",
          description: "Conduct a thorough inventory and assessment of all IT assets including hardware, software, and network components."
        },
        {
          title: "AMC Plan Development",
          description: "Design a customized maintenance plan with defined service levels, maintenance schedules, and response times."
        },
        {
          title: "Preventive Maintenance",
          description: "Implement regular scheduled maintenance activities to prevent issues before they impact business operations."
        },
        {
          title: "Monitoring & Management",
          description: "Establish continuous monitoring of critical systems with automated alerts and proactive issue resolution."
        },
        {
          title: "Issue Resolution",
          description: "Provide rapid response to technical issues with defined escalation procedures and resolution timelines."
        },
        {
          title: "Quarterly Reviews",
          description: "Conduct regular performance reviews with detailed reporting on maintenance activities, issues resolved, and system health."
        }
      ]}
      
      benefits={[
        {
          title: "Minimized Downtime",
          content: "Prevent system failures through proactive maintenance and rapid issue resolution when problems do occur."
        },
        {
          title: "Extended Equipment Life",
          content: "Maximize the lifespan of IT investments through proper maintenance and timely updates."
        },
        {
          title: "Predictable IT Costs",
          content: "Convert variable IT support expenses into fixed, predictable monthly costs for easier budgeting."
        },
        {
          title: "Enhanced Security",
          content: "Ensure systems remain secure through timely patches, updates, and security monitoring."
        },
        {
          title: "Business Continuity",
          content: "Maintain operational continuity with minimal disruptions to business activities."
        }
      ]}
      
      deliverables={[
        {
          title: "IT Asset Inventory",
          description: "Comprehensive documentation of all hardware and software assets covered under the AMC."
        },
        {
          title: "Preventive Maintenance Schedule",
          description: "Detailed calendar of all scheduled maintenance activities with scope and expected outcomes."
        },
        {
          title: "Performance Monitoring Dashboard",
          description: "Real-time visibility into system health, performance metrics, and maintenance status."
        },
        {
          title: "Incident Management System",
          description: "Ticketing system for tracking issues from reporting through resolution with response time metrics."
        },
        {
          title: "Quarterly Performance Reports",
          description: "Detailed documentation of maintenance activities, incident resolution, and system health improvements."
        },
        {
          title: "Technology Roadmap",
          description: "Forward-looking recommendations for system upgrades, replacements, and improvements."
        }
      ]}
      
      animationSvg={
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Server Rack */}
          <rect x="150" y="100" width="120" height="200" rx="5" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
          
          {/* Servers */}
          <rect x="160" y="120" width="100" height="20" rx="2" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <rect x="160" y="150" width="100" height="20" rx="2" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <rect x="160" y="180" width="100" height="20" rx="2" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <rect x="160" y="210" width="100" height="20" rx="2" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <rect x="160" y="240" width="100" height="20" rx="2" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          <rect x="160" y="270" width="100" height="20" rx="2" fill="#00B2A9" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1"/>
          
          {/* Server Status Lights */}
          <circle cx="170" cy="130" r="3" fill="#00E5FF">
            <animate attributeName="fill-opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="170" cy="160" r="3" fill="#00E5FF">
            <animate attributeName="fill-opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="170" cy="190" r="3" fill="#00E5FF">
            <animate attributeName="fill-opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="170" cy="220" r="3" fill="#00E5FF">
            <animate attributeName="fill-opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite"/>
          </circle>
          <circle cx="170" cy="250" r="3" fill="#00E5FF">
            <animate attributeName="fill-opacity" values="1;0.3;1" dur="2.2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="170" cy="280" r="3" fill="#00E5FF">
            <animate attributeName="fill-opacity" values="1;0.3;1" dur="2.7s" repeatCount="indefinite"/>
          </circle>
          
          {/* Maintenance Person */}
          <circle cx="340" cy="200" r="30" fill="#0A1024" stroke="#EB3443" strokeWidth="1.5"/>
          <circle cx="340" cy="170" r="15" fill="#0A1024" stroke="#EB3443" strokeWidth="1.5"/>
          <line x1="340" y1="230" x2="340" y2="270" stroke="#EB3443" strokeWidth="1.5"/>
          <line x1="320" y1="240" x2="360" y2="240" stroke="#EB3443" strokeWidth="1.5"/>
          <line x1="340" y1="270" x2="320" y2="300" stroke="#EB3443" strokeWidth="1.5"/>
          <line x1="340" y1="270" x2="360" y2="300" stroke="#EB3443" strokeWidth="1.5"/>
          
          {/* Maintenance Tool */}
          <rect x="390" y="200" width="30" height="10" rx="2" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
          <rect x="400" y="190" width="10" height="30" rx="2" fill="#0A1024" stroke="#EB3443" strokeWidth="1"/>
          
          {/* Maintenance Line */}
          <path d="M310 200 L270 200" stroke="#EB3443" strokeWidth="1.5" strokeDasharray="5,3">
            <animate attributeName="stroke-dashoffset" values="0;16" dur="1s" repeatCount="indefinite"/>
          </path>
          
          {/* Monitoring Dashboard */}
          <rect x="400" y="120" width="120" height="80" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <rect x="410" y="130" width="100" height="10" rx="2" fill="none" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.5"/>
          <rect x="410" y="150" width="100" height="10" rx="2" fill="none" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.5"/>
          <rect x="410" y="170" width="100" height="10" rx="2" fill="none" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.5"/>
          <rect x="410" y="190" width="70" height="10" rx="2" fill="none" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.5"/>
          
          {/* Monitoring Lines */}
          <path d="M270 130 L400 130" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
          <path d="M270 160 L400 160" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
          <path d="M270 190 L400 190" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
          
          {/* Calendar/Schedule */}
          <rect x="400" y="220" width="120" height="80" rx="5" fill="#0A1024" stroke="#00B2A9" strokeWidth="1.5"/>
          <line x1="400" y1="240" x2="520" y2="240" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.5"/>
          <line x1="430" y1="220" x2="430" y2="300" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.5"/>
          <line x1="460" y1="220" x2="460" y2="300" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.5"/>
          <line x1="490" y1="220" x2="490" y2="300" stroke="#00B2A9" strokeWidth="1" strokeOpacity="0.5"/>
          
          {/* Maintenance Checkmark */}
          <circle cx="415" cy="250" r="5" fill="none" stroke="#00B2A9" strokeWidth="1"/>
          <path d="M410 250 L415 255 L420 245" stroke="#00B2A9" strokeWidth="1"/>
          
          <circle cx="445" cy="265" r="5" fill="none" stroke="#00B2A9" strokeWidth="1"/>
          <path d="M440 265 L445 270 L450 260" stroke="#00B2A9" strokeWidth="1"/>
          
          <circle cx="475" cy="280" r="5" fill="none" stroke="#00B2A9" strokeWidth="1"/>
          <path d="M470 280 L475 285 L480 275" stroke="#00B2A9" strokeWidth="1"/>
          
          {/* Animated Maintenance Cycle */}
          <circle cx="210" cy="330" r="25" fill="none" stroke="#00B2A9" strokeWidth="1.5">
            <animate attributeName="r" values="25;27;25" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="1;0.5;1" dur="4s" repeatCount="indefinite"/>
          </circle>
          <text x="210" y="335" textAnchor="middle" fontSize="10" fill="#00B2A9">AMC</text>
          
          <path d="M235 330 L275 330" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
          
          <circle cx="300" cy="330" r="25" fill="none" stroke="#00B2A9" strokeWidth="1.5">
            <animate attributeName="r" values="25;27;25" dur="4s" begin="1s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="1;0.5;1" dur="4s" begin="1s" repeatCount="indefinite"/>
          </circle>
          <text x="300" y="335" textAnchor="middle" fontSize="10" fill="#00B2A9">Monitor</text>
          
          <path d="M325 330 L365 330" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
          
          <circle cx="390" cy="330" r="25" fill="none" stroke="#00B2A9" strokeWidth="1.5">
            <animate attributeName="r" values="25;27;25" dur="4s" begin="2s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="1;0.5;1" dur="4s" begin="2s" repeatCount="indefinite"/>
          </circle>
          <text x="390" y="335" textAnchor="middle" fontSize="10" fill="#00B2A9">Maintain</text>
          
          <path d="M415 330 L455 330" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
          
          <circle cx="480" cy="330" r="25" fill="none" stroke="#00B2A9" strokeWidth="1.5">
            <animate attributeName="r" values="25;27;25" dur="4s" begin="3s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="1;0.5;1" dur="4s" begin="3s" repeatCount="indefinite"/>
          </circle>
          <text x="480" y="335" textAnchor="middle" fontSize="10" fill="#00B2A9">Report</text>
          
          <path d="M480 305 C430 250, 260 250, 210 305" stroke="#00B2A9" strokeWidth="1" strokeDasharray="3,2"/>
        </svg>
      }
      
      relatedServices={[
        {
          title: "Managed IT Project Management",
          link: "/services/managed-it-project"
        },
        {
          title: "Cloud & On-Premise Infrastructure",
          link: "/services/cloud-onprem-infrastructure"
        },
        {
          title: "Microsoft Services",
          link: "/services/microsoft-services"
        }
      ]}
    />
  );
};

export default ItAmcPage;