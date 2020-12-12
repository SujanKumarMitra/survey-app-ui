export default class OptionMap {
    constructor() {
        this._options = new Map();
    }

    put(optionId, field) {
        this._options.set(optionId, field);
    }

    get(optionId) {
        return this._options.get(optionId);
    }

    remove(optionId) {
        this._options.delete(optionId);
    }

    isEmpty() {
        return this._options.size === 0;
    }

    size() {
        return this._options.size;
    }

    get options() {
        return this._options;
    }

    set options(fields) { }

    getKeys() {
        return [...this._options.keys()];
    }
    getEntries() {
        return [...this._options.entries()]
            .map(entry => ({ key: entry[0], value: entry[1] }));
    }

    getValues() {
        return [...this._options.values()];
    }
}