import { Request, Response, NextFunction } from "express";

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  console.log("validateUser middleware");
  const { name, email, age } = req.body;
  const errors = [];

  // Validate name
  if (!name || typeof name !== "string" || name.length < 2) {
    errors.push("Name must be at least 2 characters long");
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push("Valid email is required");
  }

  // Validate age
  if (age && (typeof age !== "number" || age < 0)) {
    errors.push("Age must be a positive number");
  }

  if (errors.length > 0) {
    // Now here we are not calling next() as we want to end the request-response cycle
    // and send the response back to the client. So the next middleware would not run
    return res.status(400).json({
      status: "error",
      message: "Validation failed",
      errors: errors,
    });
  }

  // If validation passes, continue to next middleware/controller
  next();

  // This will still execute as return statement is not written.
  console.log("validateUser middleware finished");
};

export default validateUser;
