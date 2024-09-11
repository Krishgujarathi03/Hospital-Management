// The catchAsyncErrors function is a higher-order function that simplifies
// error handling in asynchronous functions
export const catchAsyncErrors = (theFunction) => {
  return (req, res, next) => {
    Promise.resolve(theFunction(req, res, next)).catch(next);
  };
};
