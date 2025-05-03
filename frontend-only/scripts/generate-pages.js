const fs = require('fs');
const path = require('path');

// Helper to ensure directory exists
function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Templates
const SOLUTION_TEMPLATE = fs.readFileSync(path.join(__dirname, '../src/pages/solutions/AiCompliance.tsx'), 'utf8');
const SERVICE_TEMPLATE = fs.readFileSync(path.join(__dirname, '../src/pages/services/Iso27001.tsx'), 'utf8');
const INDUSTRY_TEMPLATE = fs.readFileSync(path.join(__dirname, '../src/pages/industries/Bfsi.tsx'), 'utf8');

// Solution pages to generate
const solutionPages = [
  'GrcAutomation',
  'RiskManagement',
  'VulnerabilityManagement',
  'CybersecurityFrameworks',
  'EmailSecurity',
  'Edr',
  'Siem',
  'Dlp'
];

// Service pages to generate
const servicePages = [
  'Iso42001',
  'Soc2',
  'Gdpr',
  'UaePdpl',
  'UaeIa',
  'UaeNesa',
  'KsaPdpl',
  'BahrainPdpl',
  'Sama',
  'SaudiAramco',
  'PciDss',
  'Hipaa',
  'InternalAudit',
  'RiskFrameworks',
  'PolicyDevelopment',
  'ItSecurityAudit',
  'SecurityAssessment',
  'PenetrationTesting',
  'WebPenetrationTesting',
  'WebPenTesting',
  'NetworkPentesting',
  'Vapt',
  'CloudSecurity',
  'CloudSecurityAssessment',
  'Vciso',
  'DataPrivacy',
  'CloudOnPremInfrastructure',
  'AdvancedPenetrationTesting',
  'ThreatHunting',
  'IncidentResponsePlanning',
  'RedTeamExercises',
  'PrivacyCompliance',
  'ItAmc',
  'ManagedItProject',
  'MicrosoftServices'
];

// Industry pages to generate
const industryPages = [
  'Healthcare',
  'Government',
  'Ecommerce',
  'Sme',
  'Logistics',
  'MoneyExchanges',
  'InsuranceCompanies',
  'ArchitecturalFirms',
  'TechnologyCompanies'
];

// Component pages to generate
const componentPages = [
  'FormSubmissions',
  'AssessmentSubmissions',
  'AdminDashboard'
];

// Generate solution pages
function generateSolutionPages() {
  const solutionsDir = path.join(__dirname, '../src/pages/solutions');
  ensureDirectoryExists(solutionsDir);
  
  solutionPages.forEach(page => {
    const filePath = path.join(solutionsDir, `${page}.tsx`);
    if (!fs.existsSync(filePath)) {
      const content = SOLUTION_TEMPLATE
        .replace(/AiCompliancePage/g, `${page}Page`)
        .replace(/AI-Powered <span className="text-primary">Compliance<\/span>/g, 
                `<span className="text-primary">${page.replace(/([A-Z])/g, ' $1').trim()}</span>`);
      
      fs.writeFileSync(filePath, content);
      console.log(`Created ${filePath}`);
    }
  });
}

// Generate service pages
function generateServicePages() {
  const servicesDir = path.join(__dirname, '../src/pages/services');
  ensureDirectoryExists(servicesDir);
  
  servicePages.forEach(page => {
    const filePath = path.join(servicesDir, `${page}.tsx`);
    if (!fs.existsSync(filePath)) {
      const content = SERVICE_TEMPLATE
        .replace(/Iso27001Page/g, `${page}Page`)
        .replace(/ISO 27001 <span className="text-primary">Compliance<\/span>/g, 
                `<span className="text-primary">${page.replace(/([A-Z])/g, ' $1').trim()}</span>`);
      
      fs.writeFileSync(filePath, content);
      console.log(`Created ${filePath}`);
    }
  });
}

// Generate industry pages
function generateIndustryPages() {
  const industriesDir = path.join(__dirname, '../src/pages/industries');
  ensureDirectoryExists(industriesDir);
  
  industryPages.forEach(page => {
    const filePath = path.join(industriesDir, `${page}.tsx`);
    if (!fs.existsSync(filePath)) {
      const content = INDUSTRY_TEMPLATE
        .replace(/BfsiPage/g, `${page}Page`)
        .replace(/Banking & Finance <span className="text-primary">Security Solutions<\/span>/g, 
                `${page.replace(/([A-Z])/g, ' $1').trim()} <span className="text-primary">Security Solutions</span>`);
      
      fs.writeFileSync(filePath, content);
      console.log(`Created ${filePath}`);
    }
  });
}

// Generate component pages
function generateComponentPages() {
  const componentsDir = path.join(__dirname, '../src/pages/components');
  ensureDirectoryExists(componentsDir);
  
  componentPages.forEach(page => {
    const filePath = path.join(componentsDir, `${page}.tsx`);
    if (!fs.existsSync(filePath)) {
      const content = `import React from 'react';

export default function ${page}() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">${page.replace(/([A-Z])/g, ' $1').trim()}</h1>
          <p className="text-muted-foreground mb-8">
            This feature is not available in the static website version. This component requires backend functionality.
          </p>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Static Site Limitation</h2>
            <p className="text-muted-foreground mb-4">
              In the frontend-only version, this administrative functionality has been disabled as it requires server-side processing.
            </p>
            <p className="text-muted-foreground">
              For the full version with all backend functionality, please contact the development team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
`;
      
      fs.writeFileSync(filePath, content);
      console.log(`Created ${filePath}`);
    }
  });
}

// Run all generators
generateSolutionPages();
generateServicePages();
generateIndustryPages();
generateComponentPages();

console.log('Page generation complete!');
