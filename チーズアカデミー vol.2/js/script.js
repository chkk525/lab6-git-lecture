





//---------------------------//
// 右下ボタンでTOPに戻る
//---------------------------//

//隠しておく
$(function(){

    $('#footer_btn_wrapper').hide();

        //一画面スクロールしたらボタン表示、戻ったら非表示
        $(window).scroll(function(){
            if ($(this).scrollTop() > $(window).outerHeight()){
                $('#footer_btn_wrapper').fadeIn();
            } else {
                $('#footer_btn_wrapper').fadeOut();
            }
        }
    )
})


const doFunc = function(){
    $('html, body').animate({scrollTop:0}, 1000);
        // {}は複数のデータの塊を意味することが多い

}

$('.back_btn').on('click', doFunc);

//---------------------------//
// navから飛ぶ
//---------------------------//

const pageScroll = function(){

    const href = $(this).attr("href");
    const aboutFromTop = $(href).offset().top - 62;
    $('html, body').animate({scrollTop:aboutFromTop}, 1000);

}

$('.li').on("click", pageScroll);

//---------------------------//
// gnavi用データ作成
//---------------------------//

let gval = 0;

$(function () {
    $('#gallery').each(function(){

        let $container = $(this);

        $container.masonry({
            columnWidth: 230,
            gutter: 10,
            itemSelector: '.gallery-item'
        });

        // function showResult( result ) {
        //     for ( let i in result.rest ) {
        //       $("#table").append("<tr><td>" + result.rest[ i ].name + "</td><td>" + result.rest[ i ].opentime )
        //     }
        //   }

          $( function () {
            let url = "https://api.gnavi.co.jp/RestSearchAPI/20150630/?callback=?"
            let params = {
              keyid: "a7dd2c5aefce3f028e22d0bfb2365383",
              format: "json",
              name: "",
            //   latitude: "",
            //   longitude: 135.495965,
            //   range: 3
            }

            $("#submit").on("click", function () {
                params.name = $(".contact-items1").val();
                params.address = $(".contact-items2").val();
                params.hit_per_page = $(".contact-items3").val();
                if ($("#reason1").prop("checked") === true ) {
                    params.lunch = 1;
                } else {
                    params.lunch = 0;
                }
                if ($("#reason2").prop("checked") === true ) {
                    params.buffet = 1;
                } else {
                    params.buffet = 0;
                }
                if ($("#reason3").prop("checked") === true ) {
                    params.with_pet = 1;
                } else {
                    params.with_pet = 0;
                }
                if ($("#reason4").prop("checked") === true ) {
                    params.until_morning = 1;
                } else {
                    params.until_morning = 0;
                }
                // params.buffet = $("#reason2").val();
                // params.with_pet = $("#reason3").val();
                // params.until_morning = $("#reason4").val();
                params.freeword = $(".contact-items5").val();
                params.freeword_condition = 1;

              $.getJSON( url, params, function( data ) {
                console.log(data);
                let elements = [];
                $.each(data.rest, function (i, item){
                    // gval = item.shop_image1;
                    // console.log(gval);
                    // if(item.shop_image1 == null) return;
                    let itemHTML =
                        '<li class="gallery-item is-loading">' +
                        '<a href="' + item.url + '">' +
                        '<img src="' + item.image_url.shop_image1 +
                        '" alt="' + item.name + '">' +
                        '</a>' +
                        '</li>';

                        // console.log(itemHTML);
                    elements.push($(itemHTML).get(0));
                });

                $container.append(elements);

                $container.imagesLoaded(function(){
                    $(elements).removeClass('is-loading');
                    $container.masonry('appended', elements);
                });

              });
            });
        });
    });
});


// function showResult( result ) {
//     for ( let i in result.rest ) {
//       $("#table").append("<tr><td>" + result.rest[ i ].name + "</td><td>" + result.rest[ i ].opentime )
//     }
//   }

//   $( function () {
//     let url = "https://api.gnavi.co.jp/RestSearchAPI/20150630/?callback=?"
//     let params = {
//       keyid: "a7dd2c5aefce3f028e22d0bfb2365383",
//       format: "json",
//       name: "",
//       latitude: 34.702492,
//       longitude: 135.495965,
//       range: 3
//     }

//     $("#submit").on("click", function () {
//     //   params.keyid = $("#key").val()
//       params.name = $(".contact-items1").val()
//       $.getJSON( url, params, function( result ) {
//         showResult( result )
//       })
//     })
//   })

//---------------------------//
// card情報入力
//---------------------------//
// jQuery
$('.active form').card({
    container: $('.card-wrapper')
})

//---------------------------//
// toggle button対応
//---------------------------//

// $('.js-candlestick').candlestick();

//---------------------------//
// fade-in対応
//---------------------------//

$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('scrollin');
            }
        });
    });
});













//---------------------------//
// JSON練習
//---------------------------//

// let obj = [
//     {fname: "Shuichi", lname: "Funaki"},
//     {fname: "Shuichi", lname: "Funaki"},
//     {fname: "Shuichi", lname: "Funaki"},
//     {sex: "male"},
//     {age: "40"}
// ];
// let json = JSON.stringify(obj);
// let obj2 = JSON.parse(json)

// console.log(obj);
// console.log(json);
// console.log(obj2);

// $.getJSON(
//     "https://www.googleapis.com/books/v1/volumes?q=jquery",
//     function(data){
//         console.dir(data);

//     let item = data.items[1];
//     $("#content").html(item.volumeInfo.title);

//     let view = "";
//     for (let i=0; i<data.items.length; i++){
//         let item2 = data.items[i];
//         view += '<ul>';
//         view += '<li>題名:' + item2.volumeInfo.title + '</li>';
//         view += '</ul>';

//         $("#content").html(view);
//     }
// }
// )

