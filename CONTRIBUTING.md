# Contributing to Intello Cyber Technologies Website

## Overview

Thank you for your interest in contributing to the Intello Cyber Technologies website project. This document provides guidelines for contributing to the project.

## Getting Started

Before you start contributing, please:

1. Read the [Installation Guide](./docs/INSTALLATION_GUIDE.md) to set up your local development environment
2. Review the [Project Documentation](./docs/PROJECT_DOCUMENTATION.md) to understand the project structure
3. Check the existing issues to see if your planned contribution is already being addressed

## Development Workflow

### 1. Fork and Clone

Start by forking the repository to your GitHub account, then clone it locally:

```bash
git clone https://github.com/YOUR_USERNAME/intello-website.git
cd intello-website
npm install
```

### 2. Create a Feature Branch

Create a branch for your feature or bugfix:

```bash
git checkout -b feature/your-feature-name
```

Use a descriptive branch name that reflects the change you're making.

### 3. Make Changes

Implement your changes following the project's coding standards and structure.

### 4. Testing

Test your changes thoroughly:

- Ensure the website looks good on different screen sizes (mobile, tablet, desktop)
- Verify that all links work correctly
- Check that forms submit properly
- Validate that your changes don't break existing functionality

### 5. Build and Verify

Build the static site and verify that everything works:

```bash
node build/build-static-light.js
```

### 6. Create a Pull Request

Push your changes to your fork and create a pull request to the main repository.

## Coding Standards

### General

- Follow established patterns in the codebase
- Use meaningful names for variables, functions, and components
- Include comments for complex logic
- Keep components focused on a single responsibility

### TypeScript

- Use proper TypeScript types for all variables, parameters, and return values
- Avoid using `any` type when possible
- Use interfaces for defining component props

### React

- Use functional components with hooks
- Keep components small and focused
- Place page components in the appropriate directory
- Follow the existing folder structure

### CSS/Styling

- Use Tailwind CSS classes for styling
- Follow the existing design system for colors, spacing, and typography
- Ensure responsive design for all screen sizes

## Pull Request Guidelines

When submitting a pull request:

1. Provide a clear description of the changes
2. Reference any related issues
3. Include screenshots for UI changes
4. Ensure that all tests pass
5. Update documentation if necessary

## Documentation

Update documentation to reflect your changes. This includes:

- README files
- Code comments
- User guides (if applicable)

## Questions

If you have questions about contributing, please contact Intello Cyber Technologies support.

## License

Contributions to this project are governed by the project's license.