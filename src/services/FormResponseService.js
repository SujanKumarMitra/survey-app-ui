import Axios from "axios";
import ApiUrl from "./ApiUrl";

export default class FormResponseService {
    constructor() {
        this.baseUrl = ApiUrl.FORM_SERVICE;
    }

    getForm(formId) {
        return Axios.get(`${this.baseUrl}/v1/form/${formId}`);
    }

    postResponse(body) {
        return Axios.post( `${this.baseUrl}/v1/response?zoneId=${this.getZoneId()}`, body);
    }

    getZoneId() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
}