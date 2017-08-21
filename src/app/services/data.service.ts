import {Http, Headers, Response} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class DataService {
    http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    requestData(url: string) {
        return this.http.get(url).map(res => res.json())
    }
}
