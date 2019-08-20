import Named from './interfaces/Named';

import NotImplemented from './types/NotImplemented';
import Descriptor from './types/Descriptor';
import { Args } from './types/common';

import {
  Callable,
  Class,
  Function,
  Method,
} from './constants/descriptors';


/** Factory for bottom factories. */
const __bottom = (d: Descriptor) => (n?: string, b?: string) =>
  <R>(..._: Args): R => { throw new NotImplemented(d, n, b) };


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
export const bottom = __bottom(Callable)();


export const bottomFn = (name: string) => __bottom(Function)(name);


export const bottomMethod = (name: string, owner: string) =>
  __bottom(Method)(name, owner);


export class Bottom implements Named {
  name: string = '';
  constructor(..._: Args) {
    __bottom(Class)(this.name)();
  }
}
