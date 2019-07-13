import { Component, OnInit } from '@angular/core';
import { ReservaService } from './reserva.service';
import { Reserva } from './reserva.model';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {

  reservasCarregadas = new Array<Reserva>();

  constructor(private reservaService: ReservaService) { }

  ngOnInit() {
    this.reservasCarregadas = this.reservaService.dadosReservas();
  }

  onCancelReserva(idReserva: string, slidingReserva: IonItemSliding) {
    slidingReserva.close();
  }
}
