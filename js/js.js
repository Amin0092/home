let products = [
    {
        name: 'молоко',
        type: 'milk',
    },
    {
        name: 'лимон',
        type: 'fruits',
    },
    {
        name: 'Кефир',
        type: 'milk',
    },
    {
        name: 'Помидоры',
        type: 'fruits',
    },
    {
        name: 'Огурцы',
        type: 'fruits',
    },
    {
        name: 'Сметана',
        type: 'milk',
    },
    {
        name: 'яблоко',
        type: 'fruits',
    },
    {
        name: 'йогурт',
        type: 'milk',
    },
    {
        name: 'Говядина',
        type: 'meat',
    },
    {
        name: 'Курятина',
        type: 'meat',
    },
    {
        name: 'Баранина',
        type: 'meat',
    },
]

let categories = [
    {
        count: 0,
        type: 'milk',
    },
    {
        count: 0,
        type: 'fruits',
    },
    {
        count: 0,
        type: 'meat',
    },
]

for(let count of categories){
    for(let item of products) {
        if(item.type.toLowerCase() === count.type.toLowerCase()) {
            count.count++
        } 
    }
}

for(let obj of categories){
    for(let item of products){
        if(obj.type.toLowerCase() === item.type.toLowerCase()){
            item.count = obj.count
        }
    }
}

console.log(categories);
console.log(products);