<template>
<div class="tareas-container">
  <div v-if="tareas.length === 0">
    <div class="titulo">
      <p>No hay tareas, duerme tranquilo como Snorlax...</p>
    </div>
    <img class="img-fluid" src="../assets/Snorlax.png" alt="Snorlax durmiendo" v-if="tareas.length === 0">
  </div>
  <div v-else>
    <div class="titulo-dos">
      <p>Tiene las siguientes tareas esta semana:</p>
    </div>
    <div class="tareas-grid">
      <div v-for="tarea in tareas" :key="tarea.id" class="card car-tarea">
        <div class="card-body">
          <TareaItem :tarea="tarea" @eliminar-tarea="eliminarTarea" @cambiar-estado-tarea="cambiarEstadoTarea" />
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import TareaItem from './TareaItem.vue';

export default {
  components: {
    TareaItem,
  },
  props: ['tareas'],
  methods: {
    eliminarTarea(id) {
      this.$emit('eliminarTarea', id);
    },
    cambiarEstadoTarea(id) {
      this.$emit('cambiarEstadoTarea', id);
    },
  },
};
</script>

<style scoped>
.titulo {
  text-align: center;
  padding: 3%;
}

.titulo p{
  font-size: 2rem;
  color: #DBDFEA;
}

.titulo-dos {
  font-size: 2rem;
  color: #DBDFEA;
  margin-top: 20px;
}

.text-incio{
  color: #DBDFEA;
}

.tareas-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  
 }

.tareas-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  padding: 10px;
  

 
}

.car-tarea {
margin-top: 10px;
  border: none;
background: transparent;
  }


.card-body {
  padding: 5px;

}

</style>
