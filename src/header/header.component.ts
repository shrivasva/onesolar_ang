import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
userId:any
  constructor(private route:Router) { }

  ngOnInit() {
  }
  getUserId(){
const res=JSON.parse(localStorage.getItem('currentUser'))
this.userId=res['user_id']
this.route.navigate(['/logout/'+this.userId])

  }
  show(){

    if(localStorage.getItem('currentUser')!==undefined && localStorage.getItem('currentUser')!==null){
      return false;
    }else {
    return true
    };
  }

}
