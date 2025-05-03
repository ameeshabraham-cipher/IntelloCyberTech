import { Router } from "express";
import { storage } from "../storage";
import { insertContactFormSchema, insertAssessmentRequestSchema } from "@shared/schema";
import { z } from "zod";

const router = Router();

// Contact form submission
router.post("/contact", async (req, res) => {
  try {
    // Validate form data
    const formData = insertContactFormSchema.parse(req.body);
    
    // Save to database
    const result = await storage.createContactForm(formData);
    
    // Return success
    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
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
      console.error("Contact form submission error:", error);
      res.status(500).json({
        success: false,
        message: "Error submitting contact form"
      });
    }
  }
});

// Assessment request submission
router.post("/assessment", async (req, res) => {
  try {
    // Validate form data
    const requestData = insertAssessmentRequestSchema.parse(req.body);
    
    // Save to database
    const result = await storage.createAssessmentRequest(requestData);
    
    // Return success
    res.status(201).json({
      success: true,
      message: "Assessment request submitted successfully",
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
      console.error("Assessment request submission error:", error);
      res.status(500).json({
        success: false,
        message: "Error submitting assessment request"
      });
    }
  }
});

// Retrieve all contact form submissions (protected - would add auth middleware in production)
router.get("/contact", async (req, res) => {
  try {
    const forms = await storage.getContactForms();
    res.json(forms);
  } catch (error) {
    console.error("Error retrieving contact forms:", error);
    res.status(500).json({
      success: false,
      message: "Error retrieving contact forms"
    });
  }
});

// Retrieve all assessment requests (protected - would add auth middleware in production)
router.get("/assessment", async (req, res) => {
  try {
    const requests = await storage.getAssessmentRequests();
    res.json(requests);
  } catch (error) {
    console.error("Error retrieving assessment requests:", error);
    res.status(500).json({
      success: false,
      message: "Error retrieving assessment requests"
    });
  }
});

export default router;