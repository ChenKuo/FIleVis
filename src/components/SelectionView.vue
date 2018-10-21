<template>
  <div @wheel="handleScroll" class="sel_view">
      <HexViewer />
      <DecodeViewer/>
  </div>
</template>

<script>
import HexViewer from './HexViewer'
import DecodeViewer from './DecodeViewer'

export default {
    name: 'selview',
    components:{
        HexViewer,
        DecodeViewer
    },
    methods:{
        handleScroll(evt){
            let delta=evt.deltaY;
            let direction = Math.sign(delta);
            this.$store.commit("scrollSelection",{direction});
        },
    }
}
</script>

<style scoped>
.sel_view{
    display: flex;
    flex-direction: row;
}
</style>
