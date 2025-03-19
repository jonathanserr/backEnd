const logRequestDateTime = (req, res, next) => {
    const dateTime = new Date().toLocaleString(); 
    req.dateTime = dateTime; // Store in req for later use
    console.log(`[${dateTime}] ${req.method} ${req.url}`);
    next(); // Proceed to the next middleware or route
  };
  export default logRequestDateTime;