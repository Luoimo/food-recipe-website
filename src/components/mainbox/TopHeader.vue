<!--
 * @Description: 
 * @version: v1.0.0
 * @Author: GaoMingze
 * @Date: 2024-11-01 21:11:31
 * @LastEditors: GaoMingze
 * @LastEditTime: 2024-11-02 12:02:00
-->
<template>
    <div class="header">
        <div class="left">
            <a href="/" class="logo">
                <img src="@/assets/images/Foodieland.png" alt="Foodie Logo" />
            </a>
        </div>
        <div class="center">
            <router-link to="/" class="link">Home</router-link>
            <router-link to="/recipes" class="link">Recipes</router-link>
            <router-link to="/blog" class="link">Blog</router-link>
            <router-link to="/contact" class="link">Contact</router-link>
        </div>
        <div class="right">
            <a href="#" class="link">
                <img src="@/assets/images/facebook.png" alt="facebook" />
            </a>
            <a href="#" class="link">
                <img src="@/assets/images/instagram.png" alt="instagram" />
            </a>
            <a href="#" class="link">
                <img src="@/assets/images/twitter.png" alt="twitter" />
            </a>
        </div>
    </div>
</template>
<script setup></script>
<style type="scss" scoped>
.header {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    border-bottom: #000000 solid 1px;
}
.left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
}
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 3;
}
.right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
    flex: 1;
}
.link {
    margin-left: 20px;
    margin-right: 20px;
    color: #000000;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    transition: all 0.3s ease;
}
.link:hover {
    color: #ff9900;
}

.logo {
    display: flex;
    align-items: center;
    margin-left: 20px
}
.logo img {
    height: 100%;
}
</style>
