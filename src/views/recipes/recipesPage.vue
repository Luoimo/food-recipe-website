<!--
 * @Description: 
 * @version: v1.0.0
 * @Author: GaoMingze
 * @Date: 2024-11-02 09:53:11
 * @LastEditors: GaoMingze
 * @LastEditTime: 2024-11-03 20:33:30
-->
<template>
    <div class="recipe-content">
        <div class="recipe-introduction">
            <div class="recipe-introduction-left">
                <h1 class="recipe-name">{{ recipe.name }}</h1>
                <div class="recipe-info">
                    <div class="author">
                        <div class="avatar">
                            <img
                                :src="recipe.author.avatar"
                                alt="author-avatar"
                            />
                        </div>
                        <div class="author-info">
                            <div class="author-name">
                                {{ recipe.author.name }}
                            </div>
                            <div class="uploaddate">
                                {{ recipe.uploadDate }}
                            </div>
                        </div>
                    </div>
                    <div class="prep-time">
                        <div class="icon">
                            <img
                                src="../../assets/icons/clock-fill.svg"
                                alt="clock"
                            />
                        </div>
                        <div class="prep-time-text">
                            <div class="prep-time-title">PREP TIME</div>
                            <div class="prep-time-content">
                                {{ recipe.prepTime }}
                            </div>
                        </div>
                    </div>
                    <div class="cook-time">
                        <div class="icon">
                            <img
                                src="../../assets/icons/clock-fill.svg"
                                alt="clock"
                            />
                        </div>
                        <div class="cook-time-text">
                            <div class="cook-time-title">COOK TIME</div>
                            <div class="cook-time-content">
                                {{ recipe.cookTime }}
                            </div>
                        </div>
                    </div>
                    <div class="category">
                        <img
                            src="../../assets/icons/folks.svg"
                            alt="category"
                        />
                        <span>{{ recipe.category }}</span>
                    </div>
                </div>
                <div class="recipe-picture">
                    <img :src="recipe.picture" alt="recipe-picture" />
                </div>
                <div class="recipe-ingredients">
                    <h2>Ingredients</h2>
                    <div class="main-dishes">
                        <h3>For Main Dishes</h3>
                        <ul>
                            <li
                                v-for="item in recipe.ingredients.mainDish"
                                :key="item"
                            >
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="recipe-introduction-right">
                <div class="buttons">
                    <div class="print">
                        <img src="../../assets/icons/printer.svg" alt="print" />
                        <span>PRINT</span>
                    </div>
                    <div class="share">
                        <img src="../../assets/icons/share.svg" alt="share" />
                        <span>SHARE</span>
                    </div>
                </div>
                <div class="nutrition-infomation">
                    <h2>Nutrition Information</h2>
                    <ul class="nutrition-list">
                        <li v-for="item in recipe.nutrition" :key="item.name">
                            <span>{{ item.name }}</span>
                            <span>{{ item.amount }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
const recipe = reactive({
    name: 'Spicy Chicken Salad',
    author: {
        name: 'John Doe',
        avatar: 'https://via.placeholder.com/150',
    },
    uploadDate: '2021-10-10',
    prepTime: '10 min',
    cookTime: '20 min',
    category: 'Salad',
    picture: 'https://via.placeholder.com/800x400',
    nutrition: [
        { name: 'Calories', amount: '100' },
        { name: 'Fat', amount: '5' },
        { name: 'Carbohydrates', amount: '20' },
        { name: 'Protein', amount: '10' },
    ],
    ingredients: {
        mainDish: [
            '1/2 cup chicken breast',
            '1/2 cup chicken broth',
            '1/2 cup water',
        ],
    },
})
// console.log(recipe.ingredients.mainDish)
</script>
<style lang="scss" scoped>
.recipe-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .recipe-introduction {
        display: flex;
        width: 100%;
        justify-content: space-around;
        // align-items: center;
        // margin-bottom: 20px;
        align-items: stretch;
        .recipe-introduction-left {
            width: 70%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            h1 {
                font-size: 64px;
                font-weight: 700;
                margin-bottom: 64px;
            }

            .recipe-info {
                height: 50px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-bottom: 64px;
                .author,
                .prep-time,
                .cook-time,
                .category {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                img {
                    height: 20px;
                    width: 20px;
                    margin-right: 16px;
                }
            }
            .recipe-picture {
                height: 400px;
                width: 100%;
                overflow: hidden;
                img {
                    height: 100%;
                    width: 100%;
                    border-radius: 40px;
                    object-fit: cover;
                }
            }
        }
        .recipe-introduction-right {
            // width: 30%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .buttons {
                display: flex;
                justify-content: flex-end;
                .print,
                .share {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 80px;
                    width: 80px;
                    border-radius: 50px;
                    background-color: #f5f5f5;
                    margin-left: 32px;
                    cursor: pointer;
                    span {
                        font-size: 18px;
                        font-weight: 700;
                        color: #333;
                    }
                }
            }
            .nutrition-infomation {
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-end;
                height: 400px;
                background: #e7fafe;
                padding: 32px;
                border-radius: 30px;
                h2 {
                    margin-bottom: 32px;
                }
                .nutrition-list {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    li {
                        display: flex;
                        align-items: center;
                        margin-bottom: 16px;
                        border-bottom: 1px solid black;
                        span {
                            font-size: 18px;
                            font-weight: 400;
                            color: #333;
                            margin-right: 16px;
                            line-height: 24px;
                        }
                    }
                }
            }
            img {
                height: 20px;
                width: 20px;
                margin-right: 5px;
            }
        }
    }
}
</style>
