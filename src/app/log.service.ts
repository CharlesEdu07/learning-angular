import { Inject, Injectable } from "@angular/core";

@Injectable()
export class LogService {
  constructor(@Inject('LogPrefix') private prefix: string) {
  }

  log(msg: string) {
    console.log(`${this.prefix}: ${msg}`);
  }
}
