<template>
  <div>
    <!-- Lista de usuarios -->
    <div v-for="user in users" :key="user.id" class="user-item flex items-center justify-between mb-4 p-4 bg-gray-100 rounded-lg">
      <div class="flex items-center">
        <img :src=avatar class="w-12 h-12 mr-4 rounded-full" alt="Foto de perfil">
        <div>
          <span>{{ user.name }} {{ user.surname }}</span>
          <span>{{ user.email }}</span>
        </div>
      </div>
      <div>
        <button @click="editUser(user)" class="btn-edit mr-2">Editar</button>
        <button @click="deleteUser(user.id)" class="btn-delete">Eliminar</button>
      </div>
    </div>

    <!-- Formulario para editar usuario -->
    <div v-if="editingUser" class="p-4 bg-gray-100 rounded-lg">
      <input v-model="editedUser.name" type="text" placeholder="Nombre" class="input-field mb-2">
      <input v-model="editedUser.surname" type="text" placeholder="Apellido" class="input-field mb-2">
      <input v-model="editedUser.email" type="email" placeholder="Email" class="input-field mb-2">
      <button @click="updateUser" class="btn-update mr-2">Actualizar</button>
      <button @click="cancelEdit" class="btn-cancel">Cancelar</button>
    </div>
  </div>
</template>

<script>
import avatar from '../assets/img/user.png';

export default {
  data() {
    return {
      avatar: avatar,
      users: [
        { id: 1, name: 'John', surname: 'Doe', email: 'john@example.com', image: 'john.jpg' },
        { id: 2, name: 'Jane', surname: 'Doe', email: 'jane@example.com', image: 'jane.jpg' },
        // Otros usuarios
      ],
      editingUser: null,
      editedUser: { id: null, name: '', surname: '', email: '' }
    };
  },
  methods: {
    editUser(user) {
      this.editingUser = user.id;
      this.editedUser = { ...user };
    },
    cancelEdit() {
      this.editingUser = null;
      this.editedUser = { id: null, name: '', surname: '', email: '' };
    },
    updateUser() {
      const index = this.users.findIndex(user => user.id === this.editedUser.id);
      if (index !== -1) {
        this.users[index] = { ...this.editedUser };
        this.cancelEdit();
      }
    },
    deleteUser(userId) {
      this.users = this.users.filter(user => user.id !== userId);
    },
  }
};
</script>

<style>
.input-field {
  @apply w-full py-2 px-3 border border-gray-300 rounded;
}

.btn-edit, .btn-delete, .btn-update, .btn-cancel {
  @apply py-2 px-4 rounded text-white shadow-md;
}

.btn-edit {
  @apply bg-blue-500;
}

.btn-delete {
  @apply bg-red-700;
}

.btn-update {
  @apply bg-green-500;
}

.btn-cancel {
  @apply bg-red-600;
}

.btn-edit:hover, .btn-delete:hover, .btn-update:hover, .btn-cancel:hover {
  @apply bg-gray-400;
}
</style>


