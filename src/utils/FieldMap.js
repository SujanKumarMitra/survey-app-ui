export default class FieldMap {
    constructor() {
        this._fields = new Map();
    }

    put(fieldId, field) {
        this._fields.set(fieldId, field);
    }

    get(fieldId) {
        return this._fields.get(fieldId);
    }

    remove(fieldId) {
        this._fields.delete(fieldId);
    }

    isEmpty() {
        return this._fields.size == 0;
    }

    get fields() {
        return this._fields;
    }

    set fields(fields) { }

    getKeys() {
        return [...this._fields.keys()];
    }
    getEntries() {
        return [...this._fields.entries()]
            .map(entry => ({ key: entry[0], value: entry[1] }));
    }

    getValues() {
        return [...this._fields.values()];
    }
}