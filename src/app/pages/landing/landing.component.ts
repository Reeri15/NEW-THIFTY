import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../UI/shared--UI/navbar/navbar.component";
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}