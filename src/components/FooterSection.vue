<template>
  <footer >
    <div class="base">
    <p>Carlos Ortega</p>
    <p>Aplicaciones para Dispositivos Móviles</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
  data() {
    return {
      // Datos iniciales del componente
    };
  },
};

</script>

<style>
footer {
   background-color: #144272;
  padding: 20px;
  color: #DBDFEA;
  text-align: center;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  display: flex;
 
  
}

.base {
  width: 80%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
}
</style>
