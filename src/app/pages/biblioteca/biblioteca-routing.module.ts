import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorialComponent } from './editorial/editorial.component';
import { AutoresComponent } from './autores/autores.component';
import { TipoComponent } from './tipo/tipo.component';
import { AreasComponent } from './areas/areas.component';
import { LibrosComponent } from './libros/libros.component';
import { ExistenciaComponent } from './existencia/existencia.component';


const routes: Routes = [
  {
    path: 'editorial',
    component: EditorialComponent
},
{
  path: 'autores',
  component: AutoresComponent
},
{
  path: 'tipo',
  component: TipoComponent
},
{
  path: 'areas',
  component: AreasComponent
},
{
  path: 'libros',
  component: LibrosComponent
},
{
  path: 'exixtencia',
  component: ExistenciaComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaRoutingModule { }
