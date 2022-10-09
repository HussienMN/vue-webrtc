import webrtcrecorder from './components/webrtcrecorder.vue'
export {default as webrtcrecorder} from './components/webrtcrecorder.vue'

// function install(Vue) {
//     if (install.installed) return;
//     install.installed = true;
//     Vue.component("v-streamRecorder", StreamRecorder);
// }

export default{
    install: (app,options)=>{
        app.component('webrtcrecorder', webrtcrecorder)
    }
}