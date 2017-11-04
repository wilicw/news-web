$(function(){
    load_cna();
    function load_cna() {
        $.ajax({ //中央社
            url:'http://feeds.feedburner.com/cnaFirstNews?format=xml',
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
                    var read_url="read.html?src="+btoa(encodeURIComponent(news_url));
                    console.log(news_title);
                });
            }
        });
    }
});
