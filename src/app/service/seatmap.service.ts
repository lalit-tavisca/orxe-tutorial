import { Injectable } from "@angular/core";
import { SeatMapFlightDetails } from '../models/seat-map-flight-details.model';
import { SeatTypeDetail } from'../models/seat-type-detail.model';
import { SeatMap } from '../models/seat-map.model';
import { SeatType } from '../models/seat-type.model';

@Injectable({
    providedIn: 'root'
})

export class SeatMapService {
    seatmapFlightDetails: SeatMapFlightDetails = this.getMockSeatMapFlightDetails();
    seatmapResponse: SeatMap = this.getMockSeatmapResponse();
    seatTypeDetails: SeatTypeDetail[] = this.getMockSeatTypeDetails();

    private getMockSeatTypeDetails() {
        return [
            { 
               type: SeatType.Available,
                imgSrc: "Available.png"
            },
            { 
                type: SeatType.Restricted,
                imgSrc: "Restricted.png"
            },
            { 
                type: SeatType.Accessible,
                imgSrc: "Accessible.png"
            },
            { 
                type: SeatType.Premium,
                imgSrc: "Premium.png"
            }
        ]
    }

    private getMockSeatMapFlightDetails() {
        return {
            source: "New Delhi(DEL)",
            destination: "Addis Ababa (ADD)",
            travelDate: "Sun, July 24",
            carrier: "Ethopian airlines 689",
            flightModel: "Airbus A319"     
        };
    }

    private getMockSeatmapResponse() {
        return {
            "cabinType": "Economy",
            "cabins": [
                {
                    "location": "mainDeck",
                    "capacity": 144,
                    "rows": [
                        {
                            "number": "7",
                            "characteristics": []
                        },
                        {
                            "number": "8",
                            "characteristics": []
                        },
                        {
                            "number": "9",
                            "characteristics": []
                        },
                        {
                            "number": "10",
                            "characteristics": []
                        },
                        {
                            "number": "11",
                            "characteristics": []
                        },
                        {
                            "number": "12",
                            "characteristics": []
                        },
                        {
                            "number": "13",
                            "characteristics": []
                        },
                        {
                            "number": "14",
                            "characteristics": []
                        },
                        {
                            "number": "15",
                            "characteristics": []
                        },
                        {
                            "number": "16",
                            "characteristics": []
                        },
                        {
                            "number": "17",
                            "characteristics": []
                        },
                        {
                            "number": "18",
                            "characteristics": []
                        },
                        {
                            "number": "19",
                            "characteristics": []
                        },
                        {
                            "number": "20",
                            "characteristics": []
                        },
                        {
                            "number": "21",
                            "characteristics": []
                        },
                        {
                            "number": "22",
                            "characteristics": []
                        },
                        {
                            "number": "23",
                            "characteristics": []
                        },
                        {
                            "number": "24",
                            "characteristics": []
                        },
                        {
                            "number": "25",
                            "characteristics": []
                        },
                        {
                            "number": "26",
                            "characteristics": []
                        },
                        {
                            "number": "27",
                            "characteristics": []
                        },
                        {
                            "number": "28",
                            "characteristics": []
                        },
                        {
                            "number": "29",
                            "characteristics": []
                        },
                        {
                            "number": "30",
                            "characteristics": []
                        }
                    ],
                    "columns": [
                        {
                            "character": "A",
                            "type": "window"
                        },
                        {
                            "character": "B",
                            "type": "middle"
                        },
                        {
                            "character": "C",
                            "type": "aisle"
                        },
                        {
                            "character": "D",
                            "type": "aisle"
                        },
                        {
                            "character": "E",
                            "type": "middle"
                        },
                        {
                            "character": "F",
                            "type": "window"
                        }
                    ],
                    "seats": [
                        {
                            "rowNumber": "7",
                            "columnCharacter": "A",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "7",
                            "columnCharacter": "B",
                            "occupationStatus": "Accessible",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "7",
                            "columnCharacter": "C",
                            "occupationStatus": "Premium",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "7",
                            "columnCharacter": "D",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "7",
                            "columnCharacter": "E",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "7",
                            "columnCharacter": "F",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "8",
                            "columnCharacter": "A",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "8",
                            "columnCharacter": "B",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "8",
                            "columnCharacter": "C",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "8",
                            "columnCharacter": "D",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "8",
                            "columnCharacter": "E",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "8",
                            "columnCharacter": "F",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "9",
                            "columnCharacter": "A",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "9",
                            "columnCharacter": "B",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "9",
                            "columnCharacter": "C",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "9",
                            "columnCharacter": "D",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "9",
                            "columnCharacter": "E",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "9",
                            "columnCharacter": "F",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "10",
                            "columnCharacter": "A",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "10",
                            "columnCharacter": "B",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "10",
                            "columnCharacter": "C",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "10",
                            "columnCharacter": "D",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "10",
                            "columnCharacter": "E",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "10",
                            "columnCharacter": "F",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "11",
                            "columnCharacter": "A",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "11",
                            "columnCharacter": "B",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "11",
                            "columnCharacter": "C",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "11",
                            "columnCharacter": "D",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "11",
                            "columnCharacter": "E",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "11",
                            "columnCharacter": "F",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "12",
                            "columnCharacter": "A",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "12",
                            "columnCharacter": "B",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "12",
                            "columnCharacter": "C",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "12",
                            "columnCharacter": "D",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "12",
                            "columnCharacter": "E",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "12",
                            "columnCharacter": "F",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "13",
                            "columnCharacter": "A",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "13",
                            "columnCharacter": "B",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "13",
                            "columnCharacter": "C",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "13",
                            "columnCharacter": "D",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "13",
                            "columnCharacter": "E",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "13",
                            "columnCharacter": "F",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "14",
                            "columnCharacter": "A",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "14",
                            "columnCharacter": "B",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "14",
                            "columnCharacter": "C",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "14",
                            "columnCharacter": "D",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "14",
                            "columnCharacter": "E",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "14",
                            "columnCharacter": "F",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "15",
                            "columnCharacter": "A",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "15",
                            "columnCharacter": "B",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "15",
                            "columnCharacter": "C",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "15",
                            "columnCharacter": "D",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "15",
                            "columnCharacter": "E",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "15",
                            "columnCharacter": "F",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "16",
                            "columnCharacter": "A",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "16",
                            "columnCharacter": "B",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "16",
                            "columnCharacter": "C",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "16",
                            "columnCharacter": "D",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "16",
                            "columnCharacter": "E",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "16",
                            "columnCharacter": "F",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "17",
                            "columnCharacter": "A",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "17",
                            "columnCharacter": "B",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "17",
                            "columnCharacter": "C",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "17",
                            "columnCharacter": "D",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "17",
                            "columnCharacter": "E",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "17",
                            "columnCharacter": "F",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "18",
                            "columnCharacter": "A",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "18",
                            "columnCharacter": "B",
                            "occupationStatus": "available",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "18",
                            "columnCharacter": "C",
                            "occupationStatus": "available",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "18",
                            "columnCharacter": "D",
                            "occupationStatus": "available",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "18",
                            "columnCharacter": "E",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "18",
                            "columnCharacter": "F",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "19",
                            "columnCharacter": "A",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "19",
                            "columnCharacter": "B",
                            "occupationStatus": "available",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "19",
                            "columnCharacter": "C",
                            "occupationStatus": "available",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "19",
                            "columnCharacter": "D",
                            "occupationStatus": "available",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "19",
                            "columnCharacter": "E",
                            "occupationStatus": "available",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "19",
                            "columnCharacter": "F",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "20",
                            "columnCharacter": "A",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "20",
                            "columnCharacter": "B",
                            "occupationStatus": "available",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "20",
                            "columnCharacter": "C",
                            "occupationStatus": "available",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "20",
                            "columnCharacter": "D",
                            "occupationStatus": "available",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "20",
                            "columnCharacter": "E",
                            "occupationStatus": "available",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "20",
                            "columnCharacter": "F",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "21",
                            "columnCharacter": "A",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "21",
                            "columnCharacter": "B",
                            "occupationStatus": "available",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "21",
                            "columnCharacter": "C",
                            "occupationStatus": "available",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "21",
                            "columnCharacter": "D",
                            "occupationStatus": "available",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "21",
                            "columnCharacter": "E",
                            "occupationStatus": "available",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "21",
                            "columnCharacter": "F",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "22",
                            "columnCharacter": "A",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "22",
                            "columnCharacter": "B",
                            "occupationStatus": "available",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "22",
                            "columnCharacter": "C",
                            "occupationStatus": "available",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "22",
                            "columnCharacter": "D",
                            "occupationStatus": "available",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "22",
                            "columnCharacter": "E",
                            "occupationStatus": "available",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "22",
                            "columnCharacter": "F",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "23",
                            "columnCharacter": "A",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "23",
                            "columnCharacter": "B",
                            "occupationStatus": "available",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "23",
                            "columnCharacter": "C",
                            "occupationStatus": "available",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "23",
                            "columnCharacter": "D",
                            "occupationStatus": "available",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "23",
                            "columnCharacter": "E",
                            "occupationStatus": "available",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "23",
                            "columnCharacter": "F",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "24",
                            "columnCharacter": "A",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "24",
                            "columnCharacter": "B",
                            "occupationStatus": "available",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "24",
                            "columnCharacter": "C",
                            "occupationStatus": "available",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "24",
                            "columnCharacter": "D",
                            "occupationStatus": "available",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "24",
                            "columnCharacter": "E",
                            "occupationStatus": "available",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "24",
                            "columnCharacter": "F",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "25",
                            "columnCharacter": "A",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "25",
                            "columnCharacter": "B",
                            "occupationStatus": "available",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "25",
                            "columnCharacter": "C",
                            "occupationStatus": "available",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "25",
                            "columnCharacter": "D",
                            "occupationStatus": "available",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "25",
                            "columnCharacter": "E",
                            "occupationStatus": "available",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "25",
                            "columnCharacter": "F",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "26",
                            "columnCharacter": "A",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "26",
                            "columnCharacter": "B",
                            "occupationStatus": "available",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "26",
                            "columnCharacter": "C",
                            "occupationStatus": "available",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "26",
                            "columnCharacter": "D",
                            "occupationStatus": "available",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "26",
                            "columnCharacter": "E",
                            "occupationStatus": "available",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "26",
                            "columnCharacter": "F",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "27",
                            "columnCharacter": "A",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "27",
                            "columnCharacter": "B",
                            "occupationStatus": "available",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "27",
                            "columnCharacter": "C",
                            "occupationStatus": "available",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "27",
                            "columnCharacter": "D",
                            "occupationStatus": "available",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "27",
                            "columnCharacter": "E",
                            "occupationStatus": "available",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "27",
                            "columnCharacter": "F",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "28",
                            "columnCharacter": "A",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "28",
                            "columnCharacter": "B",
                            "occupationStatus": "available",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "28",
                            "columnCharacter": "C",
                            "occupationStatus": "available",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "28",
                            "columnCharacter": "D",
                            "occupationStatus": "available",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "28",
                            "columnCharacter": "E",
                            "occupationStatus": "available",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "28",
                            "columnCharacter": "F",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "29",
                            "columnCharacter": "A",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "29",
                            "columnCharacter": "B",
                            "occupationStatus": "available",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "29",
                            "columnCharacter": "C",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "29",
                            "columnCharacter": "D",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "29",
                            "columnCharacter": "E",
                            "occupationStatus": "available",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "29",
                            "columnCharacter": "F",
                            "occupationStatus": "available",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "30",
                            "columnCharacter": "A",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "30",
                            "columnCharacter": "B",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "30",
                            "columnCharacter": "C",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "30",
                            "columnCharacter": "D",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "aisle"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "30",
                            "columnCharacter": "E",
                            "occupationStatus": "reserved",
                            "characteristics": [],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        },
                        {
                            "rowNumber": "30",
                            "columnCharacter": "F",
                            "occupationStatus": "reserved",
                            "characteristics": [
                                "window"
                            ],
                            "optionalData": {
                                "isPaidSeat": false
                            }
                        }
                    ],
                    "optionalData": {
                        "facilities": []
                    }
                }
            ]
        };
    }
}