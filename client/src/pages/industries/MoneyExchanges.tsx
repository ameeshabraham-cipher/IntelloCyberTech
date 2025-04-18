import React from 'react';
import IndustryPageLayout from '@/components/IndustryPageLayout';
import { Shield, DollarSign, LockKeyhole, Building2, BookOpen, AlertTriangle, Check, TrendingUp, BarChart3 } from 'lucide-react';

const MoneyExchangesPage = () => {
  return (
    <IndustryPageLayout
      title="Cybersecurity for Money Exchanges"
      subtitle="Secure Financial Transactions in a Digital Economy"
      description="Money exchange businesses face unique cybersecurity challenges with high transaction volumes and strict regulatory requirements. Intello provides specialized security solutions to protect financial operations, customer data, and ensure compliance with international regulations."
      
      overview="Money exchanges process large volumes of financial transactions daily, making them attractive targets for cyber attacks. Our tailored security solutions address the specific challenges of money service businesses, from transaction monitoring to compliance with strict financial regulations."
      
      challenges={[
        {
          title: "Regulatory Compliance",
          description: "Money exchanges must comply with complex AML/CFT, GDPR, and local financial regulations, with severe penalties for non-compliance.",
          severity: "high"
        },
        {
          title: "Transaction Fraud",
          description: "Fraudulent transactions can lead to significant financial losses and damage to reputation among customers and partners.",
          severity: "high"
        },
        {
          title: "Data Protection",
          description: "Money exchanges store sensitive customer information that requires robust protection against breach and unauthorized access.",
          severity: "high"
        },
        {
          title: "Digital Transformation",
          description: "Transitioning to digital platforms while maintaining security integrity poses significant challenges for traditional exchange houses.",
          severity: "medium"
        },
        {
          title: "Third-Party Risks",
          description: "Dependencies on financial partners, technology vendors, and service providers introduce additional security vulnerabilities.",
          severity: "medium"
        }
      ]}
      
      solutions={[
        {
          title: "Transaction Monitoring Systems",
          description: "Implement advanced monitoring systems that detect suspicious transactions and unusual patterns in real-time to prevent fraud.",
          icon: <BarChart3 className="h-10 w-10 text-[hsl(var(--primary))]" />
        },
        {
          title: "Compliance Automation",
          description: "Deploy automated compliance solutions to ensure adherence to AML, KYC, and other financial regulations while reducing manual processes.",
          icon: <Check className="h-10 w-10 text-[hsl(var(--primary))]" />
        },
        {
          title: "Secure Payment Infrastructure",
          description: "Establish robust, multi-layered security for payment processing systems, ensuring data protection throughout the transaction lifecycle.",
          icon: <DollarSign className="h-10 w-10 text-[hsl(var(--primary))]" />
        },
        {
          title: "Penetration Testing",
          description: "Regular security assessments to identify vulnerabilities in exchange platforms, mobile apps, and financial systems before they can be exploited.",
          icon: <Shield className="h-10 w-10 text-[hsl(var(--primary))]" />
        },
        {
          title: "Employee Security Training",
          description: "Comprehensive training programs to ensure staff can identify and respond to social engineering, phishing, and other financial fraud attempts.",
          icon: <BookOpen className="h-10 w-10 text-[hsl(var(--primary))]" />
        }
      ]}
      
      caseStudy={{
        clientType: "Regional Money Exchange Network",
        challenge: "A network of exchange houses was experiencing increasing fraud attempts and struggling to meet evolving compliance requirements across multiple jurisdictions.",
        solution: "Intello implemented an integrated security and compliance platform with real-time transaction monitoring, automated regulatory reporting, and enhanced customer authentication systems.",
        results: [
          "90% reduction in fraudulent transaction attempts",
          "Compliance processes automated, reducing processing time by 65%",
          "Enhanced customer trust through visible security measures",
          "Successfully passed regulatory audits across all operating regions"
        ]
      }}
      
      complianceRequirements={[
        {
          name: "Anti-Money Laundering (AML)",
          description: "Rules requiring money exchanges to verify customer identities, monitor transactions, and report suspicious activities.",
          importance: "Critical for preventing financial crime and avoiding regulatory penalties."
        },
        {
          name: "Know Your Customer (KYC)",
          description: "Processes for verifying customer identities and assessing their risk profiles before processing transactions.",
          importance: "Essential for preventing fraud and ensuring compliance with financial regulations."
        },
        {
          name: "Payment Card Industry Data Security Standard (PCI DSS)",
          description: "Security standards for organizations that handle credit card information to ensure secure processing.",
          importance: "Mandatory for any exchange handling card payments to prevent data breaches."
        },
        {
          name: "GDPR and Data Protection",
          description: "Regulations governing how personal data must be collected, processed, and stored securely.",
          importance: "Critical for protecting customer privacy and avoiding significant penalties."
        },
        {
          name: "Central Bank Regulations",
          description: "Country-specific requirements set by central banks for money service businesses and financial institutions.",
          importance: "Essential for legal operation in each jurisdiction where services are offered."
        }
      ]}
      
      statistics={[
        {
          title: "Money Exchange Cyberattacks",
          value: "47%",
          context: "of money service businesses experienced a cyberattack in the past year"
        },
        {
          title: "Compliance Costs",
          value: "15-20%",
          context: "of operational budgets are typically spent on regulatory compliance"
        },
        {
          title: "Data Breach Impact",
          value: "$5.9M",
          context: "average cost of a data breach in the financial services sector"
        }
      ]}
      
      relatedServices={[
        {
          title: "Financial Services Compliance Automation",
          link: "/services/financial-compliance-automation"
        },
        {
          title: "Transaction Monitoring Systems",
          link: "/services/transaction-monitoring"
        },
        {
          title: "Financial Services Penetration Testing",
          link: "/services/financial-pentesting"
        }
      ]}
    />
  );
};

export default MoneyExchangesPage;