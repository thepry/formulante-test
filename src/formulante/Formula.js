import Base from './Base'

export default class Formula extends Base {
  constructor(getter, ...args) {
    super();
    this.value = () => getter(...this.mapArgs(args));
    args.forEach(this._subscribeToArg);
  }

  _subscribeToArg = (arg) => {
    if (arg._isFormulante) {
      arg.on('change', () => this.trigger('change'))
    }
  }

  mapArgs = (args) => {
    return args.map(
      (arg) => arg._isFormulante ? arg.value() : arg
    );
  }
}
