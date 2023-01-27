import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListrestoService } from '../listresto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
 alert:boolean=false
addResto=new FormGroup({
  name:new FormControl(''),
  email:new FormControl(''),
  Adress:new FormControl('')
})
  constructor(private listRestaurants:ListrestoService) { }

  ngOnInit(): void {
  }

   collectRestoDetails(){
    this.listRestaurants.saveResto(this.addResto.value).subscribe((data)=>{
    console.log(data)
     })

    this.alert=true
    this.addResto.reset();
  }
  close(){
    this.alert=false
  }
}
