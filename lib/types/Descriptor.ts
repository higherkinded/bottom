import Named from '../interfaces/Named';

export default class Descriptor implements Named {
  name: string;
  constructor(name: string) { this.name = name; }
}
