import INamed from './interfaces/INamed';

import { Args } from './types/common';
import Descriptor from './types/Descriptor';
import NotImplemented from './types/NotImplemented';

import {
  Callable,
  Class,
  Function,
  Method,
} from './constants/descriptors';

/** Factory for bottom factories. */
const _bottom = (d: Descriptor) => (n?: string, b?: string) =>
  <R>(..._: Args): R => { throw new NotImplemented(d, n, b); };

/**
 * Put in place of implementation or in place of tail `return` to indicate that
 * the function isn't implemented yet. Marginally useful in development vesions,
 * quite convenient in module development process. The resulting function bears
 * the return type inferred at the call site, making type checks pass so that
 * the developer can throw a couple bottoms in declaration spots, gradually
 * replacing them with the real implementations.
 *
 * @param _ - Any arguments. They are ignored.
 *
 * @throws    `NotImplemented`
 */
export const bottom = _bottom(Callable)();

export const bottomFn = (name: string) => _bottom(Function)(name);

export const bottomMethod = (name: string, owner: string) =>
  _bottom(Method)(name, owner);

export class Bottom implements INamed {
  public name: string = '';
  constructor(..._: Args) {
    _bottom(Class)(this.name)();
  }
}
