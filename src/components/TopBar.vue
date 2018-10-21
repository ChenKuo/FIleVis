<template>
  <div class="top_bar">
      <div id="logo">FileVis</div>
      <button id="upload-button" v-on:click="onFakeUploadButtonClick">upload file</button>
      <input id="actual-upload-button" type="file" @change="handleFile" ref="uploadBtn"/>
  </div>
</template>

<script>

export default {
    name: 'topbar',
    methods:{
        onFakeUploadButtonClick(){
            this.$refs.uploadBtn.click();
        },
        handleFile(evt){
            let file = evt.target.files[0];
            let reader = new FileReader();
            reader.onload=(e)=>{
                let result=e.target.result;
                this.$store.commit("loadFile",{filename:file.name,buffer:result});
            }
            reader.readAsArrayBuffer(file);
        }
    }
}
</script>

<style scoped>
.top_bar{
    display:flex;
    flex-direction: row;
}

#logo{
    width:200px;
    height:100%;
    font-size:100%;
    background-color:aqua;

}
#upload-button{
    background-color:lightgrey;
    width: 100px;
    height: 100%;

}
#actual-upload-button{
    display:none;
}
</style>
