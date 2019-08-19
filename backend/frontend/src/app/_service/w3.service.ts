import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class W3Service {
  public env =  environment;
  public apiUrl = this.env['apiUrlW3']
  constructor(private http:HttpClient) { }
  public _url;
  public data;

  public addVoter(userKey){
   console.log(userKey)
    this.data ={
      "voterHash":userKey,
    }
    this._url = `${this.apiUrl}/addVoter/`;
    var res = this.http.post(
      this._url,
      this.data
    );
    
    return res;
  }

  public vote(voterKey,candidateKey){
    this.data={
      "voterHash":voterKey,
      "candidateHash":candidateKey
    }

    this._url = `${this.apiUrl}/vote/`;
    var res = this.http.post(
      this._url,
      this.data
    );
    
    return res;
  }

}