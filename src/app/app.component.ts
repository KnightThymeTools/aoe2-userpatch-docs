import { Component } from '@angular/core';
import { PageLink } from 'src/core/data/navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activePages: PageLink[] = [
      {
        title: "Home",
        pageRoute: "/readme"
      }
  ]; 
  title = 'UserPatchDocs';
}
