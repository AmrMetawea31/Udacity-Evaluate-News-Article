import { checkURL } from "../client/js/checkURL";

describe("Testing the submit functionality", () => {
  test("Testing the checkURL() function is defined", () => {
    expect(checkURL).toBeDefined();
  });
  test("Testing the checkURL invalid input to return false", () => {
    expect(checkURL("sss")).toEqual(false);
  });
  test("Testing the checkURL valid input to return true", () => {
    expect(checkURL("www.amazon.com")).toEqual(true);
  });
});