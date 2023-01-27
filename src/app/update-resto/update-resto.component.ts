import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ListrestoService } from '../listresto.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert:boolean=false
  editResto=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    Adress:new FormControl('')
  })
  constructor(private route:ActivatedRoute,
    private listRestoservice:ListrestoService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    this.listRestoservice.getCurrentRest(this.route.snapshot.params.id).subscribe((data)=>{
      console.log(data)
      this.editResto=new FormGroup({
        name:new FormControl(data['name']),
        email:new FormControl(data['email']),
        Adress:new FormControl(data['Adress'])
      })
    })
  }

  collectUpdatedRestoDetails(){
    this.listRestoservice.updateRestoDetails(this.route.snapshot.params.id,this.editResto.value).subscribe((updated)=>{
      console.log(updated)
    })
    console.log(this.editResto.value);
    this.alert=true
   
  }
  close(){
    this.alert=false
  }
}
