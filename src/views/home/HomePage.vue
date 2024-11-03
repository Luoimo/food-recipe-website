<template>
    <div class="home-page">
        <div class="home-carousal">
            <el-carousel :interval="4000" type="card" height="640px">
                <el-carousel-item v-for="item in 6" :key="item">
                    <h3 text="2xl" justify="center">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="home-categories">
            <div class="categories-top">
                <h1>Categories</h1>
                <div class="categories-view">View All Categories</div>
            </div>
            <div class="categories-bottom">
                <CategoryCard
                    v-for="(category, index) in categories"
                    :key="index"
                    :categoryInfo="category"
                />
            </div>
        </div>
        <div class="home-recipes">
            <div class="recipes-top">
                <h1>Simple and Tasty Recipes</h1>
                <span
                    >Lorem ipsum dolor sit amet, consectetuipisicing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqut enim ad minim
                </span>
            </div>
            <div class="recipes-bottom">
                <RecipeCard
                    class="recipe-card"
                    v-for="(recipe, index) in recipesCards"
                    :key="index"
                    :recipeInfo="recipe"
                />
            </div>
        </div>
    </div>
</template>
<script setup>
import CategoryCard from '@/components/home/CategoryCard.vue'
import RecipeCard from '@/components/home/RecipeCard.vue'
import axios from 'axios'
import { ref, reactive,onMounted } from 'vue'
const categories = reactive([
    {
        name: 'Breakfast',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Lunch',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Dinner',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Snacks',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Beverages',
        image: 'https://via.placeholder.com/150',
    },
])
const recipesCards = reactive([])
const getRecipesCards = async () => {
    const response = await axios.get('/home/getRecipesCardList/9')
    // console.log(response.data)
    Object.assign(recipesCards, response.data.data)
    console.log(recipesCards)
}
onMounted(() => {
    getRecipesCards()
})
</script>
<style lang="scss" scoped>
.home-page {
    .home-carousal {
        margin-bottom: 160px;
        .el-carousel__item {
            border-radius: 40px;
            overflow: hidden;
        }
        .el-carousel__item h3 {
            color: #475669;
            opacity: 0.75;
            line-height: 200px;
            margin: 0;
            text-align: center;
        }

        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n + 1) {
            background-color: #d3dce6;
        }
    }
    .home-categories {
        margin-bottom: 160px;
        .categories-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
            h1 {
                font-size: 48px;
                font-weight: 700;
                color: #475669;
            }
            .categories-view {
                width: 200px;
                height: 60px;
                background-color: #e7fafe;
                padding: 20px;
                line-height: 60px;
                border-radius: 40px;
                font-size: 16px;
                font-weight: 500;
                color: #475669;
                &:hover {
                    color: #0070c9;
                    cursor: pointer;
                }
            }
        }
        .categories-bottom {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }
    .home-recipes {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        // height: 1680px;
        margin-bottom: 160px;
        .recipes-top {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            h1 {
                font-size: 48px;
                font-weight: 700;
                color: #475669;
            }
            span {
                font-size: 18px;
                font-weight: 400;
                color: #475669;
                line-height: 1.5;
                margin-top: 20px;
            }
        }
        .recipes-bottom {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 40px;
            align-content: space-between;
        }
    }
}
</style>
