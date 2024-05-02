
<template>
            <div class="h-[calc(100vh-50px)]  bg-gray-50 p-[20px]">
                <div class="border border-gray-300 rounded-md p-[20px]  ">
                   
      <h2 class="text-2xl text-black">Bienvenido</h2>
  
      <!-- Contenedor para la galería de imágenes -->
      <div class="  flex justify-center mt-4">
        <img :src="avatar" alt="Imagen 1" class="w-50 h-30 mx-2 rotate-img" />
        <img :src="avatar1" alt="Imagen 2" class="w-50 h-30 mx-2 rotate-img" />
        <img :src="avatar" alt="Imagen 3" class="w-50 h-30 mx-2 rotate-img" />
        <!-- Agrega más imágenes según sea necesario -->
     </div><br>

     <router-view></router-view>
               
      </div>

            </div>
</template>

<script >
import avatar from '../../assets/img/compu2.jpg';
import avatar1 from '../../assets/img/compu3.jpg';



export default {
  data() {
    return {
      avatar: avatar,
      avatar1: avatar1
    }
  }
};
</script>

<style>
.rotate-img {
  transition: transform 0.3s ease;
}

.rotate-img:hover {
  transform: rotate(360deg);
}

</style>
