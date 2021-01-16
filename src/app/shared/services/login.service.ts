import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public login(usuario: Usuario): Observable<number> {

    return of(Math.random() * (1000-0));
  }
}
