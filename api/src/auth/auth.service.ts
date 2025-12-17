import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './dtos/auth';

@Injectable()
export class AuthService {
  signup(data: SignUpDTO) {
    console.log(data.email);
    return 'signup';
  }

  signin(data: SignInDTO) {
    if (data.email !== 'admin' || data.password !== 'admin') {
      throw new UnauthorizedException('email ou senha inválidos');
    }
    return {
      message: 'login ok',
    };
  }
}
