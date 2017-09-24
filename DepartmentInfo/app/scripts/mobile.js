$(".nav ul li").click(function () {
    $(".mcontainer").removeClass("animated bounceInDown");
    $(".nav ul li").removeClass("yellow");
   var index = $(this).attr("index");
   $.getJSON("../data.json", function (data) {
    console.log(data.data[index]);
    var tpl='<div class="mcmiddle">\
      <div class="mchead">\
        <img src="images/drawable-hdpi/yiban (6).png" alt="">\
      </div>\
      <h1>工作内容</h1>\
      <p>'+data.data[index].content+'</p>\
      <h1>纳新要求</h1>\
      <p>'+data.data[index].require+'</p>\
      <h1>其他</h1>\
      <p>'+data.data[index].rest+'</p>\
      <img class="pingban_img" src="images/yiban.png" alt="">\
    </div>';
    $(".nav ul li").eq(index).addClass("yellow");
    $(".mcontainer").empty().append(tpl);
    $(".mcontainer").addClass("animated bounceInDown");
}) 
});