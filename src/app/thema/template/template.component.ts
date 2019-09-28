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
    }
  ];
  }
}
