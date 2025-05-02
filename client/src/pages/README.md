# Pages

## Overview

This directory contains the page components for the Intello Cyber Technologies website. Each page corresponds to a route in the application and is responsible for displaying content for that specific route.

## Main Pages

### `Home.tsx`

The landing page of the website, featuring the hero section, service highlights, company overview, and call-to-action sections.

### `AboutUs.tsx`

Company information page with details about Intello's history, mission, vision, and team.

### `Services.tsx`

Main services overview page with links to specific service pages.

### `Solutions.tsx`

Main solutions overview page with links to specific solution pages.

### `Contact.tsx`

Contact information and form submission page.

### `Insights.tsx`

Blog/articles listing page with industry insights and news.

### `InsightPost.tsx`

Individual blog post display page.

### `Assessment.tsx`

Security assessment request form page.

### `not-found.tsx`

404 error page for handling navigation to non-existent routes.

## Subdirectories

### `services/`

Service-specific pages (e.g., GRC.tsx, PenetrationTesting.tsx).

### `industries/`

Industry-specific pages (e.g., Financial.tsx, Healthcare.tsx).

### `solutions/`

Solution-specific pages (e.g., ComplianceAutomation.tsx, IncidentResponse.tsx).

### `components/`

Page-specific components that are not shared across the application.

## Page Structure

Each page typically follows this structure:

1. Import statements
2. SEO metadata object
3. Page component definition
4. Exports

Example:

```tsx
import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";

const seoData = {
  title: "Page Title | Intello Cyber Technologies",
  description: "Page description for SEO purposes",
  // Other SEO properties
};

export default function PageName() {
  return (
    <Layout>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        {/* Other meta tags */}
      </Helmet>
      
      {/* Page content */}
    </Layout>
  );
}
```

## Route Registration

New pages need to be registered in the router in `App.tsx`. When adding a new page, ensure that the route is properly defined there.