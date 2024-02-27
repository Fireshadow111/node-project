<template>
    <div>

    </div>
</template>

<script>
    export default {
        data(){
const reload = document.querySelector(".reload");

reload.addEventListener("load", () => {
  log.textContent = "";
  setTimeout(() => {
    window.location.reload(true);
  }, 3000);
});
        }
    }
</script>

<style scoped>

</style>