import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnotherService {
  constructor() {}

  public doSomething(a: number = 1, b:number=2): number{
    return a + b;
  }
}
