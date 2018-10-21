<template>
  <div class="row">
      <div class="row_label"></div>
      <Byte class="byte" v-for="offset in bytes" :key="offset" :offset="offset"/>
  </div>
</template>

<script>
import _ from 'lodash'
import Byte from './Byte'
const byteSize = 8;

export default {
    name: 'row',
    props:{
        offset:{type:Number,required:true}
    },
    computed:{
        bytes(){
           return [...Array(16)].map(
               (val,idx)=>this.offset+(8*idx)
            );
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
    background-color: darkolivegreen;
}
.byte{
    width:25px;
}

</style>
