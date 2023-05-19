import { Component, Input } from '@angular/core'; //o pacote Input foi adicionado para ler os dados

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})
export class ParentDataComponent {
  @Input () name: string = ""; //adicionado apros importar o Input
  @Input () userData!: {email:String, role:string}; //objeto. Para inicializar colocou-se um ! antes dos:
}
