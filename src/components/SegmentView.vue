<template>
  <div class="seg_view" @wheel="handleScroll" ref="element">
      <HexViewer :rowOffsets="rowOffsets"/>
      <DecodeViewer/>
  </div>
</template>

<script>
import HexViewer from './HexViewer'
import DecodeViewer from './DecodeViewer'

export default {
    name: 'segview',
    data(){
        return{
            numRows:16
        }
    },
    components:{
        HexViewer,
        DecodeViewer
    },
    methods:{
        handleScroll(evt){
            let delta=evt.deltaY;
            let direction = Math.sign(delta);
            this.$store.commit("scrollSegment",{direction});
        },
        setNumRows(){
            let height= this.$refs.element.clientHeight;
            let numRows= Math.ceil(height/22-1);
            this.numRows=numRows;
        }
    },
    computed:{
        currentTopRow(){
            return this.$store.state.segmentScrollRow;
        },
        rowOffsets(){
           return [...Array(this.numRows)].map(
               (val,idx)=>Math.floor(Math.floor(this.currentTopRow))+idx
           )
       }
    },
    mounted(){
        this.setNumRows();
    }
}
</script>

<style scoped>
.seg_view{
    display: flex;
    flex-direction: row;
}
</style>
