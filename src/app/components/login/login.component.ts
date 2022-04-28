import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { InputEmptyComponent } from 'src/app/components/input-empty/input-empty.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private matDialog: MatDialog
  ) {}

  usuario = {
    email: '',
    password: '',
  };

  ngOnInit(): void {}

  openDialog() {
    this.matDialog.open(InputEmptyComponent);
  }

  closeDialog() {
    this.matDialog.closeAll();
  }

  register() {
    console.log(this.usuario);
    const { email, password } = this.usuario;

    this.authService.register(email, password).then((res) => {
      console.log('Se registro correctamente', res);

      //this.router.navigate(['home']);
      // if (res?.user?.email != null) {
      //   this.openDialog();
      // } else {
      //   alert('OKKK');
      // }
      if (res?.user != null) {
        this.router.navigate(['home']);
      } else {
        this.openDialog();
      }
    });
  }

  login() {
    console.log(this.usuario);
    const { email, password } = this.usuario;
    this.authService.login(email, password).then((res) => {
      console.log('Logueado correctamente', res);

      if (res?.user == null) {
        this.openDialog();
      } else {
        this.router.navigate(['home']);
      }
    });
  }
}
