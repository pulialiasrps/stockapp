import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

var headers = new HttpHeaders()
  .set('User-ID', '4524')
  .set('Access-Token', 'MmQ4OWY1ODgtNTU3My00OGNlLThkMTQtMDkxYjBhY2NkYzZkJVVTRVIlNDUyNA==')
  .set('User-IP', '106.51.66.2')
  // .set('Postman-Token', 'e44e1f96-7ee0-40ac-94f6-256eb28491d4')
  .set('Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.162 Safari/537.36')
  .set('Cache-Control', 'no-cache')
  // .set('Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8')

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }

  suggestUrl = "https://services.investo2o.com/assetmanager-ws/api/v1/assets/getassets";
  fullUrl = 'https://services.investo2o.com/assetmanager-ws/api/v3/getassetdetails';

  getSuggestData(value) {
    return this.http.get(this.suggestUrl + value, {headers: headers});
  }

  getFullData(value) {
    return this.http.get(this.fullUrl + value, {headers: headers});
  }

}
