import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Lugar } from '../../lugares/lugar.model';
import { ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-criar-reserva',
  templateUrl: './criar-reserva.component.html',
  styleUrls: ['./criar-reserva.component.scss'],
})
export class CriarReservaComponent implements OnInit {

  @Input() lugarSelecionado: Lugar;
  @Input() modoSelecionado: 'select' | 'random';
  @ViewChild('f') form: NgForm;
  dataInicial: string;
  dataFinal: string;

  constructor(private modalControler: ModalController) { }

  ngOnInit() {
    const disponivelDe = new Date(this.lugarSelecionado.disponivelDe);
    const disponivelAte = new Date(this.lugarSelecionado.disponivelAte);

    if (this.modoSelecionado === 'random') {
      this.dataInicial = new Date(
        disponivelDe.getTime() +
        Math.random() *
          (disponivelAte.getTime() -
            7 * 24 * 60 * 60 * 1000 -
              disponivelDe.getTime())).toISOString();
      this.dataFinal =
      new Date(
        new Date (
          this.dataInicial).getTime() +
            Math.random() *
              (new Date(this.dataInicial).getTime()
                + 6 * 24 * 60 * 60 * 1000 -
                  new Date(this.dataInicial).getTime())).toISOString();
    } 
  }

  onCancel() {
    this.modalControler.dismiss(null, 'cancel');
  }

  onReservarLocal() {
    if (!this.form.valid || !this.validadorDeDatas) {
      return;
    }
    this.modalControler.dismiss({dados: {
      primeiroNome: this.form.value['primeiro-nome'],
      ultimoNome: this.form.value['sobrenome'],
      numeroDeHospedes: this.form.value['hospedes'],
      dataInicial: this.form.value['data-entrada'],
      dataFinal: this.form.value['data-saida']
    }}, 'confirm');
  }

  validadorDeDatas() {
    const dataInicial = new Date(this.form.value['data-entrada']);
    const dataFinal = new Date(this.form.value['data-saida']);
    return dataFinal > dataInicial;
  }
}
