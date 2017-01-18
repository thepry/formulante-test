import events from 'minivents';

export default class Base {
  constructor() {
    this._isFormulante = true
    events(this);
  }
}
