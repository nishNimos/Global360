import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoErrorhandler implements ErrorHandler{
  handleError(error: any): void {
    console.error('An error occurred:', error);
    alert('An error occured.')
  }
}
