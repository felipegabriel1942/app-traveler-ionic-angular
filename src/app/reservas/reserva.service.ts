import { Injectable } from '@angular/core';
import { Reserva } from './reserva.model';

@Injectable({ providedIn: 'root'})
export class ReservaService {
    private reservas = new Array<Reserva>();

    dadosReservas(): any[] {
        this.reservas.push(new Reserva('1', '1', '1', 'Porto de galinhas', 3));
        return this.reservas;
    }
}
