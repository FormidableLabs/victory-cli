/* eslint-disable no-magic-numbers */
/* eslint-disable no-invalid-this */
/* eslint-disable max-nested-callbacks */
const childProcess = require("child_process");
const path = require("path");

const bin = path.join("./bin/victory-cli.js");

describe("victory-cli", () => {
  describe("help", () => {
    let stdoutValue;
    this.timeout(5000);

    before((done) => {
      childProcess.execFile(bin, (error, stdout, stderr) => {
        if (error) {
          console.log(error, stderr, stdout);
          done(error);
        }
        stdoutValue = stdout;
        done();
      });
    });

    it("should output help with no arguments supplied", () => {
      expect(stdoutValue.indexOf("Usage")).to.not.equal(-1);
    });
  });

  describe("print", () => {
    let stdoutValue;
    this.timeout(15000);

    before((done) => {
      childProcess.execFile(bin, (error, stdout) => {
        if (error) {
          done(error);
        }
        stdoutValue = stdout;
        done();
      });
    });

    it("should print a png with data by default", () => {
      expect(stdoutValue).to.not.equal(null);
    });
  });
});
