import { useState, useEffect } from 'react';
import { HelpBubbleType } from '@/components/ui/help-bubble';

interface HelpContent {
  title: string;
  content: string;
  type: HelpBubbleType;
}

/**
 * Hook to manage help content throughout the app
 * @returns Functions to get help content for specific topics
 */
export function useHelpBubble() {
  const [helpContents, setHelpContents] = useState<Record<string, HelpContent>>({
    // GRC Concepts
    'risk-assessment': {
      title: 'Risk Assessment',
      content: 'Systematic process of identifying and evaluating potential security risks in an organization\'s environment.',
      type: 'security'
    },
    'compliance-framework': {
      title: 'Compliance Framework',
      content: 'A structured approach to ensuring an organization meets regulatory requirements and industry standards.',
      type: 'compliance'
    },
    'penetration-testing': {
      title: 'Penetration Testing',
      content: 'Simulated cyber attack to identify exploitable vulnerabilities in systems, networks, and applications.',
      type: 'tech'
    },
    'vulnerability-management': {
      title: 'Vulnerability Management',
      content: 'Ongoing process of identifying, assessing, and mitigating security vulnerabilities in systems and software.',
      type: 'security'
    },
    'iso-27001': {
      title: 'ISO 27001',
      content: 'International standard for information security management systems (ISMS).',
      type: 'compliance'
    },
    'soc2': {
      title: 'SOC 2',
      content: 'Service Organization Control 2 - Compliance framework for service providers storing customer data in the cloud.',
      type: 'compliance'
    },
    'pci-dss': {
      title: 'PCI DSS',
      content: 'Payment Card Industry Data Security Standard - Security standard for organizations handling credit cards.',
      type: 'compliance'
    },
    
    // Cybersecurity Terms
    'zero-trust': {
      title: 'Zero Trust Security',
      content: 'Security model that requires strict identity verification for every user and device trying to access resources.',
      type: 'security'
    },
    'siem': {
      title: 'SIEM Solution',
      content: 'Security Information and Event Management - Provides real-time analysis of security alerts.',
      type: 'tech'
    },
    'ransomware': {
      title: 'Ransomware Protection',
      content: 'Defend against malware that encrypts data and demands payment for decryption keys.',
      type: 'warning'
    },
    'phishing': {
      title: 'Phishing Prevention',
      content: 'Tactics to prevent deceptive attempts to steal sensitive information through fake communications.',
      type: 'warning'
    },
    'data-breach': {
      title: 'Data Breach',
      content: 'Security incident where sensitive or confidential data is accessed without authorization.',
      type: 'warning'
    },
    
    // AI and Advanced Solutions
    'ai-compliance': {
      title: 'AI-Powered Compliance',
      content: 'Leveraging artificial intelligence to automate and enhance compliance management processes.',
      type: 'tech'
    },
    'threat-intelligence': {
      title: 'Threat Intelligence',
      content: 'Information about current and potential threats to help organizations make better security decisions.',
      type: 'security'
    },
    'cloud-security': {
      title: 'Cloud Security',
      content: 'Protecting cloud-based systems, data, and infrastructure from threats and vulnerabilities.',
      type: 'tech'
    },
    
    // Resources
    'security-whitepaper': {
      title: 'Security Whitepaper',
      content: 'Detailed information about our security methodologies and best practices.',
      type: 'resource'
    },
    'compliance-guide': {
      title: 'Compliance Guide',
      content: 'Comprehensive guide to various compliance frameworks and requirements.',
      type: 'resource'
    },
    'security-checklist': {
      title: 'Security Checklist',
      content: 'Essential steps to improve your organization\'s security posture.',
      type: 'resource'
    }
  });
  
  // Get help content by key
  const getHelpContent = (key: string): HelpContent | undefined => {
    return helpContents[key];
  };
  
  // Add new help content dynamically
  const addHelpContent = (key: string, content: HelpContent) => {
    setHelpContents(prev => ({
      ...prev,
      [key]: content
    }));
  };
  
  return {
    getHelpContent,
    addHelpContent
  };
}