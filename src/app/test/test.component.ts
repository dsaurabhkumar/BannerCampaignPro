import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule  } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  campTitle: String;
  myform: FormGroup;
  langs: string[] = [
    'English',
    'French',
    'German',
  ]

  constructor(private _data: DataService) { }

  ngOnInit() {
    // get campTitle from dataService
    this._data.currentCampTitle.subscribe(title => this.campTitle = title);

    this.myform = new FormGroup({
      campTitle: new FormControl(),
      name: new FormGroup({ 
          firstName: new FormControl(), 
          lastName: new FormControl(),
      }),
      email: new FormControl(),
      password: new FormControl(),
      language: new FormControl()
  });

  }


  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted!");
      console.log(this.myform.value);
      console.log("-----------------------");
      console.log(this.myform.value.name);
    }
  }

}
