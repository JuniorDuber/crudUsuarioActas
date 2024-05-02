<script  >
export default {
    data(){
        return{
            showDropDown: false,
            showSide: true
        }

    },
    methods:{
        toggleSideBar(){
            this.showSide = !this.showSide

        },
        toggleDrop(){
            this.showDropDown = !this.showDropDown
        }
    }

}
</script>

<template>
   <div class=" flex w-full bg-gray-500 text-white" v-show="showSide" >
            <div class="w-[300px] bg-gray-900  justify-start items-center">
                <div class=" mt-3 flex px-[20px]">
                    <h3 class="font-bold text-xl">Creacion de actas</h3>
                </div>
            </div>
            <div class="h-[50px] w-full bg-gray-800 py-[20px]">
                <div class=" justify-between h-full">
                   
                  <div class=" h-[calc(10vh-50px)] flex flex-row px-[20px]">
                    <RouterLink to="/login" class="inline-flex relative items-center py-[5px] px-[10px]w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out ml-4">
                        <svg class="mr-2 w-[20px] h-[25px] fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
                        Iniciar sesion
                    </RouterLink>
                   

                    <RouterLink to="/register" class="inline-flex relative items-center py-[5px] px-[10px]w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
                        <svg class="ml-4 w-[30px] h-[25px] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>
                    Registrarse
                    </RouterLink>

                    <RouterLink to="/people" class="inline-flex relative items-center py-[5px] px-[10px]w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
                        <svg class="ml-4 w-[30px] h-[25px] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"/></svg>
                    personas
                    </RouterLink>
                  </div>
                
                     
              
               
                </div>
            </div>
        </div>
        
</template>

<style>
</style>