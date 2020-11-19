export default class ResponseMap {
    constructor() {
        this.responses = new Map();
    }

    put(questionId, data) {
        this.responses.set(questionId, data);
    }

    getResponses() {
        return this.responses;
    }
}