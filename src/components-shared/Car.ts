import { TMaintenance } from './Maintenance';
export interface TCar{
  licensePlate: string;
  brand: string;
  model: string;
  year: string;
  lastKilometresRecorded: number;
  lastInspection: Date;
  maintenance: TMaintenance[];
}