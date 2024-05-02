<template>

<header class="bg-blue-300 p-4">
      <h1 class="text-3xl text-black">Crear usuario</h1>
    </header>
  
        <form >
    
          <div >
            <label htmlFor='name'>Nombre</label>
            <input type='text' name='name'  class="input-style" />
          </div>
    
          <div>
            <label htmlFor='surname'>Apellidos</label>
            <input type='text' name='surname'  class="input-style" />
          </div>
    
          <div>
            <label htmlFor='name'>Apodo</label>
            <input type='text' name='nick'  class="input-style" />
          </div>
    
          <div >
            <label htmlFor='email'>Correo electronico</label>
            <input type='email' name='email'  class="input-style" />
          </div>
    
          <div>
            <label htmlFor='password'>Contraseña</label>
            <input type='password' name='password' class="input-style"/>
          </div>
    
          <input type='submit' value='Registrate' class="input-button"/>
    
        </form>
    
    </template>
    
      <script>
  export default {
    name: 'register',
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
        @apply  flex justify-center ml-[500px] px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-black font-bold;
      }
    
      .input-button{
        @apply mt-2 py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-300 cursor-pointer hover:shadow-sm;
        }   
      </style>