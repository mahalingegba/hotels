import { Component, OnInit } from '@angular/core';
import { ListrestoService } from '../listresto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  constructor(private listRestaurants:ListrestoService) { }
 collections:any=[]
  ngOnInit(): void {
    this.listRestaurants.getListRest().subscribe((data)=>{
     this.collections=data
    })
  }

  deleteResto(res){
    this.listRestaurants.deleteResto(res).subscribe((data)=>{
      console.log(data)
    }
    )
    this.collections.splice(res-1,1);
  }
  
  
  
}
