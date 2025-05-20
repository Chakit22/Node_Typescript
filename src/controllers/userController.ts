import { Request, Response, NextFunction } from "express";

class UserController {
  private users: any[] = [];
  private currentId: number = 1;

  constructor() {
    // In-memory storage for demonstration
    this.users = [];
    this.currentId = 1;
  }

  // GET all users
  getAllUsers = (req: Request, res: Response, next: NextFunction) => {
    try {
      /**
       * The below statememnt just ends the request-response cycle
       * and sends the response back to the client,
       * but does not end the function. Statements after this will still execute.
       */
      res.status(200).json({
        success: true,
        body: this.users,
        message: "Users fetched successfully",
      });
      /*
          This will still execute as return statement is not written. 
          So, the return type of this function would be Promise<void> as it does not return anything.
        */
      // console.log("getAllUsers finished");

      // The return type of this function is Promise<void> as it does not return anything.
    } catch (error) {
      /**
       * The below statement will call the error handling middleware
       * as we are not handling the error here.
       */
      next(error);
      /**
       * The below statement will still execute as the return statement is not written.
       * So, the return type of this function would be Promise<void> as it does not return anything.
       */
      // console.log("getAllUsers finished");
    }
  };

  // GET single user
  getUserById = (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = this.users.find((u) => u.id === parseInt(req.params.id));
      res.status(200).json({
        success: true,
        body: user,
        message: "User fetched successfully",
      });
    } catch (error) {
      next(error);
    }
  };

  // POST create user
  createUser = (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("createUser start");
      const newUser = {
        id: this.currentId++,
        ...req.body,
        createdAt: new Date().toISOString(),
      };
      //   next(new Error("Test error"));
      this.users.push(newUser);
      res.status(201).json({
        success: true,
        body: newUser,
        message: "User created successfully",
      });
      console.log("createUser finished");
    } catch (error) {
      next(error);
    }
  };

  // PUT update user
  updateUser = (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = parseInt(req.params.id);
      const userIndex = this.users.findIndex((u) => u.id === userId);

      if (userIndex === -1) {
        const error = new Error("User not found");
        (error as any).statusCode = 404;
        throw error;
      }

      this.users[userIndex] = {
        ...this.users[userIndex],
        ...req.body,
        updatedAt: new Date().toISOString(),
      };

      res.status(200).json({
        success: true,
        body: this.users[userIndex],
        message: "User updated successfully",
      });
    } catch (error) {
      next(error);
    }
  };

  // DELETE user
  deleteUser = (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = parseInt(req.params.id);
      const userIndex = this.users.findIndex((u) => u.id === userId);

      if (userIndex === -1) {
        const error = new Error("User not found");
        (error as any).statusCode = 404;
        throw error;
      }

      const deletedUser = this.users.splice(userIndex, 1)[0];
      res.status(200).json({
        success: true,
        body: deletedUser,
        message: "User deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
