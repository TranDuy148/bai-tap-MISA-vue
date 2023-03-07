<template>
  <div id="addItemForm" class="popup" >
            <div class="popup-container">
                <div class="popup-top">
                    <b> {{ formTitle }} </b>
                    <div @click="closeForm()"
                    title="Đóng"
                     class="icon close-icon btn-close"></div>
                </div>
                <div class="popup-mid">
                    <!-- <label><p>Mã tài sản<span class="red-star"> *</span></p>
                        <input 
                        v-model="employee.EmployeeCode"
                        type="text" id="tf-mats" class="text-field tf-mats input-required" placeholder="Nhập mã tài sản">
                    </label> -->
                    <DInput
                    ref="txtEmployeeCode"
                    :classInput="''"
                    :placeholderInput="'Nhập mã tài sản'"
                    :isFocus="true"
                    :modelValue="employee.EmployeeCode"
                    label="Mã tài sản" :required=true>
                    </DInput>

                    <!-- <label><p>Tên tài sản<span class="red-star"> *</span></p>
                        <input v-model="employee.FullName"
                        type="text" class="text-field tf-tents input-required" placeholder="Nhập tên tài sản">
                    </label> -->
                    <DInput
                    ref="txtEmployeeName"
                    :classInput="'tf-tents'"
                    :placeholderInput="'Nhập tên tài sản'"
                    :modelValue="employee.FullName"
                    label="Tên tài sản" :required=true>
                    </DInput>

                    <!-- <label><p>Mã bộ phận sử dụng<span class="red-star"> *</span></p>
                        <div class="dropdown tf-mabp mar-top-8px">
                            <div v-text="employee.DepartmentCode"
                            class="choosen-value"></div>
                            <div class="arrow-down-icon"></div>
                            <ul class="option-list">
                                <li>Bộ phận 1</li>
                                <li>Bộ phận 2</li>
                                <li>Bộ phận 3</li>
                                <li>Bộ phận 4</li>
                            </ul>
                        </div>
                    </label> -->
                    <DInput
                    
                    :classInput="'tf-mabp '"
                    :placeholderInput="'Chọn mã bộ phận sử dụng'"
                    :modelValue="employee.FirstName"
                    label="Mã bộ phận sử dụng" :required=true>
                    </DInput>
                    
                    <!-- <label><p>Tên bộ phận sử dụng</p>
                        <input v-model="employee.IdentityPlace" 
                        type="text" class="text-field tf-tenbp disable-text" placeholder="" disabled="true">
                    </label> -->
                    <DInput
                    ref=""
                    :classInput="'tf-tenbp disable-text'"
                    :modelValue="employee.IdentityPlace"
                    label="Tên bộ phận sử dụng"
                    disabledInput>
                    </DInput>

                    <label><p>Mã loại tài sản<span class="red-star"> *</span></p>
                        
                        <div class="dropdown tf-maloaits mar-top-8px">
                            <div v-text="employee.DepartmentCode"
                            class="choosen-value"></div>
                            <div class="arrow-down-icon"></div>
                            <ul class="option-list">
                                <li>Loại 1</li>
                                <li>Loại 2</li>
                                <li>Loại 3</li>
                                <li>Loại 4</li>
                            </ul>
                        </div>
                    </label>
                    <!-- <label><p>Tên loại tài sản</p>
                        <input v-model="employee.MartialStatusName"
                        type="text" class="text-field tf-tenloaits disable-text" placeholder="" disabled="">
                    </label> -->
                    <DInput
                    ref=""
                    :classInput="'tf-tenloaits disable-text'"
                    :modelValue="employee.MartialStatusName"
                    label="Tên loại tài sản"
                    disabledInput>
                    </DInput>

                    <!-- <label><p>Số lượng<span class="red-star"> *</span></p>
                        <input v-model="employee.WorkStatus"
                        type="number" class="text-field tf-soluong input-required" placeholder="">
                    </label> -->
                    <DInput
                    ref=""
                    typeInput="number"
                    :classInput="'tf-soluong'"
                    :modelValue="employee.WorkStatus"
                    label="Số lượng" :required=true>
                    </DInput>

                    <!-- <label><p>Nguyên giá<span class="red-star"> *</span></p>
                        <input v-model="employee.PhoneNumber"
                        type="number" id="tf-nguyengia" class="text-field tf-nguyengia input-required" placeholder="">
                    </label> -->
                    <DInput
                    ref=""
                    typeInput="number"
                    :classInput="'tf-nguyengia'"
                    :modelValue="employee.PhoneNumber"
                    label="Nguyên giá" :required=true>
                    </DInput>

                    <!-- <label><p>Số năm sử dụng<span class="red-star"> *</span></p>
                        <input v-model="employee.EducationalBackground"
                        type="number" class="text-field tf-sonamsd input-required" placeholder="">
                    </label> -->
                    <DInput
                    ref=""
                    typeInput="number"
                    :classInput="'tf-sonamsd'"
                    :modelValue="employee.EducationalBackground"
                    label="Số năm sử dụng" :required=true>
                    </DInput>

                    <!-- <label><p>Tỉ lệ hao mòn (%)<span class="red-star"> *</span></p>
                        <input v-model="employee.MartialStatus"
                        type="number" id="tf-tilehaomon" min="0" max="100" class="text-field tf-tilehaomon input-required" placeholder="">
                    </label> -->
                    <DInput
                    ref=""
                    typeInput="number"
                    :classInput="'tf-sonamsd'"
                    :modelValue="employee.MartialStatus"
                    label="Tỉ lệ hao mòn (%)" :required=true>
                    </DInput>

                    <!-- <label><p>Giá trị hao mòn năm<span class="red-star"> *</span></p>
                        <input type="number" id="tf-haomonnam" class="text-field tf-haomonnam input-required" placeholder="" value="0">
                    </label> -->
                    <DInput
                    ref=""
                    typeInput="number"
                    :classInput="'tf-haomonnam'"
                    :modelValue="employee.MartialStatus"
                    label="Giá trị hao mòn năm" :required=true>
                    </DInput>

                    <!-- <label><p>Năm theo dõi</p>
                        <input type="number" class="text-field tf-namtheodoi disable-text" disabled placeholder="" value="">
                    </label> -->
                    <DInput
                    ref=""
                    :classInput="'tf-namtheodoi disable-text'"
                    :modelValue="employee.MartialStatus"
                    label="Năm theo dõi"
                    disabledInput>
                    </DInput>

                    <!-- <label><p>Ngày mua<span class="red-star"> *</span></p>
                        <input
                        type="date" class="input-date text-field day tf-ngaymua input-required" placeholder="">
                    </label> -->
                    <DInput
                    typeInput="date"
                    :classInput="'input-date day'"
                    :modelValue="employee.FullName"
                    label="Ngày mua" :required=true>
                    </DInput>
                    <!-- <label><p>Ngày bắt đầu sử dụng<span class="red-star"> *</span></p>
                        <input type="date" class="input-date text-field tf-ngaybatdausd day input-required" placeholder="" value="">
                    </label> -->
                    <DInput
                    typeInput="date"
                    :classInput="'input-date day'"
                    :modelValue="employee.FullName"
                    label="Ngày bắt đầu sử dụng" :required=true>
                    </DInput>
                </div>
                <div class="popup-bot">
                    <button @click="closeForm()"
                     class="btn sub-btn btn-close" >Hủy</button>
                    <button id="saveBtn" class="btn main-btn">Lưu</button>
                </div>
            </div>
        </div>
</template>

<script>
import DInput from './base/DInput.vue';
export default {
    name: "DForm",
    components: {
        DInput
    },
    props:["employeeID","formTitle"],
    methods: {
        /**
         * Đóng form
         * Author: Trần Xuân Duy
         * Date: 2/3/3023
         */
        closeForm(){
            this.$emit("closeForm");
        }
    },
    async created() {
        /**
         * lấy dữ liệu về
         * author: Trần Xuân Duy
         */
        await fetch(`https://apidemo.laptrinhweb.edu.vn/api/v1/employees/${this.employeeID}`)
            .then(res => res.json())
            .then(data =>{
                this.employee = data;
                console.log("trả về: ", data);
            })
        
    },
    mounted() {
        this.$refs["txtEmployeeCode"].setFocus();
        console.log(this.formTitle);
    },
    
    data() {
        return {
            employee:{},
            duy:{
                name: "Trần XUân Duy"
            }
        }
    },


}
</script>

<style>

</style>