import { set } from "./set";

describe("set", () => {
  it("exports a random environment variable", () => {
    set("test");

    expect(process.env.test).toBeTruthy();
    expect(process.env.test?.length).toBe(32);
  });

  it("exports a random environment variable", () => {
    set("test1\ntest2");

    expect(process.env.test1).toBeTruthy();
    expect(process.env.test1?.length).toBe(32);

    expect(process.env.test2).toBeTruthy();
    expect(process.env.test2?.length).toBe(32);
  });
});
