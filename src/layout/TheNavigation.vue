<template>
        <div v-if="isNavMoreShow == false" id="navigation" class="nav"> 
            <div class="nav-top">
                <div title="MISA Quản Lý Tài Sản" class="logo logo-icon"></div>
            </div>
            <div class="nav-content">
                <div class="nav-item"><div class="nav-item1"></div></div>
                <div class="nav-item"><div class="nav-item2"></div></div>
                <div class="nav-item"><div class="nav-item3"></div></div>
                <div class="nav-item"><div class="nav-item4"></div></div>
                <div class="nav-item"><div class="nav-item5"></div></div>
                <div class="nav-item"><div class="nav-item6"></div></div>
                <div class="nav-item"><div class="nav-item7"></div></div>
            </div>
            <div class="nav-footer">
                <div @click="btnNavMoreOnClick"
                id="nav-btn-more" title="Mở rộng"></div>
            </div>
        </div>
        <TheNavDetail v-else @closeNavDetail="isNavMoreShow = false"></TheNavDetail>
</template>

<script>
import TheNavDetail from './TheNavDetail.vue'
export default {
  name: 'TheNavigation',
  components: {
    TheNavDetail
  },
  methods: {
    /**
     * Ấn nút hiện menu chi tiết
     * Author: Trần Xuân Duy
     * Date: 1/3/2023
     */
    btnNavMoreOnClick(){
        this.isNavMoreShow = true;
    }
  },
  data() {
    return {
        isNavMoreShow: false,
    }
  },
}
</script>

<style>

</style>