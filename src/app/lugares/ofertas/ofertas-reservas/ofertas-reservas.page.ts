import { Component, OnInit } from '@angular/core';
import { Lugar } from '../../lugar.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LugaresService } from '../../lugares.service';

@Component({
  selector: 'app-ofertas-reservas',
  templateUrl: './ofertas-reservas.page.html',
  styleUrls: ['./ofertas-reservas.page.scss'],
})
export class OfertasReservasPage implements OnInit {
  lugar = new Lugar();

  constructor(private route: ActivatedRoute,
              private navCtrl: NavController,
              private lugaresService: LugaresService) { }

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
