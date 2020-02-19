import { Injectable } from '@angular/core';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logs: Log[];
  constructor() {     
    
    this.logs = [
    { id: '1', text: 'Added bootstrap', date: new Date('12/26/2017 12:54:23') },
    { id: '2', text: 'Generated service', date: new Date('12/24/2017 12:34:23') },
    { id: '3', text: 'Generated modules', date: new Date('12/13/2017 12:22:23') }
  ]}

  getLogs(){
      return this.logs;
  }
}
