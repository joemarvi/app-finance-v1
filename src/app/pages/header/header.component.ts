import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  currentDate = new Date();
  titlePage: string = 'Financial Control Plan';

  constructor() { }
  ngOnInit(): void {
    this.currentDate = new Date();
  }

}
