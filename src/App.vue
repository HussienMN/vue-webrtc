<template>
  <webrtcrecorder :isscreenshot="true" mute unmute />
</template>

<script>
import webrtcrecorder from './components/webrtcrecorder.vue'

export default {
  name: 'App',
  data(){
    return{
      webcamVideo: {
        // width: this.videoWidth,
        // height: this.videoHeight
      },
      x:null
    }
  },
  components: {
    webrtcrecorder
  },
  methods:{
    doStreamObject: function(event, streamObject){
        let element = document.getElementById('x')
        try {
          element.srcObject = streamObject
          console.log(streamObject)
        } catch (error) {
          console.log(error)
        }
        console.log(webrtcrecorder.streamObject)
    }
  },
  mounted(){
    this.x = document.getElementById('webcamVideo')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
