import Axios from "axios";

export default class FormResponseService {
    constructor() {
        this.baseUrl = 'http://localhost:8082';
    }

    getForm(formId) {
        return Axios.get(`${this.baseUrl}/v1/form/${formId}`);
    }

    postResponse(body) {
        return Axios.post( `${this.baseUrl}/v1/response`, body);
    }
}