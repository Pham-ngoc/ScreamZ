<template>
    <div class="seting-language">
      <div class="language">
        <a href="" class="english">
            <img class="circle-flagsum-icon" alt="" src="../../public/img/united-states.png" />
            English
        </a>
        <a href="" class="ting-vit">
            <img class="circle-flagsvn-icon" alt="" src="../../public/img/vietnam.png" />
            Tiếng Việt
        </a>
      </div>
    </div>
</template>
<script setup>
</script>
<style>
 .circle-flagsvn-icon {
    margin-right: 20px;
    overflow: hidden;
  }
  .circle-flagsum-icon {
    margin-right: 20px;
    overflow: hidden;
  }
  .english {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 20px;
    border-radius: 10px;
    display: flex;
    padding: 20px 40px;
    width: 955px;

  }
  .ting-vit {
    position: absolute;
    top: 110px;
    left: 20px;
    font-size: 20px;
    border-radius: 10px;
    display: flex;
    padding: 20px 40px;
    width: 955px;
  }
  .english:hover,
  .ting-vit:hover{
    background: linear-gradient(90deg, #8d28ca, #e85f62);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: white;
  }
  .language{
    background-color: rgba(141, 40, 202, 0.39);
    width: 1000px;
    height: 660px;
    border-radius: 10px;
    position: absolute;
    left: 360px;
  }
</style>