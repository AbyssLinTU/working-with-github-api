import { Injectable } from '@angular/core';
const LS_FAV_KEY = 'LS_FAV_KEY';
interface IState {
  favorites: string[];
}

@Injectable({ providedIn: 'root' })
export class StateService {
  private _state: IState = {
    favorites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]'),
  };

  getState() {
    return this._state;
  }

  setState(data: IState) {
    this._state = data;
  }
  addFavorites(id: number) {
    this._state.favorites.push(id.toString());
    localStorage.setItem(LS_FAV_KEY, JSON.stringify(this._state.favorites));
  }
  removeFavorites(id: number) {
    this._state.favorites = this._state.favorites.filter(
      (f) => f != id.toString()
    );
    localStorage.setItem(LS_FAV_KEY, JSON.stringify(this._state.favorites));
  }
}
