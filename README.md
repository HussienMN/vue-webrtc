# webrtcrecorder

## Project setup
```
npm install
```

### usage of methods
```
after importing the component and including it inside your code as the following template

<webrtcrecorder ref="webrtcVideo">
</webrtcrecorder>

you can create a button tag in your html code and bind its click event with a method you are suppose to create. then inside this method your are going to call one of the methods of the webrtcrecorder which are listed above in a table as the following example: 

<button @click="doRecording">Recording</button>
<button @click="doScreenShot">screenshot</button>

now let us suppose that you have created this mehtod: 
function doRecording(){
    this.$refs.webrtcVideo.startRecording()
}
function doScreenShot(){
    this.$refs.webrtcVideo.screenShot()
}
```
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## License

MIT

