<template>
<div :class="{ 'tarea-realizada': tarea.realizada }" class="card">
  <div class="card-body">
    <h5 class="card-title">Nombre: {{ tarea.nombre }}</h5>
    <p class="card-text">Función: {{ tarea.funcion }}</p>
    <p class="card-text">Tipo: {{ tarea.tipo }}</p>
    <p class="card-text">Fecha: {{ tarea.fecha }}</p>
    <div class="contenedor-botones">
<button @click="cambiarEstadoTarea" :class="['btn', colorClass]">
  {{ tarea.realizada ? 'Realizada' : 'Pendiente' }}
</button>    <button @click="eliminarTarea" class="btn eliminar">Eliminar</button>
    </div>
  </div>
</div>

</template>


<script>
export default {
  data() {
  return {
    colorClass: 'pendiente'
  };
},
  props: ['tarea'],
  methods: {
    eliminarTarea() {
      this.$emit('eliminarTarea', this.tarea.id);
    },
   
    cambiarEstadoTarea() {
  this.$emit('cambiarEstadoTarea', this.tarea.id);
  this.colorClass = this.tarea.realizada ? 'realizada' : 'pendiente';
},
  },
};
</script>

<style scoped>
.card {

  background-color: #FFEAD2;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 5px;
  width: 350px;
  height: 300px;
  box-shadow: rgb(20, 66, 114) 0px 14px 28px, rgb(20, 66, 114) 0px 10px 10px;

  
}

.card-body {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}

.card-text {
  margin-bottom: 5px;
}

.contenedor-botones{
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
}

.eliminar {
  min-width: 130px;
  height: 40px;
  color: #2B2A4C;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 20px;
  border: 2px solid #F45050;
  background: #F45050;
  
  
}


.realizada{
   min-width: 130px;
  height: 40px;
  color: #2B2A4C;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 20px;
  border: 2px solid #90B77D;
  background: #90B77D;
 
}
.pendiente {
   min-width: 130px;
  height: 40px;
  color: #2B2A4C;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 20px;
  border: 2px solid #D3D04F;
  background: #D3D04F;
  
}
.btn:hover {
  background: #fff;
  color: #2B2A4C
}

</style>

