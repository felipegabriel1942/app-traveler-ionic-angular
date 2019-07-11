import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LugaresService } from '../../lugares.service';
import { Lugar } from '../../lugar.model';

@Component({
  selector: 'app-editar-oferta',
  templateUrl: './editar-oferta.page.html',
  styleUrls: ['./editar-oferta.page.scss'],
})
export class EditarOfertaPage implements OnInit {
  lugar = new Lugar();

  constructor(private route: ActivatedRoute,
              private navCtrl: NavController,
              private lugaresService: LugaresService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('lugarId')) {
        this.navCtrl.navigateBack('/lugares/tabs/ofertas');
        return;
      }
      this.lugar = this.lugaresService.getLugar(paramMap.get('lugarId'));
    });
  }

}
