module.exports = {
  count: 0,

  increment: function(valor = 1) {
    this.count += valor;
  },

  decrement: function() {
    this.count--;
  }
};