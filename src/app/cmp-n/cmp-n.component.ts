import { Component } from '@angular/core';

@Component({
  selector: 'app-cmp-n',
  templateUrl: './cmp-n.component.html',
  styleUrls: ['./cmp-n.component.css']
})
export class CmpNComponent {
num1: number = 0;
num2: number= 0;
resp: number = 0;


somar(){
  this.resp = this.num1+this.num2;
}

sub(){
  this.resp = this.num1-this.num2;
}

mult(){
  this.resp = this.num1*this.num2;
}

div(){
  this.resp = this.num1/this.num2;
}

resto(){
  this.resp = this.num1%this.num2;
}
}
