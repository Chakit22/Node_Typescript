import { Router, Request, Response, NextFunction } from "express";
import validateUser from "../middleware/validateUser";
import UserController from "../controllers/userController";

const router = Router();
// Initialize controller
const userController = new UserController();

// GET all users
router.get("/", userController.getAllUsers);

// GET single user
router.get("/:id", userController.getUserById);

// POST create new user
router.post("/", validateUser, userController.createUser);

// PUT update user
router.put("/:id", validateUser, userController.updateUser);

// DELETE user
router.delete("/:id", userController.deleteUser);

export default router;
