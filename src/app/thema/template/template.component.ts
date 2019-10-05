import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

 public menu = [];
  constructor() { }

  ngOnInit() {
    this.menu = this.getmenu();
  }

  getmenu(){
    return[
    {
    description: 'dashboard',
    link: '/pages/dashboard',
    child: false,
    childrens: []
    },
    {
      description: 'biblioteca',
      link: '',
      child: true,
      childrens: [
      {  
        description: 'Areas',
        link: '/pages/biblioteca/areas'
      },
      {
        description: 'Autores',
        link: '/pages/biblioteca/autores'
      },
      {
        description: 'Editorial',
        link: '/pages/biblioteca/editorial'
      },
      {
        description: 'Libros',
        link: '/pages/biblioteca/libros'
      }  
      ]
    },
    {
     description: 'academico',
     link: '',
     child: true,
     childrens: [
       {
         description: 'Aulas',
         link: '/pages/academico/aulas'
       },
       {
         description:'Docentes',
         link: '/pages/academico/docentes'
       },
       {
         description:'Estudiantes',
         link:'/pages/academico/estudiantes'
       },
       {
        description:'Grados',
        link:'/pages/academico/grados'
       },
       {
         description:'Materias',
         link:'/pages/academico/materias'
       } 
     ], 
    },
    {
      description:'Administración',
      link:'',
      child: true,
      childrens:[
        {
          description:'Modulos',
          link:'/pages/administración/modulos'
        },
        {
          description:'Roles',
          link:'/pages/administración/roles'
        },
        {
          description:'Usuarios',
          link:'/pages/administración/usuarios'
        }
      ]
    }
  ];
  }
}
