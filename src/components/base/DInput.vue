<template>
    <div class="input-wrapper">

        <label><p>{{ label }}<span v-if="required" class="red-star"> *</span></p>
        </label>
            <input 
            :disabled = "!disabledInput"
            ref="d-input"
            v-model="value"
            @blur="onValidateEmpty"
            :class="[{'input-error': invalid}, classInput]"
            :type="typeInput" class="text-field" 
            :placeholder="placeholderInput">
            <div v-if="invalid" class="error-mess">Trường này không được để trống</div>
    </div>
</template>
<script>
export default {
    name: "DInput",
    props:{
        modelValue:[String, Number, Boolean],
        typeInput: {
            type: String,
            default: "text",
            required: false
        },
        disabledInput:{
            type: String,
            default: "false",
            required: false
        },
        placeholderInput:{
            type: String,
            default: "",
            required: false
        },
        label:{
            type: String,
            required: false,
        },
        required:{
            type: Boolean,
            required: false,
            default: false
        },
        classInput:{
            type: String,
            required: false,
        }
    },
    methods: {
        /**
         * validate trống
         * author: Trần Xuân Duy (6/5/20223)
         */
        onValidateEmpty(){
            if((this.required) && ((!this.value) || (this.value == 0))){
                this.invalid = true;
            }else{
                this.invalid = false;
            }
        },
        /**
         * focus vào input
         * author: Trần Xuân Duy (6/5/20223)
         */
        setFocus(){
            this.$nextTick(function(){
                this.$refs["d-input"].focus();
            })
        },
        /**
         * đặt giá trị mặc địnnh năm theo dõi là ngày hôm nay
         * author: Trần Xuân Duy
         * date: 7/3/2023
         */
        onTime(){
            try {
                //đặt value trong input là ngày hôm nay
                this.value = new Date();
                console.log(this.value);
            } catch (error) {
                console.log(error);
            }
        }
    },
    watch:{
        modelValue(newVal){
            console.log(newVal)
            this.value= this.modelValue
        }
    },
    created(){
        if(this.typeInput == "date"){
            this.onTime();
        }
        
    },
    mounted(){
        this.value = this.modelValue
        //gán năm theo dõi mặc định là năm nay
        if((this.label=="Năm theo dõi") && (!this.value)){
            this.value = this.today.getFullYear();
        }
    },
    data() {
        return {
            value: null,
            invalid: false,
            today: new Date(),
        }
    },
}
</script>

<style scoped>
    @import url(../../css/elements/textfield.css);
</style>