import { pgTable, text, serial, integer, boolean, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form submissions
export const contactForms = pgTable("contact_forms", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  subject: text("subject"),
  message: text("message").notNull(),
  service: text("service"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactFormSchema = createInsertSchema(contactForms).pick({
  name: true,
  email: true,
  phone: true,
  company: true,
  subject: true,
  message: true,
  service: true,
});

export type InsertContactForm = z.infer<typeof insertContactFormSchema>;
export type ContactForm = typeof contactForms.$inferSelect;

// Assessment requests
export const assessmentRequests = pgTable("assessment_requests", {
  id: serial("id").primaryKey(),
  companyName: text("company_name").notNull(),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  industry: text("industry").notNull(),
  companySize: text("company_size").notNull(),
  assessmentType: text("assessment_type").notNull(),
  additionalInfo: text("additional_info"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertAssessmentRequestSchema = createInsertSchema(assessmentRequests).pick({
  companyName: true,
  contactName: true,
  email: true,
  phone: true,
  industry: true,
  companySize: true,
  assessmentType: true,
  additionalInfo: true,
});

export type InsertAssessmentRequest = z.infer<typeof insertAssessmentRequestSchema>;
export type AssessmentRequest = typeof assessmentRequests.$inferSelect;

// Appointments/bookings
export const appointments = pgTable("appointments", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  appointmentType: text("appointment_type").notNull(),
  scheduledDate: timestamp("scheduled_date").notNull(),
  status: varchar("status", { length: 20 }).notNull().default("scheduled"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertAppointmentSchema = createInsertSchema(appointments).pick({
  name: true,
  email: true,
  phone: true,
  appointmentType: true,
  scheduledDate: true,
  notes: true,
});

export type InsertAppointment = z.infer<typeof insertAppointmentSchema>;
export type Appointment = typeof appointments.$inferSelect;
