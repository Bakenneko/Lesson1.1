import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input()
  user:IUser

  @Output()
  lift = new EventEmitter<IUser>();

  getDetails() {
    this.lift.emit(this.user)
  }
}
