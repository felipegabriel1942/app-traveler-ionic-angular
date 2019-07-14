import { Component, OnInit, Input } from '@angular/core';
import { Lugar } from '../../lugar.model';

@Component({
  selector: 'app-oferta-item',
  templateUrl: './oferta-item.component.html',
  styleUrls: ['./oferta-item.component.scss'],
})
export class OfertaItemComponent implements OnInit {

  @Input() oferta: Lugar;


  constructor() { }

  ngOnInit() {}

  getDate() {
    return new Date();
  }

}
