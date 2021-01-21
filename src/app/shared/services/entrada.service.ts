import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Entrada } from '../interfaces/entrada';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  constructor(private httpClient: HttpClient) { }

  public recuperarEntradas(): Observable<Entrada[]> {

    return this.httpClient.get<Entrada[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
