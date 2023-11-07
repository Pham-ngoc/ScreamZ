<template>
    <div class="profile-parent">
      <NuxtLink to="/setting?name=profile" class="profile">Profile</NuxtLink>
      <a href="" class="appearance">Appearance</a>
      <a href="" class="nft">NFT</a>
      <a href="" class="language">Language</a>
      <a href="" class="log-out">Log out</a>
    </div>
    <div class="seting-profile-item" />
</template>
<script setup>

</script>

<style scoped>
.profile {
    position: absolute;
    top: 0px;
    left: 0px;
    color: var(--color-white);
    font-family: 'Inter', sans-serif;
    font-size: 25px;
    padding: 30px 30px;
    width: 279px;
    height: 100px;
  }
.profile:hover{
  color: white;
  background: linear-gradient(90deg, #8d28ca, #e85f62);
  background-color: transparent;
  border-radius: 10px;
}
/* .profile:active{
  color: white;
  background: linear-gradient(90deg, #8d28ca, #e85f62);
  background-color: transparent;
  border-radius: 10px;
} */
  .appearance {
    text-decoration: none;
    position: absolute;
    top: 76px;
    left: 0px;
    color: inherit;
    font-family: 'Inter', sans-serif;
    font-size: 25px;
    padding: 30px 30px;
    width: 279px;
    height: 100px;
  }
  .appearance:hover{
    color: white;
    background: linear-gradient(90deg, #8d28ca, #e85f62);
    background-color: transparent;
    border-radius: 10px;
  }
  .nft {
    text-decoration: none;
    position: absolute;
    top: 152px;
    left: 0px;
    color: inherit;
    font-family: 'Inter', sans-serif;
    font-size: 25px;
    padding: 30px 30px;
    width: 279px;
    height: 100px;
  }
  .nft:hover{
    color: white;
    background: linear-gradient(90deg, #8d28ca, #e85f62);
    background-color: transparent;
    border-radius: 10px;
  }
  .language {
    text-decoration: none;
    position: absolute;
    top: 228px;
    left: 0px;
    color: inherit;
    font-family: 'Inter', sans-serif;
    font-size: 25px;
    padding: 30px 30px;
    width: 279px;
    height: 100px;
  }
  .language:hover{
    color: white;
    background: linear-gradient(90deg, #8d28ca, #e85f62);
    background-color: transparent;
    border-radius: 10px;
  }
  .log-out {
    position: absolute;
    top: 304px;
    left: 0px;
    font-family: 'Inter', sans-serif;
    font-size: 25px;
    padding: 30px 30px;
    width: 279px;
    height: 100px;
  }
  .log-out:hover{
    color: white;
    background: linear-gradient(90deg, #8d28ca, #e85f62);
    background-color: transparent;
    border-radius: 10px;
  }
  .profile-parent {
    position: absolute;
    top: 50px;
    left: 87px;
    width: 172px;
    height: 340px;
  }
  .seting-profile-item {
    position: absolute;
    top: 55px;
    left: 380px;
    border-right: 1px solid black;
    box-sizing: border-box;
    width: 1px;
    height: 400px;
  }
</style>