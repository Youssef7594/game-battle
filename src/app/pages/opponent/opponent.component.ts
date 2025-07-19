import { Component } from '@angular/core';

@Component({
  selector: 'app-opponent',
  imports: [],
  templateUrl: './opponent.component.html',
  styleUrl: './opponent.component.css'
})
export class OpponentComponent {
  opponent: opponents[] = [] ;

}


export class opponents{
  id : number ;
  nom : string ;
  attack : number ;
  pv : number ;




  constructor(id: number, nom: string, pv: number ){
    this.id = id;
    this.nom = nom;
    this.pv = pv;
    // Génère une attaque aléatoire entre 30 et 60
    this.attack = Math.floor(Math.random() * (60 - 30 + 1)) + 30;
  }



  


}
