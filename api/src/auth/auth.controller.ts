import { Controller, Post, Body } from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './dtos/auth';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  signup(@Body() body: SignUpDTO) {
    this.authService.signup(body);
    return body;
  }

  @Post('signin')
  signin(@Body() body: SignInDTO) {
    this.authService.signin(body);
    return body;
  }
}
