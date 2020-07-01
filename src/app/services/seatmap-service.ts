import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SeatmapService {
  constructor(private httpClient: HttpClient) {}

  getSeatMapMockResposne(): any {
    return this.httpClient.get("./assets/seatmap_mockdata.json");    
  }
}
