
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  adversairetwo: Players;

  constructor(private router:Router) {
    // ✅ Création d’un joueur
    this.player = new Players(1, "Hero", 100);
    this.adversaire = new Players(2, "Opponent", 100);
    this.adversairetwo = new Players(3, "Opponent-two", 150)
  }

  attaquer() {
    this.adversaire.pv -= this.player.attack;

    // Vérifier si l'adversaire est mort
    if (this.adversaire.pv <= 0) {
      this.router.navigate(['/level-two']);
    }

    

    // Vérifier si le joueur est mort
    if (this.player.pv <= 0) {
      this.router.navigate(['/lose']);
    }
  };


  attaquerTwo() {
    this.adversairetwo.pv -= this.player.attack;

    // Vérifier si l'adversaire est mort
    if (this.adversairetwo.pv <= 0) {
      this.router.navigate(['/home']);
    }

    // Vérifier si le joueur est mort
    if (this.player.pv <= 0) {
      this.router.navigate(['/lose']);
    }
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



