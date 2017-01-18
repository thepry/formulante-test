import Base from './Base'

export default class Cell extends Base {
  constructor(initialValue, getter = (val) => { return val }) {
    super();
    this._value = initialValue;
    this.value = () => { return getter(this._value) };
  }

  set(val) {
    this._value = val;
    this.emit('change');

    return this;
  }
}
