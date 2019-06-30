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
console.log(res)
this.userId=res['user_id']
console.log(this.userId)
this.route.navigate(['/logout/'+this.userId])

  }

}
