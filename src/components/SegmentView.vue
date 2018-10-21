<template>
  <div class="seg_view" @wheel="handleScroll" ref="element">
      <HexViewer :rowOffsets="rowOffsets"/>
      <DecodeViewer :rowOffsets="rowOffsets"/>
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
            let scrollRow = this.$store.state.segmentScrollRow;
            let totalRow = this.$store.state.currentSegment.length/128;
            if(scrollRow+direction<0||totalRow-scrollRow < this.numRows ) return null;
            
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
               (val,idx)=>(Math.floor(this.currentTopRow)+idx)
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
