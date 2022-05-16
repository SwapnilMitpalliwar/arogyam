import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  showSignIn: boolean = false;

  constructor(private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  signIn(): void {
    this.snackBar.open('Successfully logged in.','Dismiss', { duration: 2000});
    this.router.navigateByUrl('/dashboard');
  }

}
