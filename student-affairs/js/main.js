$(function() {
    (function() {
        var $son = $("#accordion .panel-default .panel-heading .panel-title a");
        var $parent = $("#accordion .panel-default");
        var $iconfont = $(".iconfont");
        $parent.click(function() {
            if ($son.eq($(this).index()).attr("aria-expanded") == undefined || $son.eq($(this).index()).attr("aria-expanded") == "false") {
                $iconfont.html("&#xe8de;");
                $iconfont.eq($(this).index()).html("&#xe8e2;");
            } else if ($son.eq($(this).index()).attr("aria-expanded") == "true") {
                $iconfont.eq($(this).index()).html("&#xe8de;");
            }
        });
    })();
    (function() {
        var $content_html = $("#accordion .panel-default .collapse .panel-body li");
        var $content= $("#accordion .panel-default .collapse .panel-body li a h4");
        var $TxtValue = $("#TxtValue");
        var $html_content = $("#accordion");
        var $length = $content.length;
        var $List = [];
        var $List2 = [];
        for (var i = 0; i < $length; i++) {
            $List.push($content.eq(i).html());
            $List2.push($content_html.eq(i).html());
        }
        //console.log($List2);
        $TxtValue.on('input propertychange focus', function() {
            var $keyword = $(this).val();
            if ($keyword != '') {
                $html_content.hide();
                var $result = [];
                $result=searchByRegExp($keyword, $List,$List2);
                //console.log($result);
                renderResult($result);
            } else {

                $("#item").remove();
                $html_content.show();
            }
        });

        function renderResult(list) {
            if (!(list instanceof Array)) {
                return;
            }
            var OList=null;
            OList=document.createElement('ol');
            var id=document.createAttribute("id");
            id.nodeValue="item";
            OList.setAttributeNode(id);
            $("#item").remove();
            $TxtValue.after(OList);
            OList.innerHTML = '';
            var len = list.length;
            var item = null;
            for (var i = 0; i < len; i++) {
                item = document.createElement('li');
                item.innerHTML = list[i];
                OList.append(item);
            }
        }

        function searchByRegExp(keyWord, list,list2) {
            if (!(list instanceof Array)) {
                return;
            }
            var len = list.length;
            var arr = [];
            var reg = new RegExp(keyWord);
            for (var i = 0; i < len; i++) {
                //如果字符串中不包含目标字符会返回-1
                if (list[i].match(reg)) {
                    arr.push(list2[i]);
                }
            }
            return arr;
        }
    })();
});
