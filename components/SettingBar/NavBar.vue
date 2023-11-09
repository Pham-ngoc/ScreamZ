<template>
    <div class="profile-parent">
      <NuxtLink to="/setting?name=profile" :class="{
        'active': useRoute().query.name == 'profile',
      }" class="profile">Profile</NuxtLink>
      <NuxtLink to="/setting?name=appearance" :class="{
        'active': useRoute().query.name == 'appearance',
      }" class="appearance">Appearance</NuxtLink>
      <NuxtLink to="/setting?name=nft" :class="{
        'active': useRoute().query.name == 'nft',
      }" class="nft">NFT</NuxtLink>
      <NuxtLink to="/setting?name=language" :class="{
        'active': useRoute().query.name == 'language',
      }" class="language">Language</NuxtLink>
      <NuxtLink to="/setting?name=log-out" :class="{
        'active': useRoute().query.name == 'log-out',
      }" class="log-out">Log out</NuxtLink>
    </div>
    <div class="seting-profile-item"/>
</template>
<script setup>
</script>
<style>
.profile {
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 27px 25px;
    font-size: 20px;
    font-family: 'Inter', sans-serif;
  }
  .profile:hover{
    border: none;
    padding: 27px 25px;
    background-color: transparent;
    position: absolute;
    border-radius: 10px;
    background: linear-gradient(90deg, #8d28ca, #e85f62);
    color: white;
    width: 250px;
    height: 83px;
  }

  .active{
    border: none;
    padding: 27px 25px;
    background-color: transparent;
    position: absolute;
    border-radius: 10px;
    background: linear-gradient(90deg, #8d28ca, #e85f62);
    color: white;
    width: 250px;
    height: 83px;
  }

  .appearance {
    text-decoration: none;
    position: absolute;
    top: 90px;
    left: 0px;
    padding: 27px 25px;
    font-size: 20px;
    font-family: 'Inter', sans-serif;
  }
  .appearance:hover{
    border: none;
    padding: 27px 25px;
    background-color: transparent;
    position: absolute;
    border-radius: 10px;
    background: linear-gradient(90deg, #8d28ca, #e85f62);
    color: white;
    width: 250px;
    height: 83px;
  }
  .nft {
    text-decoration: none;
    position: absolute;
    top: 180px;
    left: 0px;
    padding: 27px 25px;
    font-size: 20px;
    font-family: 'Inter', sans-serif;
  }
  .nft:hover{
    border: none;
    padding: 27px 25px;
    background-color: transparent;
    position: absolute;
    border-radius: 10px;
    background: linear-gradient(90deg, #8d28ca, #e85f62);
    color: white;
    width: 250px;
    height: 83px;
  }
  .language {
    text-decoration: none;
    position: absolute;
    top: 270px;
    left: 0px;
    padding: 27px 25px;
    font-size: 20px;
    font-family: 'Inter', sans-serif;
  }
  .language:hover{
    border: none;
    padding: 27px 25px;
    background-color: transparent;
    position: absolute;
    border-radius: 10px;
    background: linear-gradient(90deg, #8d28ca, #e85f62);
    color: white;
    width: 250px;
    height: 83px;
  }
  .log-out {
    position: absolute;
    top: 360px;
    left: 0px;
    padding: 27px 25px;
    font-size: 20px;
    font-family: 'Inter', sans-serif;
  }
  .log-out:hover{
    border: none;
    padding: 27px 25px;
    background-color: transparent;
    position: absolute;
    border-radius: 10px;
    background: linear-gradient(90deg, #8d28ca, #e85f62);
    color: white;
    width: 250px;
    height: 83px;
  }
  .profile-parent {
    position: absolute;
    top: 50px;
    left: 50px;
    width: 150px;
    height: 340px;
  }
  .seting-profile-item {
    position: absolute;
    top: 50px;
    left: 330px;
    border-right: 1px solid black;
    box-sizing: border-box;
    width: 1px;
    height: 703px;
  }
</style>
