import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
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
              private modalControler: ModalController,
              private actionSheetCtrl: ActionSheetController) { }

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
    this.actionSheetCtrl.create({
      header: 'Escolha uma ação',
      buttons: [
        {
          text: 'Selecione data',
          handler: () => {
            this.openModalReserva('select');
          }
        },
        {
          text: 'Data aleatoria',
          handler: () => {
            this.openModalReserva('random');
          }
        },
        {
          text: 'Cancelar',
          role: 'destructive'
        }
      ]
    }).then(x => {
      x.present();
    });
  }

    openModalReserva(mode: 'select' | 'random') {
      this.modalControler
      .create({
        component: CriarReservaComponent,
        componentProps: {lugarSelecionado: this.lugar, modoSelecionado: mode }
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
