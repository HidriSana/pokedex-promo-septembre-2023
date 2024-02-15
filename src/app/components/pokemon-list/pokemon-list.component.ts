import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { LoggingService } from 'src/app/services/logging.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  newPokemonName?: string;
  isPokemonAdded = false;
  isPokemonDeleted = false;

  pokemons: Pokemon[] = this.pokemonService.pokemons;

  constructor(
    private pokemonService: PokemonService,
    private notificationsService: NotificationsService
  ) {}

  onAddPokemonBtnClick() {
    if (this.newPokemonName === undefined) return;
    this.pokemonService.addPokemon(this.newPokemonName);
    this.notificationsService.showAddingNotif();
  }

  onPokemonDelete(index: number) {
    this.pokemonService.deletePokemon(index);
    this.notificationsService.showDeletingNotif();
  }

  showDeletedPokemonNotif() {
    this.isPokemonDeleted = true;
    setTimeout(() => {
      this.isPokemonDeleted = false;
    }, 3000);
  }
  getAddingNotifications() {
    return this.notificationsService.isDataAdded;
  }

  getDeletingNotifications() {
    return this.notificationsService.isDataDeleted;
  }
}
