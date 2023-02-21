import { set } from "./set";

const names = process.env.INPUT_NAMES;

if (names) {
  set(names);
}
