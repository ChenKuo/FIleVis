import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const newSegment = (startBit,len)=>{
    return {
        startBit:startBit,
        length:len
    }
}

const newFile = (name,data)=>{
    return {
        name:name,
        data:data
    }
}

const newUISetting=(segViewHeight,selectViewHeight) =>{
    
}

const newDecoder=(name,func,inputSize)=>{
    return {
        name,
        func,
        inputSize
    }
}


const state={
    file: null,
    segments: [],
    selectionStartBit: 0,
    selectionBitLen: 0,
    segmentScrollRow:0,
    selectionScrollRow:0,
    currentSegment:null,
    decoders:[

    ],
    UISetting:{
        segViewHeight:0,
        selectViewHeight:0
    }

}
const getters={

};

const actions={

};

const mutations={
    loadFile(state,{filename,buffer}){
        state.file=newFile(filename,buffer);
        state.segments=[newSegment(0,buffer.length)];
        state.currentSegment=state.segments[0]
    },
    addSegment(state,{startBit,bitLen}){

    },
    selectSegment(state,{segmentId}){

    },
    editSegment(state,{segmentId,startBit,bitLen}){

    },
    changeSegmentDecodeMethod(state,{}){

    },
    changeSelectionDecodeMethod(state,{}){

    },
    scrollSegment(state,{direction}){
        state.segmentScrollRow += direction;
    },
    scrollSelection(state,{direction}){

    },
    changeViewHeight(state,{segViewHeight,selectViewHeight}){
        state.UISetting={segViewHeight,selectViewHeight};
    }
}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
  });