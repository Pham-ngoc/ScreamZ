<template>
    <div class="rectangle-parent">
      <div class="group-child" />
      <div class="group-item" />
      <div class="group-inner" />
      <div class="parent">
        <div class="div">0123524689</div>
        <b class="phone-number">PHONE NUMBER</b>
      </div>
      <div class="screamz-parent">
        <div class="div">ScreamZ</div>
        <b class="display-name">DISPLAY NAME</b>
      </div>
      <div class="email-parent">
        <b class="email">EMAIL</b>
        <div class="screamzgmailcom">screamZ@gmail.com</div>
      </div>
      <div class="description-parent">
        <b class="description">DESCRIPTION</b>
        <div class="screamz1">ScreamZ</div>
      </div>
      <div class="screamz-group">
        <div class="div">ScreamZ</div>
        <b class="username">USERNAME</b>
      </div>
      <div class="ellipse-div" />
      <button class="rectangle-group">
        <a class="rectangle-a" />
        <div class="edit">Edit</div>
      </button>
      <button class="rectangle-container">
        <div class="rectangle-div" />
        <div class="edit">Edit</div>
      </button>
      <div class="group-div">
        <div class="rectangle-div" />
        <div class="edit2">Edit</div>
      </div>
      <div class="rectangle-parent1">
        <div class="rectangle-div" />
        <div class="edit2">Edit</div>
      </div>
      <div class="rectangle-parent2">
        <div class="rectangle-div" />
        <div class="edit2">Edit</div>
      </div>
      <img class="ellipse-icon" alt="" src="/ellipse-6@2x.png" />
      <b class="screamz3">ScreamZ</b>
    </div>
</template>
<script setup>
</script>
<style>
.group-child {
    position: absolute;
    top: calc(50% - 380px);
    left: calc(50% - 600px);
    border-radius: var(--br-xl);
    background-color: #682749;
    width: 1200px;
    height: 760px;
  }
  .group-item {
    position: absolute;
    top: 144px;
    left: 0px;
    background-color: var(--color-black);
    width: 1200px;
    height: 616px;
  }
  .group-inner {
    position: absolute;
    top: 276px;
    left: 27px;
    border-radius: var(--br-xl);
    background-color: var(--color-gainsboro-200);
    width: 1145px;
    height: 460px;
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
    font-size: var(--font-size-xl);
    display: inline-block;
    color: var(--color-gainsboro-100);
    width: 205px;
    height: 24px;
  }
  .parent {
    position: absolute;
    top: 546px;
    left: 59px;
    width: 205px;
    height: 62px;
  }
  .display-name {
    position: absolute;
    top: 0px;
    left: 0px;
    font-size: var(--font-size-xl);
    display: inline-block;
    color: var(--color-gainsboro-100);
    width: 193px;
    height: 24px;
  }
  .screamz-parent {
    position: absolute;
    top: 297px;
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
    font-size: var(--font-size-6xl);
    color: var(--color-white);
    display: inline-block;
    width: 259px;
    height: 30px;
  }
  .email-parent {
    position: absolute;
    top: 463px;
    left: 59px;
    width: 259px;
    height: 62px;
    font-size: var(--font-size-xl);
    color: var(--color-gainsboro-100);
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
    font-size: var(--font-size-6xl);
    color: var(--color-white);
    display: inline-block;
    width: 190px;
    height: 30px;
  }
  .description-parent {
    position: absolute;
    top: 629px;
    left: 59px;
    width: 190px;
    height: 62px;
    font-size: var(--font-size-xl);
    color: var(--color-gainsboro-100);
  }
  .username {
    position: absolute;
    top: 0px;
    left: 1px;
    font-size: var(--font-size-xl);
    color: var(--color-gainsboro-100);
  }
  .screamz-group {
    position: absolute;
    top: 380px;
    left: 59px;
    width: 190px;
    height: 62px;
  }
  .ellipse-div {
    position: absolute;
    top: 100px;
    left: 89px;
    border-radius: 50%;
    background-color: var(--color-black);
    width: 150px;
    height: 150px;
  }
  .rectangle-a {
    text-decoration: none;
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 75px);
    border-radius: var(--br-8xs);
    background-color: var(--color-gainsboro-200);
    width: 150px;
    height: 50px;
  }
  .edit {
    position: absolute;
    top: 10px;
    left: 50px;
    font-size: var(--font-size-6xl);
    font-weight: 600;
    font-family: var(--font-inter);
    color: var(--color-white);
    text-align: left;
    display: inline-block;
    width: 50px;
    height: 30px;
  }
  .rectangle-group {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    position: absolute;
    top: calc(50% - 77px);
    left: calc(50% + 389px);
    width: 150px;
    height: 50px;
  }
  .rectangle-div {
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 75px);
    border-radius: var(--br-8xs);
    background-color: var(--color-gainsboro-200);
    width: 150px;
    height: 50px;
  }
  .rectangle-container {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    position: absolute;
    top: calc(50% + 6px);
    left: calc(50% + 386px);
    width: 150px;
    height: 50px;
  }
  .edit2 {
    position: absolute;
    top: 10px;
    left: 50px;
    font-weight: 600;
    display: inline-block;
    width: 50px;
    height: 30px;
  }
  .group-div {
    position: absolute;
    top: calc(50% + 90px);
    left: calc(50% + 388px);
    width: 150px;
    height: 50px;
  }
  .rectangle-parent1 {
    position: absolute;
    top: calc(50% + 173px);
    left: calc(50% + 388px);
    width: 150px;
    height: 50px;
  }
  .rectangle-parent2 {
    position: absolute;
    top: calc(50% + 256px);
    left: calc(50% + 388px);
    width: 150px;
    height: 50px;
  }
  .ellipse-icon {
    position: absolute;
    top: 112px;
    left: 101px;
    border-radius: 50%;
    width: 125px;
    height: 125px;
    object-fit: cover;
  }
  .screamz3 {
    position: absolute;
    top: 167px;
    left: 264px;
    font-size: var(--font-size-11xl);
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
    font-size: var(--font-size-6xl);
    color: var(--color-white);
  }
  .seting-profile-item {
    position: absolute;
    top: 105.5px;
    left: 358.5px;
    border-right: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1px;
    height: 803px;
  }
  .seting-profile {
    position: relative;
    background-color: var(--color-white);
    width: 100%;
    height: 1024px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-11xl);
    color: var(--color-black);
    font-family: var(--font-inter);
  }
</style>
