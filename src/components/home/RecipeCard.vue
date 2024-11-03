<!--
 * @Description: 
 * @version: v1.0.0
 * @Author: GaoMingze
 * @Date: 2024-11-02 17:30:02
 * @LastEditors: GaoMingze
 * @LastEditTime: 2024-11-03 15:46:45
-->
<template>
    <div class="recipe-card">
        <div class="recipe-card__image">
            <div class="like-icon-container">
                <img
                    :src="likeURL"
                    alt="Like"
                    class="like-icon"
                    @click="isLiked = !isLiked"
                />
            </div>
            <img
                :src="recipeInfo.image"
                alt="Recipe Image"
                class="recipe-image"
            />
        </div>
        <div class="recipe-card__title">{{ recipeInfo.name }}</div>
        <div class="recipe-info">
            <img
                src="@/assets/icons/clock-fill.svg"
                alt="Clock Icon"
                style="height: 100%"
            />
            {{ recipeInfo.time }}
            <img
                src="@/assets/icons/folks.svg"
                alt="folks Icon"
                style="height: 100%"
            />
            {{ recipeInfo.category }}
        </div>
    </div>
</template>
<script setup>
import { defineProps, ref, computed } from 'vue'
const props = defineProps({
    recipeInfo: {
        type: Object,
        required: true,
    },
})

const isLiked = ref(false)
const likeURL = computed(() => {
    return isLiked.value
        ? require('@/assets/icons/liked.svg')
        : require('@/assets/icons/like.svg')
})
</script>
<style lang="scss" scoped>
.recipe-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    height: 400px;
    width: 360px;
    border-radius: 20px;
    background: linear-gradient(180deg, #e7f9fd 0%, #d2f2ff 100%);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin: 10px;
    padding: 20px;
    .recipe-card__image {
        height: 250px;
        width: 100%;
        position: relative;
        .recipe-image {
            height: 100%;
            width: 100%;
            border-radius: 20px;
            object-fit: cover;
        }
        .like-icon-container {
            position: absolute;
            top: 10px;
            right: 10px;
            height: 40px;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: #fff;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }

        .like-icon {
            height: 30px;
            width: 30px;
            cursor: pointer;
        }
    }
    .recipe-card__title {
        font-size: 24px;
        font-weight: bold;
        margin-top: 10px;
        line-height: 1.5;
        max-height: calc(2 * 1.5em);
        width: 100%;
        text-align: left;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .recipe-info {
        height: 24px;
        line-height: 24px;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        // margin-bottom: 40px;
    }
}
</style>
