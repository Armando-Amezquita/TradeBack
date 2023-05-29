import boom from '@hapi/boom';
import { config } from 'dotenv';

export function withErrorStack(error, stack){
    if(config.dev){
        return { ... error, stack};
    }

    return error;
}

export function logErrors(err, req, res, next){
    console.log(err);
    next(err);
}

export function wrapErrors(err, req, res, next){
    if(!err.isBoom){
        next(boom.badImplementation(err));
    } 
    next(err);
}

export function errorHandler(err, req, res, next){
    const {
        output: {statusCode, payload}
    } = err;
    res.status(statusCode);
    res.json(withErrorStack(payload, err.stack));
}



