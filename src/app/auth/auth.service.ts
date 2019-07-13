import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  statusAutenticacaoUsuario = true;


  constructor() { }

  login() {
    this.statusAutenticacaoUsuario = true;
  }

  logout() {
    this.statusAutenticacaoUsuario = false;
  }
}
