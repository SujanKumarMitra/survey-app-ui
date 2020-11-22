export default class ResponseMap {
    constructor() {
        this._responses = new Map();
    }

    put(questionId, data) {
        this._responses.set(questionId, data);
    }

    get responses() {
        return this._responses;
    }

    set responses(responses) {}

    getValues() {
        return [...this.responses.values()];
    }
}