<template>
  <div id="app">
    <TopBar id="topbar"/>
    <SegmentList id="seglist"/>
    <HexViewer id="seghex"/>
    <DecodeViewer id="segdecode"/>
    <HexViewer id="selecthex"/>
    <DecodeViewer id="selectdecode"/>
    <ScrollView id="scrollview"/>
  </div>
</template>

<script>
import TopBar from './components/TopBar'
import SegmentList from './components/SegmentList'
import HexViewer from './components/HexViewer'
import DecodeViewer from './components/DecodeViewer'
import ScrollView from './components/ScrollView'

export default {
  name: 'App',
  components: {
    TopBar,
    HexViewer,
    DecodeViewer,
    SegmentList,
    ScrollView
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
  }

#app {
  position:fixed;
  display:inline-grid;
  grid-template-columns: 200px auto auto 100px;
  grid-template-rows: 50px auto auto;
  grid-template-areas:
    "header header header header"
    "seglist seghex segdecode segscroll"
    "seglist selecthex selectdecode segscroll";
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
#seghex{
  background-color: green; 
  grid-area: seghex;
}
#segdecode{
  background-color: blue; 
  grid-area: segdecode;
}
#selecthex{
  background-color: red; 
  grid-area: selecthex
}
#selectdecode{
  background-color: yellow;
  grid-area: selectdecode;
}
#scrollview{
  background-color: purple; 
  grid-area: segscroll;
}

</style>
