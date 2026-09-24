import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// La misma forma de datos del Mini-LMS, ahora en un componente Angular.
interface Estudiante {
	nombre: string;
	creditos: number;
  edad: number;
  nota: number[];
}

@Component({
	selector: 'app-root',
	imports: [CommonModule],
	templateUrl: './app.html',
	styleUrl: './app.css'
})
export class App {
	titulo = 'Mini-LMS · Lista de estudiantes';

	estudiantes: Estudiante[] = [
		{ nombre: 'María Torres', edad: 20, creditos: 18, nota:[15,20,10] },
		{ nombre: 'Luis Pérez', edad: 22, creditos: 8, nota: [10,15,20] },
		{ nombre: 'Ana Ruiz', edad: 19, creditos: 14, nota: [20,15,5] }
	];

	// Misma regla de matrícula de la Unidad 1, ahora como método del

	estado(creditos: number): string {
		if (creditos < 1 || creditos > 24) {
			return 'Créditos inválidos';
		} else if (creditos >= 12) {
			return 'Matriculado';
		}

		return 'Pendiente';
	}
  estadoEdad(edad: number): string {
    if (edad < 18) {
      return 'Menor de edad';
    } else if (edad >= 18 && edad <= 25) {
      return 'Mayor';
    } else {
      return 'Menor';
    }
  }
  promedio(notas: number[]): number {
    const suma = notas.reduce((acc, nota) => acc + nota, 0);
    return suma / notas.length;
  }
}