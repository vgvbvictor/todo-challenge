package org.springframework.boot.todo_challenge;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.todo_challenge.Tarefa;
import org.springframework.boot.todo_challenge.TarefaRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;



@Controller    
@RequestMapping(path="/api") 
public class ApiController {
	
	@Autowired 
	private TarefaRepository tarefaRepository;
		
	@PostMapping(path="/add")
	public @ResponseBody Tarefa addNewTable ( @RequestBody Tarefa tarefa) {
		Tarefa novaTarefa = tarefaRepository.save(tarefa);
		return novaTarefa;
	}
	
	@GetMapping(path="/all")
	public @ResponseBody Iterable<Tarefa> getAllTarefas() {
		return tarefaRepository.findAll();
	}
	
	@DeleteMapping(path="/delete/{id}")
	@ResponseBody 
	public boolean deleteMethod( @PathVariable("id") int id) {
		tarefaRepository.deleteById(id);
		return true;
	}
	

}
