<template>
  <div>
    <!-- <img src="/images/scans.png" style="width: 100%;"> -->
    <video src="./测试视频.mp4" autoplay controls ref="gga" v-if="play"></video>
    <video ref="video" autoplay controls></video>
    <button @click="startCamera">Start Camera</button>
    <button @click="stopCamera">Stop Camera</button>
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
      this.play = true
      setTimeout(() => {
        this.$refs.gga.play()
      }, 1000);
      return
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 100, height: 100, facingMode: 'environment' },
        })
        // const stream = await navigator.mediaDevices.getUserMedia({
        //   video: true,
        // })
        console.log(stream);
        alert(stream.active)
        alert(stream.id)
        this.$refs.video.srcObject = stream
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
    setTimeout(() => {
      // window.location.href = 'https://6437cab4291ee50001318391.caiyicloud.com/reserve/66221da421954b000139ed43'
    }, 1000)
  },
}
</script>

<style scoped>
/* Add styles as needed */
</style>
