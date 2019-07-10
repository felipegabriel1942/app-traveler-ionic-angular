import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lugar-detalhes',
  templateUrl: './lugar-detalhes.page.html',
  styleUrls: ['./lugar-detalhes.page.scss'],
})
export class LugarDetalhesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onReservar() {
    this.navCtrl.navigateBack('/lugares/tabs/buscar');
  }
}
