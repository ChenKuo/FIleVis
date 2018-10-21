<template>
  <div class="byte">
      {{offset}}
  </div>
</template>

<script>
const byteSize = 8;

export default {
    name: 'byte',
    props:{
        offset: Number,
    },
    computed:{
        byte:_=>{
            return 0;
        }
    }
}
</script>

<style>
.row{
    display:flex;
    flex-direction: row;
}


</style>
