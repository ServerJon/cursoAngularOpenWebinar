export class Usuario {
  public nombre: string;
  public contrasegna: string;

  constructor() {
    this.nombre = '';
    this.contrasegna = '';
  }
}

/** Si no queréis que os salte el error de que debes de inicializar los atributos en el constructor añade este parámetro al tsconfig.json
 * en CompilerOptions
 * "strictPropertyInitialization": false
 */
