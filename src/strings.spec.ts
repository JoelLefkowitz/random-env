import { lines } from "./strings";

describe("lines", () => {
  it("splits lines and remove whitespace.", () => {
    expect(lines("abc")).toEqual(["abc"]);
    expect(lines("abc\ndef")).toEqual(["abc", "def"]);
    expect(lines("abc \n def")).toEqual(["abc", "def"]);
    expect(lines("abc\n\ndef")).toEqual(["abc", "def"]);
    expect(lines(" abc\ndef ")).toEqual(["abc", "def"]);
  });
});
