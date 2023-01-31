import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import axios from 'axios'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
    axios.get("https://capgemini.com").then((resp)=>{
      console.log(resp)
    })
  }
}
