import { Injectable } from '@angular/core';
import {AnotherService} from "./another-service";

@Injectable({
  providedIn: 'root'
})
export class SimpleService {
  constructor(private anotherService: AnotherService) {}

  public callAnotherService() : number {
    return this.anotherService.doSomething();
  }
}
