const unicID = require("../../ultis/genereteUnicID");
describe("Generata Unique ID", () => {
  it("shoul generate an unique ID", () => {
    const id = unicID();
    expect(id).toHaveLength(8);
  });
});
