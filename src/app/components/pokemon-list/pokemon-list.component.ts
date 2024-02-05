import { Component } from '@angular/core';

export interface Pokemon {
  name: string;
  gender: string;
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  newPokemonName?: string;
  isPokemonAdded = false;
  isPokemonDeleted = false;
  genders = ['male', 'female'];

  pokemons: Pokemon[] = [];

  addPokemon() {
    if (this.newPokemonName === undefined) return;
    this.pokemons.push({
      name: this.newPokemonName,
      gender: this.getRandomIndexInArray(this.genders),
    });
    this.showAddedPokemonNotif();
  }

  showAddedPokemonNotif() {
    this.isPokemonAdded = true;
    setTimeout(() => {
      this.isPokemonAdded = false;
    }, 3000);
  }

  showDeletedPokemonNotif() {
    this.isPokemonDeleted = true;
    setTimeout(() => {
      this.isPokemonDeleted = false;
    }, 3000);
  }

  onPokemonDelete(index: number) {
    this.pokemons.splice(index, 1);
    this.showDeletedPokemonNotif();
  }

  getRandomIndexInArray(array: string[]) {
    return array[Math.floor(Math.random() * array.length)];
  }
}
