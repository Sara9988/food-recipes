import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailes',
  templateUrl: './detailes.page.html',
  styleUrls: ['./detailes.page.scss'],
})
export class DetailesPage implements OnInit {
  like_active: boolean = false;
  showTextArea: boolean  = false;
 
  constructor() { }

  ngOnInit() {
  }
  like(){
    if(this.like_active ==false){
      this.like_active= true;
    }
    else{
      this.like_active= false;
    }
  }
  add(){
    this.showTextArea = !this.showTextArea;
  }
}   
