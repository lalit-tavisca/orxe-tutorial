import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class FareOptionsService {
  constructor(private httpClient: HttpClient) {}

  getFareOptionsMockResposne(): any {
    return this.httpClient.get("./assets/fare-options-mockdata.json");    
  }
}
