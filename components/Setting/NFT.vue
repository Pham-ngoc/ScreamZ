<template>
    <div class="seting-nft">
      <div class="seting-nft-inner" />

        <div class="add-file-or" @click="toggleDropdown">Add file or NFT
            <div v-if="isOpen" class="dropdown-content">
              <!-- Nội dung của dropdown -->
              <!-- Ví dụ: -->
              <a href="#">Upload a file</a>
              <a href="#">Send from Phantom</a>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
    },
  };
</script>

<style>
  .seting-nft-item {
    position: absolute;
    top: 58px;
    left: 417px;
  }
  .seting-nft-inner {
    position: absolute;
    top: 160px;
    left: 360px;
    border-radius: var(--br-xl);
    background-color: rgba(141, 40, 202, 0.33);
    width: 1000px;
    height: 500px;
    border-radius:10px;
  }
  .add-file-or {
    position: absolute;
    top: 50px;
    left: 360px;
    font-size: 20px;
    padding: 20px 40px;
    font-weight: 400px;
    color: black;
    font-family: 'Inter', sans-serif;
    border-radius: 10px;
    background: #d9d9d9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: inline-block;
    cursor: pointer;
  }
  .add-file-or:hover {
    color: white;
    background: linear-gradient(90deg, #8d28ca, #e85f62);

  }

.dropdown-content {
  position: absolute;
  top: 80px;
  left: 0;
  border-radius: 10px;
  background-color: #f9f9f9;
  min-width: 250px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  font-family: 'Inter', sans-serif;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 20px;
  margin: 5px 10px;
}

.dropdown-content a:hover {
  color: white;
  background: linear-gradient(90deg, #8d28ca, #e85f62);
  border-radius: 10px;
  margin: 5px 10px;
}
</style>