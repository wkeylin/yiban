$(".nav ul li").click(function () {
    var index = $(this).attr("index");
    $.getJSON("../data.json", function (data) {
        console.log(data.data[0].content);
        var tpl='<div class="content-head"><img src="images/drawable-hdpi/yiban (6).png" alt=""></div>\
        <div class="content-item">\
          <h4>工作内容</h4>\
          <p>'+data.data[index].content+'</p>\
        </div>\
        <div class="content-item">\
          <h4>纳新要求</h4>\
          <p>'+data.data[index].require+'</p>\
        </div>\
        <div class="content-item">\
          <h4>其他</h4>\
          <p>'+data.data[index].rest+'\
          </p>\
          <img src="images/yiban.png" alt="">\
        </div>';
        $(".container").empty().append(tpl);
    })
});