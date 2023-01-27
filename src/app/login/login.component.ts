import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    Adress:new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }
  loggedInUserDetails(){
  console.log(this.login.value);
  }
}
