import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly ROOT_URL = 'http://localhost:5000';
  title = 'gerber';
  constructor(private http: HttpClient) {}
  gerber: Observable<any>;
  getGerber() {

    this.gerber = this.http.get(this.ROOT_URL + '/gerber');
  }
}


