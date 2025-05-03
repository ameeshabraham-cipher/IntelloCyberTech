import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
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
