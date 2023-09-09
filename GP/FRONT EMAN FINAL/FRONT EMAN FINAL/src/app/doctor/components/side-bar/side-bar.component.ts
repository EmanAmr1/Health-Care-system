import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  selectedFW = new FormControl();
  frameworks: string[] = ['رمد', 'باطنية و الغدد الصماء ', 'أذن، أنف، حنجرة ', 'جلدية ']
  constructor() { }

  ngOnInit(): void {
  }

}
