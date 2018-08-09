import { Injectable } from '@angular/core';

import { Http, Headers, Request, ResponseContentType } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable()
export class DownloadserviceService {

	constructor(private http: HttpClient) { }
	download(file:string) {
		var body = {filename:file};
		return this.http.post('http://localhost:1337/download',body,{
			responseType : 'blob',
			headers:new HttpHeaders().append('Content-Type','application/json')
		});
	}
}
