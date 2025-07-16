import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  player: players[] = [] ;

}

export class players{
  id : number ;
  nom : string ;
  attack : number ;
  pv : number ;
  



}





export class Bien {
  id : number ;
  nom : string;
  localisation : string ;
  image : string ;
  prix : string ;
  slug : string ;
  caracteristique : string ;
  type : string ;


  constructor(id : number, nom : string, localisation : string, image : string, prix : string, slug : string, caracteristique : string, type : string ) {
    this.id = id;
    this.nom = nom;
    this.localisation = localisation;
    this.image = image;
    this.prix = prix;
    this.slug = slug;
    this.caracteristique = caracteristique;
    this.type = type

  } */
/*}  */