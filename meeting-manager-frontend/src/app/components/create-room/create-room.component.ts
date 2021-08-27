import { RoomService } from './../../services/room.service';
import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/room';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  room: Room = new Room();
  submitted: boolean = false;

  constructor(private roomService: RoomService, private router: Router) { }

  ngOnInit(){
  }

  newRoom(): void {
    this.submitted = false;
    this.room = new Room();
  }

  saveRoom() {
    this.roomService.createRoom(this.room).subscribe(data => console.log(data), error => console.log(error));
    this.room = new Room();
    this.goToList();
  }

  onSubmit() {
    this.submitted = true;
    this.saveRoom();
  }

  goToList() {
    this.router.navigate(['/rooms']);
  }

  backHome() {
    this.router.navigate(['home']);
  }
}
