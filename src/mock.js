// src/mock.js
import Mock from 'mockjs';

const generateMenuData = (count) => {
    return Mock.mock({
        [`menu|${count}`]: [{  // 根据 count 动态生成菜单项
            'name': '@title(10, 30)',
            'image': 'https://via.placeholder.com/300',
            'time': '@integer(10, 60) min',
            'category|1': ['Breakfast', 'Lunch', 'Dinner', 'Snack'],
        }]
    }).menu;
};

// 拦截请求，并根据参数返回数据
Mock.mock(/\/home\/getRecipesCardList\/(\d+)/, 'get', (options) => {
    // 从请求中获取 count 参数
    const count = parseInt(options.url.match(/\/home\/getRecipesCardList\/(\d+)/)[1]);
    const data = generateMenuData(count);
    
    return {
        code: 200,
        data: data,
    };
});
