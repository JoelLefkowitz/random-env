import * as chai from "chai";
import * as core from "@actions/core";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";

import { expect } from "chai";
import { main } from "./main";

chai.use(sinonChai);

describe("main", () => {
  let exit: sinon.SinonStub<[code?: number], never>;
  let setFailed: sinon.SinonStub<[message: string | Error], void>;

  beforeEach(() => {
    process.env = {};

    exit = sinon.stub(process, "exit");
    setFailed = sinon.stub(core, "setFailed");
  });

  afterEach(() => {
    exit.restore();
    setFailed.restore();
  });

  it("exports a random environment variable", () => {
    process.env.INPUT_NAMES = "test";
    main();

    expect(process.env.test).to.be.a("string");
    expect(process.env.test.length).to.equal(32);
  });

  it("exports a random environment variable", () => {
    process.env.INPUT_NAMES = "test1\ntest2";
    main();

    expect(process.env.test1).to.be.a("string");
    expect(process.env.test1.length).to.equal(32);

    expect(process.env.test2).to.be.a("string");
    expect(process.env.test2.length).to.equal(32);
  });

  it("handles incorrect types gracefully", () => {
    process.env.INPUT_NAMES = "123";
    main();

    expect(setFailed).to.have.been.calledWith("Invalid identifier name: 123");
    expect(exit).to.have.been.calledWith(1);
  });
});
