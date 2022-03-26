import { HttpStatus } from '@nestjs/common';

export function mongoDbError(err: any): {
  status: number;
  message: string;
} {
  // Duplicate key value
  if (err.code === 11000) {
    const [[key, value]] = Object.entries(err.keyValue);
    return {
      message: `${key} with value: ${value} already exist!`,
      status: HttpStatus.CONFLICT,
    };
  }
  return { message: err.message || 'Something went wrong', status: 500 };
}

interface ServiceErrorHandler {
  status: number;
  message: string;
}

export function serviceErrorHandler(err: any): ServiceErrorHandler {
  try {
    switch (err.name) {
      case 'MongoServerError':
        return mongoDbError(err);
      case 'CastError':
        return {
          message: err.message || 'Something went wrong',
          status: 500,
        };
    }
    return { status: 500, message: err.message || 'Something went wrong' };
  } catch (error) {
    return { status: 500, message: err.message || 'Something went wrong' };
  }
}
