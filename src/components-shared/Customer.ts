import { TCar } from './Car';

export interface TCustomer{
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  phoneNumber: string;
  documents?: string;
  image?: string;
  car?: TCar[]
}