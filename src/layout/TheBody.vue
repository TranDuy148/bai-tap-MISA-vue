<template>
    <div class="body">
                <div class="body-header">
                    <div class="body-header-left">
                        <div class="left-item1 search-icon"><input type="text" class="text-field search" placeholder="Tìm kiếm tài sản"></div>
                        <div class="left-item2">
                            <div class="dropdown filter-icon">
                                <div class="choosen-value">Loại tài sản</div>
                                <div class="arrow-down-icon"></div>
                                <ul class="option-list">
                                    <li>Loại 1</li>
                                    <li>Loại 2</li>
                                    <li>Loại 3</li>
                                    <li>Loại 4</li>
                                </ul>
                            </div>

                        </div>
                        <div class="left-item3">
                            <div class="dropdown filter-icon">
                                <div class="choosen-value">Bộ phận sử dụng</div>
                                <div class="arrow-down-icon"></div>
                                <ul class="option-list">
                                    <li>Bộ phận 1</li>
                                    <li>Bộ phận 2</li>
                                    <li>Bộ phận 3</li>
                                    <li>Bộ phận 4</li>
                                </ul>
                            </div>
                            <!-- <mcombobox icon="filter-icon" api="https://apidemo.laptrinhweb.edu.vn/api/v1/Employees" placeholder="Bộ phận sử dụng"  modelName="DepartmentName" required></mcombobox> -->
                            
                        </div>
                    </div>
                    <div class="body-header-right">
                        <button @click="btnAddOnClick"
                         id="btnAddItem" class="btn main-btn add-btn">+ Thêm tài sản
                        </button>
                        <div title="Export dữ liệu" class="icon exel-btn"></div>
                        <div title="Xóa dữ liệu" class="icon delete-btn"></div>
                    </div>
                </div>
                <div class="body-content">
                    <div class="table">
                        <div class="data"></div>
                    <table id="tbPropertyList">
                        <thead>
                            <tr>
                                <th class="col1" type="checkBox"><input id="check-top" class="checkbox" title="Chọn/Bỏ chọn tất cả" type="checkbox"></th>
                                <th class="col2" type="stt" title="Số thứ tự">STT</th>
                                <th class="col3" col-name="EmployeeCode">Mã tài sản</th>
                                <th class="col4" col-name="FullName">Tên tài sản</th>
                                <th class="col5" col-name="PositionName">Loại tài sản</th>
                                <th class="col6" col-name="DepartmentName">Bộ phận sử dụng</th>
                                <th class="col7" col-name="WorkStatus">Số lượng</th>
                                <th class="col8" col-name="PhoneNumber">Nguyên giá</th>
                                <th class="col9" col-name="Salary" title="Hao mòn/Khấu hao lũy kế">HM/KH lũy kế</th>
                                <th class="col10" col-name="PersonalTaxCode">Giá trị còn lại</th>
                                <th class="col11" type="btnFunction">Chức năng</th>
                            </tr>
                        </thead>

                       <tbody>
                            <tr>
                                <td class="col1"><input class="checkbox" type="checkbox"></td>
                                <td class="col2">1</td>
                                <td class="col3">MT434343</td>
                                <td class="col4">Dell Insprion 3487</td>
                                <td class="col5">Máy tính xách tay</td>
                                <td class="col6">Phòng hành chính kế toán</td>
                                <td class="col7">2</td>
                                <td class="col8">20.000.000</td>
                                <td class="col9">894.000</td>
                                <td class="col10">19.106.000</td>
                                <td class="col11">
                                    <div class="icon update-icon"></div>
                                    <div class="icon detail-icon"></div>
                                </td>
                            </tr>
                            <tr v-for="(item,index) in properties" :key="index">
                                <td class="col1"><input class="checkbox" type="checkbox"></td>
                                <td class="col2">1</td>
                                <td class="col3">{{ item.EmployeeCode }}</td>
                                <td class="col4">{{ item.FullName }}</td>
                                <td class="col5">{{ item.PositionName }}</td>
                                <td class="col6">{{ item.DepartmentName }}</td>
                                <td class="col7">{{ item.WorkStatus }}</td>
                                <td class="col8">{{ formatMoney(item.PhoneNumber) }}</td>
                                <td class="col9">{{ formatMoney(item.Salary) }}</td>
                                <td class="col10">{{ formatMoney(item.PersonalTaxCode) }}</td>
                                <td class="col11">
                                    <div class="icon update-icon"></div>
                                    <div class="icon detail-icon"></div>
                                </td>
                            </tr>
                            
                       </tbody>
                        
                    </table>
                    <div class="table-pagging">
                        
                        <div class="table-pagging-left">
                            <div>Tổng số: <b>200</b> bản ghi</div>
                        </div>
                        <div class="table-pagging-right">
                            <div class="sum1">17</div>
                            <div class="sum2">23.236.000.000</div>
                            <div  class="sum3">21.421.000</div>
                            <div class="sum4">201.550.000</div>
                        </div>
                    </div> 
                    </div>
                    
                </div>
    </div>
    <DForm v-show="isShowForm" @closeForm="isShowForm=!isShowForm"></DForm>
</template>

<script>
import DForm from '@/components/DForm.vue';
export default {
    name: "TheBody",
    created() {
        /**
         * Gọi API lấy dữ liệu
         * Author: Trần Xuân Duy
         * Date: 1/3/2023
         */
        try {
            fetch("https://apidemo.laptrinhweb.edu.vn/api/v1/Employees")
            .then(res => res.json())
            .then(data =>{
                this.properties = data;
            })
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        /**
         * Ấn nút hiện form add
         * Author: Trần Xuân Duy
         * Date: 1/3/2023
         */
        btnAddOnClick(){
            this.isShowForm = true;
        },
        /**
         * Định dạng tiền
         * Author: Trần Xuân Duy
         * Date: 1/3/2023
         */
        formatMoney(value){
            try {
                const VND = new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                            });
                            const moneyFormated = VND.format(value);
                            return moneyFormated.substring(0, moneyFormated.length - 2);
            } catch (error) {
                return error;
            }
        }
    },
    data() {
        return {
            properties: [],
            isShowForm: false,
        }
    },
    components:{
        DForm
    }
}

</script>

<style>

</style>