import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'argentina-programa-frontend';

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.comprobarToken();
  }

  private async comprobarToken() {
    try {
      await firstValueFrom(this.authService.me())
    } catch (error: any) {
      this.authService.limpiarToken()
    }
  }

}
