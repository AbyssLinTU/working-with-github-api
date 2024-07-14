import { Injectable } from '@angular/core';
interface IState {}

@Injectable({ providedIn: 'root' })
export class StateService {
  private _state: IState = {};

  getState() {
    return this._state;
  }

  setState(data: IState) {
    this._state = data;
  }
}
