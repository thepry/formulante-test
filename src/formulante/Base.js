import underscore from 'underscore';
import Backbone from 'backbone'

export default class Base {
  constructor() {
    this._isFormulante = true
    underscore.extend(this, Backbone.Events);
  }
}
