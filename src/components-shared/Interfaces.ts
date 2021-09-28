export interface TCustomer{
  id: number;
  firstName: string;
  // lastName: string;
  // age: number;
  // email: string;
  // phoneNumber: number;
  // documents?: string;
  // image?: string;
  // car?: TCar[]
}

export interface TCar{
  licensePlate: string;
  brand: string;
  model: string;
  year: string;
  lastKilometresRecorded: number;
  lastInspection: Date;
  maintenance: TMaintenance[];
}

export interface TMaintenance{
  code: string;
  description: string;
  unitOfMeasurement: string;
  quantity: number;
  unitaryPrice: number;
  price: number;
  discount: number;
  amount: number;
  salesTax: number;
  warehouse: boolean;
}