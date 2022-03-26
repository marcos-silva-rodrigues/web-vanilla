class Storage {
  constructor(id) {
    this.storageKey = id;
  }

  persister(obj) {
    localStorage.setItem(this.storageKey, this.serializeObj(obj));
  }

  get() {
    const item = localStorage.getItem(this.storageKey);
    return this.deserializeObj(item);
  }

  clear() {
    this.persister({});
  }

  serializeObj(obj) {
    return JSON.stringify(obj);
  }

  deserializeObj(string) {
    return JSON.parse(string);
  }
}

export default Storage;