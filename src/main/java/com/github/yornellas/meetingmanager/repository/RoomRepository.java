package com.github.yornellas.meetingmanager.repository;

import com.github.yornellas.meetingmanager.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {

}
