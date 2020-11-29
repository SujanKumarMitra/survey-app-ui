import Axios from 'axios';
import ApiUrl from './ApiUrl';
export default class FormCreateService {

    constructor() {
        this._baseUrl = ApiUrl.FORM_SERVICE;
    }

    post(body) {
        return Axios.post(`${this._baseUrl}/v1/form`, body);
    }
}