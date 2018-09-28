import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products:Array<Product>;
  constructor() { }

  ngOnInit() {
    this.products=[
      
        new Product(11,'第一个商品',2.99,3.5,"这是第一个商品，我的慕课angular的商品描述",["电子商品","硬件设备","安全管理"]),
        new Product(11,'第二个商品',2.99,1.5,"这是第二个商品，我的慕课angular的商品描述",["电子商品","硬件设备","安全管理"]),
        new Product(11,'第三个商品',2.99,2.5,"这是第三个商品，我的慕课angular的商品描述",["生活用品"]),
        new Product(11,'第四个商品',2.99,4.5,"这是第四个商品，我的慕课angular的商品描述",["电子商品","硬件设备","安全管理"]),
        new Product(11,'第五个商品',2.99,3.5,"这是第五个商品，我的慕课angular的商品描述",["电子商品","硬件设备","安全管理"]),
        new Product(11,'第六个商品',2.99,5,"这是第六个商品，我的慕课angular的商品描述",["电子商品","硬件设备","安全管理"])
      
    ]
  }

}

export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){}
}