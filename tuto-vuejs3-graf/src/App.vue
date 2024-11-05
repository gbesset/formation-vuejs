
<template>

<form action="" @submit.prevent="addTodo">
  <fieldset role="group">
    <input type="text" v-model="newTodo" placeholder="Tâche à effectuer...">
    <Button :disabled="newTodo.length===0">Ajouter</Button>
  </fieldset>
</form>
<div v-if="todos.length ===0" >
  <h1>Aucune tâche a effectuer</h1>
</div>
<div v-else>
  <ul>
    <li v-for="todo in sortTodos" :key="todo.date" :class="{completed:todo.completed}">
      <label>
        <!--<Checkbox :label="todo.title" @check="(p) => console.log('coché',p)" @uncheck="console.log('decoche')"/>-->
          <Checkbox :label="todo.title" v-model="todo.completed"/>
      </label>
    </li>
  </ul>
</div>
<div>
  <label>
    <input type="checkbox" v-model="hideCompleted">Masquer les tâches complétées
  </label>
</div>
<p v-if="remaining>0">{{ remaining }} tâches à faire...</p>

</template>


<script setup>
import { computed, ref } from 'vue';
import Checkbox from './components/Checkbox.vue';
import Button from './components/Button.vue';

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

const sortTodos = computed(() => {
  console.log("sort !")
  const sortedTodos = todos.value.toSorted((a,b)=>a.completed > b.completed ? 1 : -1)
  if(hideCompleted.value===true){
    return sortedTodos.filter(t=>t.completed ===false )
  }
  return sortedTodos
})
const remaining = computed(()=>{
  return todos.value.filter(t=>t.completed==false).length
})
</script>


<style scoped>
.completed {
  opacity: .5;
  text-decoration: line-through;
}
</style>
