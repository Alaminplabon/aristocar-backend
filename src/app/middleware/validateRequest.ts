import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
import catchAsync from '../utils/catchAsync';

const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body,'reqlboe');
    await schema.parseAsync({
      body: req.body,
      files: req.files,
      file: req.file,
      cookies: req.cookies,
    });

    next();
  });
};

export default validateRequest;
