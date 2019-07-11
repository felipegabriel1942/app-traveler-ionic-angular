import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../lugares.service';
import { Lugar } from '../lugar.model';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  ofertas: Lugar[];

  constructor(private lugaresService: LugaresService) { }

  ngOnInit() {
    this.ofertas = this.lugaresService.lugares;
  }

}
