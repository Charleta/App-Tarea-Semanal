<template>
  <div>
  
    <TareasList :tareas="tareas" @eliminar-tarea="eliminarTarea" @cambiar-estado-tarea="cambiarEstadoTarea" />
    
  </div>
 
</template>

<script>
import TareasList from '../components/TareasList.vue';




export default {
  name: 'HomePage',
  components: {
    TareasList,
    
   
  },
  data() {
    return {
      tareas: [],
    };
  },
  methods: {
    eliminarTarea(id) {
      this.tareas = this.tareas.filter(tarea => tarea.id !== id);
      localStorage.setItem('tareas', JSON.stringify(this.tareas));
    },
    cambiarEstadoTarea(id) {
      this.tareas = this.tareas.map(tarea => {
        if (tarea.id === id) {
          tarea.realizada = !tarea.realizada;
        }
        return tarea;
      });
      localStorage.setItem('tareas', JSON.stringify(this.tareas));
    },
  },
  created() {
    const tareasLocalStorage = localStorage.getItem('tareas');
    if (tareasLocalStorage) {
      this.tareas = JSON.parse(tareasLocalStorage);
    }
  },

};
</script>

<style scoped>
.titulo {
  text-align: center;
  padding: 3%;
}

h1 {
  font-size: 3rem;
  color: #DBDFEA;
}


</style>
