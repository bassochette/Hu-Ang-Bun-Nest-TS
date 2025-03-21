import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppApi } from '../../generated-api-client';
import { toSignal } from '@angular/core/rxjs-interop';

const apiClient = new AppApi();

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = '🦊';
  date = toSignal(apiClient.appControllerGetCurrentDate());
  protected readonly JSON = JSON;
}
