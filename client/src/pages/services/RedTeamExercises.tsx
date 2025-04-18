import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Target, Shield, Users, Eye, Clock, FileText, Lock, AlertTriangle, Network } from 'lucide-react';

const RedTeamExercisesPage = () => {
  return (
    <ServicePageLayout
      icon={<Target className="h-10 w-10" />}
      title="Red Team Exercises"
      subtitle="Advanced Simulated Cyber Attacks to Test Defense Effectiveness"
      description="Our Red Team Exercises service provides comprehensive security assessments through simulated, real-world cyber attacks. Our elite offensive security experts test your defenses, detection capabilities, and response procedures through carefully controlled adversarial simulations."
      
      overview={`
        <p>Traditional security testing has limitations in assessing how well your organization can defend against sophisticated threat actors. Red Team Exercises address this gap by simulating the tactics, techniques, and procedures (TTPs) used by advanced adversaries in a controlled, realistic manner.</p>
        
        <p>Unlike standard penetration testing, red team exercises are objective-based, focusing on specific scenarios like data theft, business disruption, or compromise of critical systems. Our experts emulate real threat actors targeting your organization while working within defined safety parameters to provide maximum insight with minimal risk.</p>
      `}
      
      keyBenefits={[
        {
          title: "Test Security Effectiveness",
          description: "Evaluate the real-world effectiveness of your security controls, monitoring, and response capabilities.",
          icon: <Shield className="h-6 w-6 text-[hsl(var(--primary))]" />
        },
        {
          title: "Exercise Response Teams",
          description: "Train and assess your security operations and incident response teams under realistic conditions.",
          icon: <Users className="h-6 w-6 text-[hsl(var(--primary))]" />
        },
        {
          title: "Identify Security Gaps",
          description: "Discover weaknesses in your security architecture, technology, procedures, or team capabilities.",
          icon: <Eye className="h-6 w-6 text-[hsl(var(--primary))]" />
        },
        {
          title: "Demonstrate Real Risk",
          description: "Provide concrete evidence of security risks in business terms that executives can understand.",
          icon: <AlertTriangle className="h-6 w-6 text-[hsl(var(--primary))]" />
        }
      ]}
      
      processSteps={[
        {
          title: "Engagement Planning",
          description: "Define exercise objectives, scope, timelines, safety measures, and success criteria in collaboration with stakeholders."
        },
        {
          title: "Threat Intelligence Analysis",
          description: "Research threat actors targeting your industry to develop realistic attack scenarios and techniques."
        },
        {
          title: "Initial Access & Reconnaissance",
          description: "Identify and exploit potential entry points while gathering information about your environment."
        },
        {
          title: "Objective-Based Operations",
          description: "Execute carefully controlled attack operations designed to achieve defined objectives, such as data exfiltration."
        },
        {
          title: "Documentation & Evidence Collection",
          description: "Record all activities, successful tactics, and evidence demonstrating achieved objectives or security findings."
        },
        {
          title: "Reporting & Debriefing",
          description: "Provide comprehensive documentation including attack paths, recommendations, and improvement opportunities."
        }
      ]}
      
      features={[
        {
          title: "Multi-Vector Attack Simulation",
          description: "Coordinated attack scenarios combining technical exploits, social engineering, physical security testing, and other relevant vectors.",
          icon: <Network className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Advanced Persistent Threat Emulation",
          description: "Long-duration engagements simulating sophisticated threat actors who maintain persistent access and operate stealthily.",
          icon: <Clock className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Evasion Techniques",
          description: "Use of advanced tactics to bypass security controls and avoid detection, similar to those employed by real adversaries.",
          icon: <Eye className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Objective-Based Testing",
          description: "Focused assessment based on specific, realistic objectives such as data theft, business disruption, or system compromise.",
          icon: <Target className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Custom Tool Development",
          description: "Creation of specialized tools and exploits to test defenses against unique threats and advanced techniques.",
          icon: <Lock className="h-12 w-12 text-[hsl(var(--primary))]" />
        },
        {
          title: "Purple Team Integration",
          description: "Optional collaboration with your defense team to maximize learning opportunities and security improvements.",
          icon: <Shield className="h-12 w-12 text-[hsl(var(--primary))]" />
        }
      ]}
      
      faqs={[
        {
          question: "How is a red team exercise different from penetration testing?",
          answer: "Penetration testing focuses on identifying and exploiting vulnerabilities within a defined scope and timeframe. Red team exercises are more comprehensive, goal-oriented assessments that simulate real adversaries using multiple attack vectors over extended periods. Red teams focus on achieving specific objectives (like accessing sensitive data) rather than finding as many vulnerabilities as possible, and often operate without the knowledge of security teams to test detection capabilities."
        },
        {
          question: "How do you ensure red team exercises don't disrupt our business?",
          answer: "We implement stringent safety measures including detailed pre-engagement planning, continuous risk assessment, restricted hours for high-impact testing, explicit rules of engagement, emergency communication channels, and controlled exploitation techniques. Our red team experts are trained to balance realistic testing with operational safety and can rapidly pause or adjust operations if needed."
        },
        {
          question: "When is the right time for a red team exercise?",
          answer: "Red team exercises are most valuable for organizations with mature security programs that have already addressed basic security hygiene and conducted standard security assessments. They're particularly useful after implementing new security controls or detection capabilities, before major changes to your security architecture, or as part of an advanced security assurance program."
        },
        {
          question: "How do you measure success in a red team exercise?",
          answer: "Success is measured against the defined objectives established during planning. This might include whether the red team achieved their attack goals, how long they remained undetected, which security controls were effective, and what valuable insights were gained. The ultimate measure is whether the exercise leads to meaningful security improvements that enhance your defense capabilities against real threats."
        },
        {
          question: "Can a red team exercise be tailored to simulate specific threats?",
          answer: "Yes, our red team exercises are highly customizable. We can emulate specific threat actors known to target your industry, focus on particular attack vectors of concern, test specific crown jewel assets, or simulate attacks against new or critical systems. We work closely with you to design scenarios that provide the most value based on your security priorities and risk profile."
        }
      ]}
      
      cta={{
        title: "Ready to Test Your Cyber Defenses?",
        subtitle: "Challenge your security with realistic adversarial simulations.",
        buttonText: "Request Red Team Exercise",
        buttonLink: "/contact"
      }}
      
      relatedServices={[
        {
          title: "Advanced Penetration Testing",
          link: "/services/advanced-penetration-testing"
        },
        {
          title: "Social Engineering Assessment",
          link: "/services/social-engineering"
        },
        {
          title: "Incident Response Planning",
          link: "/services/incident-response-planning"
        }
      ]}
    />
  );
};

export default RedTeamExercisesPage;