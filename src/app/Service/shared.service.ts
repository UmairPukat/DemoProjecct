import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  sharedCode: string = '';

  constructor() { }

  setSharedCode(code: string) {
    this.sharedCode = code;
  }

  getSharedCode() {
    return this.sharedCode;
  }
}
