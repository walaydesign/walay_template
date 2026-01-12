$(".product-num button").click(function () {
    let num = parseInt(
      $(this).parents(".product-num").find(".product-num_val").text()
    );
    if ($(this).hasClass("btn-minus")) {
        if (num <= 0) {
            num = 0;
        } else {
            num--;
        }
    } else if ($(this).hasClass("btn-plus")) {
        num++;
    }
    $(this).parents(".product-num").find(".product-num_val").text(num);
});