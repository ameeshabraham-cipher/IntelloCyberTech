import { eq, and } from "drizzle-orm";
import { db } from "./db";
import { users, contactForms, assessmentRequests, appointments } from "@shared/schema";
import type { 
  User, 
  InsertUser, 
  ContactForm, 
  InsertContactForm,
  AssessmentRequest,
  InsertAssessmentRequest,
  Appointment,
  InsertAppointment
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form methods
  createContactForm(form: InsertContactForm): Promise<ContactForm>;
  getContactForms(): Promise<ContactForm[]>;
  getContactFormById(id: number): Promise<ContactForm | undefined>;
  
  // Assessment request methods
  createAssessmentRequest(request: InsertAssessmentRequest): Promise<AssessmentRequest>;
  getAssessmentRequests(): Promise<AssessmentRequest[]>;
  getAssessmentRequestById(id: number): Promise<AssessmentRequest | undefined>;
  
  // Appointment methods
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getAppointments(): Promise<Appointment[]>;
  getAppointmentById(id: number): Promise<Appointment | undefined>;
  updateAppointmentStatus(id: number, status: string): Promise<Appointment | undefined>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  // Contact form methods
  async createContactForm(form: InsertContactForm): Promise<ContactForm> {
    const [result] = await db.insert(contactForms).values(form).returning();
    return result;
  }
  
  async getContactForms(): Promise<ContactForm[]> {
    return await db.select().from(contactForms).orderBy(contactForms.createdAt);
  }
  
  async getContactFormById(id: number): Promise<ContactForm | undefined> {
    const [form] = await db.select().from(contactForms).where(eq(contactForms.id, id));
    return form;
  }
  
  // Assessment request methods
  async createAssessmentRequest(request: InsertAssessmentRequest): Promise<AssessmentRequest> {
    const [result] = await db.insert(assessmentRequests).values(request).returning();
    return result;
  }
  
  async getAssessmentRequests(): Promise<AssessmentRequest[]> {
    return await db.select().from(assessmentRequests).orderBy(assessmentRequests.createdAt);
  }
  
  async getAssessmentRequestById(id: number): Promise<AssessmentRequest | undefined> {
    const [request] = await db.select().from(assessmentRequests).where(eq(assessmentRequests.id, id));
    return request;
  }
  
  // Appointment methods
  async createAppointment(appointment: InsertAppointment): Promise<Appointment> {
    const [result] = await db.insert(appointments).values(appointment).returning();
    return result;
  }
  
  async getAppointments(): Promise<Appointment[]> {
    return await db.select().from(appointments).orderBy(appointments.scheduledDate);
  }
  
  async getAppointmentById(id: number): Promise<Appointment | undefined> {
    const [appointment] = await db.select().from(appointments).where(eq(appointments.id, id));
    return appointment;
  }
  
  async updateAppointmentStatus(id: number, status: string): Promise<Appointment | undefined> {
    const [appointment] = await db
      .update(appointments)
      .set({ status })
      .where(eq(appointments.id, id))
      .returning();
    return appointment;
  }
}

export const storage = new DatabaseStorage();
