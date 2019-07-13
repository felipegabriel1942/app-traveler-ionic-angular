import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../lugares.service';
import { Lugar } from '../lugar.model';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})
export class BuscaPage implements OnInit {

  lugaresCarregados: Lugar[];
  lugaresCarregadosListados: Lugar[];

  constructor(private lugaresService: LugaresService) { }

  ngOnInit() {
    this.lugaresCarregados = this.lugaresService.lugares;
    this.lugaresCarregadosListados = this.lugaresCarregados.slice(1);
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }

}
