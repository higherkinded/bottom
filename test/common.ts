export const mkNs = (ns: string) =>
  (name: string, what?: string) =>
    `${ns}.${name}${what && ': ' + what}`;
