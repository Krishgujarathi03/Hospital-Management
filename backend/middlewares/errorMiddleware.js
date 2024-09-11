// ErrorHandler class for creating custom errors with status codes
class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

// Middleware to handle errors in Express
export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  // Handling MongoDB duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered.`;
    err = new ErrorHandler(message, 400);
  }
  // Handling JWT error for invalid tokens
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid, Try again!`;
    err = new ErrorHandler(message, 400);
  }
  // Handling JWT error for expired tokens
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is expired, Try again!`;
    err = new ErrorHandler(message, 400);
  }
  // Handling Mongoose CastError (invalid MongoDB ObjectId)
  if (err.name === "CastError") {
    const message = `Invalid ${err.path}.`;
    err = new ErrorHandler(message, 400);
  }

  // Handle validation errors (if using Mongoose)
  const errorMessage = err.errors
    ? Object.values(err.errors)
        .map((error) => error.message)
        .join(" ")
    : err.message;

  // Send the response with error message and status code
  return res.status(err.statusCode).json({
    success: false,
    message: errorMessage,
  });
};

export default ErrorHandler;
