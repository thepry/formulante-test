import Events from 'minivents';

export default class Base {
  constructor() {
    this._isFormulante = true
    Events(this);
  }
}
