import Axios from "axios";

export default class FormResponseDataService {
    constructor() {
        this.baseUrl = "http://localhost:8081"
    }

    getResponseData(request) {
        const { formId, accessKey } = request;
        return Axios.get(`${this.baseUrl}/v1/formResponse/${formId}?formKey=${accessKey}`);
    }

    getResponseDownloadUrl(request) {
        const { formId, accessKey } = request;
        return `${this.baseUrl}/v1/download/${formId}?formKey=${accessKey}`;
    }
}