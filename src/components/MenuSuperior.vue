<template>
<nav class="navbar  barra-superior ">
  <div class="container d-flex justify-content-between ">
    <router-link class="navbar-brand" to="/">
      <button class="btn">MIS TAREAS</button>
    </router-link>
        <p class="app-tarea">Organizador Semanal</p>
    <div class="" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link to="/agregar" class="btn">AGREGAR TAREA</router-link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
   



</template>

<script>
export default {
  name: 'MenuSuperior',
  data() {
    return {
      //
    };
  },


};
</script>
<style scoped>




  .barra-superior {
    background-color: #144272;
    border-radius: 20px;
    
  }
.container {
  align-items: center;
}
  .font-span {

    color: #DBDFEA;
  }


.btn {

  min-width: 130px;
  height: 50px;
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
  width: 250px;
}
.btn:hover {
  background: #fff;
  color: #2B2A4C;
  font-weight: bold;
}

.app-tarea{
  color: #D0E063;
  font-size: 3rem;
  
  
}
@media screen and (max-width: 900px) {
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    
    }
  .barra-superior{
    height: 150px;
  }

  .app-tarea{
    font-size:30px
  }
    .btn {
      width: 100%;
      margin-bottom: 10px;
    }
  }

@media screen and (max-width: 500px) {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  .barra-superior{
    height: 200px;
  }

  .app-tarea{
    font-size:30px
  }
    .btn {
      width: 100%;
      margin-bottom: 10px;
    }
  }
</style>