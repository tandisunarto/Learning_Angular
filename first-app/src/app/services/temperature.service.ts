import { Injectable } from '@angular/core';

@Injectable()
export class TemperatureService {

  constructor() { }

  celcius2fahrenheit(c: number): number {
    return (c - 32) / 2;
  };

}
