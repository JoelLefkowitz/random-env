import * as core from "@actions/core";

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

  it("handles incorrect types gracefully", () => {
    const setFailed = jest.spyOn(core, "setFailed");
    const exit = jest.spyOn(process, "exit").mockImplementation();

    set("123");

    expect(setFailed).toHaveBeenCalledWith("Invalid identifier name: 123");
    expect(exit).toHaveBeenCalledWith(1);
  });
});
