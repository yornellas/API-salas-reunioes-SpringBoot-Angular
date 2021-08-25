package com.github.yornellas.meetingmanager.controller;

import com.github.yornellas.meetingmanager.exception.ResourceNotFoundException;
import com.github.yornellas.meetingmanager.model.Room;
import com.github.yornellas.meetingmanager.repository.RoomRepository;
import jakarta.validation.Valid;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/rooms")
@CrossOrigin(origins = "http://localhost:4200")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;

    @GetMapping
    public List<Room> findAllRooms() {
        return roomRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Room> findRoomById(@PathVariable Long id) throws ResourceNotFoundException {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Room with ID " +id +" not found."));
        return ResponseEntity.ok().body(room);
    }

    @PostMapping
    public ResponseEntity<Room> createRoom(@Valid @RequestBody Room room) {
        roomRepository.save(room);
        return ResponseEntity.ok().body(room);
    }
    
    @PutMapping(value = "/{id}")
    public ResponseEntity<Room> updateRoom(@PathVariable Long id, @Valid @RequestBody Room roomDetails) throws ResourceNotFoundException {
        Room room = roomRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Room with ID " +id +" not found."));
        room.setName(roomDetails.getName());
        room.setDate(roomDetails.getDate());
        room.setStartHour(roomDetails.getStartHour());
        room.setEndHour(roomDetails.getEndHour());
        roomRepository.save(room);
        return ResponseEntity.ok().body(room);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<String> deleteRoomById(@PathVariable Long id) throws ResourceNotFoundException {
        Room room = roomRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Room with ID " +id +" not found."));
        roomRepository.deleteById(id);
        String message = "Deleted room with ID: " +id +"";
        return ResponseEntity.ok().body(message);
    }
}
