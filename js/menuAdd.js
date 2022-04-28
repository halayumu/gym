new Vue({
    el: "#app",

    //----[html情報]----//
    data: {
        heading: "曜日指定",
        selected: '',
        text: '追加',
        options: [
            { id: 1, day: '日' },
            { id: 2, day: '月' },
            { id: 3, day: '火' },
            { id: 4, day: '水' },
            { id: 5, day: '木' },
            { id: 6, day: '金' },
            { id: 7, day: '土' },
        ]
    }
})