<!--
 * @Description: 
 * @version: v1.0.0
 * @Author: GaoMingze
 * @Date: 2024-11-01 20:46:16
 * @LastEditors: GaoMingze
 * @LastEditTime: 2024-11-03 15:45:05
-->
<template>
    <div class="common-layout">
        <el-container direction="vertical">
            <TopHeader></TopHeader>
            <el-main><router-view></router-view></el-main>
            <Footer></Footer>
        </el-container>
    </div>
</template>
<script setup>
import TopHeader from '@/components/mainbox/TopHeader'
import Footer from '@/components/mainbox/Footer.vue'
</script>
<style lang="scss" scoped>
.common-layout {
    background-color: white;
    padding: 80px
}
</style>
