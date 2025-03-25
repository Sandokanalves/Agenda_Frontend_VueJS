<template>
    <div class="form-container">
      <h2>{{ isEdit ? '✏️ Atualizar' : '➕ Adicionar' }} Contato</h2>
  
      <form @submit.prevent="handleSubmit" class="contact-form">
        <!-- Campo Nome (Desativado no modo de edição) -->
        <div class="form-group">
          <label for="nome">Nome</label>
          <input
            v-model="contact.nome"
            id="nome"
            type="text"
            :disabled="isEdit"
            placeholder="Digite o nome"
            required
          />
        </div>
  
        <!-- Campo Email -->
        <div class="form-group">
          <label for="email">Email</label>
          <input
            v-model="contact.email"
            id="email"
            type="email"
            placeholder="Digite o email"
            required
          />
        </div>
  
        <!-- Campo Telefone -->
        <div class="form-group">
          <label for="telefone">Telefone</label>
          <input
            v-model="contact.telefone"
            id="telefone"
            type="text"
            placeholder="Digite o telefone"
            required
          />
        </div>
  
        <!-- Campo Endereço -->
        <div class="form-group">
          <label for="endereco">Endereço</label>
          <input
            v-model="contact.endereco"
            id="endereco"
            type="text"
            placeholder="Digite o endereço"
          />
        </div>
  
        <!-- Campo Data de Nascimento -->
        <div class="form-group">
          <label for="dataNascimento">Data de Nascimento</label>
          <input
            v-model="contact.dataNascimento"
            id="dataNascimento"
            type="date"
          />
        </div>
  
        <!-- Campo Site -->
        <div class="form-group">
          <label for="site">Site</label>
          <input
            v-model="contact.site"
            id="site"
            type="url"
            placeholder="Digite o site"
          />
        </div>
  
        <!-- Campo Telefone Comercial -->
        <div class="form-group">
          <label for="telefoneComercial">Telefone Comercial</label>
          <input
            v-model="contact.telefoneComercial"
            id="telefoneComercial"
            type="text"
            placeholder="Digite o telefone comercial"
          />
        </div>
  
        <!-- Botões de Ação -->
        <div class="button-group">
          <button type="submit" class="submit-button">
            {{ isEdit ? '💾 Atualizar' : '✅ Adicionar' }}
          </button>
          <button type="button" @click="goBack" class="back-button">⬅️ Voltar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactForm',
    data() {
      return {
        contact: { 
          nome: '', 
          email: '', 
          telefone: '', 
          endereco: '', 
          dataNascimento: '', 
          site: '', 
          telefoneComercial: '' 
        },
        isEdit: false,
      };
    },
    async created() {
      // Se houver ID na rota, estamos no modo de edição
      if (this.$route.params.id) {
        this.isEdit = true;
        try {
          const response = await fetch(`https://localhost:7067/api/Contato/${this.$route.params.id}`);
          this.contact = await response.json();
        } catch (error) {
          console.error('Erro ao carregar contato:', error);
        }
      }
    },
    methods: {
      async handleSubmit() {
        try {
          const url = this.isEdit
            ? `https://localhost:7067/api/Contato/${this.contact.id}`
            : 'https://localhost:7067/api/Contato';
          const method = this.isEdit ? 'PUT' : 'POST';
  
          await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.contact),
          });
  
          this.$router.push('/'); // Voltar para a lista de contatos
        } catch (error) {
          console.error('Erro ao salvar contato:', error);
        }
      },
      goBack() {
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Container do formulário */
  .form-container {
    max-width: 600px;
    margin: 40px auto;
    padding: 40px;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    text-align: left;
  }
  
  /* Título */
  h2 {
    text-align: center;
    font-size: 2rem;
    color: #4e54c8;
    margin-bottom: 30px;
  }
  
  /* Grupo do Formulário */
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 8px;
    color: #4e54c8;
  }
  
  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    transition: border 0.3s ease;
  }
  
  /* Desativar o campo Nome em edição */
  input:disabled {
    background: #f3f3f3;
    color: #666;
  }
  
  /* Efeito no foco */
  input:focus {
    outline: none;
    border-color: #6a11cb;
  }
  
  /* Grupo de Botões */
  .button-group {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
  
  /* Botão principal (Adicionar/Atualizar) */
  .submit-button {
    padding: 12px 24px;
    font-size: 1rem;
    color: white;
    background: linear-gradient(135deg, #4e54c8, #8f94fb);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .submit-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(78, 84, 200, 0.3);
  }
  
  /* Botão Voltar */
  .back-button {
    padding: 12px 24px;
    font-size: 1rem;
    color: #4e54c8;
    background: white;
    border: 2px solid #4e54c8;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease, color 0.3s ease;
  }
  
  .back-button:hover {
    background: #4e54c8;
    color: white;
  }
  
  /* Adaptação responsiva */
  @media (max-width: 600px) {
    .button-group {
      flex-direction: column;
    }
  
    .submit-button, .back-button {
      width: 100%;
      margin-bottom: 10px;
    }
  }
  </style>
  