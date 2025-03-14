import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  @Output() onSubmitLoginEvent = new EventEmitter();

  userName: string = '';
  password: string = '';

  onSubmitLogin() {
    this.onSubmitLoginEvent.emit({
      userName: this.userName,
      password: this.password,
    });
  }

  
}
