import { Row } from './row.model';
import { Column } from './column.model';
import { Seat } from './seat.model';

export class Cabins {
    location: string;
    capacity: number;
    rows: Row[];
    columns: Column[];
    seats: Seat[];
}