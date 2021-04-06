import { Injectable } from '@angular/core';
import { IProduct } from './product/Iproduct';
import { IpurchaseItems } from './purchase/IpurchaseItems';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getProducts(): IProduct[]{
    return[
      {
        Id: 1,
        Title : "Bat",
        Price : 500,
        ExpiryDate: "10-08-1999",
        isInStock: true,
        Quantity: 78
      },
      {
        Id: 2,
        Title : "Ball",
        Price : 20,
        ExpiryDate: "19-06-1999",
        isInStock: true,
        Quantity: 106
      },
      {
        Id: 3,
        Title : "Bails",
        Price : 1500,
        ExpiryDate: "20-01-2012",
        isInStock: false,
        Quantity: 99
      },
      {
        Id: 4,
        Title : "Pen",
        Price : 1500,
        ExpiryDate: "10-02-1999",
        isInStock: true,
        Quantity: 108
      },
      {
        Id: 5,
        Title : "Pencil",
        Price : 2500,
        ExpiryDate: "22-09-2001",
        isInStock: false,
        Quantity: 65
      }
    ]
  }
  getPurchase(): IpurchaseItems[]{
    return[
      {
        PurchaseId : 100,
        PurchaseTitle: "Jeans",
        PurchaseDate : "10-08-2019",
        VendorName : "Microsoft",
        Items : [
          {
            Id: 1,
            Title : "Bat",
            Price : 500,
            ExpiryDate: "10-08-1999",
            isInStock: true,
            Quantity: 78
          }
        ]
      },
      {
        PurchaseId : 101,
        PurchaseTitle: "Shirts",
        PurchaseDate : "12-03-2020",
        VendorName : "Amazon",
        Items : [
          {
            Id: 2,
            Title : "Ball",
            Price : 20,
            ExpiryDate: "19-06-1999",
            isInStock: true,
            Quantity: 106
          }
        ]
      },
      {
        PurchaseId : 102,
        PurchaseTitle: "T-Shirt",
        PurchaseDate : "21-08-1999",
        VendorName : "Flipkart",
        Items : [
          {
            Id: 3,
            Title : "Bails",
            Price : 1500,
            ExpiryDate: "20-01-2012",
            isInStock: false,
            Quantity: 99
          }
        ]
      },
      {
        PurchaseId : 103,
        PurchaseTitle: "Blazer",
        PurchaseDate : "22-05-2019",
        VendorName : "Snapdeal",
        Items : [
          {
            Id: 4,
            Title : "Pen",
            Price : 1500,
            ExpiryDate: "10-02-1999",
            isInStock: true,
            Quantity: 108
          }
        ]
      },
      {
        PurchaseId : 104,
        PurchaseTitle: "Chinos",
        PurchaseDate : "25-08-2017",
        VendorName : "Google",
        Items : [
          {
            Id: 5,
            Title : "Pencil",
            Price : 2500,
            ExpiryDate: "22-09-2001",
            isInStock: false,
            Quantity: 65
          }
        ]
      }
    ]
  }

}
