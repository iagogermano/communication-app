import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input('firstName') name: string;
  @Input() lastName: string;
  @Input() age: number;

  clients: Client[];

  constructor() { 
    this.clients = [
      {id:1, name: "Iago", age:20},
      {id:2, name: "Nilmar", age:30},
      {id:3, name: "Jeferson", age:22},
      {id:4, name: "Junior", age:40},
    ];
  }

  ngOnInit() {
  }

}
