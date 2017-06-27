
$(function(){
    var conf_colors = "uk-card uk-card-default uk-card-hover uk-card-body";
    load_udn();
    function load_udn() {
        $.ajax({ //聯合新聞網
            url:'https://udn.com/rssfeed/latest?ch=news',
            type: 'GET',
            dataType: 'xml',
            timeout: 10000,
            error: function(xml){
                alert('讀取錯誤，請檢察網路狀態或重新開啟');
                window.location.reload(".");
            },
            success: function(xml){
                $(xml).find("item").each(function(i){
                    var allnews=$(xml).find("item").length;//xml的總筆數
    		        var news_title=$(this).children("title").text(); //取得子節點中的資料
                    var news_url=$(this).children("link").text();
                    var news_time=$(this).children("pubDate").text();
    		        var news_description=$(this).children("description").text();
                    var read_url="readudn.html?src="+btoa(encodeURIComponent(news_url));
                    $("#index_body").append("<div class=\"panel panel-default\"><div class=\"panel-body\"><div class=\"media\"><div class=\"media-body\"><a class=\"media-left\" href=\"" + read_url + "\"><h1 class=\"media-heading\">" + news_title + "</h1></a><small>聯合新聞網<time datetime=\"" + news_time + "\">" + news_time + "</time></small><p class=\"lead\">" + news_description + "</p><a href=\"" + read_url + "\"><button type=\"button\" class=\"btn btn-primary\">閱讀更多...</button></a>   </div></div></div></div>");
                });
            }
        });
    }

    function load_apple() {
        $.ajax({ //蘋果日報
            url:'http://www.appledaily.com.tw/rss/newcreate/kind/rnews/type/new',
            type: 'GET',
            dataType: 'xml',
            timeout: 10000,
            error: function(xml){
                alert('讀取錯誤，請檢察網路狀態或重新開啟');
            },
            success: function(xml){
                $(xml).find("item").each(function(i){
                    var allnews=$(xml).find("item").length;//xml的總筆數
    		        var news_title=$(this).children("title").text(); //取得子節點中的資料
                    var news_url=$(this).children("link").text();
    		        var news_description=$(this).children("description").text();

                    $("#index_body").append("<div class=\"" + conf_colors + "\"><article class=\"uk-article\"><h1 class=\"uk-article-title\"><a class=\"uk-link-reset\" href=\"" + news_url + "\">" + news_title + "</a></h1><p class=\"uk-article-meta\">蘋果日報</p><div class=\"uk-grid-small uk-child-width-auto\" uk-grid><div><a class=\"uk-button uk-button-text\" href=\"" + news_url + "\">閱讀更多...</a></div></div></article></div>");
                });
            }
        });
    }
});
