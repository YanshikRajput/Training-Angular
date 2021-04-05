import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product/Iproduct';
import { ProductComponent } from '../product/product.component';
import { SenddataService } from '../senddata.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  input1:number=0;
  product!: IProduct;

  constructor(private senddata:SenddataService) { }

  ngOnInit(): void {
  }
  sendData(){
    this.senddata.setPrice(this.input1);
  }
}
