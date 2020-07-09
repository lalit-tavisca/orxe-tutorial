import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SeatMapService {
  constructor() {}

  getSeatMap() {
    let response: SeatMapResponse = {
      cabinType: "Economy",
      cabins: [
        {
          location: "mainDeck",
          capacity: 150,
          rows: [
            {
              number: "15",
              characteristics: [],
            },
            {
              number: "16",
              characteristics: [],
            },
            {
              number: "17",
              characteristics: [],
            },
            {
              number: "18",
              characteristics: [],
            },
            {
              number: "19",
              characteristics: [],
            },
            {
              number: "20",
              characteristics: [],
            },
            {
              number: "21",
              characteristics: [],
            },
            {
              number: "22",
              characteristics: [],
            },
            {
              number: "23",
              characteristics: [],
            },
            {
              number: "24",
              characteristics: [],
            },
            {
              number: "25",
              characteristics: [],
            },
            {
              number: "26",
              characteristics: [],
            },
            {
              number: "27",
              characteristics: [],
            },
            {
              number: "28",
              characteristics: [],
            },
            {
              number: "29",
              characteristics: [],
            },
            {
              number: "30",
              characteristics: [],
            },
            {
              number: "31",
              characteristics: [],
            },
            {
              number: "32",
              characteristics: [],
            },
            {
              number: "33",
              characteristics: [],
            },
            {
              number: "34",
              characteristics: [],
            },
            {
              number: "35",
              characteristics: [],
            },
            {
              number: "36",
              characteristics: [],
            },
            {
              number: "37",
              characteristics: [],
            },
            {
              number: "38",
              characteristics: [],
            },
            {
              number: "39",
              characteristics: [],
            },
          ],
          columns: [
            {
              character: "A",
              type: "window",
            },
            {
              character: "B",
              type: "middle",
            },
            {
              character: "C",
              type: "aisle",
            },
            {
              character: "D",
              type: "aisle",
            },
            {
              character: "E",
              type: "middle",
            },
            {
              character: "F",
              type: "window",
            },
          ],
          seats: [
            {
              rowNumber: "15",
              columnCharacter: "A",
              occupationStatus: "protected",
              characteristics: ["preferred", "window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "15",
              columnCharacter: "B",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "15",
              columnCharacter: "C",
              occupationStatus: "reserved",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "15",
              columnCharacter: "D",
              occupationStatus: "reserved",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "15",
              columnCharacter: "E",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "15",
              columnCharacter: "F",
              occupationStatus: "protected",
              characteristics: ["preferred", "window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "16",
              columnCharacter: "A",
              occupationStatus: "protected",
              characteristics: ["preferred", "window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "16",
              columnCharacter: "B",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "16",
              columnCharacter: "C",
              occupationStatus: "protected",
              characteristics: ["preferred", "aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "16",
              columnCharacter: "D",
              occupationStatus: "protected",
              characteristics: ["preferred", "aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "16",
              columnCharacter: "E",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "16",
              columnCharacter: "F",
              occupationStatus: "protected",
              characteristics: ["preferred", "window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "17",
              columnCharacter: "A",
              occupationStatus: "protected",
              characteristics: ["preferred", "window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "17",
              columnCharacter: "B",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "17",
              columnCharacter: "C",
              occupationStatus: "protected",
              characteristics: ["preferred", "aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "17",
              columnCharacter: "D",
              occupationStatus: "protected",
              characteristics: ["preferred", "aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "17",
              columnCharacter: "E",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "17",
              columnCharacter: "F",
              occupationStatus: "protected",
              characteristics: ["preferred", "window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "18",
              columnCharacter: "A",
              occupationStatus: "protected",
              characteristics: ["preferred", "window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "18",
              columnCharacter: "B",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "18",
              columnCharacter: "C",
              occupationStatus: "protected",
              characteristics: ["preferred", "aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "18",
              columnCharacter: "D",
              occupationStatus: "protected",
              characteristics: ["preferred", "aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "18",
              columnCharacter: "E",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "18",
              columnCharacter: "F",
              occupationStatus: "protected",
              characteristics: ["preferred", "window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "19",
              columnCharacter: "A",
              occupationStatus: "protected",
              characteristics: ["preferred", "window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "19",
              columnCharacter: "B",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "19",
              columnCharacter: "C",
              occupationStatus: "protected",
              characteristics: ["preferred", "aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "19",
              columnCharacter: "D",
              occupationStatus: "protected",
              characteristics: ["preferred", "aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "19",
              columnCharacter: "E",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "19",
              columnCharacter: "F",
              occupationStatus: "protected",
              characteristics: ["preferred", "window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "20",
              columnCharacter: "A",
              occupationStatus: "protected",
              characteristics: ["preferred", "window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "20",
              columnCharacter: "B",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "20",
              columnCharacter: "C",
              occupationStatus: "protected",
              characteristics: ["preferred", "aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "20",
              columnCharacter: "D",
              occupationStatus: "protected",
              characteristics: ["preferred", "aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "20",
              columnCharacter: "E",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "20",
              columnCharacter: "F",
              occupationStatus: "protected",
              characteristics: ["preferred", "window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "21",
              columnCharacter: "A",
              occupationStatus: "reserved",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "21",
              columnCharacter: "B",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "21",
              columnCharacter: "C",
              occupationStatus: "reserved",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "21",
              columnCharacter: "D",
              occupationStatus: "reserved",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "21",
              columnCharacter: "E",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "21",
              columnCharacter: "F",
              occupationStatus: "available",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "22",
              columnCharacter: "A",
              occupationStatus: "available",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "22",
              columnCharacter: "B",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "22",
              columnCharacter: "C",
              occupationStatus: "available",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "22",
              columnCharacter: "D",
              occupationStatus: "available",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "22",
              columnCharacter: "E",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "22",
              columnCharacter: "F",
              occupationStatus: "available",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "23",
              columnCharacter: "A",
              occupationStatus: "reserved",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "23",
              columnCharacter: "B",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "23",
              columnCharacter: "C",
              occupationStatus: "reserved",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "23",
              columnCharacter: "D",
              occupationStatus: "available",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "23",
              columnCharacter: "E",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "23",
              columnCharacter: "F",
              occupationStatus: "available",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "24",
              columnCharacter: "A",
              occupationStatus: "reserved",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "24",
              columnCharacter: "B",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "24",
              columnCharacter: "C",
              occupationStatus: "reserved",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "24",
              columnCharacter: "D",
              occupationStatus: "available",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "24",
              columnCharacter: "E",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "24",
              columnCharacter: "F",
              occupationStatus: "available",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "25",
              columnCharacter: "A",
              occupationStatus: "empty",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "25",
              columnCharacter: "B",
              occupationStatus: "empty",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "25",
              columnCharacter: "C",
              occupationStatus: "empty",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "25",
              columnCharacter: "D",
              occupationStatus: "reserved",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "25",
              columnCharacter: "E",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "25",
              columnCharacter: "F",
              occupationStatus: "reserved",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "26",
              columnCharacter: "A",
              occupationStatus: "empty",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "26",
              columnCharacter: "B",
              occupationStatus: "available",
              characteristics: ["exitRowSeats"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "26",
              columnCharacter: "C",
              occupationStatus: "available",
              characteristics: ["exitRowSeats", "aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "26",
              columnCharacter: "D",
              occupationStatus: "available",
              characteristics: ["exitRowSeats", "aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "26",
              columnCharacter: "E",
              occupationStatus: "available",
              characteristics: ["exitRowSeats"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "26",
              columnCharacter: "F",
              occupationStatus: "empty",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "27",
              columnCharacter: "A",
              occupationStatus: "available",
              characteristics: ["exitRowSeats", "window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "27",
              columnCharacter: "B",
              occupationStatus: "available",
              characteristics: ["exitRowSeats"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "27",
              columnCharacter: "C",
              occupationStatus: "available",
              characteristics: ["exitRowSeats", "aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "27",
              columnCharacter: "D",
              occupationStatus: "reserved",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "27",
              columnCharacter: "E",
              occupationStatus: "available",
              characteristics: ["exitRowSeats"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "27",
              columnCharacter: "F",
              occupationStatus: "available",
              characteristics: ["exitRowSeats", "window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "28",
              columnCharacter: "A",
              occupationStatus: "available",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "28",
              columnCharacter: "B",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "28",
              columnCharacter: "C",
              occupationStatus: "available",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "28",
              columnCharacter: "D",
              occupationStatus: "available",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "28",
              columnCharacter: "E",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "28",
              columnCharacter: "F",
              occupationStatus: "available",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "29",
              columnCharacter: "A",
              occupationStatus: "reserved",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "29",
              columnCharacter: "B",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "29",
              columnCharacter: "C",
              occupationStatus: "reserved",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "29",
              columnCharacter: "D",
              occupationStatus: "reserved",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "29",
              columnCharacter: "E",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "29",
              columnCharacter: "F",
              occupationStatus: "reserved",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "30",
              columnCharacter: "A",
              occupationStatus: "reserved",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "30",
              columnCharacter: "B",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "30",
              columnCharacter: "C",
              occupationStatus: "available",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "30",
              columnCharacter: "D",
              occupationStatus: "available",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "30",
              columnCharacter: "E",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "30",
              columnCharacter: "F",
              occupationStatus: "available",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "31",
              columnCharacter: "A",
              occupationStatus: "available",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "31",
              columnCharacter: "B",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "31",
              columnCharacter: "C",
              occupationStatus: "reserved",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "31",
              columnCharacter: "D",
              occupationStatus: "reserved",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "31",
              columnCharacter: "E",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "31",
              columnCharacter: "F",
              occupationStatus: "reserved",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "32",
              columnCharacter: "A",
              occupationStatus: "reserved",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "32",
              columnCharacter: "B",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "32",
              columnCharacter: "C",
              occupationStatus: "reserved",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "32",
              columnCharacter: "D",
              occupationStatus: "available",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "32",
              columnCharacter: "E",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "32",
              columnCharacter: "F",
              occupationStatus: "available",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "33",
              columnCharacter: "A",
              occupationStatus: "available",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "33",
              columnCharacter: "B",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "33",
              columnCharacter: "C",
              occupationStatus: "available",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "33",
              columnCharacter: "D",
              occupationStatus: "available",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "33",
              columnCharacter: "E",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "33",
              columnCharacter: "F",
              occupationStatus: "reserved",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "34",
              columnCharacter: "A",
              occupationStatus: "available",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "34",
              columnCharacter: "B",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "34",
              columnCharacter: "C",
              occupationStatus: "available",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "34",
              columnCharacter: "D",
              occupationStatus: "available",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "34",
              columnCharacter: "E",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "34",
              columnCharacter: "F",
              occupationStatus: "available",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "35",
              columnCharacter: "A",
              occupationStatus: "reserved",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "35",
              columnCharacter: "B",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "35",
              columnCharacter: "C",
              occupationStatus: "reserved",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "35",
              columnCharacter: "D",
              occupationStatus: "reserved",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "35",
              columnCharacter: "E",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "35",
              columnCharacter: "F",
              occupationStatus: "reserved",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "36",
              columnCharacter: "A",
              occupationStatus: "reserved",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "36",
              columnCharacter: "B",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "36",
              columnCharacter: "C",
              occupationStatus: "reserved",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "36",
              columnCharacter: "D",
              occupationStatus: "reserved",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "36",
              columnCharacter: "E",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "36",
              columnCharacter: "F",
              occupationStatus: "reserved",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "37",
              columnCharacter: "A",
              occupationStatus: "reserved",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "37",
              columnCharacter: "B",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "37",
              columnCharacter: "C",
              occupationStatus: "reserved",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "37",
              columnCharacter: "D",
              occupationStatus: "reserved",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "37",
              columnCharacter: "E",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "37",
              columnCharacter: "F",
              occupationStatus: "reserved",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "38",
              columnCharacter: "A",
              occupationStatus: "reserved",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "38",
              columnCharacter: "B",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "38",
              columnCharacter: "C",
              occupationStatus: "reserved",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "38",
              columnCharacter: "D",
              occupationStatus: "reserved",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "38",
              columnCharacter: "E",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "38",
              columnCharacter: "F",
              occupationStatus: "reserved",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "39",
              columnCharacter: "A",
              occupationStatus: "reserved",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "39",
              columnCharacter: "B",
              occupationStatus: "reserved",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "39",
              columnCharacter: "C",
              occupationStatus: "reserved",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "39",
              columnCharacter: "D",
              occupationStatus: "empty",
              characteristics: ["aisle"],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "39",
              columnCharacter: "E",
              occupationStatus: "empty",
              characteristics: [],
              optionalData: {
                isPaidSeat: false,
              },
            },
            {
              rowNumber: "39",
              columnCharacter: "F",
              occupationStatus: "empty",
              characteristics: ["window"],
              optionalData: {
                isPaidSeat: false,
              },
            },
          ],
        },
      ],
    };
    return response;
  }
}
export class SeatMapResponse {
  cabinType: string;
  cabins: Cabins[];
}
export class Cabins {
  public location: string;
  capacity: number;
  rows: Row[];
  columns: Column[];
  seats: Seat[];
}
export class Row {
  number: string;
  characteristics: string[];
}
export class Column {
  character: string;
  type: string;
}
export class Seat {
  rowNumber: string;
  columnCharacter: string;
  occupationStatus: string;
  characteristics: string[];
  optionalData: OptionalData;
}
export class OptionalData {
  isPaidSeat: boolean;
}
