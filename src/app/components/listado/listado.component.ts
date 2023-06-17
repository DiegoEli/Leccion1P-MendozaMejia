import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  form!: FormGroup;
  cedula = "";
  nombre = "";
  apellido = "";
  fechaNacimiento = "";
  nacionalidad = "";
  listaPersonas: Persona[] = [];
  listapersonasEliminadas: Persona[] = [];

  ngOnInit(): void {
    this.form = new FormGroup({
      cedula: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      fechaNacimiento: new FormControl('', Validators.required),
      nacionalidad: new FormControl('', Validators.required),
    })
  }

  agregarPersona() {
    const persona: Persona = {
      cedula: this.form.value.cedula,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      fechaNacimiento: this.form.value.fechaNacimiento,
      nacionalidad: this.form.value.nacionalidad,
      estado: true,
    }
    this.listaPersonas.push(persona);
    console.log(persona);
  }

  eliminarPersona(indice: number, persona: Persona): void {
    this.listapersonasEliminadas.push(persona);
    console.log(this.listapersonasEliminadas);
    this.listaPersonas.splice(indice, 1);
  }
}

