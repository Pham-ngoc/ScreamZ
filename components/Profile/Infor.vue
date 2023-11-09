<template>
    <div class="rectangle-parent">
      <div class="group-child">
        <div class="group-item">
          <div class="group-inner">
            <div class="screamz-parent">
              <div class="div">ScreamZ</div>
              <b class="display-name">DISPLAY NAME</b>
              <NuxtLink to="" class="edit">Edit</NuxtLink>
            </div>
            <div class="screamz-group">
              <div class="div">ScreamZ</div>
              <b class="username">USERNAME</b>
              <NuxtLink to="" class="edit">Edit</NuxtLink>
            </div>
            <div class="email-parent">
              <b class="email">EMAIL</b>
              <div class="screamzgmailcom">screamZ@gmail.com</div>
              <NuxtLink to="" class="edit">Edit</NuxtLink>
            </div>
            <div class="parent">
              <div class="div">0123524689</div>
              <b class="phone-number">PHONE NUMBER</b>
              <NuxtLink to="" class="edit">Edit</NuxtLink>
            </div>
            <div class="description-parent">
              <b class="description">DESCRIPTION</b>
              <div class="screamz1">ScreamZ</div>
              <NuxtLink to="" class="edit">Edit</NuxtLink>
            </div>
          </div>
        </div>
        <div class="ellipse-div">
          <img class="ellipse-icon" alt="" src="../../public/img/ScreamZLogo.png" />
          <b class="screamz3">ScreamZ</b>
        </div>
      </div>
    </div>
    <NuxtLink to="/" >
      <img class="phplus-bold-icon" alt="" src="../../public/img/close.png"/>
    </NuxtLink>
</template>
<script setup>
</script>
<style>
.group-child {
    position: absolute;
    top: 55px;
    left: 65px;
    border-radius: 10px;
    background-color: #682749;
    width: 1100px;
    height: 700px;
  }
  .group-item {
    position: absolute;
    top: 100px;
    left: 0px;
    background-color:black;
    width: 100%;
    height: 616px;
  }
  .group-inner {
    position: absolute;
    top: 100px;
    left: 27px;
    border-radius: 20px;
    background-color: rgba(217, 217, 217, 0.24);
    width: 95%;
    height: 500px;
  }
  .div {
    position: absolute;
    top: 32px;
    left: 0px;
    display: inline-block;
    width: 190px;
    height: 30px;
  }
  .phone-number {
    position: absolute;
    top: 0px;
    left: 0px;
    font-size: 20px;
    display: inline-block;
    color: #d9d9d9;
    width: 205px;
    height: 24px;
  }
  .parent {
    position: absolute;
    top: 310px;
    left: 59px;
    width: 205px;
    height: 62px;
  }
  .display-name {
    position: absolute;
    top: 0px;
    left: 0px;
    font-size: 20px;
    display: inline-block;
    color: #d9d9d9;
    width: 193px;
    height: 24px;
  }
  .screamz-parent {
    position: absolute;
    top: 20px;
    left: 59px;
    width: 193px;
    height: 62px;
  }
  .email {
    position: absolute;
    top: 0px;
    left: 1px;
    display: inline-block;
    width: 86px;
    height: 24px;
  }
  .screamzgmailcom {
    position: absolute;
    top: 32px;
    left: 0px;
    font-size: 25px;
    color: white;
    display: inline-block;
    width: 259px;
    height: 30px;
  }
  .email-parent {
    position: absolute;
    top: 210px;
    left: 59px;
    width: 259px;
    height: 62px;
    font-size: 20px;
    color: #d9d9d9;
  }
  .description {
    position: absolute;
    top: 0px;
    left: 1px;
    display: inline-block;
    width: 176px;
    height: 24px;
  }
  .screamz1 {
    position: absolute;
    top: 32px;
    left: 0px;
    font-size: 25px;
    color: white;
    display: inline-block;
    width: 190px;
    height: 30px;
  }
  .description-parent {
    position: absolute;
    top: 410px;
    left: 59px;
    width: 190px;
    height: 62px;
    font-size: 20px;
    color: #d9d9d9;
  }
  .username {
    position: absolute;
    top: 0px;
    left: 1px;
    font-size: 20px;
    color: #d9d9d9;
  }
  .screamz-group {
    position: absolute;
    top: 110px;
    left: 59px;
    width: 190px;
    height: 62px;
  }
  .ellipse-div {
    position: absolute;
    top: 40px;
    left: 89px;
    border-radius: 50%;
    background-color: black;
    width: 150px;
    height: 150px;
  }
  .edit {
    position: absolute;
    top: 18px;
    left: 850px;
    font-size: 25px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    background-color: rgba(217, 217, 217, 0.24);
    border-radius: 5px;
    padding: 5px 20px;
    color: white;
    text-align: left;
    display: inline-block;
    cursor: pointer;
  }
  .edit:hover{
    background: linear-gradient(90deg, #8d28ca, #e85f62);
    border-radius: 5px;
  }
  .ellipse-icon {
    position: absolute;
    top: 13px;
    left: 13px;
    border-radius: 50%;
    width: 125px;
    height: 125px;
    object-fit: cover;
  }
  .screamz3 {
    position: absolute;
    top: 70px;
    left: 200px;
    font-size: 28px;
    display: inline-block;
    width: 149px;
    height: 40px;
  }
  .rectangle-parent {
    position: absolute;
    top: calc(50% - 400px);
    left: calc(50% - 463.5px);
    width: 1200px;
    height: 760px;
    font-size: 25px;
    color: white;
  }
  .seting-profile {
    position: relative;
    background-color: white;
    width: 100%;
    height: 1024px;
    overflow: hidden;
    text-align: left;
    font-size: 30px;
    color: black;
    font-family: 'Inter', sans-serif;
  }
  .phplus-bold-icon{
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
  }
</style>
