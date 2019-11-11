export interface Order {
  numberOrder: number;
  dateOrder: string;
  brandPhone: string;
  modelPhone: string;
  nameClient: string;
  productType: string;
  serialNumber: string;
  malfunction: string;
  appearance: string;
  equipment: string;
  receiverNotes: string;
  estimatedPrice: string;
  prepayment: string;
  manager: string;
  executor: string;
  status: string;
  parts?: string[];
}
