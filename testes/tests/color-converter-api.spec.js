const assert = require("assert");
const axios = require("axios");

describe("Teste de api de onversão de cores", () => {
  it("converte para hex", async () => {
    const response = await axios.get("http://localhost:9000/rgb-to-hex/255/0/0");
  
    assert.equal(response.status, 200);
    assert.equal(response.data, "#ff0000");
  });

  it("converte para rgb", async () => {
    const response = await axios("http://localhost:9000/hex-to-rgb/ff0000");

    assert.equal(response.status, 200);
    assert.deepEqual(response.data, [255, 0, 0]);
  });
});
