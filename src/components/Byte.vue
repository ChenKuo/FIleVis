<template>
  <div class="byte" :style="computedStyle">
      {{mode?ASCII:strByte}}
  </div>
</template>

<script>
const byteSize = 8;

export default {
    name: 'byte',
    props:{
        //offset in number of bits
        offset: Number,
        mode: String
    },
    computed:{
        byte(){
            let file =this.$store.state.file;
            if(!file) return "";
            
            let segment = this.$store.state.currentSegment;
            let segmentIndex = segment.startBit;
            let length = segment.length;
            let byteIndex = segmentIndex + this.offset;
            let data = file.data;
            //faster way to write offset/8
            let byteOffset = this.offset>>3;
            if(byteOffset>=file.size) return "";
            let extraBitOffset = this.offset&7;
            let byte1 = data.getUint8(byteOffset);
            let byte2 = byteOffset+1==file.size? 0x0:data.getUint8(byteOffset+1);
            let word = (byte1<<8)|byte2;
            let byte = 255&(word>>(8-extraBitOffset));
            return byte;
        },
        strByte(){
            if(this.byte=="") return "";
            let stringByte = Number(this.byte).toString(16).toUpperCase();
            if(stringByte.length<2) stringByte="0"+stringByte;
            return stringByte;
        },
        ASCII(){
            return String.fromCharCode(Number(this.byte));
        },
        computedStyle(){
            let byte=this.byte;
            return "background-color: rgb("+[byte,byte,byte].join(",")+");";
        }
    },
    
}
</script>

<style>

.byte{
    color:red;
}

</style>
