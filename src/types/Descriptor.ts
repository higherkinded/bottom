import INamed from '../interfaces/INamed';

export default class Descriptor implements INamed {
  public name: string;
  constructor(name: string) { this.name = name; }
}
