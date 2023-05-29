<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <div class="wrapper">
      <HelloWorld/>
    </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  border: 0;
}
#app{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  .wrapper{
    height: 100vh;
    width: 100vw;
    --primary: #0E778C;
    --secondary: #6c757d;
    --success: #28a745;
    --danger: #dc3545;
    --warning: #ffc107;
    --light: #f8f9fa;
    --dark: #343a40;
    --muted: #6c757d;
    --white: #fff;
    --borderColor: #dee2e6;
    --lightmuted: #b2b2b2;
    --panelBg: rgb(13 19 25);
    --baseBg: #000000;
    --navBg: #0a1720;
    --sideBg: rgba(21, 37, 52, 0.6);
    --tableBorder: #0E778C;
  }
}
</style>
