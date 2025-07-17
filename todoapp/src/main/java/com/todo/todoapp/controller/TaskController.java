package com.todo.todoapp.controller;

import com.todo.todoapp.model.Task;
import com.todo.todoapp.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }

    @GetMapping
    public List<Task> getAll() {
        return service.getAllTasks();
    }

    @PostMapping
    public Task create(@RequestBody Task task) {
        return service.addTask(task);
    }

    @PutMapping("/{id}")
    public Task update(@PathVariable Long id, @RequestBody Task task) {
        task.setId(id);
        return service.updateTask(task);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteTask(id);
    }
}
