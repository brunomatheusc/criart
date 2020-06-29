import 'reflect-metadata';

import express, { Application, Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes';
import uploadConfig from './config/upload';

import './database';
import AppError from './errors/AppError';

class App {
	public server: Application;

	constructor() {
		this.server = express();
		this.server.use(express.json());
		this.server.use(cors());

		this.routes();
		this.middlewares();
		this.server.use(this.error);
	}

	routes() {
		this.server.use(routes);
	}

	upload() {
		this.server.use('/files', express.static(uploadConfig.directory));
	}

	middlewares() {

	}

	error(err: Error, req: Request, res: Response, next: NextFunction) {
		if (err instanceof AppError) {
			res.status(err.statusCode).json({ status: 'error', message: err.message });
		}
	
		console.log(err);
	
		return res.status(500).json({ status: 'error', message: 'Internal server error' });	
	}
}

export default new App().server;