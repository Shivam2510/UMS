import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-seat',
  templateUrl: './library-seat.component.html',
  styleUrls: ['./library-seat.component.css']
})
export class LibrarySeatComponent implements OnInit {
  newName:any;

  constructor() { }

  ngOnInit(): void {
  }

  
  UserName:string = "Enter UserName"

  userlist:any = []

  userName(username:any){
    if(username.value.length > 0)
    {
      this.userlist.push(username.value);
      username.value = '';
    }
    
  }

  ondelete(i:any){
    // this.userlist.splice(deleteme,i)
    console.log(i);
    this.userlist.splice(i,1);
    
  }

  onUpdate(i:any,index:any){
    this.newName = prompt("Enter user Name");
    console.log(this.newName);
    console.log(index);
   this.userlist[index] = this.newName;
  }


}
