<template>
  <div class="top_bar">
      <div id="logo">FileVis</div>
      <div id="upload-button" type="file">upload file</div>
      <input id="actual-upload-button" type="file"/>
  </div>
</template>

<script>

export default {
    name: 'topbar'
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
