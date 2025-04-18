import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Shield, Bug, Code, Network, Lock, FileText, Target, Eye, AlertTriangle } from 'lucide-react';

const AdvancedPenetrationTestingPage = () => {
  return (
    <ServicePageLayout
      icon={<Shield className="h-10 w-10" />}
      title="Advanced Penetration Testing"
      subtitle="In-Depth Security Assessments Targeting Specific Threat Scenarios"
      description="Our Advanced Penetration Testing service goes beyond standard testing methodologies to simulate sophisticated threat actors and complex attack scenarios. We identify critical vulnerabilities in your systems using advanced exploitation techniques that mimic real-world attackers."
      
      overview={`
        <p>Standard penetration testing often misses sophisticated vulnerabilities that advanced threat actors can exploit. Our Advanced Penetration Testing service addresses this gap by employing senior security experts who simulate real-world adversaries using the latest attack techniques.</p>
        
        <p>We conduct targeted assessments focused on your most critical assets and specific threat scenarios relevant to your industry. This approach provides deeper insights into your security posture and delivers actionable remediation guidance prioritized by business risk.</p>
      `}
      
      keyBenefits={[
        {
          title: "Identify Sophisticated Vulnerabilities",
          description: "Uncover complex security flaws that standard automated tools and basic penetration testing would miss.",
          icon: <Bug className="h-6 w-6 text-[hsl(var(--primary))]" />
        },
        {
          title: "Realistic Threat Simulation",
          description: "Experience attacks that mirror the tactics, techniques, and procedures (TTPs) of advanced threat actors targeting your industry.",
          icon: <Target className="h-6 w-6 text-[hsl(var(--primary))]" />
        },
        {
          title: "Business-Focused Reporting",
          description: "Receive detailed reports that translate technical vulnerabilities into business risks with clear remediation priorities.",
          icon: <FileText className="h-6 w-6 text-[hsl(var(--primary))]" />
        },
        {
          title: "Strengthen Security Posture",
          description: "Build stronger defenses based on insights from realistic attack simulations and expert recommendations.",
          icon: <Lock className="h-6 w-6 text-[hsl(var(--primary))]" />
        }
      ]}
      
      processSteps={[
        {
          title: "Threat Modeling & Scoping",
          description: "Define test objectives based on your specific threat landscape, industry risk factors, and critical assets."
        },
        {
          title: "Reconnaissance",
          description: "Conduct thorough intelligence gathering using both public and specialized sources to identify potential attack vectors."
        },
        {
          title: "Vulnerability Assessment",
          description: "Identify security weaknesses across your environment using advanced scanning techniques and expert analysis."
        },
        {
          title: "Exploitation",
          description: "Attempt controlled exploitation of discovered vulnerabilities, including custom exploit development for unique scenarios."
        },
        {
          title: "Post-Exploitation",
          description: "Simulate lateral movement, privilege escalation, and data exfiltration to demonstrate potential impact of vulnerabilities."
        },
        {
          title: "Detailed Reporting",
          description: "Provide comprehensive documentation of findings, including technical details, business impact, and prioritized remediation guidance."
        }
      ]}
      
      features={[
        {
          title: "Targeted Attack Scenarios",
          description: "Custom assessment scenarios designed to test defenses against threats specific to your industry and business model.",
          icon: <Target className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Red Team Assessments",
          description: "Extended engagements that simulate persistent attackers attempting to achieve specific objectives within your environment.",
          icon: <Eye className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Custom Exploit Development",
          description: "Creation of specialized tools and exploits to test defenses against zero-day vulnerabilities and advanced attack techniques.",
          icon: <Code className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Critical Systems Testing",
          description: "Specialized assessment methodologies for high-value systems including SCADA/ICS environments, financial platforms, and healthcare systems.",
          icon: <AlertTriangle className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Social Engineering",
          description: "Advanced psychological manipulation techniques to test human defenses through targeted phishing, vishing, and physical security assessments.",
          icon: <Network className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Supply Chain Assessment",
          description: "Evaluation of security risks introduced through third-party vendors, software components, and business partnerships.",
          icon: <Shield className="h-12 w-12 text-[hsl(var(--primary))]" />
        }
      ]}
      
      faqs={[
        {
          question: "How is advanced penetration testing different from standard penetration testing?",
          answer: "Standard penetration testing typically focuses on identifying known vulnerabilities using common tools and methodologies. Advanced penetration testing employs senior security experts who simulate sophisticated threat actors, develop custom exploits, chain multiple vulnerabilities together, and demonstrate real-world attack paths that could compromise critical assets."
        },
        {
          question: "How do you ensure testing doesn't disrupt our operations?",
          description: "We implement stringent controls including detailed pre-engagement planning, continuous communication, exploitation safeguards, testing windows for high-risk activities, and immediate escalation procedures. Our experts are trained to balance thorough testing with operational safety."
        },
        {
          question: "What deliverables should we expect?",
          answer: "You'll receive a comprehensive report documenting all identified vulnerabilities with severity ratings, detailed technical findings, exploitation proof, business impact assessments, and prioritized remediation recommendations. We also provide an executive summary translating technical findings into business risk terms."
        },
        {
          question: "How do you measure the success of an advanced penetration test?",
          answer: "Success is measured by the quality of security insights provided, the identification of previously unknown vulnerabilities, the accuracy of business impact assessments, and the actionability of remediation guidance. The ultimate measure is whether the assessment helps you measurably improve your security posture against advanced threats."
        },
        {
          question: "Can you focus on specific threat actors or attack scenarios?",
          answer: "Yes, we can design tests around specific threat actors relevant to your industry or custom attack scenarios that concern your organization. This might include simulating nation-state attackers, insider threats, or attacks targeting specific high-value assets within your environment."
        }
      ]}
      
      cta={{
        title: "Ready for an Advanced Security Assessment?",
        subtitle: "Discover vulnerabilities that traditional testing might miss.",
        buttonText: "Request Advanced Testing",
        buttonLink: "/contact"
      }}
      
      relatedServices={[
        {
          title: "Cloud Security Assessment",
          link: "/services/cloud-security-assessment"
        },
        {
          title: "Web Application Penetration Testing",
          link: "/services/web-pen-testing"
        },
        {
          title: "Network Penetration Testing",
          link: "/services/network-pentesting"
        }
      ]}
    />
  );
};

export default AdvancedPenetrationTestingPage;