import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

//bcrypt
@Injectable()
export class AuthService {
  constructor(private http: HttpService) {}

  async login(username: string, password: string) {
    const { data } = await firstValueFrom(
      this.http.post(
        'http://host.docker.internal:8086/auth/realms/dicenter/protocol/openid-connect/token',
        new URLSearchParams({
          client_id: 'nest2',
          client_secret: process.env.CLIENT_SECRET,
          grant_type: 'password',
          username,
          password,
        }),
      ),
    );
    return data;
  }
}
