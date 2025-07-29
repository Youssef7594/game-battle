
import { Component } from '@angular/core';
/* import { Players } from 'src/app/pages/player'; */

@Component({
  selector: 'app-player',
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  player: Players;
  adversaire: Players;

  constructor() {
    // ✅ Création d’un joueur
    this.player = new Players(1, "Héros", 100);
    this.adversaire = new Players(2, "Énemie", 100)
  }

  attaquer() {
    this.adversaire.pv -= this.player.attack;
  };

}




export class Players{
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

  


  


};



