import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AulasComponent } from './aulas/aulas.component';
import { DocentesComponent } from './docentes/docentes.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { GradosComponent } from './grados/grados.component';
import { MateriasComponent } from './materias/materias.component';


const routes: Routes = [
  {
    path: 'aulas',
    component: AulasComponent
  },
  {
    path: 'docentes',
    component: DocentesComponent
  },
  {
    path: 'estudiantes',
    component: EstudiantesComponent
  },
  {
    path: 'grados',
    component: GradosComponent
  },
  {
    path: 'materias',
    component: MateriasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicoRoutingModule { }
