<template>
    <div class="hex_view" ref="element">
        <div class="column_labels">
            <div class="row_label"/>
            <div class="column_label" v-for="n in 16" :key="n">{{"0"+((n-1).toString(16).toUpperCase())}}</div>
        </div>
        <Row class="row" v-for="rowOffset in rowOffsets" :key="rowOffset" :offset="rowOffset"/>
    </div>
</template>

<script>
import Row from './Row'

export default {
    name: 'hexviewer',
    props:{
        rowOffsets:Array
    },
    
    methods:{

    },
    computed:{

    },
    components:{
        Row
    },

}
</script>

<style scoped>
.hex_view{
    overflow: hidden;
}
.column_labels{
    display: flex;
    flex-direction: row;
    
}
.column_label{
    width:25px;
    background-color: rgb(105, 160, 148);
}
.row_label{
    width:60px;
    background-color: transparent;
}
.row{
    height: 20px;
}
</style>
