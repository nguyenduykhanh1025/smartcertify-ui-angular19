import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./pages/footer/footer.component";
import { HeaderComponent } from "./pages/header/header.component";
import { AboutComponent } from "./pages/about/about.component";
import { HomeComponent } from "./components/home/home.component";
import { DataBindingsComponent } from "./components/data-bindings/data-bindings.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'smartcertify';
}
