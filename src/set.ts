import { exportVariable, setFailed } from "@actions/core";
import { lines } from "./strings";
import { randomBytes } from "crypto";

export const set = (names: string): void => {
  lines(names).forEach((name: string) => {
    if (/[a-zA-Z_]+[a-zA-Z0-9_]*/u.test(name)) {
      console.log(`Setting a random value for: ${name}`);
      exportVariable(name, randomBytes(16).toString("hex"));
    } else {
      setFailed(`Invalid identifier name: ${name}`);
      process.exit(1);
    }
  });
};
