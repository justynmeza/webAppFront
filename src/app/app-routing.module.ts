import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFountComponent } from './shared/not-fount/not-fount.component';
import { TemplateComponent } from './thema/template/template.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'pages',
    component: TemplateComponent,
    children: [
      {
      path: 'biblioteca',
      loadChildren: './pages/biblioteca/biblioteca.module#BibliotecaModule'
      }
    ]
  },
  {
    path: '**',
    component: NotFountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
