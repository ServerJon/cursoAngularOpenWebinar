import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/shared/classes/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Atributos
  public usuario: Usuario

  constructor() {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  public submit(): void {
    console.log('Usuario: ', this.usuario);
  }

}
