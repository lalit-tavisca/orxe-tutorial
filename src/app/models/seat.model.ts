import { OptionalData } from './optional-data.model';

export class Seat {
    rowNumber: string;
    columnCharacter: string;
    occupationStatus: string;
    characteristics: string[];
    optionalData: OptionalData;
}