<template>
  <div id="app">
    <!-- Roteamento Dinâmico -->
    <router-view />
  </div>
</template>

<style scoped>
/* Estilo principal do App */
#app {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #4e54c8, #8f94fb);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 40px 20px;
  color: #2c3e50; /* Cor de texto padrão */
}

/* Adaptação responsiva para telas menores */
@media (max-width: 768px) {
  #app {
    padding: 20px;
    align-items: flex-start;
  }
}

/* Scroll personalizado */
#app::-webkit-scrollbar {
  width: 10px;
}

#app::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 10px;
}

#app::-webkit-scrollbar-thumb {
  background: #4e54c8;
  border-radius: 10px;
}

#app::-webkit-scrollbar-thumb:hover {
  background: #6a11cb;
}
</style>
