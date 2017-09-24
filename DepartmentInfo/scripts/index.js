layui.use('layer', function () {
    var layer = layui.layer;

    $('.nav ul li').click(function () {

        layer.open({
            type: 1,
            content: $('.container'),
            area: ['3rem', '3.5rem'],
            resize: false,
            cancel: function(index, layero){
                layer.close(index);
                $('.container').hide();
                return false; 
              }
        });
    });
});
$('.nav ul li').mouseover(function () {
    $(this).addClass('animated pulse');
}).mouseout(function () {
    $(this).removeClass('animated pulse')
});
