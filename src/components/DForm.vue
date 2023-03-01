<template>
  <div id="addItemForm" class="popup" >
            <div class="popup-container">
                <div class="popup-top">
                    <b>Thêm tài sản</b>
                    <div 
                     class="icon close-icon btn-close"></div>
                </div>
                <div class="popup-mid">
                    <label><p>Mã tài sản<span class="red-star"> *</span></p>
                        <input type="text" id="tf-mats" class="text-field tf-mats input-required" placeholder="Nhập mã tài sản" value="">
                    </label>
                    <label><p>Tên tài sản<span class="red-star"> *</span></p>
                        <input type="text" class="text-field tf-tents input-required" placeholder="Nhập tên tài sản" value="">
                    </label>
                    <label><p>Mã bộ phận sử dụng<span class="red-star"> *</span></p>
                        <div class="dropdown tf-mabp mar-top-8px">
                            <div class="choosen-value">Chọn mã bộ phận sử dụng</div>
                            <div class="arrow-down-icon"></div>
                            <ul class="option-list">
                                <li>Bộ phận 1</li>
                                <li>Bộ phận 2</li>
                                <li>Bộ phận 3</li>
                                <li>Bộ phận 4</li>
                            </ul>
                        </div>
                    </label>
                    
                    <label><p>Tên bộ phận sử dụng</p>
                        <input type="text" class="text-field tf-tenbp disable-text" placeholder="" value="" disabled>
                    </label>

                    <label><p>Mã loại tài sản<span class="red-star"> *</span></p>
                        
                        <div class="dropdown tf-maloaits mar-top-8px">
                            <div class="choosen-value">Chọn mã loại tài sản</div>
                            <div class="arrow-down-icon"></div>
                            <ul class="option-list">
                                <li>Loại 1</li>
                                <li>Loại 2</li>
                                <li>Loại 3</li>
                                <li>Loại 4</li>
                            </ul>
                        </div>
                    </label>
                    <label><p>Tên loại tài sản</p>
                        <input type="text" class="text-field tf-tenloaits disable-text" placeholder="" disabled>
                    </label>
                    <label><p>Số lượng<span class="red-star"> *</span></p>
                        <input type="number" class="text-field tf-soluong input-required" placeholder="" value="01">
                    </label>
                    <label><p>Nguyên giá<span class="red-star"> *</span></p>
                        <input type="number" id="tf-nguyengia" class="text-field tf-nguyengia input-required" placeholder="" value="0">
                    </label>
                    <label><p>Số năm sử dụng<span class="red-star"> *</span></p>
                        <input type="number" class="text-field tf-sonamsd input-required" placeholder="" value="0">
                    </label>
                    <label><p>Tỉ lệ hao mòn (%)<span class="red-star"> *</span></p>
                        <input type="number" id="tf-tilehaomon" min="0" max="100" class="text-field tf-tilehaomon input-required" placeholder="" value="0">
                    </label>
                    <label><p>Giá trị hao mòn năm<span class="red-star"> *</span></p>
                        <input type="number" id="tf-haomonnam" class="text-field tf-haomonnam input-required" placeholder="" value="0">
                    </label>
                    <label><p>Năm theo dõi</p>
                        <input type="number" class="text-field tf-namtheodoi disable-text" disabled placeholder="" value="">
                    </label>
                    <label><p>Ngày mua<span class="red-star"> *</span></p>
                        <input type="date" class="input-date text-field day tf-ngaymua input-required" placeholder="" value="">
                    </label>
                    <label><p>Ngày bắt đầu sử dụng<span class="red-star"> *</span></p>
                        <input type="date" class="input-date text-field tf-ngaybatdausd day input-required" placeholder="" value="">
                    </label>
                </div>
                <div class="popup-bot">
                    <button class="btn sub-btn btn-close">Hủy</button>
                    <button id="saveBtn" class="btn main-btn">Lưu</button>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: "DForm",
    components: {
    },
    methods: {
        
    },
    data() {
        return {
            
        }
    },

}
</script>

<style>

</style>