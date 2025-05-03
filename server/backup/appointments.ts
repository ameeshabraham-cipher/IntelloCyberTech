import { Router } from "express";
import { storage } from "../storage";
import { insertAppointmentSchema } from "@shared/schema";
import { z } from "zod";

const router = Router();

// Save appointment after Calendly booking
router.post("/", async (req, res) => {
  try {
    // Validate appointment data
    const appointmentData = insertAppointmentSchema.parse(req.body);
    
    // Save to database
    const result = await storage.createAppointment(appointmentData);
    
    // Return success
    res.status(201).json({
      success: true,
      message: "Appointment saved successfully",
      data: result
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors
      });
    } else {
      console.error("Appointment saving error:", error);
      res.status(500).json({
        success: false,
        message: "Error saving appointment"
      });
    }
  }
});

// Update appointment status
router.patch("/:id/status", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { status } = req.body;
    
    if (!status || typeof status !== 'string') {
      return res.status(400).json({
        success: false,
        message: "Status is required"
      });
    }
    
    const appointment = await storage.updateAppointmentStatus(id, status);
    
    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found"
      });
    }
    
    res.json({
      success: true,
      message: "Appointment status updated",
      data: appointment
    });
  } catch (error) {
    console.error("Error updating appointment status:", error);
    res.status(500).json({
      success: false,
      message: "Error updating appointment status"
    });
  }
});

// Get all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await storage.getAppointments();
    res.json(appointments);
  } catch (error) {
    console.error("Error retrieving appointments:", error);
    res.status(500).json({
      success: false,
      message: "Error retrieving appointments"
    });
  }
});

// Get appointment by ID
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const appointment = await storage.getAppointmentById(id);
    
    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found"
      });
    }
    
    res.json(appointment);
  } catch (error) {
    console.error("Error retrieving appointment:", error);
    res.status(500).json({
      success: false,
      message: "Error retrieving appointment"
    });
  }
});

export default router;