import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Entradas } from '../interfaces/entrada';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  constructor(private httpClient: HttpClient) { }

  public recuperarEntradas(): Observable<Entradas> {

    return this.httpClient.get<Entradas>('assets/json/entradas.json');
  }
}
