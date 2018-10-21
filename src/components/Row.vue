<template>
  <div class="row">
      <div class="row_label">{{rowLabel}}</div>
      <Byte class="byte" v-for="offset in bytes" :key="offset" :offset="offset" :mode="mode"/>
  </div>
</template>

<script>
import _ from 'lodash'
import Byte from './Byte'
const byteSize = 8;

export default {
    name: 'row',
    props:{
        //bits
        offset:{type:Number,required:true},
        mode:String
    },
    computed:{
        bytes(){
           return [...Array(16)].map(
               (val,idx)=>this.offset*128+(8*idx)
            );
        },
        rowIndex(){
            let scrollRow = this.$store.state.segmentScrollRow;
            return scrollRow+this.offset>>3;
        },
        rowLabel(){
            let str = "0000"+(Number(this.offset*16).toString(16).toUpperCase());
            return str.substring(str.length-4);
        }
    },
    components:{
        Byte
    }
}
</script>

<style>
.row{
    display:flex;
    flex-direction: row;
    border:1px dashed rgba(0.5,0.5,0.5, 0.5);
}
.row_label{
    width: 60px;
    background-color: rgb(105, 160, 148);
}
.byte{
    width:25px;
}

</style>
