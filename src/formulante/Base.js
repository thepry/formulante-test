import _ from 'underscore';
import Backbone from 'backbone'

export default class Base {
  constructor() {
    _.extend(this, Backbone.Events);
  }

  _isFormulante = true
}
