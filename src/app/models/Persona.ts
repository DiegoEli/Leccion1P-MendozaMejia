export class Persona {
    cedula: string;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    nacionalidad: string;
    estado: boolean;

    constructor(cedula: string, nombre: string, apellido: string, fechaNacimiento: Date, nacionalidad :string, estado: boolean) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.nacionalidad = nacionalidad;
        this.estado = estado;

    }
}