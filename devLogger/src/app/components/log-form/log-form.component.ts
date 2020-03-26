import { Log } from './../../models/log';
import { LogService } from './../../services/log.service';
import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  text: string;
  id: string;
  date: any;

  isNew: boolean = true;

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.selectedLog.subscribe(log => {

      if(log.id !== null){
        this.isNew = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }

    })
  }

  onSubmit(){

    if(this.isNew){
      // Create new log

      const newLog = {
        id: uuidv4(),
        text: this.text,
        date: new Date(),
        isNew: false
      }

      console.log(newLog)
      this.logService.addLog(newLog);
    }
    else{
      const updLog = {
        id: this.id,
        text: this.text,
        date: new Date()
      }
      this.logService.updateLog(updLog);
    }
    this.clearState();
    this.logService.clearState();

  }

  clearState(){
    this.isNew = true;
    this.id = '';
    this.text = '';
    this.date = '';
  }


}


