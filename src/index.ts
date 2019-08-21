// @public
export * from './bottoms';

import {
  Callable,
  Class,
  Function,
  Method,
} from './constants/descriptors';
export const descriptors = { Callable, Class, Function, Method };

export { default as Descriptor } from './types/Descriptor';
export { default as NotImplemented } from './types/NotImplemented';
export * from './types/common';

export { default as INamed } from './interfaces/INamed';
