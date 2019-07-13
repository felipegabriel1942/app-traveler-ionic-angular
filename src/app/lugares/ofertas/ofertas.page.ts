import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../lugares.service';
import { Lugar } from '../lugar.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  ofertas: Lugar[];

  constructor(private lugaresService: LugaresService,
              private router: Router) { }

  ngOnInit() {
    this.ofertas = this.lugaresService.lugares;
  }

  onEdit(ofertaId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'lugares', 'tabs', 'ofertas', 'editar', ofertaId]);
    console.log('Editando item', ofertaId);
  }

}
