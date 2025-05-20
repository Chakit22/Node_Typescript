import express from "express";
import cors from "cors";
import errorHandler from "./middleware/error-handler";
import userRoutes from "./routes/user.routes";
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware

// This makes the data in the body of the request available in the req.body object.
// Without that req.body would be undefined.
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// This allows from all origins unless you add options
app.use(cors());

// Custom middlewares example
// Middleware 1
app.use((req, res, next) => {
  /**
   * Ex:
   * if we had called GET /
   * and these two middlewares were defined after that route and the
   * request-response cycle would have ended there only.
   * But as we have defined these middlewares before the route,
   * the request will reach the route and the response will be sent back to the client.
   * Then only the middlewares will be executed.
   */
  console.log("Middleware 1 start");
  /**
   * Goes to the next middleware in the stack which matches
   * 1. route: req.originalUrl
   * 2. method: req.method
   * But it does not end this function,
   * but comes back to this and starts executing statements after next()
   */
  next();
  console.log("Middleware 1 finished");
});

//Mddleware 2
app.use((req, res, next) => {
  console.log("Middleware 2 start");
  /**
   * Goes to the next middleware in the stack which matches
   * 1. route: req.originalUrl
   * 2. method: req.method
   * But it does not end this function,
   * but comes back to this and starts executing statements after next()
   */
  next();
  console.log("Middleware 2 finished");
});

// Routes

// Basic route example
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Express Tutorial API" });
});

app.use("/api/users", userRoutes);

// This is a global error handler and when an error is thrown and we write next(error)
// This will catch the error as this is the next function in the middleware stack.
app.use(errorHandler);

// Listens for incoming requests on the specified port.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
