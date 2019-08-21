import { Class, Function, Method } from '../constants/descriptors';
import Descriptor from './Descriptor';

const _gNi = (w: Descriptor, n?: string, o?: string): string =>
  `${w.name} '${n}'${o ? (' of ' + o) : ''} is not implemented`;

export default class NotImplemented extends Error {
  constructor(what: Descriptor, name?: string, owner?: string) {
    if (name && name.length) {
      switch (what) {
        case Class:
          super(_gNi(what, name));
          return;
        case Function:
          super(_gNi(what, name));
          return;
        case Method:
          super(_gNi(what, name, owner));
          return;
      }
    }
    super('Not implemented');
  }
}
