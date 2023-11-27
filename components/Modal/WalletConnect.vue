<template>
  <div id="crypto-modal"  v-if="isShown"  class="fixed top-0 left-0 right-0 z-50  w-full  overflow-x-hidden overflow-y-auto md:inset-0  max-h-full justify-center items-center flex bg-gradient-to-br from-purple-600 to-pink-600">
    <button @click="isShown=!isShown" type="button" class="absolute top-3 left-2.5 text-gray-400 bg-white hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Close modal</span>
    </button>
    <div class="relative w-full max-w-md max-h-full">

      <div class="relative bg-white rounded-lg shadow dark:bg-black">
        <!-- Modal header -->
        <!-- Modal body -->
        <div class="p-6">
          <div class="text-white text-[20px] text-center font-black">Welcome to SreamZ</div>
          <p class="text-sm font-black text-center  text-gray-500 dark:text-gray-400">We're so excited to see you again</p>
          <ul class="my-4 space-y-3">
            <li>
              <button type="button" @click="connectEthereumWallet" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <svg aria-hidden="true" class="h-6" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z" fill="#E17726"/><path d="M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z" fill="#E27625"/><path d="M32.1656 27.0093L39.7516 27.1537L37.1004 36.1603L27.8438 33.6116L32.1656 27.0093Z" fill="#E27625"/><path d="M7.83409 27.0093L12.1399 33.6116L2.89876 36.1604L0.263672 27.1537L7.83409 27.0093Z" fill="#E27625"/><path d="M17.5203 10.8677L17.8304 20.8807L8.55371 20.4587L11.1924 16.4778L11.2258 16.4394L17.5203 10.8677Z" fill="#E27625"/><path d="M22.3831 10.7559L28.7737 16.4397L28.8067 16.4778L31.4455 20.4586L22.1709 20.8806L22.3831 10.7559Z" fill="#E27625"/><path d="M12.4115 27.0381L17.4768 30.9848L11.5928 33.8257L12.4115 27.0381Z" fill="#E27625"/><path d="M27.5893 27.0376L28.391 33.8258L22.5234 30.9847L27.5893 27.0376Z" fill="#E27625"/><path d="M22.6523 30.6128L28.6066 33.4959L23.0679 36.1282L23.1255 34.3884L22.6523 30.6128Z" fill="#D5BFB2"/><path d="M17.3458 30.6143L16.8913 34.3601L16.9286 36.1263L11.377 33.4961L17.3458 30.6143Z" fill="#D5BFB2"/><path d="M15.6263 22.1875L17.1822 25.4575L11.8848 23.9057L15.6263 22.1875Z" fill="#233447"/><path d="M24.3739 22.1875L28.133 23.9053L22.8184 25.4567L24.3739 22.1875Z" fill="#233447"/><path d="M12.8169 27.0049L11.9606 34.0423L7.37109 27.1587L12.8169 27.0049Z" fill="#CC6228"/><path d="M27.1836 27.0049L32.6296 27.1587L28.0228 34.0425L27.1836 27.0049Z" fill="#CC6228"/><path d="M31.5799 20.0605L27.6165 24.0998L24.5608 22.7034L23.0978 25.779L22.1387 20.4901L31.5799 20.0605Z" fill="#CC6228"/><path d="M8.41797 20.0605L17.8608 20.4902L16.9017 25.779L15.4384 22.7038L12.3988 24.0999L8.41797 20.0605Z" fill="#CC6228"/><path d="M8.15039 19.2314L12.6345 23.7816L12.7899 28.2736L8.15039 19.2314Z" fill="#E27525"/><path d="M31.8538 19.2236L27.2061 28.2819L27.381 23.7819L31.8538 19.2236Z" fill="#E27525"/><path d="M17.6412 19.5088L17.8217 20.6447L18.2676 23.4745L17.9809 32.166L16.6254 25.1841L16.625 25.1119L17.6412 19.5088Z" fill="#E27525"/><path d="M22.3562 19.4932L23.3751 25.1119L23.3747 25.1841L22.0158 32.1835L21.962 30.4328L21.75 23.4231L22.3562 19.4932Z" fill="#E27525"/><path d="M27.7797 23.6011L27.628 27.5039L22.8977 31.1894L21.9414 30.5138L23.0133 24.9926L27.7797 23.6011Z" fill="#F5841F"/><path d="M12.2373 23.6011L16.9873 24.9926L18.0591 30.5137L17.1029 31.1893L12.3723 27.5035L12.2373 23.6011Z" fill="#F5841F"/><path d="M10.4717 32.6338L16.5236 35.5013L16.4979 34.2768L17.0043 33.8323H22.994L23.5187 34.2753L23.48 35.4989L29.4935 32.641L26.5673 35.0591L23.0289 37.4894H16.9558L13.4197 35.0492L10.4717 32.6338Z" fill="#C0AC9D"/><path d="M22.2191 30.231L23.0748 30.8354L23.5763 34.8361L22.8506 34.2234H17.1513L16.4395 34.8485L16.9244 30.8357L17.7804 30.231H22.2191Z" fill="#161616"/><path d="M37.9395 0.351562L39.9998 6.53242L38.7131 12.7819L39.6293 13.4887L38.3895 14.4346L39.3213 15.1542L38.0875 16.2779L38.8449 16.8264L36.8347 19.1742L28.5894 16.7735L28.5179 16.7352L22.5762 11.723L37.9395 0.351562Z" fill="#763E1A"/><path d="M2.06031 0.351562L17.4237 11.723L11.4819 16.7352L11.4105 16.7735L3.16512 19.1742L1.15488 16.8264L1.91176 16.2783L0.678517 15.1542L1.60852 14.4354L0.350209 13.4868L1.30098 12.7795L0 6.53265L2.06031 0.351562Z" fill="#763E1A"/><path d="M28.1861 16.2485L36.9226 18.7921L39.7609 27.5398L32.2728 27.5398L27.1133 27.6049L30.8655 20.2912L28.1861 16.2485Z" fill="#F5841F"/><path d="M11.8139 16.2485L9.13399 20.2912L12.8867 27.6049L7.72971 27.5398H0.254883L3.07728 18.7922L11.8139 16.2485Z" fill="#F5841F"/><path d="M25.5283 5.17383L23.0847 11.7736L22.5661 20.6894L22.3677 23.4839L22.352 30.6225H17.6471L17.6318 23.4973L17.4327 20.6869L16.9139 11.7736L14.4707 5.17383H25.5283Z" fill="#F5841F"/></svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Connect to MetaMask</span>
                <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
              </button>
            </li>
            <li>
              <button type="button" @click="connectSolanaWallet" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <svg class="h-6" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2596_138588)">
                    <rect width="1200" height="1200" rx="257.592" fill="#AB9FF2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M517.219 779.814C470.102 852.012 391.148 943.378 286.09 943.378C236.426 943.378 188.672 922.933 188.672 834.122C188.672 607.943 497.48 257.813 784.004 257.813C947.004 257.813 1011.95 370.902 1011.95 499.326C1011.95 664.168 904.98 852.651 798.648 852.651C764.902 852.651 748.347 834.122 748.347 804.732C748.347 797.065 749.621 788.759 752.168 779.814C715.875 841.789 645.836 899.292 580.254 899.292C532.5 899.292 508.305 869.263 508.305 827.094C508.305 811.76 511.488 795.787 517.219 779.814ZM904.363 494.869C904.363 532.291 882.284 551.002 857.586 551.002C832.514 551.002 810.809 532.291 810.809 494.869C810.809 457.448 832.514 438.737 857.586 438.737C882.284 438.737 904.363 457.448 904.363 494.869ZM764.031 494.871C764.031 532.293 741.952 551.004 717.254 551.004C692.182 551.004 670.477 532.293 670.477 494.871C670.477 457.449 692.182 438.739 717.254 438.739C741.952 438.739 764.031 457.449 764.031 494.871Z" fill="#FFFDF8"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_2596_138588">
                      <rect width="1200" height="1200" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Connect to Phantom</span>
                <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
              </button>
            </li>
          </ul>
          <div>
            <a href="#" class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
              <svg class="w-3 h-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
              Why do I need to connect with my wallet?</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>




const {connectSolanaWallet,connectEthereumWallet}=useOrbisStore()
const isShown=useState("crypto-modal")
</script>

<style scoped>

</style>