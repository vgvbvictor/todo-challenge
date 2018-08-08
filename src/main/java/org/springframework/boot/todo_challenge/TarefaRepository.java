package org.springframework.boot.todo_challenge;

import org.springframework.boot.todo_challenge.Tarefa;
import org.springframework.data.repository.CrudRepository;

public interface TarefaRepository extends CrudRepository<Tarefa, Integer> {

}
