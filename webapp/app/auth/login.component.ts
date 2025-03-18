import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule],
  template: `
    <div class="flex h-screen justify-center items-center">
      <div class="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 class="text-2xl font-bold mb-4">Login</h2>
        <input
          [(ngModel)]="username"
          type="text"
          placeholder="Username"
          class="w-full p-2 mb-2 border rounded"
        />
        <input
          [(ngModel)]="password"
          type="password"
          placeholder="Password"
          class="w-full p-2 mb-4 border rounded"
        />
        <button
          (click)="login()"
          class="w-full bg-blue-500 text-white p-2 rounded"
        >
          Login
        </button>
        @if (errorMessage) {
          <p class="text-red-500 mt-2">{{ errorMessage }}</p>
        }
      </div>
    </div>
  `,
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  login(): void {
    console.log('login method', this.username, this.password);
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/chat']);
    } else {
      this.errorMessage = 'Invalid credentials';
    }
  }
}
