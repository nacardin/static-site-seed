/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {Alert, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    pipes: [ ],
    providers: [ ],
    directives: [ Alert ],
    styles: [`
    nav ul {
      display: inline;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 60px;
    }
    nav li {
      display: inline;
    }
    nav li.active {
      background-color: lightgray;
    }
  `],
    template: `
    <div>asd</div>
    <div> {{ date.toDateString() }} </div>
    <alert type="info">Hello from ng2-bootstrap  {{ date.toDateString() }}</alert>
  `
})
export class App {
    name = 'Angular 2 Webpack Starter';
    url = 'https://twitter.com/AngularClass';
    date: Date = new Date();
    constructor() {
    }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */