<!--
 * @Description: 
 * @version: v1.0.0
 * @Author: GaoMingze
 * @Date: 2024-11-01 22:55:37
 * @LastEditors: GaoMingze
 * @LastEditTime: 2024-11-02 21:02:01
-->
<template>
    <div class="footer">
        <div class="footer-top">
            <div class="left">
                <div class="logo">
                    <img
                        src="@/assets/images/Foodieland.png"
                        alt="Foodieland"
                    />
                </div>
                <span class="text"
                    >Lorem ipsum dolor sit amet, consectetuipisicing elit
                </span>
            </div>
            <div class="right">
                <router-link to="/" class="link">Home</router-link>
                <router-link to="/recipes" class="link">Recipes</router-link>
                <router-link to="/blog" class="link">Blog</router-link>
                <router-link to="/contact" class="link">Contact</router-link>
            </div>
        </div>
        <div class="footer-bottom">
            <span class="text">© 2024 Foodieland. All rights reserved.</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.footer {
    background-color: #ffffff;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 193px;
}
.footer-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 122px;
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
}
.footer-bottom {
    height: 71px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.left {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    height: 100%;
}
.right {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.logo img {
    width: 100%;
    height: 100%;
}
.link {
    color: #333;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    margin-right: 20px;
}
</style>
