import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

export function getBaseUrl() {
  return "http://localhost:5193";
}

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
