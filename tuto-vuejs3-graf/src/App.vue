
<template>

<form action="" @submit.prevent="addTodo">
  <fieldset role="group">
    <input type="text" v-model="newTodo" placeholder="Tâche à effectuer...">
    <button :disabled="newTodo.length===0">Ajouter</button>
  </fieldset>
</form>
<div v-if="todos.length ===0" >
  <h1>Aucune tâche a effectuer</h1>
</div>
<div v-else>
  <ul>
    <li v-for="todo in sortTodos()" :key="todo.date" :class="{completed:todo.completed}">
      <label>
        <input type="checkbox" v-model="todo.completed">
        {{todo.title}}
      </label>
    </li>
  </ul>
</div>
<div>
  <label>
    <input type="checkbox" v-model="hideCompleted">Masquer les tâches complétées
  </label>
</div>
</template>


<script setup>
import { ref } from 'vue';
const todos = ref([
  {
  title:"tache 1",
  completed:true,
  date:1
  },
  {
  title:"tache 2",
  completed:false,
  date:2
  },
])
const newTodo = ref('')
const hideCompleted=ref(false)

const addTodo = () =>{
  todos.value.push({
    title: newTodo.value,
    completed: false,
    date:Date.now()
  })
  newTodo.value='';
}

const sortTodos = () => {
  const sortedTodos = todos.value.toSorted((a,b)=>a.completed > b.completed ? 1 : -1)
  if(hideCompleted.value===true){
    return sortedTodos.filter(t=>t.completed ===false )
  }
  return sortedTodos
}
</script>


<style scoped>
.completed {
  opacity: .5;
  text-decoration: line-through;
}
</style>
