import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{pokemons[1]}}!</h1>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent implements OnInit{
  pokemons = ['bulbizarre','salameche'];
  
  ngOnInit()
  {
    console.table(this.pokemons)
    this.selectPokemon('bulbizarre');
    
  }

  selectPokemon(pokemonName: string)
  {
    console.log(`bien vu, ${pokemonName}`);
  }
}
