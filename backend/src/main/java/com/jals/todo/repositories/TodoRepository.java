package com.jals.todo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.jals.todo.domain.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long>{
	
	@Query("SELECT obj FROM Todo obj WHERE obj.finish = false ORDER BY obj.dateToFinish")
	List<Todo> findAllOpen();
	
	@Query("SELECT obj FROM Todo obj WHERE obj.finish = true ORDER BY obj.dateToFinish")
	List<Todo> findAllClose();
	
	
}
 