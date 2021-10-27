import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  userName!: string;
  userUserName!:string;

  get diagnostic (){
    return JSON.stringify ({
      name:this.userName,
      userName:this.userUserName
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
