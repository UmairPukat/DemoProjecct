import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient) { }

  GetTestData(): Observable<any>{
    //const Url = "https://common-engage.enteract.app/api/Keyword/GetAllKeywordCategory";
    const Url = "https://api.alkompis.se/news/wp-json/wp/v2/posts/234998";
    var result = this.http.get(Url);
    debugger
    return result;
  }
}
