import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../lugares.service';
import { Lugar } from '../lugar.model';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})
export class BuscaPage implements OnInit {

  lugaresCarregados: Lugar[];

  constructor(private lugaresService: LugaresService) { }

  ngOnInit() {
    this.lugaresCarregados = this.lugaresService.lugares;
  }

}
