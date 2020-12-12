export default class ResponseMap {
    constructor() {
        this._proxy = new Map();
    }

    put(questionId, data) {
        this._proxy.set(questionId, data);
    }

    get responses() {
        return this._proxy;
    }

    set responses(responses) {}

    getValues() {
        return [...this.responses.values()];
    }
}