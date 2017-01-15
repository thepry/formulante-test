import Base from './Base'

export default class Cell extends Base {
  constructor(initialValue, getter = (x) => x) {
    super();
    this._value = initialValue;
    this.value = () => getter(this._value);
  }

  set = (val) => {
    this._value = val;
    this.trigger('change');
    return this;
  };
}
