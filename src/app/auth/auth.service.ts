import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  statusAutenticacaoUsuario = false;


  constructor() { }

  login() {
    this.statusAutenticacaoUsuario = true;
  }

  logout() {
    this.statusAutenticacaoUsuario = false;
  }
}
