import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { Test, TestService } from './services/test/test.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: Observable<Test> = this.test.getTest()
  constructor(private test: TestService) {}
}
