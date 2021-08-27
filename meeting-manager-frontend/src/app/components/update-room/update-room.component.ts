import { Room } from './../../room';
import { RoomService } from './../../services/room.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {

  id: number;
  room: Room;
  submitted: boolean = false;

  constructor(private roomService: RoomService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.room = new Room();

    this.id = this.route.snapshot.params['id'];

    this.roomService.getRoom(this.id)
                    .subscribe(data => {
                      console.log(data);
                      this.room = data;
                    },
                    error => console.log(error)
                    );
  }

  updateRoom() {
    this.roomService.updateRoom(this.id, this.room).subscribe(data => console.log(data), error => console.log(error));
    this.room = new Room();
    this.goToList();
  }

  onSubmit() {
    this.updateRoom();
  }

  goToList() {
    this.router.navigate(['/rooms']);
  }
}
