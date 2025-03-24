import { HelpBubble } from '@/components/ui/help-bubble';
import { useHelpBubble } from '@/hooks/use-help-bubble';
import { Shield, Server, AlertTriangle, FileText, Globe } from 'lucide-react';

export function HelpBubbleDemo() {
  const { getHelpContent } = useHelpBubble();
  
  // Get sample help content
  const riskContent = getHelpContent('risk-assessment');
  const complianceContent = getHelpContent('compliance-framework');
  const soc2Content = getHelpContent('soc2');
  const ransomwareContent = getHelpContent('ransomware');
  const resourceContent = getHelpContent('security-whitepaper');
  
  return (
    <section className="py-12 bg-card/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contextual Help Features</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Hover over our interactive help bubbles throughout the site to learn more about cybersecurity 
          concepts, compliance requirements, and technical explanations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Security Card */}
          <div className="bg-card rounded-lg border border-border shadow-md p-6 relative">
            <div className="absolute -top-3 -right-3">
              {riskContent && (
                <HelpBubble 
                  type="security"
                  title={riskContent.title}
                  content={riskContent.content}
                  icon={<Shield className="h-4 w-4" />}
                  position="top-right"
                />
              )}
            </div>
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <Shield className="mr-2 h-5 w-5 text-red-500" />
              Security Risk Assessment
            </h3>
            <p className="text-muted-foreground text-sm">
              Our comprehensive security risk assessment identifies vulnerabilities 
              and provides actionable recommendations for strengthening your security posture.
            </p>
          </div>
          
          {/* Compliance Card */}
          <div className="bg-card rounded-lg border border-border shadow-md p-6 relative">
            <div className="absolute -top-3 -right-3">
              {complianceContent && (
                <HelpBubble 
                  type="compliance"
                  title={complianceContent.title}
                  content={complianceContent.content}
                  icon={<Server className="h-4 w-4" />}
                  position="top-right"
                />
              )}
            </div>
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <Server className="mr-2 h-5 w-5 text-blue-500" />
              Compliance Framework Analysis
            </h3>
            <p className="text-muted-foreground text-sm">
              Navigate complex regulatory landscapes with our expert guidance on 
              implementing appropriate compliance frameworks for your organization.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="inline-flex items-center text-xs bg-blue-500/10 text-blue-500 px-2 py-1 rounded">
                NESA
                {soc2Content && (
                  <span className="ml-1">
                    <HelpBubble 
                      type="compliance"
                      title={soc2Content.title}
                      content={soc2Content.content}
                      position="bottom-right"
                    />
                  </span>
                )}
              </div>
              <div className="inline-flex items-center text-xs bg-blue-500/10 text-blue-500 px-2 py-1 rounded">ISO 27001</div>
              <div className="inline-flex items-center text-xs bg-blue-500/10 text-blue-500 px-2 py-1 rounded">GDPR</div>
            </div>
          </div>
          
          {/* Threat Card */}
          <div className="bg-card rounded-lg border border-border shadow-md p-6 relative">
            <div className="absolute -top-3 -right-3">
              {ransomwareContent && (
                <HelpBubble 
                  type="warning"
                  title={ransomwareContent.title}
                  content={ransomwareContent.content}
                  icon={<AlertTriangle className="h-4 w-4" />}
                  position="top-right"
                />
              )}
            </div>
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5 text-amber-500" />
              Threat Protection
            </h3>
            <p className="text-muted-foreground text-sm">
              Protect your organization from the latest advanced threats with our proactive 
              threat intelligence and incident response capabilities.
            </p>
          </div>
          
          {/* Resources Card */}
          <div className="lg:col-span-3 bg-card rounded-lg border border-border shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Security Resources</h3>
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              <div className="flex items-center space-x-2 bg-card/50 rounded-lg border border-border p-3">
                <FileText className="h-5 w-5 text-green-500" />
                <span>Security Whitepaper</span>
                {resourceContent && (
                  <HelpBubble 
                    type="resource"
                    title={resourceContent.title}
                    content={resourceContent.content}
                  />
                )}
              </div>
              
              <div className="flex items-center space-x-2 bg-card/50 rounded-lg border border-border p-3">
                <Shield className="h-5 w-5 text-blue-500" />
                <span>Compliance Guide</span>
                <HelpBubble 
                  type="resource"
                  title="Compliance Guide"
                  content="Comprehensive resource for understanding and implementing compliance requirements."
                />
              </div>
              
              <div className="flex items-center space-x-2 bg-card/50 rounded-lg border border-border p-3">
                <Globe className="h-5 w-5 text-purple-500" />
                <span>Industry Best Practices</span>
                <HelpBubble 
                  type="info"
                  title="Best Practices"
                  content="Industry-leading security practices and standards to enhance your security program."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}