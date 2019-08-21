import { mkNs } from '../common';
import * as desc from '../../src/constants/descriptors';
import NotImplemented from '../../src/types/NotImplemented';


const ns = mkNs('types.NotImplemented');


test(ns('default', 'Works correctly for Callable'), () => {
  const instance = new NotImplemented(desc.Callable);
  expect(instance).toBeInstanceOf(NotImplemented);
  expect(instance).toHaveProperty('message', 'Not implemented');
});

test(ns('default', 'Works correctly for Function when name is omitted'), () => {
  const instance = new NotImplemented(desc.Function);
  expect(instance).toBeInstanceOf(NotImplemented);
  expect(instance).toHaveProperty('message', 'Not implemented');
});

test(ns('default', 'Works correctly for Method when name is omitted'), () => {
  const instance = new NotImplemented(desc.Method);
  expect(instance).toBeInstanceOf(NotImplemented);
  expect(instance).toHaveProperty('message', 'Not implemented');
});

test(ns('default', 'Works correctly for Class when name is omitted'), () => {
  const instance = new NotImplemented(desc.Class);
  expect(instance).toBeInstanceOf(NotImplemented);
  expect(instance).toHaveProperty('message', 'Not implemented');
});

test(ns('default', 'Works correctly for Function with given name'), () => {
  const instance = new NotImplemented(desc.Function, 'namedFunction');
  expect(instance).toBeInstanceOf(NotImplemented);
  expect(instance).toHaveProperty(
    'message',
    `Function 'namedFunction' is not implemented`,
  );
});

test(ns('default', 'Works correctly for Class with given name'), () => {
  const instance = new NotImplemented(desc.Class, 'SomeClass');
  expect(instance).toBeInstanceOf(NotImplemented);
  expect(instance).toHaveProperty(
    'message',
    `Class 'SomeClass' is not implemented`,
  );
});

test(
  ns('default', 'Works correctly Method with given name and description'),
  () => {
    const instance = new NotImplemented(desc.Method, 'someMethod', 'SomeClass');
    expect(instance).toBeInstanceOf(NotImplemented);
    expect(instance).toHaveProperty(
      'message',
      `Method 'someMethod' of SomeClass is not implemented`,
    );
  },
);
