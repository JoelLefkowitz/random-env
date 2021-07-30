import * as core from '@actions/core';
import * as crypto from 'crypto';

import { isValidIdentifier } from './utils/identifiers';
import { splitLines } from './utils/strings';

export function main(): void {
  if ('INPUT_NAMES' in process.env) {
    splitLines(process.env.INPUT_NAMES).forEach((name: string) => {
    
      if (isValidIdentifier(name)) {
        console.log(`Setting a random value for: ${name}`)
        core.exportVariable(name, crypto.randomBytes(16).toString('hex'));
      } else {
        core.setFailed(`Invalid identifier name: ${name}`);
        process.exit(1);
      }
    });
  }
}

if (typeof require !== 'undefined' && require.main === module) {
  main();
}
