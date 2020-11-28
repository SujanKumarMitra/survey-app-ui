import Axios from "axios";
import ApiUrl from "./ApiUrl";

export default class FormResponseDataService {
    constructor() {
        this.baseUrl = ApiUrl.DATA_STORAGE_SERVICE;
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