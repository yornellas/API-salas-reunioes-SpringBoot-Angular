import { HomeComponent } from './components/home/home.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { UpdateRoomComponent } from './components/update-room/update-room.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'rooms', component: RoomListComponent},
  {path: 'add', component: CreateRoomComponent},
  {path: 'update/:id', component: UpdateRoomComponent},
  {path: 'details/:id', component: RoomDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
