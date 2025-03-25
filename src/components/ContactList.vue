<template>
    <div class="container">
      <h1 class="title">📞 Lista de Contatos</h1>
  
      <button @click="goToAddContact" class="add-btn">➕ Adicionar Novo Contato</button>
  
      <ul v-if="contacts.length" class="contact-list">
        <li v-for="contact in contacts" :key="contact.id" class="contact-item">
          <div class="contact-info">
            <span><strong>Nome:</strong> {{ contact.nome }}</span>
            <span><strong>E-mail:</strong> {{ contact.email }}</span>
            <span><strong>Telefone:</strong> {{ contact.telefone }}</span>
          </div>
  
          <div class="action-buttons">
            <button @click="editContact(contact.id)" class="edit-btn">✏️ Editar</button>
            <button @click="deleteContact(contact.id)" class="delete-btn">🗑️ Excluir</button>
          </div>
        </li>
      </ul>
  
      <p v-else class="empty-message">Nenhum contato encontrado. Adicione um novo!</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactList',
    data() {
      return {
        contacts: [], // Lista de contatos
      };
    },
    methods: {
      // Buscar contatos na API
      async fetchContacts() {
        try {
          const response = await fetch('https://localhost:7067/api/Contato');
          this.contacts = await response.json();
        } catch (error) {
          console.error('Erro ao buscar contatos:', error);
        }
      },
  
      // Navegar para a página de adicionar contato
      goToAddContact() {
        this.$router.push('/add');
      },
  
      // Navegar para a página de edição do contato
      editContact(id) {
        this.$router.push(`/edit/${id}`);
      },
  
      // Deletar contato
      async deleteContact(id) {
        if (!confirm('Deseja realmente excluir este contato?')) return;
        try {
          await fetch(`https://localhost:7067/api/Contato/${id}`, {
            method: 'DELETE',
          });
          this.fetchContacts(); // Atualizar lista após exclusão
        } catch (error) {
          console.error('Erro ao excluir contato:', error);
        }
      },
    },
    created() {
      this.fetchContacts(); // Carregar contatos ao inicializar o componente
    },
  };
  </script>
  
  <style scoped>
  /* Container principal */
  .container {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    background: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
  }
  
  /* Título */
  .title {
    text-align: center;
    font-size: 2rem;
    color: #4A4A4A;
    margin-bottom: 30px;
  }
  
  /* Botão de adicionar contato */
  .add-btn {
    display: block;
    margin: 20px auto;
    padding: 12px 24px;
    font-size: 1rem;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .add-btn:hover {
    background: #45a049;
  }
  
  /* Lista de contatos */
  .contact-list {
    list-style: none;
    padding: 0;
  }
  
  /* Cada item da lista */
  .contact-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    margin-bottom: 12px;
    border-bottom: 1px solid #ddd;
    transition: background 0.3s ease;
  }
  
  .contact-item:hover {
    background: #f9f9f9;
  }
  
  /* Informações do contato */
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: left;
  }
  
  /* Botões de ação (Editar e Excluir) */
  .action-buttons {
    display: flex;
    gap: 12px;
  }
  
  /* Botão de Editar */
  .edit-btn {
    padding: 8px 16px;
    background: #FFC107;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .edit-btn:hover {
    background: #FFA000;
  }
  
  /* Botão de Excluir */
  .delete-btn {
    padding: 8px 16px;
    background: #F44336;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .delete-btn:hover {
    background: #D32F2F;
  }
  
  /* Mensagem caso não haja contatos */
  .empty-message {
    text-align: center;
    font-size: 1.2rem;
    color: #757575;
  }
  </style>
  