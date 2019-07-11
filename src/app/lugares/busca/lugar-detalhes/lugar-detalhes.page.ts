import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LugaresService } from '../../lugares.service';
import { Lugar } from '../../lugar.model';

@Component({
  selector: 'app-lugar-detalhes',
  templateUrl: './lugar-detalhes.page.html',
  styleUrls: ['./lugar-detalhes.page.scss'],
})
export class LugarDetalhesPage implements OnInit {
  lugar = new Lugar();

  constructor(private navCtrl: NavController,
              private route: ActivatedRoute,
              private lugaresService: LugaresService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('lugarId')) {
        this.navCtrl.navigateBack('/lugares/tabs/buscar');
        return;
      }
      this.lugar = this.lugaresService.getLugar(paramMap.get('lugarId'));
    });
  }

  onReservar() {
    this.navCtrl.navigateBack('/lugares/tabs/buscar');
  }
}
