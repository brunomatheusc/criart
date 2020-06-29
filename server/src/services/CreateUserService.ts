import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from './../models/User';
import UsersRepository from './../repositories/UsersRepository';
import AppError from './../errors/AppError';

interface Request {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	avatar: string;
}

export default class CreateUserService {
	public async execute(newUser: Request): Promise<User> {
		const usersRepository = getCustomRepository(UsersRepository);
		const { name, email, avatar, password, confirmPassword } = newUser;

		if (password !== confirmPassword) {
			throw new AppError('Senha e confirmação de senhas não conferem');
		}

		const checkUserExists = await usersRepository.findOne({ where: { email }});

		if (checkUserExists){
			throw new AppError('E-mail address already used');
		}

		const hashedPassword = await hash(password, 8);

		const user = await usersRepository.createUser({ name, email, avatar, password: hashedPassword });

		return user;
	}
}