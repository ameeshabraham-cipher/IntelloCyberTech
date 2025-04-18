import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Shield, Search, AlertCircle, Eye, BarChart3, FileText, Zap, Database, Network } from 'lucide-react';

const ThreatHuntingPage = () => {
  return (
    <ServicePageLayout
      icon={<Search className="h-10 w-10" />}
      title="Threat Hunting Services"
      subtitle="Proactive Identification of Hidden Threats in Your Environment"
      description="Our Threat Hunting service employs advanced techniques to proactively search for and identify hidden threats that have evaded traditional security controls. We combine expert analysis, advanced tooling, and threat intelligence to uncover sophisticated attackers before they can cause damage."
      
      overview={`
        <p>Traditional security monitoring often fails to detect sophisticated threats that bypass standard defenses. Threat hunting fills this gap through proactive, hypothesis-driven investigations led by experienced security professionals who understand advanced attacker techniques.</p>
        
        <p>Our threat hunting service combines human expertise with advanced analytics and threat intelligence to systematically search for indicators of compromise (IOCs) and suspicious behaviors that signal potential security breaches. We help you discover hidden threats before they can achieve their objectives.</p>
      `}
      
      keyBenefits={[
        {
          title: "Early Threat Detection",
          description: "Identify sophisticated threats that have bypassed traditional security controls before they can cause significant damage.",
          icon: <AlertCircle className="h-6 w-6 text-[hsl(var(--primary))]" />
        },
        {
          title: "Enhanced Security Visibility",
          description: "Gain deeper insights into your security posture and discover blind spots in your existing monitoring capabilities.",
          icon: <Eye className="h-6 w-6 text-[hsl(var(--primary))]" />
        },
        {
          title: "Reduced Dwell Time",
          description: "Minimize the time attackers remain undetected in your environment, significantly reducing potential damage.",
          icon: <Zap className="h-6 w-6 text-[hsl(var(--primary))]" />
        },
        {
          title: "Improved Incident Response",
          description: "Strengthen your security operations with refined detection rules and enhanced response procedures.",
          icon: <Shield className="h-6 w-6 text-[hsl(var(--primary))]" />
        }
      ]}
      
      processSteps={[
        {
          title: "Threat Intelligence Analysis",
          description: "Review current threat landscape and attacker techniques relevant to your industry and organization."
        },
        {
          title: "Hypothesis Development",
          description: "Create hunt hypotheses based on threat intelligence, attacker TTPs, and your specific environment."
        },
        {
          title: "Data Collection",
          description: "Gather and normalize relevant security data from across your environment to support hunting activities."
        },
        {
          title: "Investigative Analysis",
          description: "Apply advanced detection techniques to identify patterns and anomalies that may indicate malicious activity."
        },
        {
          title: "Threat Verification",
          description: "Investigate potential threats to confirm their nature and assess potential business impact."
        },
        {
          title: "Remediation & Reporting",
          description: "Provide detailed documentation of findings with actionable recommendations for remediation and defense improvements."
        }
      ]}
      
      features={[
        {
          title: "Hypothesis-Driven Hunting",
          description: "Structured investigations based on specific threat hypotheses derived from current intelligence and attacker methodologies.",
          icon: <Search className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Advanced Analytics",
          description: "Combination of statistical analysis, machine learning, and behavior modeling to identify anomalous patterns indicative of threats.",
          icon: <BarChart3 className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Log & Endpoint Analysis",
          description: "Deep investigation of system logs, network traffic, and endpoint telemetry to identify signs of compromise.",
          icon: <Database className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Network Traffic Analysis",
          description: "Examination of network communications to identify command and control traffic, data exfiltration, and other malicious activities.",
          icon: <Network className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "MITRE ATT&CK Mapping",
          description: "Alignment of hunting activities with the MITRE ATT&CK framework to ensure comprehensive coverage of attacker techniques.",
          icon: <FileText className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Threat Intelligence Integration",
          description: "Incorporation of latest threat intelligence to focus hunting efforts on the most relevant and current threats.",
          icon: <Zap className="h-12 w-12 text-[hsl(var(--primary))]" />
        }
      ]}
      
      faqs={[
        {
          question: "How is threat hunting different from our existing security monitoring?",
          answer: "Traditional security monitoring relies on known signatures and predefined rules to detect threats. Threat hunting is a proactive process where skilled analysts actively search for threats that have evaded these controls. Hunters use behavioral analysis, advanced analytics, and threat intelligence to identify subtle patterns that indicate malicious activity."
        },
        {
          question: "What types of threats can hunting identify?",
          answer: "Threat hunting excels at finding sophisticated threats including advanced persistent threats (APTs), insider threats, novel malware, living-off-the-land techniques, and credential-based attacks. These threats typically bypass traditional security controls by using legitimate tools, avoiding known malware signatures, and employing stealthy techniques."
        },
        {
          question: "How frequently should we conduct threat hunting?",
          answer: "The optimal frequency depends on your risk profile and industry. High-risk organizations or those in targeted industries may benefit from continuous hunting or monthly exercises. Others might implement quarterly or bi-annual hunting programs. We can help determine the right cadence based on your specific threat landscape."
        },
        {
          question: "What data sources are required for effective threat hunting?",
          answer: "Effective hunting requires diverse data sources including endpoint logs, network traffic, authentication logs, email logs, web proxy data, DNS records, and cloud service logs. The more comprehensive the data collection, the more effective the hunting. We can help identify gaps in your current logging and provide recommendations for improvement."
        },
        {
          question: "How do you measure the success of threat hunting?",
          answer: "Success metrics include threats discovered, reduction in dwell time, security control gaps identified, and improvements to detection capabilities. We track these metrics over time to demonstrate the ongoing value of the hunting program and continually refine our approach based on results."
        }
      ]}
      
      cta={{
        title: "Ready to Hunt for Hidden Threats?",
        subtitle: "Proactively secure your environment against sophisticated attackers.",
        buttonText: "Schedule a Threat Hunt",
        buttonLink: "/contact"
      }}
      
      relatedServices={[
        {
          title: "Incident Response Planning",
          link: "/services/incident-response-planning"
        },
        {
          title: "Advanced Penetration Testing",
          link: "/services/advanced-penetration-testing"
        },
        {
          title: "Security Operations Center (SOC)",
          link: "/services/security-operations-center"
        }
      ]}
    />
  );
};

export default ThreatHuntingPage;