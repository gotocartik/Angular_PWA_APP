import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getBussiness = () => {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0accf7f864224fe588845a2081c0a17a');
  }
  getTech = () => {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0accf7f864224fe588845a2081c0a17a');
  }
  getjournal = () => {
    return this.http.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=0accf7f864224fe588845a2081c0a17a');
  }
  getIndia = () => {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=0accf7f864224fe588845a2081c0a17a');
  }
  getBitcoin = () => {
    return this.http.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=0accf7f864224fe588845a2081c0a17a');
  }
}
