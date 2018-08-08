    angular.module('todoApp', [])
      .controller('TodoListController', function($scope, $http, TodoService) {
        var todoList = this;
        todoList.todos = [
          {
          }];
        
        TodoService.getAllTodo(todoList);
         
        todoList.addTodo = function() {        	
          var texto = todoList.todoText;
          $http.post('/api/add',{
        	tarefa: texto
          }).then(function ( response ){
        	  todoList.todos.push({
				  text: response.data.tarefa, 
        			id: response.data.id,
        			done: false
				  });
          });
          todoList.todoText = '';
        };
     
        todoList.remaining = function() {
          var count = 0;
          angular.forEach(todoList.todos, function(todo) {
            count += todo.done ? 0 : 1;
          });
          return count;
        };
     
        todoList.archive = function() {
          var oldTodos = todoList.todos;
          todoList.todos = [];

          var promises = [];
          
          angular.forEach(oldTodos, function(todo) {
            if (todo.done) {
            	promises.push($http.delete('/api/delete/'+todo.id));
            }
          });
          
          Promise.all(promises).then(function (){
        	  TodoService.getAllTodo(todoList);
          });
        };
      })
      
      .service('TodoService', function($http){
    	  this.getAllTodo = function (todoList) {
    		  $http.get('/api/all').then(function(resposta){
    			  todoList.todos = resposta.data.map( function (item) {
    	        		return {
    	        			text: item.tarefa, 
    	        			id: item.id,
    	        			done: false
    	        		}
    	        	} );
    	        });
    	    };
      });

