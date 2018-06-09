import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ConfigService} from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private configService: ConfigService
  ) { }

  myControl: FormControl = new FormControl();

  options = [];
  suggestions = {};
  dataset = [];

  onSearchChange(searchValue : string ) {
    if (searchValue != "") {
      let str = `?query=${searchValue}&type=STK&filter=&isCustom=false`;
      this.configService.getSuggestData(str)
      .subscribe((data: any) => {
        this.options = [];
        this.suggestions = {};
        for (let i = 0; i < 5; i++) {
          this.options[i] = data[i].name;
          this.suggestions[data[i].name] = data[i].id;
        }
      });
    }
  }

  showData(val) {
    let str = `?asset=${this.suggestions[val]}&type=STK&filter=&isCustom=false`;
      this.configService.getFullData(str)
      .subscribe((data: any) => {
        this.dataset.push(data);
      });
  }

  sort(key) {
    return this.dataset.sort(function(a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }
}
