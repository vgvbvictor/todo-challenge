    angular.module('todoApp', [])
      .controller('TodoListController', function($scope, $http) {
        var todoList = this;
        todoList.todos = [
          {text:'Desafio DEV1', done:true}];     
        
        
        todoList.addTodo = function() {        	
          todoList.todos.push({text:todoList.todoText, done:false});
          todoList.todoText = '';
        };
        
        //http POST
        //click em done, update databank
          //trocar user para tarefa
          //criar outra tabela 
          //deletar tabela user
          //trocar nome no "MainController" para "apiController"
          //trocar "User.java" para "Tarefa.java"
     // ->>    //http post angular
          //atention in the controller
     
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
          angular.forEach(oldTodos, function(todo) {
            if (!todo.done) todoList.todos.push(todo);
          });
        };
      })
      
      .service('TodoService', function($http){
    	  function getAllTodo() {
    	        return $http.get('/api/all');
    	    };
      }) 
      ;

