import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  btnMenu: HTMLElement;
  contenedorEnlaces:HTMLElement;
  toggle:boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.btnMenu = document.getElementById('btn-menu');
    this.contenedorEnlaces = document.getElementById('enlaces');
  }

  openMenu(): void{
    console.log(`%cFue cliqueado!`, 'color: yellow;')
    if(this.toggle){
      this.contenedorEnlaces.classList.remove('menuOff');
      this.contenedorEnlaces.className = ('menuOn');
      this.toggle = false;
      return;
    }

    if(!this.toggle){
      this.contenedorEnlaces.className = ('menuOff');
      this.toggle = true;
      console.log(`%cManejo de error!
      Estado: ${this.toggle}`, 'color: red;')
      return;
    }
  }

  clickDetected(): void{
    if(this.toggle){
      this.contenedorEnlaces.classList.remove('menuOff');
      this.contenedorEnlaces.className = ('menuOn');
      this.toggle = false;
      return;
    }
  }

}
