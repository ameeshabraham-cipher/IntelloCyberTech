# Intello Cyber Technologies - Project Documentation

## Project Overview

This is a modern, professional website for Intello Cyber Technologies, showcasing their expertise in Governance, Risk, and Compliance (GRC), Audit, AI-Powered Compliance Automation, and Cybersecurity consultancy. The application is built with React, TypeScript, and uses modern UI components with a dark-themed cybersecurity aesthetic.

## Project Structure

The project follows a client-server architecture with a React.js frontend and Node.js backend.

```
├── client/            # Frontend React application
│   ├── src/           # Source code
│   │   ├── components/  # Reusable UI components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility functions and configs
│   │   ├── pages/       # Page components
│   │   │   ├── components/   # Page-specific components 
│   │   │   ├── industries/   # Industry-specific pages
│   │   │   ├── services/     # Service-specific pages
│   │   │   ├── solutions/    # Solution-specific pages
│   │   ├── App.tsx      # Main application component and routing
│   │   ├── index.css    # Global styles
│   │   └── main.tsx     # Application entry point
│   └── index.html       # HTML template
├── public/           # Static assets
│   └── images/       # Image assets
├── server/           # Backend Node.js server
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage interface
│   └── vite.ts       # Vite server configuration
└── shared/           # Shared code between client and server
    └── schema.ts     # Database schema and type definitions
```

## Key Files and Their Purposes

### Core Configuration Files

- `package.json`: Project dependencies and scripts
- `tsconfig.json`: TypeScript configuration
- `vite.config.ts`: Vite bundler configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `theme.json`: Theme configuration for shadcn components
- `postcss.config.js`: PostCSS configuration for Tailwind

### Client-Side Files

#### Core Files

- `client/src/main.tsx`: Application entry point
- `client/src/App.tsx`: Main app component with routing
- `client/src/index.css`: Global CSS styles

#### Page Components

These files represent the main pages of the website:

- `client/src/pages/Home.tsx`: Homepage with hero section, services showcase, etc.
- `client/src/pages/AboutUs.tsx`: About Us page with company information
- `client/src/pages/Contact.tsx`: Contact page with contact form
- `client/src/pages/Services.tsx`: Services overview page
- `client/src/pages/Insights.tsx`: Blog/insights listing page
- `client/src/pages/InsightPost.tsx`: Individual blog post page
- `client/src/pages/not-found.tsx`: 404 not found page

#### Service Pages

Located in `client/src/pages/services/`, these files contain specific service offerings:

- `Iso27001.tsx`: ISO 27001 compliance service page
- `Gdpr.tsx`: GDPR compliance service page
- `Soc2.tsx`: SOC 2 compliance service page
- `PciDss.tsx`: PCI DSS compliance service page
- `Hipaa.tsx`: HIPAA compliance service page
- `DataPrivacy.tsx`: Data privacy service page
- `CyberSecurity.tsx`: Cybersecurity service page
- `DigitalForensics.tsx`: Digital forensics service page
- `VulnerabilityAssessment.tsx`: Vulnerability assessment service page
- `SecureCodeReview.tsx`: Secure code review service page

#### Industry Pages

Located in `client/src/pages/industries/`, these files contain industry-specific content:

- `Banking.tsx`: Banking industry page
- `Healthcare.tsx`: Healthcare industry page
- `Government.tsx`: Government industry page
- `Ecommerce.tsx`: E-commerce industry page
- `SmallBusiness.tsx`: Small business industry page
- `Logistics.tsx`: Logistics and transportation industry page

#### Solution Pages

Located in `client/src/pages/solutions/`, these files contain solution-specific content:

- `GrcPlatform.tsx`: GRC platform solution page
- `AiComplianceAutomation.tsx`: AI compliance automation solution page
- `SecurityIntelligence.tsx`: Security intelligence solution page
- `ThirdPartyRisk.tsx`: Third-party risk management solution page

### Shared Components

#### Layout Components

- `client/src/components/ServicePageLayout.tsx`: Layout for service pages
- `client/src/components/IndustryPageLayout.tsx`: Layout for industry pages
- `client/src/components/SolutionPageLayout.tsx`: Layout for solution pages

#### UI Components

- `client/src/components/Navbar.tsx`: Navigation bar
- `client/src/components/Footer.tsx`: Footer
- `client/src/components/HeroSection.tsx`: Hero section for homepage
- `client/src/components/NewHeroSection.tsx`: Updated hero section
- `client/src/components/ServicesShowcase.tsx`: Services showcase section
- `client/src/components/CaseStudiesSection.tsx`: Case studies section
- `client/src/components/CallToAction.tsx`: Call-to-action section
- `client/src/components/PainPointsSection.tsx`: Pain points section
- `client/src/components/AISolutionsSection.tsx`: AI solutions section
- `client/src/components/ui/`: Directory containing shadcn UI components
- `client/src/components/ui/help-bubble.tsx`: Help bubble component
- `client/src/components/ui/tech-tooltip.tsx`: Technical tooltip component

#### Hooks

- `client/src/hooks/use-help-bubble.tsx`: Hook for managing help bubbles
- `client/src/hooks/use-mobile.tsx`: Hook for detecting mobile devices
- `client/src/hooks/use-theme.tsx`: Hook for theme management
- `client/src/hooks/use-toast.ts`: Hook for toast notifications

#### Utility Functions

- `client/src/lib/animations.ts`: Animation utilities
- `client/src/lib/images.ts`: Image utilities
- `client/src/lib/queryClient.ts`: API request utilities
- `client/src/lib/utils.ts`: General utility functions

### Server-Side Files

- `server/index.ts`: Server entry point and configuration
- `server/routes.ts`: API route definitions
- `server/storage.ts`: Data storage interface
- `server/vite.ts`: Vite server integration
- `server/contactForm.ts`: Contact form processing

### Shared Files

- `shared/schema.ts`: Database schema and type definitions

## How to Make Changes

### Adding or Editing Pages

1. To add a new page:
   - Create a new file in the appropriate directory (e.g., `client/src/pages/`)
   - Add the route in `client/src/App.tsx` using the `Route` component from `wouter`

2. To edit an existing page:
   - Find the corresponding page file (e.g., `client/src/pages/Home.tsx`)
   - Make your changes to the file content

### Modifying the Navigation and Sitemap

To update the navigation menu:
- Edit `client/src/components/Navbar.tsx` to modify the main navigation
- For footer links, edit `client/src/components/Footer.tsx`

### Adding or Changing Services

1. For a new service:
   - Create a new file in `client/src/pages/services/` (e.g., `NewService.tsx`)
   - Use the `ServicePageLayout` component to maintain consistent layout
   - Add the route in `client/src/App.tsx`
   - Update the services list in any relevant showcase components

2. To edit an existing service:
   - Find the corresponding service file in `client/src/pages/services/`
   - Modify the content or properties passed to `ServicePageLayout`

### Adding or Changing Industry Pages

1. For a new industry page:
   - Create a new file in `client/src/pages/industries/` (e.g., `NewIndustry.tsx`)
   - Use the `IndustryPageLayout` component for consistent layout
   - Add the route in `client/src/App.tsx`
   - Update any industry references in navigation or related components

2. To edit an existing industry page:
   - Find the corresponding industry file in `client/src/pages/industries/`
   - Modify the content or properties passed to `IndustryPageLayout`

### Managing Blog/Insights Content

1. To add or edit blog posts:
   - The blog post data is currently stored in `client/src/pages/Insights.tsx`
   - To add a new post, add an entry to the `blogPosts` array
   - Include title, excerpt, content, date, author, category, tags, and image path

2. To modify the blog listing page:
   - Edit `client/src/pages/Insights.tsx` to change layout, filters, or display options

3. To change the individual blog post page:
   - Edit `client/src/pages/InsightPost.tsx` to change the post layout
   - Or edit `client/src/pages/components/BlogPost.tsx` for the core post component

### Styling and Theme Changes

1. For global style changes:
   - Edit `client/src/index.css` for global CSS rules
   - Modify `theme.json` to update the shadcn theme (primary color, radius, etc.)
   - Edit `tailwind.config.ts` to update the Tailwind configuration

2. For component-specific styles:
   - Find the component file and modify the className props or styled components
   - Use Tailwind utility classes for styling consistency

### Updating Help Bubbles and Tooltips

1. To add or modify help content:
   - Edit the help content in `client/src/hooks/use-help-bubble.tsx`
   - Create new content objects with title, content, and type

2. To use help bubbles in a component:
   - Import the `HelpBubble` component and `useHelpBubble` hook
   - Add the bubble to the desired location in your component

### Handling Forms and Backend Integration

1. For contact form changes:
   - Edit `client/src/pages/Contact.tsx` for the form layout
   - Modify `server/contactForm.ts` for the form processing logic

2. To add or modify API endpoints:
   - Edit `server/routes.ts` to add new routes or modify existing ones
   - Implement the corresponding handler functions

## Best Practices

1. **Consistency**: Follow the established patterns for component structure, styling, and naming.
2. **Reusability**: Use the layout components (ServicePageLayout, IndustryPageLayout) to maintain consistency.
3. **Modularity**: Create reusable components for repeated UI elements.
4. **Responsive Design**: Ensure all changes maintain responsiveness across device sizes.
5. **Dark Mode**: The site uses a dark theme - ensure new elements fit with this aesthetic.
6. **Performance**: Optimize images and lazy-load content where appropriate.

## Development Workflow

1. **Starting the Application**:
   - Use the "Start application" workflow, which runs `npm run dev`
   - This starts both the frontend and backend servers

2. **Making Changes**:
   - Edit the relevant files
   - Save the changes
   - The application will automatically reload

3. **Testing**:
   - Verify changes in the browser
   - Test responsiveness across different screen sizes
   - Ensure all features continue to work as expected