import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  data: any;
  detForm = new FormGroup({
   fName: new FormControl('',  Validators.required),
   lName: new FormControl('',  Validators.required),
   email: new FormControl('',  [Validators.required, Validators.email]),
   monthadvbug: new FormControl('',  Validators.required),
   phoneNo: new FormControl('',  Validators.required),

 })
  constructor(private route: Router) { }
 
  ngOnInit(){      
  }

  onsubmit(){
    console.log(this.detForm);
    this.data = JSON.stringify(this.detForm.value)
    this.route.navigate(['/home']);
    alert('Thank you \n We will be in touch with you')
  }

}

