import { mkNs } from './common';
import { bottom, bottomFn, bottomMethod, Bottom } from '../src/bottoms';
import { NotImplemented } from '../src';


const ns = mkNs('bottoms');
const instantiate = <A>(Constr: new () => A) => () => new Constr();


test(ns('bottom', 'Throws exception'), () =>
  expect(bottom).toThrow(NotImplemented),
);

test(ns('bottomFn', 'Throws exception'), () =>
  expect(bottomFn('namedFunction')).toThrow(NotImplemented),
);

test(ns('bottomMethod', 'Throws exception'), () =>
  expect(bottomMethod('namedMethod', 'OwnerClass')).toThrow(NotImplemented),
);

test(ns('Bottom', 'Base instantiation throws exception'), () =>
  expect(instantiate(Bottom)).toThrow(NotImplemented),
);

test(ns('Bottom', 'Derived class instantiation throws exception'), () => {
  class Derived extends Bottom { }
  expect(instantiate(Derived)).toThrow(NotImplemented);
});
