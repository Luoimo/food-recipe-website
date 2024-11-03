<template>
    <div class="category-card">
        <div class="category-card__image">
            <img :src="categoryInfo.image" alt="Category Image">
        </div>
        <div class="category-card__title">
            <h2>{{ categoryInfo.name }}</h2>
        </div>
    </div>
</template>
<script setup>
    import { ref,reactive,defineProps } from 'vue';
    const props = defineProps({
        categoryInfo: {
            type: Object,
            required: true
        }
    });
</script>
<style lang="scss" scoped>
.category-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    height: 200px;
    width: 180px;
    border-radius: 10px;
    background-color: #f5f5f5;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
    img{
        border-radius: 20px;
        margin-bottom: 10px;
    }
}
</style>