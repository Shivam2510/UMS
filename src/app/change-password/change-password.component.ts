import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  password = '';
  useLetter = false;
  useNumber = false;
  useSymboles = false;
  lengthVal = 0;

  onLength(val:any){
    const parVal = parseInt(val);
    console.log(val)
    if(!isNaN(parVal)){
      this.lengthVal = parVal;
      
    }
    console.log(this.lengthVal);
  }

  onChangeUseLetter(){
    this.useLetter = !this.useLetter;
  }

  onChangeUseNumber(){
    this.useNumber = !this.useNumber;
  }

  onChangeUseSymboles(){
    this.useSymboles = !this.useSymboles;
  }

  onButtonClick(){

    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstwxyz';
    const symboles = '!@#$%^&*()';

    let validChars = '';

    if(this.useLetter){
      validChars += letters;
    }
    if(this.useNumber){
      validChars += numbers;
    }
    if(this.useSymboles){
      validChars += symboles;
    }

    let genPassword = '';
    for(let i =0;i<this.lengthVal;i++){
      const index = Math.floor(Math.random()*validChars.length);
      genPassword += validChars[index]; 
    }

    this.password = genPassword;

    console.log(this.password)
    
    // console.log("Hello u Called me");
    // console.log(this.useLetter);
    // console.log(this.useNumber);
    // console.log(this.useSymboles);
  } 

  // getPassword(){
  //   return this.password;
  // }

}

