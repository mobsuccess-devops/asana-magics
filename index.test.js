it("exposes magics", () => {
  const magics = require("./index");
  expect(typeof magics).toBe("object");
  expect(typeof magics.gids.customFields.live).toBe("string");
});
