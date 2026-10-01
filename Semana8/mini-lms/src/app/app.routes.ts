import { Routes } from '@angular/router';
import { Lista } from './lista/lista';
import { Agregar } from './agregar/agregar';
import { Hola } from './hola/hola';

export const routes: Routes = [
 { path: '', component: Lista },
 { path: 'agregar', component: Agregar },
 { path: 'hola', component: Hola },
 { path: '**', redirectTo: '' }
];
