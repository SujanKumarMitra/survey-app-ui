export default class FieldMap {
    constructor() {
        this._proxy = new Map();
    }

    put(fieldId, field) {
        this._proxy.set(fieldId, field);
    }

    get(fieldId) {
        return this._proxy.get(fieldId);
    }

    remove(fieldId) {
        this._proxy.delete(fieldId);
    }

    isEmpty() {
        return this._proxy.size == 0;
    }

    get fields() {
        return this._proxy;
    }

    set fields(fields) { }

    getKeys() {
        return [...this._proxy.keys()];
    }
    getEntries() {
        return [...this._proxy.entries()]
            .map(entry => ({ key: entry[0], value: entry[1] }));
    }

    getValues() {
        return [...this._proxy.values()];
    }
}