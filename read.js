$(function(){
    var url = window.location.toString();
    var str = "";
    if (url.indexOf("?") != -1) {
	       var ary=url.split("?")[1].split("&");
	        for (var i in ary){
		        str += ary[i].split("=")[1] + "\n"; 	//參數值
	        }
    }
    var urls = decodeURIComponent(atob(str));
    console.log(urls);
    read_udn()
    function read_udn() {
        $.ajax({ //聯合新聞網
            url:urls,
            type: 'GET',
            dataType: 'html',
            timeout: 10000,
            error: function(data){
                console.log('讀取錯誤');
            },
            success: function(data){
                var news1 = data.split("<!-- /#story_bady_info -->",2)[1];
                var news10 = news1.split("<!-- /#story_body_content -->",2)[0];
                for (var i = 0; i < 10; i++) {
                    news10 =  news10.replace("<a href=\"####\" class=\"photo_pop_icon\">分享</a>","");
                    news10 =  news10.replace("<div class=\"photo_pop\"> <ul> <li class=\"facebook\"><a title=\"facebook\" href=\"#\">facebook</a></li> </ul> </div>","");
                }
                var title = data.split("<title>",2)[1].split("</title>",2)[0];
                var date = data.split("<div class=\"story_bady_info_author\">",2)[1].split("<ul><li class=\"like\">",2)[0];
                $("#index_body").append("<h1 class=\"uk-heading-line uk-text-center\"><span>" + title + "</span></h1>");
                $("#index_body").append("<p class=\"uk-article-meta\">" + date + "</p>");
                $("#index_body").append("<div class=\"uk-container\">" + news10 + "<div>");
            }
        });
    }
});
