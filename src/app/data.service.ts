import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor() { }

  cars = ['Ford', 'Chevrolet', 'Buick'];
  myData() {
    return 'This id my data.';
  }
}
