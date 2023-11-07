<template>
    <div class="profile-parent">
        <NuxtLink to="/setting?name=profile" class="profile">Profile</NuxtLink>
      <a class="appearance">Appearance</a>
      <a class="nft">NFT</a>
      <a class="language">Language</a>
      <div class="log-out">Log out</div>
    </div>
</template>
<script setup>
</script>
<style>
.profile {
    position: absolute;
    top: 0px;
    left: 0px;
    color: var(--color-white);
  }
  .appearance {
    text-decoration: none;
    position: absolute;
    top: 76px;
    left: 0px;
    color: inherit;
  }
  .nft {
    text-decoration: none;
    position: absolute;
    top: 152px;
    left: 0px;
    color: inherit;
  }
  .language {
    text-decoration: none;
    position: absolute;
    top: 228px;
    left: 0px;
    color: inherit;
  }
  .log-out {
    position: absolute;
    top: 304px;
    left: 0px;
  }
  .profile-parent {
    position: absolute;
    top: 132px;
    left: 87px;
    width: 172px;
    height: 340px;
  }
</style>
