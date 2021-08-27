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