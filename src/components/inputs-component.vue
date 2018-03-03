<template>
  <div id="inputs">

    <input type="text" placeholder="click enter..." v-on:keyup.enter="alertMe()" v-model="alertText">

    <hr>

    <input type="text" v-model="name">
    <p>{{ name }}</p>

    <hr>

    <input type="file" @change="onFileSelect()">
    <button @click="upload()">UPLOAD</button>

  </div>
</template>

<script>
  //import axios from 'axios';
  export default {
    name: "inputs-component",
    data () {
      alertText: '',
      name: 'Leonam Quintão',
      selectedFile: null,
    },
    methods: {
      alertMe () {
        alert('you hit enter! '+ this.alertText);
      },
      onFileSelect (event) {
        console.log(event);
        this.selectedFile = event.target.files[0];
      },
      upload () {
        //npm install --save axios
        const fd = new FormData();
        fd.apend('image', this.selectedFile, this.selectedFile.name);

        axios.post('end-point', fd, {
          onUploadProgress: uploadEvent => {
            console.log('upload progress' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%');
          }
        })
        .then((res) => {
          console.log(res);
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>
