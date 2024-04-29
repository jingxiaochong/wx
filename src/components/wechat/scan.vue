<template>
  <div>
    <img src="/images/scans.png" style="width: 100%;">
    <!-- <button @click="toggleFullScreen">cccccccc</button>
    <video ref="video" autoplay></video>
    <button @click="startCamera">Start Camera</button>
    <button @click="stopCamera">Stop Camera</button> -->
  </div>
</template>

<script>
export default {
  methods: {
    toggleFullScreen() {
      if (
        document.fullscreenEnabled ||
        document.mozFullScreenEnabled ||
        document.webkitFullscreenEnabled ||
        document.msFullscreenEnabled
      ) {
        console.log('浏览器支持全屏功能')
      } else {
        console.log('浏览器不支持全屏功能')
      }
      const element = document.getElementById('app')
      console.log(element)
      if (element.requestFullscreen) {
        console.log(element.requestFullscreen)
        // return
        element.requestFullscreen()
      } else if (element.mozRequestFullScreen) {
        // Firefox
        element.mozRequestFullScreen()
      } else if (element.webkitRequestFullscreen) {
        // Chrome, Safari and Opera
        element.webkitRequestFullscreen()
      } else if (element.msRequestFullscreen) {
        // Internet Explorer and Edge
        element.msRequestFullscreen()
      }
    },
    async startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        this.$refs.video.srcObject = stream;
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    },
    stopCamera() {
      const stream = this.$refs.video.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      this.$refs.video.srcObject = null;
    }
  },
  mounted() {
    setTimeout(() => {
      window.location.href = 'https://6437cab4291ee50001318391.caiyicloud.com/reserve/66221da421954b000139ed43'
    }, 1000);
  }
};
</script>

<style scoped>
/* Add styles as needed */
</style>
