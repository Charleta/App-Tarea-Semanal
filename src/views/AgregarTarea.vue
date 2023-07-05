<template>
  <div>
    
    <div class="titulo">
      <h2>Agregar Tarea</h2>
    </div>
    <formulario-tarea @nueva-tarea="agregarTarea" />
  </div>
 
</template>

<script>
import FormularioTarea from '../components/FormularioTarea.vue';



export default {
  components: {
    FormularioTarea,
    
   
  },
  methods: {
    agregarTarea(nuevaTarea) {
      const tareasLocalStorage = localStorage.getItem('tareas');
      let tareas = [];
      if (tareasLocalStorage) {
        tareas = JSON.parse(tareasLocalStorage);
      }
      tareas.push(nuevaTarea);
      localStorage.setItem('tareas', JSON.stringify(tareas));
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.titulo {
  text-align: center;
  padding: 3%;
}

h2 {
  font-size: 3rem;
  color: #DBDFEA;
}

</style>
