<template>
  <div class="warp">
    <div class="scan">
      <img src="./img/buttom.png" />
      <img src="./img/left1.png">
      <img src="./img/left2.png">
      <img src="./img/rig1.png">
      <img src="./img/rig2.png">
      <video ref="video" autoplay v-if="play"></video>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      play: false,
    }
  },
  methods: {
    async startCamera() {
      try {
        this.play = true
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: window.innerHeight,
            height: window.innerWidth,
            // width: 1000,
            // height: 500,
            facingMode: 'environment',
          },
        })

        this.$refs.video.srcObject = stream
        setTimeout(() => {
          this.$refs.video.play()
        }, 0)
      } catch (error) {
        console.error('Error accessing camera:', error)
      }
    },
    stopCamera() {
      const stream = this.$refs.video.srcObject
      const tracks = stream.getTracks()
      tracks.forEach((track) => track.stop())
      this.$refs.video.srcObject = null
    },
  },
  mounted() {
    this.startCamera()
    // setTimeout(() => {
    // window.location.href = 'https://6437cab4291ee50001318391.caiyicloud.com/reserve/66221da421954b000139ed43'
    // }, 1000)
  },
}
</script>

<style scoped lang="less">
.warp {
  position: relative;
  .scan {
    position: relative;
    img {
      position: absolute;
    }
    img:nth-child(1) {
      width: 50px;
      z-index: 11;
      left: 42%;
      bottom: 90px;
    }
    img:nth-child(2) {
      width: 60px;
      z-index: 11;
      left: 6%;
      bottom: 150px;
    }
    img:nth-child(3) {
      width: 25px;
      z-index: 11;
      left: 6%;
      top: 25px;
    }
    img:nth-child(4) {
      width: 50px;
      z-index: 11;
      right: 6%;
      bottom: 150px;

    }
    img:nth-child(5) {
      width: 25px;
      z-index: 11;
      right: 6%;
      top: 30px;
    }
    div{
      position: absolute;
      width: 100%;
      height: 130px;
      background-color: black;
      z-index: 10;
      bottom: 0;
    }
  }
}
</style>
