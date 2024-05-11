import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(email: any, password: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
