import express, { NextFunction, Request, Response } from 'express'
import globalErrorHandlers from './middlewares/globalErrorHandlers';

const app = express();

// Routes
//Http method : GET, POST, PUT, PATCH, DELETE
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('/', (req, res, next) => {
    
    res.json({message: "This is for only testting purpose only and we can try out most....", value: " Here it's "});
    
});

// Global error handler
// Middleware

app.use(globalErrorHandlers);

export default app;