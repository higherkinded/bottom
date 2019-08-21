import Descriptor from '../types/Descriptor';

export const Callable = new Descriptor('Callable');
export const Function = new Descriptor('Function');
export const Method = new Descriptor('Method');
export const Class = new Descriptor('Class');

const descriptors = {
  Callable,
  Class,
  Function,
  Method,
};

export default descriptors;
