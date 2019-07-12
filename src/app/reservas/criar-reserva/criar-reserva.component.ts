import { Component, OnInit, Input } from '@angular/core';
import { Lugar } from '../../lugares/lugar.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-criar-reserva',
  templateUrl: './criar-reserva.component.html',
  styleUrls: ['./criar-reserva.component.scss'],
})
export class CriarReservaComponent implements OnInit {

  @Input() lugarSelecionado: Lugar;

  constructor(private modalControler: ModalController) { }

  ngOnInit() {}

  onCancel() {
    this.modalControler.dismiss(null, 'cancel');
  }

  onReservarLocal() {
    this.modalControler.dismiss({message: 'Esta é uma mensagem mocada!'}, 'confirm');
  }
}
