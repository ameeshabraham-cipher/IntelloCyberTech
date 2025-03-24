import React from 'react';
import { 
  InfoTechTooltip, 
  SecurityTechTooltip, 
  FeatureTechTooltip, 
  TermTechTooltip,
  ComplianceTechTooltip 
} from '@/components/ui/tech-tooltips';
import { 
  Shield, 
  Lock, 
  Cpu, 
  Database, 
  Server, 
  Network,
  Search,
  BarChart,
  FileText,
  Bug
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const TooltipDemo = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Tech Tooltip Micro-Interactions</h1>
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">Information Tooltips</h2>
          <div className="p-6 bg-card rounded-lg border border-border space-y-4">
            <div>
              <InfoTechTooltip 
                infoTitle="ISO 27001 Certification" 
                infoText="ISO 27001 is an international standard for information security management systems (ISMS) that helps organizations keep information assets secure."
              >
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Shield className="h-5 w-5" />
                  ISO 27001
                </Button>
              </InfoTechTooltip>
            </div>
            
            <div>
              <InfoTechTooltip 
                infoText="We conduct comprehensive security assessments to identify vulnerabilities in your systems."
                side="right"
              >
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Search className="h-5 w-5" />
                  Security Assessment
                </Button>
              </InfoTechTooltip>
            </div>
            
            <div>
              <InfoTechTooltip 
                infoTitle="HIPAA Compliance" 
                infoText="The Health Insurance Portability and Accountability Act (HIPAA) establishes standards for protecting sensitive patient health information."
                side="bottom"
              >
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <FileText className="h-5 w-5" />
                  HIPAA
                </Button>
              </InfoTechTooltip>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">Security Tooltips</h2>
          <div className="p-6 bg-card rounded-lg border border-border space-y-4">
            <div>
              <SecurityTechTooltip 
                securityTitle="Critical Vulnerability" 
                securityText="Unpatched systems may be vulnerable to remote code execution attacks. Immediate patching recommended."
                alertLevel="high"
              >
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Bug className="h-5 w-5" />
                  High Risk Alert
                </Button>
              </SecurityTechTooltip>
            </div>
            
            <div>
              <SecurityTechTooltip 
                securityTitle="Security Warning" 
                securityText="Potential security misconfiguration detected in your authentication system. Review recommended."
                alertLevel="medium"
                side="right"
              >
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Lock className="h-5 w-5" />
                  Medium Risk Alert
                </Button>
              </SecurityTechTooltip>
            </div>
            
            <div>
              <SecurityTechTooltip 
                securityTitle="Security Notice" 
                securityText="Your systems have passed the baseline security check. Consider additional hardening measures."
                alertLevel="low"
                side="bottom"
              >
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Shield className="h-5 w-5" />
                  Low Risk Alert
                </Button>
              </SecurityTechTooltip>
            </div>
          </div>
        </div>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">Feature Tooltips</h2>
          <div className="p-6 bg-card rounded-lg border border-border space-y-4">
            <div>
              <FeatureTechTooltip 
                featureTitle="AI-Powered Analysis" 
                featureDescription="Our AI algorithms analyze your security posture in real-time, identifying potential vulnerabilities before they can be exploited."
                icon={<Cpu className="w-4 h-4 mt-0.5 text-[hsl(var(--secondary))]" />}
              >
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Cpu className="h-5 w-5" />
                  AI Analytics
                </Button>
              </FeatureTechTooltip>
            </div>
            
            <div>
              <FeatureTechTooltip 
                featureTitle="Real-time Monitoring" 
                featureDescription="24/7 monitoring of your systems with instant alerts when suspicious activities are detected."
                icon={<BarChart className="w-4 h-4 mt-0.5 text-[hsl(var(--secondary))]" />}
                side="right"
              >
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <BarChart className="h-5 w-5" />
                  Monitoring
                </Button>
              </FeatureTechTooltip>
            </div>
            
            <div>
              <FeatureTechTooltip 
                featureTitle="Cloud Security" 
                featureDescription="Comprehensive protection for your cloud environments across AWS, Azure, and Google Cloud platforms."
                icon={<Server className="w-4 h-4 mt-0.5 text-[hsl(var(--secondary))]" />}
                side="bottom"
              >
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Server className="h-5 w-5" />
                  Cloud Security
                </Button>
              </FeatureTechTooltip>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">Technical Term Tooltips</h2>
          <div className="p-6 bg-card rounded-lg border border-border">
            <p className="leading-relaxed text-muted-foreground">
              Our advanced <TermTechTooltip term="EDR" definition="Endpoint Detection and Response - a security solution that continuously monitors endpoints to detect and respond to cyber threats.">EDR solutions</TermTechTooltip> provide real-time threat detection and response capabilities. We implement robust <TermTechTooltip term="SIEM" definition="Security Information and Event Management - a system that collects and analyzes security data from multiple sources across your IT infrastructure.">SIEM systems</TermTechTooltip> to monitor your network for suspicious activities.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our <TermTechTooltip term="Zero Trust" definition="A security framework that requires all users and devices to be authenticated and authorized before granting access to applications and data, regardless of whether they are inside or outside the network perimeter.">Zero Trust architecture</TermTechTooltip> ensures that only authorized users can access your systems. We also provide <TermTechTooltip term="SOAR" definition="Security Orchestration, Automation and Response - technology solutions that allow organizations to collect security data and alerts from different sources and respond to low-level security events without human assistance.">SOAR capabilities</TermTechTooltip> to automate incident response.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Compliance Standard Tooltips</h2>
        <div className="p-6 bg-card rounded-lg border border-border grid grid-cols-1 md:grid-cols-3 gap-4">
          <ComplianceTechTooltip
            standard="PCI DSS"
            requirements="Requires organizations to maintain a secure network, protect cardholder data, regularly monitor and test networks, and maintain an information security policy."
            icon={<Lock className="w-4 h-4 mt-0.5 text-[hsl(var(--secondary))]" />}
          >
            <div className="text-center p-4 border border-border rounded-lg hover:border-[hsl(var(--secondary))] transition-colors cursor-pointer">
              <Lock className="h-8 w-8 mx-auto mb-2 text-[hsl(var(--secondary))]" />
              <h3 className="font-medium">PCI DSS</h3>
            </div>
          </ComplianceTechTooltip>
          
          <ComplianceTechTooltip
            standard="ISO 27001"
            requirements="Provides a framework for establishing, implementing, operating, monitoring, and improving an information security management system (ISMS)."
            icon={<Shield className="w-4 h-4 mt-0.5 text-[hsl(var(--secondary))]" />}
          >
            <div className="text-center p-4 border border-border rounded-lg hover:border-[hsl(var(--secondary))] transition-colors cursor-pointer">
              <Shield className="h-8 w-8 mx-auto mb-2 text-[hsl(var(--secondary))]" />
              <h3 className="font-medium">ISO 27001</h3>
            </div>
          </ComplianceTechTooltip>
          
          <ComplianceTechTooltip
            standard="GDPR"
            requirements="Regulates how personal data should be processed, stored, and managed, ensuring the privacy rights of EU citizens are protected."
            icon={<FileText className="w-4 h-4 mt-0.5 text-[hsl(var(--secondary))]" />}
          >
            <div className="text-center p-4 border border-border rounded-lg hover:border-[hsl(var(--secondary))] transition-colors cursor-pointer">
              <FileText className="h-8 w-8 mx-auto mb-2 text-[hsl(var(--secondary))]" />
              <h3 className="font-medium">GDPR</h3>
            </div>
          </ComplianceTechTooltip>
        </div>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-6">Tooltips in Content</h2>
        <div className="p-6 bg-card rounded-lg border border-border">
          <h3 className="text-lg font-medium mb-3">Comprehensive Cybersecurity Solutions</h3>
          <p className="leading-relaxed text-muted-foreground mb-4">
            At Intello Cyber Technologies, we provide a range of advanced security solutions designed to protect your digital assets. Our 
            <InfoTechTooltip infoText="Penetration testing involves simulating cyberattacks to identify vulnerabilities in your systems before malicious actors can exploit them.">
              <span className="text-[hsl(var(--secondary))] cursor-pointer"> penetration testing </span>
            </InfoTechTooltip>
            services help identify vulnerabilities in your systems, while our 
            <SecurityTechTooltip securityText="Implementing proper network security controls is essential to prevent unauthorized access and protect against modern threats." alertLevel="medium">
              <span className="text-[hsl(var(--secondary))] cursor-pointer"> network security </span>
            </SecurityTechTooltip>
            solutions ensure your infrastructure remains protected.
          </p>
          
          <p className="leading-relaxed text-muted-foreground">
            We offer customized 
            <FeatureTechTooltip 
              featureTitle="Security Operations Center" 
              featureDescription="Our SOC provides 24/7 monitoring, detection, and response to security incidents across your entire IT environment."
              icon={<Network className="w-4 h-4 mt-0.5 text-[hsl(var(--secondary))]" />}
              side="bottom"
            >
              <span className="text-[hsl(var(--secondary))] cursor-pointer"> SOC as a Service </span>
            </FeatureTechTooltip>
            solutions tailored to your specific needs. Our team of experts specializes in 
            <ComplianceTechTooltip
              standard="Regulatory Compliance"
              requirements="We help organizations maintain compliance with industry regulations and standards including PCI DSS, HIPAA, GDPR, and more."
              side="bottom"
            >
              <span className="text-[hsl(var(--secondary))] cursor-pointer"> compliance frameworks </span>
            </ComplianceTechTooltip>
            that align with your business objectives.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TooltipDemo;