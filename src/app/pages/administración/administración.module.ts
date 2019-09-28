import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministraciónRoutingModule } from './administración-routing.module';
import { ModulosComponent } from './modulos/modulos.component';
import { RolesComponent } from './roles/roles.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  declarations: [
    ModulosComponent,
    RolesComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    AdministraciónRoutingModule
  ]
})
export class AdministraciónModule { }
