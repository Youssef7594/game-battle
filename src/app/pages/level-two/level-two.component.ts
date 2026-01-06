import { Component } from '@angular/core';
import { PlayerComponent } from '../player/player.component'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-level-two',
  imports: [PlayerComponent],
  templateUrl: './level-two.component.html',
  styleUrl: './level-two.component.css'
})
export class LevelTwoComponent {

  player: Players;
  
  adversairetwo: Players;

  constructor(private router:Router) {
    // ✅ Création d’un joueur
    this.player = new Players(1, "Hero", 100);
    
    this.adversairetwo = new Players(3, "Opponent-two", 150)
  }


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


  /* The attack of the opponent */
  attaquerThePlayer() {
    this.player.pv -= adversairetwo.attack; 

    // Vérifier si l'adversaire est mort player.attack
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

  

  export class adversairetwo{
    id : number ;
    nom : string ;
    attack : number ;
    pv : number ;
  
  
  
  
    constructor(id: number, nom: string, pv: number ){
      this.id = id;
      this.nom = nom;
      this.pv = pv;
      // Génère une attaque aléatoire entre 40 et 70
      this.attack = Math.floor(Math.random() * (70 - 40 + 1)) + 30;
  
      
    }


  


}






