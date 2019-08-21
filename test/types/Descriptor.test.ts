import { mkNs } from '../common';
import Descriptor from '../../src/types/Descriptor';


const ns = mkNs('types.Descriptor');


test(ns('default', 'Gets instantiated and carries the name'), () => {
  const Foo = new Descriptor('Foo');

  expect(Foo).toBeInstanceOf(Descriptor);
  expect(Foo).toHaveProperty('name', 'Foo');
});
