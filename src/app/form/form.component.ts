import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {DataService} from '../data.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
    form: FormGroup;
  arr = { name: "", email: "" ,feedback: "",comment: ""};

  constructor( private dataservice: DataService, builder: FormBuilder) {
    this.form = builder.group({
      name: "",
      email: "",
      feedback: "",
       comment: ""
    });

    
 
    // this.ngOnInit();

  }
   ngOnInit(): void { 
         this.dataservice.getConfig() 
    .subscribe( Response => { 
this.arr.email=Response.email;
this.arr.comment=Response.comment;
this.arr.feedback=Response.feedback;
      this.arr.name = Response.name;
    }); 


 }


submitFunc() {
  this.form.value.comment= this.arr.comment;
    this.dataservice.postConfig(this.form.value)
                .subscribe(
                    (data) => {
                       console.log('Form submitted successfully');  
                       console.log(JSON.stringify(data));
                       document.getElementById("validation").innerHTML = "Form submitted successfully!";

                    },
                    (error: HttpErrorResponse) => {
                        console.log(error);
                         document.getElementById("validation").innerHTML = "An error occurred while submitting ):";
                    }
                );
        }



 




}
