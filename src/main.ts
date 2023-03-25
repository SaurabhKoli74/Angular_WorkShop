import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  //Program flow
  /*
  1.index.html
  2.main.ts
  3.AppModule
            ngModule
            ... declarations: [
            AppComponent
          ],
          imports: [
            BrowserModule,
            AppRoutingModule
          ],
          providers: [],
          bootstrap: [AppComponent]
  4.App Component
          //link all html and css files
       @Component({
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        })
        export class AppComponent {
          title = 'collegeProject';
        }

    
  4.
  */