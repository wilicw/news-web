
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
            },
            success: function(xml){
                $(xml).find("item").each(function(i){
                    var allnews=$(xml).find("item").length;//xml的總筆數
    		        var news_title=$(this).children("title").text(); //取得子節點中的資料
                    var news_url=$(this).children("link").text();
                    var news_time=$(this).children("pubDate").text();
    		        var news_description=$(this).children("description").text();
                    var read_url="readudn.html?src="+btoa(encodeURIComponent(news_url));
                    $("#index_body").append("<div class=\"" + conf_colors + "\"><article class=\"uk-article\"><h1 class=\"uk-article-title\"><a class=\"uk-link-reset\" href=\"" + read_url + "\">" + news_title + "</a></h1><p class=\"uk-article-meta\">聯合新聞網</p><p class=\"uk-text-meta uk-margin-remove-top\"><time datetime=\"" + news_time + "\">April 01, 2016</time></p><p class=\"uk-text-lead\">" + news_description + "</p><div class=\"uk-grid-small uk-child-width-auto\" uk-grid><div class=\"uk-card-footer\"><a class=\"uk-button uk-button-text\" href=\"" + read_url + "\">閱讀更多...</a></div></div></article></div>");
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
