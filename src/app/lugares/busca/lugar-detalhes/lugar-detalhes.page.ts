import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { LugaresService } from '../../lugares.service';
import { Lugar } from '../../lugar.model';
import { CriarReservaComponent } from '../../../reservas/criar-reserva/criar-reserva.component';

@Component({
  selector: 'app-lugar-detalhes',
  templateUrl: './lugar-detalhes.page.html',
  styleUrls: ['./lugar-detalhes.page.scss'],
})
export class LugarDetalhesPage implements OnInit {
  lugar = new Lugar();

  constructor(private navCtrl: NavController,
              private route: ActivatedRoute,
              private lugaresService: LugaresService,
              private modalControler: ModalController) { }

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
    this.modalControler
      .create({
        component: CriarReservaComponent,
        componentProps: { lugarSelecionado: this.lugar}
      })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm') {
          console.log('BOOKED!');
        }
      });
    }
}
