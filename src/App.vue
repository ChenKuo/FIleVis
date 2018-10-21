<template>
  <div id="app" >
    <TopBar id="topbar"/>
    <SegmentList id="seglist"/>
    <SegmentView id="segview"/>
    <SelectionView id="selview"/>
  </div>
</template>

<script>
import TopBar from './components/TopBar'
import SegmentList from './components/SegmentList'
import SegmentView from './components/SegmentView'
import SelectionView from './components/SelectionVIew'


export default {
  name: 'App',
  components: {
    TopBar,
    SegmentView,
    SelectionView,
    SegmentList,
  },
  methods:{

  }
}
</script>

<style>
html,body{
  height:100%;
  width:100%;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  display:inline-block;
  overflow: hidden;
  }

#app {
  position:fixed;
  display:inline-grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 50px 1fr 1fr;
  grid-template-areas:
    "header header "
    "seglist segview"
    "seglist selview";
  width:100%;
  height:100%;
  margin:0;
  padding:0;
}

</style>

<style scoped>
#topbar{
  background-color: orange; 
  grid-area: header;
}
#seglist{
  background-color: black; 
  grid-area: seglist;
}
#segview{
  background-color: green; 
  grid-area: segview;
}
#selview{
  background-color: blue; 
  grid-area: selview;
}



</style>
