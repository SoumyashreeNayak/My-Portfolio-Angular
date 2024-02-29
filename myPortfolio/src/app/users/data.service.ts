import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private sessionData:Map<String,Data> = new Map();

  public getSession():Map<String,Data>{
    return this.sessionData;
  }
}
