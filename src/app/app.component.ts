import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = "Fran2"; //propriedade necessária para o componente a ser compartilhado
  userData = {
    email: 'fran2@gmail.com', 
    role: 'Admin',
  };
  title = 'curso-angularMB';
}
