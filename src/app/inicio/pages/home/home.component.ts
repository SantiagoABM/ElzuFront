import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  formularios: any = {}
  rol: String | null = '';

  constructor(
    private formService: FormularioService,
    private authService: AuthService,
    private router: Router,
  ) { }

  async ngOnInit() {
    this.rol = await this.authService.getRol();
    this.formularios = await this.formService.getFormularios()
    // .subscribe(
    //   (res) => {
    //     this.formularios = res.data;
    //     console.log(this.formularios);

    //   }, 
    //   (err) => {
    //     console.error(err)
    //   }
    // );
  }
  llenar(id: string){
    console.log(id);
    this.router.navigate(['/formularios/historiales/' + id]);
  }
  editar(){
    this.router.navigate(['/'])

  }
  eliminar(){
    this.router.navigate(['/'])

  }

}
