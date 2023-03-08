<template>
    <div class="d-combobox">
        <label v-if="label" for="">{{ label }}</label>
        <input @input="onSearchItem"
        v-model="this.textSelected" 
        :id="id" 
        class="combobox-input text-field" type="text">
        <button @click="onShowData"
        class="combobox-button"></button>
        <div v-show="isShowData" class="combobox-data">
            <a v-for="(entity, index) in entitySearch " :key="index"
            @click="onSelect(entity)"
            :value="entity[propValue]"
            class="combobox-item">{{ entity[propName] }}</a>
           
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "DCombobox",
    props: ["id","label","api", "propName", "propValue","modelValue"],
    emits:["update: modelValue"],
    created() {
        /**
         * lấy data về
         * Trần Xuân Duy - 8/3/2023
         */
        if(this.api){
            axios.get(this.api)
            .then((data) => {
                this.entities = data.data;
                this.entitySearch = data.data;
                this.setItemSelected();
            })
            .catch(res=>{
                console.log(res);
            })
        }
    },
    methods: {
        /**
         * show data
         * author: Trần Xuân Duy - 8/3/2023
         */
        onShowData(){
            this.isShowData = !this.isShowData;
        },
        /**
         * chọn 1 item thì hiển thị lên
         * author: Trần Xuân Duy - 8/3/2023
         */
        onSelect(entity){
            this.textSelected = entity[this.propName];
            this.isShowData = false;
            this.$emit("update:modelValue", entity[this.propValue]);
        },
        /**
         * item đã chọn
         * author: Trần Xuân Duy - 8/3/2023
         */
        setItemSelected(){
            var me = this;
            //tìm item tương ứng với modelValue
            let entitySelected = this.entities.find((item)=>item[me.propValue] == me.modelValue);
            if(entitySelected){
                this.textSelected = entitySelected[this.propName];
            }
        },
        /**
         * tìm kiếm item
         * author: Trần Xuân Duy - 8/3/2023
         */
        onSearchItem(){
            var me = this;
            //tìm item tương ứng với modelValue
            this.entitySearch = this.entities.filter(
                (item)=>item[me.propName].toLowerCase().includes(me.textSelected.toLowerCase()));
            this.isShowData = true;
            console.log(this.entitySearch);
        }
    },
    watch: {

    },
    data() {
        return {
            isShowData: false,
            entities:[],
            entitySearch: [],
            textSelected: null,
        }
    },

}
</script>

<style>
.d-combobox{
    position: relative;
}

.combobox-button{
    width: 36px;
    height: 36px;
    position: absolute;
    bottom: 0px;
    right: 0;
    background: url('../../assets/icon/down-arrow-small.png') no-repeat;
    background-size: 7px 5px;
    background-position: center;
    border: none;

}
.combobox-data{
    position: absolute;
    top: 58px;
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 2;
    background-color: #ffffff;
    border: 1px solid #cfcfcf;
    box-shadow: 0 4px 6px 0px rgba(23,27,42,0.24);
    border-radius: 3px;
    box-sizing: border-box;
}
.combobox-item{
    height: 36px;
    border-top: 1px solid #cfcfcf;
    display: flex;
    align-items: center;
    padding-left: 36px;
    box-sizing: border-box;

}
.combobox-item:hover{
    background-color: #c7e0f5 !important;
}
</style>