import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'

@Injectable()
export class DynamicService {

  constructor() { }


  getMetadata(): Observable<any> {

    return Observable.of([{
        "element" : "input",
        "type": "SUBMIT",
        "value": "SUBMIT"
    }]);
  }
}
