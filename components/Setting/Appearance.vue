<template>
    <div class="seting-appearance-item"></div>
    <div class="seting-appearance-child1" />
    <div class="seting-appearance-child2" />
    <a href="" class="unclock-with-premium">Unclock with Premium</a>
</template>
<script setup>
</script>
<style>
.seting-appearance-item {
    margin-top: 160px;
    border-radius: 5px;
    background-color: rgba(141, 40, 202, 0.39);
    width: 100%;
    height: 500px;
  }
  .seting-appearance-child1 {
    position: absolute;
    top: 0px;
    left: 420px;
    border-radius: 50%;
    background-color: white;
    border: 2px solid rgba(141, 40, 202, 0.39);
    width: 100px;
    height: 100px;
  }
  .seting-appearance-child2 {
    position: absolute;
    top: 0px;
    left: 545px;
    border-radius: 50%;
    background-color: black;
    border: 2px solid white;
    box-sizing: border-box;
    width: 100px;
    height: 100px;
  }
  .phplus-bold-icon1 {
    position: absolute;
    top: 21px;
    left: 1654px;
    border-radius: 90px;
    /* width: 84.9px; */
    height: 84.9px;
    overflow: hidden;
    cursor: pointer;
  }
  .unclock-with-premium {
    position: absolute;
    top: 200px;
    left: 400px;
    border-radius: 10px;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 600;
    padding: 20px 40px;
    background: linear-gradient(90deg, #8d28ca, #e85f62);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    /* width: 300px; */
    color: white;
  }
</style>