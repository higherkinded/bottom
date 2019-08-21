Bottom
=======

[![Check out on NPM](https://img.shields.io/bundlephobia/min/@higherkinded/bottom?color=green&label=bundle%20size&logo=npm)](https://www.npmjs.com/package/@higherkinded/bottom)
[![Check out on
NPM](https://img.shields.io/npm/v/@higherkinded/bottom/latest?logo=npm)](https://www.npmjs.com/package/@higherkinded/bottom)
[![License](https://img.shields.io/github/license/higherkinded/bottom)](https://github.com/higherkinded/bottom/blob/master/LICENSE)
[![Typedefs](https://img.shields.io/npm/types/@higherkinded/bottom?color=%232299ff&label=%20&logo=typescript)](https://www.typescriptlang.org)
[![JS Support](https://img.shields.io/badge/%20-JavaScript-%23efc500?logo=javascript&logoColor=%23fff)]()

_A set of easily pluggable and extremely touchy empty definitions._

## Naming

The name is ripped off the Haskell community's term for `undefined`. The idea
partially comes from there as well &mdash; a polymorphic value that can be put
anyplace to signify unimplemented functionality.

## Motivation

I've had a lot of situations where I had to implement some large module and had
to write the `bottom` function myself just to plug something in place of
implementation for some time. What was also quite important to it is to fend off
any accidental uses by causing the `bottom` to throw exceptions. Being tired of
rewriting this multiple time and, surprisingly, seeing no alternative
implementations (at all), I've written this library. It covers use cases of both
TypeScript bottom-related needs and JavaScript bottom-related needs.

## Getting a copy

The first couple of badges under the header both lead to the npm, essentially
giving that aspect away. But in case you want to copy-paste, here you go!

NPM:

```bash
npm i @higherkinded/bottom --save
```

Yarn:

```
yarn add @higherkinded/bottom
```

**The type definitions are bundled with the library**, so if you want some for
your TypeScript project, there's no need to reach for the `@types`, got you
covered. The whole package (with definition file and comparedly thick source
map) is around 13 Kb, not to mention that the library itself targets development
versions only, so I suppose that there's no problem in serving the whole bunch
at once.

## How do I?

So how to use it? In case of TypeScript functions, it will be...

```typescript
import { bottom, bottomFn } from 'bottom';


// ...like this:
const product: (...args: number[]) => number = bottom;


// Or like this:
const someComplexProcedure = <A, B, C, R>(a: A, b: B, c: C): R => {
  /* 
    ...
    
    Some partial implementation here
    
    ...
  */
  
  return bottom();
};


// Or perhaps you want to carry the name?
const namedFunction: <A, R>(a: A): R = bottomFn('namedFunction');


// Also OK in return statement:
const someNamedProcedure = <A, B, C, R>(a: A, b: B, c: C): R => {
  /* 
    ...
    
    Some partial implementation here
    
    ...
  */
  
  return bottomFn('someNamedProcedure')();
};
```

For classes, you have these options:

```typescript
import { Bottom, bottomMethod } from 'bottom';

// Declared but unimplemented and uninstantiable class
class Foo extends Bottom {

  /* Bottom-ed method of a class, carrying the info about who they are and who
     owns them. */
  static someMethod = bottomMethod('someMethod', 'Foo');

}
```
