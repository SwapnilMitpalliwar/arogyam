import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  User: any = [
    'Registered Nurse',
    'Cardiac Nurse',
    'Certified Registered Nurse Anesthetist',
    'Clinical Nurse Specialist',
    'Critical Care Nurse',
    'ER Nurse',
    'Family Nurse Practitioner',
    'Geriatric Nursing'
  ];

  constructor(private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  register(): void {
    this.snackBar.open('Successfully registered.','Dismiss', { duration: 2000});
    this.router.navigateByUrl('/signin');
  }

}