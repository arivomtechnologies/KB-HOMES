import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappFabComponent } from './components/whatsapp-fab/whatsapp-fab.component';
import { ScrollProgressComponent } from './components/scroll-progress/scroll-progress.component';
import { CustomCursorComponent } from './components/custom-cursor/custom-cursor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    WhatsappFabComponent,
    ScrollProgressComponent,
    CustomCursorComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
