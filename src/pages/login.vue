<template>

    <form>
      <header class="bg-blue-200 p-4">
      <h1 class="text-3xl text-black">Iniciar sesion</h1>
    </header>
  

      <div>
        <label for='email' class="block text-black font-bold">Usuario</label>
        <input type='email' name='email' class="input-style" />
      </div>

      <div>
        <label for='password' class="block text-black font-bold">Contraseña</label>
        <input type='password' name='password' class="input-style " />
      </div>
      <div>
      <input type='submit' value="Identificate" class="input-button" />
     </div>
    </form>

</template>

<script>




export default {
  name: 'login',
};
</script>

<style>
.rotate-img {
  transition: transform 0.3s ease;
}

.rotate-img:hover {
  transform: rotate(360deg);
}

.input-style {
  @apply  flex justify-center  px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-black font-bold;
}

.input-button{
  @apply mt-2 py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-300 cursor-pointer hover:shadow-sm;
  }   
</style>