# Shared Components

## Overview

This directory contains shared code that is used by both the frontend and backend components of the Intello Cyber Technologies website. These shared components ensure consistency between the client and server implementations.

## Components

- `schema.ts` - Database schema definitions and types

## Schema

The schema file defines the database tables and types used in the application. For the static site deployment, these schema definitions are not actively used, as there is no database interaction.

However, they are maintained for potential future development that might require server-side functionality.

The schema includes models for:

- Users
- Contact forms
- Assessment requests
- Appointments

## Type Safety

The types defined in the schema are used throughout the application to ensure type safety between the frontend and backend. This helps prevent bugs and ensures that data is handled consistently across the application.