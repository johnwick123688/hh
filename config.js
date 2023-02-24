// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Gửi Hiền",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "Có Đôi Lời Chúc Muốn Gửi Tới H",  // 同上...
        "Hy Vọng Sang Năm Mới Tuổi Mới",
        "Bản Thân Phải Biết Mạnh Mẽ Và Kiên Cường Hơn",
        "Làm Tốt Hơn Những Cái Đã Làm Được Ở Hiện Tại ",
        "Mong rằng 1 ngày lượm được cọc tiền",
        "1 Tuần Lượm Được Túi Tiền",
        "1 Tháng Lượm Được Vali Tiền",
        "Cả Năm Ôm Tiền Mà ngủ",
        "Và Câu Cuối",
        "Chúc Hiền Sinh Nhật Vui Vẻ <3",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "Có Đôi Lời Chúc Muốn Gửi Tới H": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Bật Đèn Nào",
        play: "Lên Nhạc",
        bannar_coming: "Trang Trí Nào",
        balloons_flying: "Bấm Vào Đây Nè H",
        cake_fadein: "Lên Bánh Kem Nào Tiểu Nhị",
        light_candle: "Lên Đèn Lun Đê",
        wish_message: "Happy Birthday Hiền",
        story: "A MESSAGE FOR YOU",
    }
};
