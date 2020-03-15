export interface IHsales {
  MnjPartNo: string;
  UnitCost: string;
  Description: string;
  QtyOrderd: string;
  UnitPrice: string;
  MfgPartNo: string;
  pricingCode: string;
}
export interface ISalesOrder {
  MnjPartNo: string;
  UnitCost: number | string;
  Description: string;
  QtyOrderd: number;
  UnitPrice: number | string;
  MfgPartNo: string;
  pricingCode: string;
}

export interface IinvoicesList {
  InvoiceNo: string;
  QtyShipped: number;
  PfInvoiceNo: number;
  PoNo: string;
  Total: number | string;
}
export interface InvoiceLine {
  SeqNo: number;
  MfgPartNo: string;
  TotalQty: number;
}
export interface IRmaRequestLineItems {
  MnjPartNo: string;
  MfgPartNo: string;
  RejectedQty: number | string;
  Description: string;
  ReturnQty: number | string;
  OriginalQty: number | string;
  ReturnReason: string;
  InvoiceNo: number | string;
  SerialNos: number | string;
  price: number | string;
  ExtPrice: number | string;
  NoOfLabels: number | string;
}
export interface IHinvoiceList {
  InvoiceNo: string;
  QtyShipped: string;
  PfInvoiceNo: string;
  PoNo: string;
  Total: string | number;
}
export interface IHinvoicesLine {
  SeqNo: string;
  MfgPartNo: string;
  TotalQty: string;
}
