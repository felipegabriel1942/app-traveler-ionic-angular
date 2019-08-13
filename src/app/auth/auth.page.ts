import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  estaCarrendo = false;
  isLogin = true;

  constructor(private authService: AuthService,
              private router: Router,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  onLogin() {
    this.estaCarrendo = true;
    this.authService.login();
    this.loadingCtrl
    .create({keyboardClose: true, message: 'Logando..'})
    .then(x => {
      x.present();
      setTimeout(() => {
        this.estaCarrendo = false;
        x.dismiss();
        this.router.navigateByUrl('/lugares/tabs/buscar');
      }, 1500);
    });
  }

  onSubmit(form: NgForm) {
    this.onLogin();
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const senha = form.value.senha;
    console.log(email, senha);

    if (this.isLogin) {

    } else {

    }
  }

  onTrocarAuthMode() {
    this.isLogin = !this.isLogin;
  }
}
