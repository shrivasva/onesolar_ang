import { Component, OnInit } from '@angular/core';
import { LoginService } from 'services/loginservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  id: any;
  constructor(private loginServeice: LoginService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
      localStorage.removeItem('currentUser')
      this.router.navigate(['/login'])
    });
  }

}
