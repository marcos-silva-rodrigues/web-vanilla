const assert = require("assert");
const colorConverter = require('../src/color-converter');

describe("testando conversor de cores", () => {
  describe("Conversão de rgb para hex", () => {
    it("Converte vermelho", () => {
      const colorRgb = [255, 0, 0];
      const colorHex =  colorConverter.toHex(colorRgb);

      assert.equal(colorHex, '#ff0000');
    });

    it("Converte verde", () => {
      const colorRgb = [0, 255, 0];
      const colorHex =  colorConverter.toHex(colorRgb);

      assert.equal(colorHex, '#00ff00');
    });

    it("Converte azul", () => {
      const colorRgb = [0, 0, 255];
      const colorHex =  colorConverter.toHex(colorRgb);

      assert.equal(colorHex, '#0000ff');
    });
  });

  describe('Conversão de hex para rgb', () => {
    it('Conversão com #', () => {
      const colorRgb = colorConverter.toRgb('ff0000');
      assert.deepEqual(colorRgb, [255, 0, 0]);
    })
  });
});
