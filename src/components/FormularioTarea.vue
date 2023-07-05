<template>

<div class="parrafo">
  <p>Ingrese la tarea que tenes pendiente esta semana</p>
</div>
<div class="contenedor-total">
<div class="contenedor-form">
<div class="formulario-tarea">
  <form @submit.prevent="agregarTarea">
    <div class="form-group">
      <label for="nombreTarea">Nombre de tarea:</label>
      <input type="text" id="nombreTarea" v-model="nombreTarea" placeholder="" />
    </div>
    <div class="form-group">
      <label for="funcionTarea">Tarea a realizar:</label>
      <input type="text" id="funcionTarea" v-model="funcionTarea" placeholder="" />
    </div>
    <div class="form-group">
      <label for="tipoTarea">Tipo de tarea:</label>
      <select id="tipoTarea" v-model="tipoTarea">
        <option value="trabajo">Trabajo</option>
        <option value="amigo">Amigo</option>
        <option value="colegio">Colegio</option>
        <option value="vida cotidiana">Vida Cotidiana</option>
      </select>
    </div>
    <div class="form-group">
      <label for="fechaTarea">Fecha a terminar:</label>
      <input type="date" id="fechaTarea" v-model="fechaTarea" />
    </div>
    <div class="btn-ubi">
    <button type="submit" class="btn">Agregar</button>
    </div>
  </form>
</div>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      nombreTarea: '',
      funcionTarea: '',
      tipoTarea: 'trabajo',
      fechaTarea: '',
    };
  },
 methods: {
  agregarTarea() {
    if (!this.nombreTarea || !this.funcionTarea || !this.fechaTarea) {
      alert ('No cargaste ninguna tarea, en MIS TAREAS mira las guardadas.')
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      nombre: this.nombreTarea,
      funcion: this.funcionTarea,
      tipo: this.tipoTarea,
      fecha: this.fechaTarea,
      realizada: false,
    };

    this.$emit('nueva-tarea', nuevaTarea);

    this.nombreTarea = '';
    this.funcionTarea = '';
    this.tipoTarea = 'trabajo';
    this.fechaTarea = '';
  },
},
};
</script>
<style scoped>


.parrafo{
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.parrafo p {
  color: #DBDFEA;
  font-size: 20px;
  font-weight:bold ;
}
.contenedor-total{
  display: flex;
  justify-content: center;
  align-items: center;
  
  
}

.contenedor-form {
  background-color: #FFEAD2;
  width: 500px;
  height: 550px;
  border-radius: 20px;
box-shadow: rgb(20, 66, 114) 0px 14px 28px, rgb(20, 66, 114) 0px 10px 10px;
}
.formulario-tarea {
  max-width: 400px;
  margin:50px auto;
  
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #0A2647;
}

input[type="text"],
select,
input[type="date"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn-ubi{
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
}

.btn {

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
  border: 2px solid #144272;
  background: #DBDFEA;
  margin-top: 20px;
}
.btn:hover {
  background: #fff;
  color: #2B2A4C
}

</style>