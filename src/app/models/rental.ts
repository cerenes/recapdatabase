export interface Rental {
  Id: number;
  rentalId?: number;
  customerId: number;
  brandName: string;

  rentDate: Date;
  returnDate: Date;
}
