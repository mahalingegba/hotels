import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListrestoService } from '../listresto.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  alert:boolean=false
  register=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    Password:new FormControl('')
  })
  constructor(private listrestoService:ListrestoService) { }

  ngOnInit(): void {
  }

  collectUserDetails(){
  console.log(this.register.value);
   this.listrestoService.registerUsers(this.register.value).subscribe((data)=>{
    console.log(data);
  })
  this.register.reset();
  }


close(){

}
}