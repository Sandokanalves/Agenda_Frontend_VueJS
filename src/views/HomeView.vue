<template>
  <div class="home-container">
    <!-- Título Interativo -->
    <h1 class="title">📋 Bem-vindo à sua Lista de Contatos</h1>

    <!-- Componente de Lista de Contatos -->
    <ContactList @edit="editContact" />

    <!-- Rodapé -->
    <footer class="footer">
      Desenvolvido por <strong>Sandokan Alves de Oliveira</strong> <br />
      📞 (81) 99292-7867 | ✉️ sandokan.alves.oliveira@gmail.com
    </footer>
  </div>
</template>

<script>
import ContactList from '@/components/ContactList.vue';

export default {
  components: { ContactList },
  methods: {
    editContact(id) {
      this.$router.push(`/edit/${id}`);
    },
  },
};
</script>

<style scoped>
/* Container principal */
.home-container {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}

/* Título Interativo com Degradê */
.title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  background: linear-gradient(90deg, #4caf50, #2196f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientFlow 3s linear infinite;
}

/* Animação do Degradê */
@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Rodapé */
.footer {
  margin-top: 40px;
  padding: 20px;
  text-align: center;
  font-size: 1rem;
  color: #4a4a4a;
  border-top: 1px solid #ddd;
}

.footer strong {
  color: #2c3e50;
}
</style>
