import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'button-component-challenge';

  theme: any = localStorage.getItem('theme') ? localStorage.getItem('theme') : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  changeTheme() {
    document.querySelector(':root')!.className = this.theme;  
  }

  updateTheme(event: any) {
    this.theme = event.target.checked ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
    this.changeTheme()
  }

  ngOnInit(): void {
    localStorage.setItem('theme', this.theme);
    this.changeTheme()
  }
}
