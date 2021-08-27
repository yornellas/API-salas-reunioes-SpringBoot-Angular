import { RoomService } from './../../services/room.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/room';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms: Observable<Room[]>;

  constructor(private roomService: RoomService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.rooms = this.roomService.getRoomList();
  }

  roomDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateRoom(id: number) {
    this.router.navigate(['update', id]);
  }

  deleteRoom(id: number) {
    this.roomService.deleteRoom(id)
                    .subscribe(
                      data => {
                        console.log(data);
                        this.reloadData();
                      },
                      error => console.log(error)
                    );
  }

  addRoom() {
    this.router.navigate(['add']);
  }

  backHome() {
    this.router.navigate(['home']);
  }
}
