import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private route : Router,
    private snackBar: MatSnackBar
  ) { }

  authService(credentials : any){
    console.log("credentials  ", credentials);
    if (credentials.email == "admin@favric.cl" && credentials.password == "admin"){
      this.route.navigate(['/home']);
    }else {
      this.snackBar.open('Error al ingresar el usuario', 'Cerrar', {
        duration: 3000,
      });
    }
  }
}
