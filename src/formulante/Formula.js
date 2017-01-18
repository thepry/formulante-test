import Base from './Base'

export default class Formula extends Base {
  constructor(getter, ...args) {
    super();
    this.value = () => {
      return getter(...this.mapArgs(args))
    };

    const subscribeToArg = (arg) => {
      if (arg._isFormulante) {
        arg.on('change', () => { return this.emit('change') })
      }
    }
    args.forEach(subscribeToArg);
  }

  mapArgs(args) {
    return args.map(
      (arg) => {
        return arg._isFormulante ? arg.value() : arg;
      }
    );
  }
}
