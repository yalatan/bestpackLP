(function ($) {
    $(document).ready(function () {
        /* Панель навигации */
        function lpHeader() {
            if ($(window).scrollTop() == 0) { // Если находимся в начале страницы
                $('header').addClass('top'); // Добавляет класс top для панели
            } else { // Иначе
                $('header.top').removeClass('top'); // Удаляет его
            }
        };

        let heightHeader = $("header").outerHeight();
        $("#slideshow").css("margin-top", heightHeader+9 + "px");
       
          if ($(window).outerWidth()<=952) {
            $("header ul li").css("display", "block");
            $("header .nav").attr('id', 'menu').addClass("mfp-hide  menu");
            $(".nav ul li").on('click', function(e) {
                e.preventDefault();
                $.magnificPopup.close();
            });

                let heightHeader = $("header").outerHeight();
            
                $("#slideshow").css("margin-top", heightHeader + "px");
                  $("#slideshow .lp-content").height = $("#slideshow").outerHeight();
                
                $(".owl-carousel .owl-nav button.owl-prev").css("top", 25 + "vw");
                $(".owl-carousel .owl-nav button.owl-next").css("top", 25 + "vw");
                $("#slideshow").css("height", 500 - (500-$(window).outerWidth()/2) + "px");
               
              /*  let q = ( $("#slideshow").outerHeight()-60) + "px";
                
                $(".owl-dots").css("top", q);*/
               
                }
        
          $(window).on('resize', function(){
           

            var win = $(this); //this = window
            let heightHeader = $("header").outerHeight();
            
          $("#slideshow").css("margin-top", heightHeader + "px");
            $("#slideshow .lp-content").height = $("#slideshow").outerHeight();
            
            if (win.outerWidth()<=952) {
                $(".owl-carousel .owl-nav button.owl-prev").css("top", 25 + "vw");
                $(".owl-carousel .owl-nav button.owl-next").css("top", 25 + "vw");
                $("#slideshow").css("height", 500 - (500-$(window).outerWidth()/2) + "px");
                $("header ul li").css("display", "block");
                $("header .nav").attr('id', 'menu').addClass("mfp-hide  menu");
               /* let q = ( $("#slideshow").outerHeight()-60) + "px";
                
                $(".owl-dots").css("top", q);*/
                $(".nav ul li").on('click', function(e) {
                    e.preventDefault();
                    $.magnificPopup.close();
                }); 

               
                
                }else if($(window).outerWidth()>952){
                    $(".owl-carousel .owl-nav button.owl-prev").css("top", 50 + "%");
                    $(".owl-carousel .owl-nav button.owl-next").css("top", 50 + "%");
                    $("#slideshow").css("height", 500 + "px");
    
    $("header ul li").css("display", "inline-block");
    $("header .nav").removeAttr('id').removeClass("mfp-hide  menu");
};
      }); 

        // Вызываем эту функцию
        lpHeader(); // Единожды при загрузке страницы
        $(window).on('load scroll', lpHeader); // И каждый раз при скролле

        /* Плавный скролл при клике на ссылку в меню */
        // Помещаем в переменную ссылку на меню
        var lpNav = $('header ul');
        // При клике на ссылку в меню
        lpNav.find('li a').on('click', function (e) {
            // Определяем элемент на странице, на который ссылается ссылка по ID
            var linkTrgt = $($(this).attr('href'));
            if (linkTrgt.length > 0) { // Если такой элемент присутствует
                e.preventDefault(); // Отменяем переход по умолчанию
                var offset = linkTrgt.offset().top; // Определяем отступ целевого элемента от начала документа
                
                $('body, html').animate({
                    scrollTop: offset - 166
                }, 1000); // Плавно скролим документ к этому месту
            }
        });

        /* Отслеживание активного экрана */
        // Описываем функцию, которая вычисляет активный экран
        function lpSetNavActive() {
            // В этой переменной в конце each будет ID активного экрана
            var curItem = '';
            // Чтобы он туда попал, перебираем все экраны
            $('section').each(function () {
                // И если положение экрана от начала страницы меньше текущего скролла
                if ($(window).scrollTop() > $(this).offset().top - 200) {
                    curItem = $(this).attr('id'); // В переменную вносим ID этого экрана
                }
            });
            // Далее, если href ссылки внутри активного пункта меню не совпадает с ID найденного нами активного экрана
            // Либо активные элементы отсутствуют в меню
            if (lpNav.find('li.active a').attr('href') != '#' + curItem || lpNav.find('li.active').length == 0) {
                // Удаляем класс у текущего активного элемента
                lpNav.find('li.active').removeClass('active');
                // И добавляем класс active пункту, внутри которого лежит ссылка, у которой href совпал с ID активного экрана 
                lpNav.find('li a[href="#' + curItem + '"]').parent().addClass('active');
            }
        }
        // Вызываем эту функцию
        lpSetNavActive(); // Единожды при загрузке страницы
        $(window).on('load scroll', lpSetNavActive); // И каждый раз при скролле

        /* Слайдшоу */
        
        $('.lp-slider1').owlCarousel({
            items: 1,
            loop:true,
    
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
            nav: true,
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>']
        });

       

        $('.slider2').owlCarousel({
            items:3,
            nav: true,
            loop: true,
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                991:{
                    items:3
                }
            }
        });

        /* Табулятор */

        // Для каждого табулятора на странице
        $('.lp-tabs').each(function () {
            // Помещаем корневой div в переменную tabs 
            var tabs = $(this),
                tabsTitlesNames = []; // А также объявляем массив, в котором будем хранить имена вкладок
            // Сохраняем все имена вкладок в массив
            tabs.find('div[data-tab-title]').each(function () {
                tabsTitlesNames.push($(this).attr('data-tab-title'));
            }).addClass('lp-tab');
            // Между корневым div и его содержимым добавляем div с классом "lp-tabs-content"
            tabs.wrapInner('<div class="lp-tabs-content"></div>');
            // В начало корневого div добавляем div с классом "lp-tabs-titles" и списком внутри
            tabs.prepend('<div class="lp-tabs-titles"><ul></ul></div>');
            // Помещаем в переменные:
            var tabsTitles = tabs.find('.lp-tabs-titles'), // Div c заголовками вкладок
                tabsContent = tabs.find('.lp-tabs-content'), // Div с содержимым вкладок
                tabsContentTabs = tabsContent.find('.lp-tab'); // Набор вкладок
            // Добавляем заголовки вкладок
            tabsTitlesNames.forEach(function (value) {
                tabsTitles.find('ul').append('<li>' + value + '</li>');
            });
            // Помещаем в переменную набор заголовков вкладок
            var tabsTitlesItems = tabsTitles.find('ul li');
            // Добавляем класс "active" первому заголовку
            tabsTitlesItems.eq(0).addClass('active');
            // Добавляем класс "active" первой вкладке и отображаем ее
            tabsContentTabs.eq(0).addClass('active').show();
            // Устанавливаем высоту div с содержимым вкладок равной высоте первой вкладки
            tabsContent.height(tabsContent.find('.active').outerHeight());
            // По клику на заголовке вкладки
            tabsTitlesItems.on('click', function () {
                // Проверяем, не находится ли табулятор в переходном состоянии
                if (!tabs.hasClass('changing')) {
                    // Если нет, то добавляем класс "changing", обозначающий переходное состояние
                    tabs.addClass('changing');
                    // Убираем класс "active" у активного заголовка
                    tabsTitlesItems.removeClass('active');
                    // Добавляем класс "active" заголовку, по которому кликнули
                    $(this).addClass('active');
                    // Помещаем в переменные:
                    var curTab = tabsContent.find('.active'), // Активную вкладку
                        nextTab = tabsContentTabs.eq($(this).index()); // Следующую вкладку
                    // Помещаем в переменную текущую высоту контента
                    var curHeight = curTab.outerHeight();
                    // Отображаем следующую вкладку
                    nextTab.show();
                    // Помещаем в переменную высоту контента следующей вкладки
                    var nextHeight = nextTab.outerHeight();
                    // Прячем следующую вкладку, пока никто ее не увидел
                    nextTab.hide();
                    // Если высота контента следующей вкладки больше
                    if (curHeight < nextHeight) {
                        // То плавно увеличиваем высоту блока с контентом до нужной высоты
                        tabsContent.animate({
                            height: nextHeight
                        }, 500);
                    }
                    // И параллельно прячем текщую вкладку
                    curTab.fadeOut(500, function () {
                        // По окончании анимации
                        // Если высота контента следующей вкладки меньше
                        if (curHeight > nextHeight) {
                            // То плавно уменьшаем высоту блока с контентом до нужной высоты
                            tabsContent.animate({
                                height: nextHeight
                            }, 500);
                        }
                        // И параллельно отображаем следующую вкладку
                        nextTab.fadeIn(500, function () {
                            // По окончании анимации
                            // Удаляем класс "active" у текущей (уже прошлой) вкладки
                            curTab.removeClass('active');
                            // Добавляем класс "active" следующей (уже текущей) вкладке
                            nextTab.addClass('active');
                            // Выводим табулятор из переходного состояния
                            tabs.removeClass('changing');
                        });
                    });

                }
            });
            // При изменении размера окна
            $(window).on('load resize', function () {
                // Устанавливаем высоту div с содержимым вкладок равной высоте активной вкладки
                tabsContent.height(tabsContent.find('.active').outerHeight());
            });
        });

        /* Всплывающие окна */

        $('.lp-mfp-inline').magnificPopup({
            type: 'inline'
        });

        $('.lp-gallery').each(function () {
            $(this).magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });

        /* Обратная связь */

        $('#lp-fb1').wiFeedBack({
            fbScript: 'blocks/wi-feedback.php',
            fbLink: '.lp-fb1-link',
            fbColor: 'rgba(65, 107, 87, 0.75);'
        });
/*maps*/
        $.fn.lpMapInit = function () {

            var lpMapOptions1 = {
                center: [53.887751, 27.582681],
                zoom: 16,
                controls: ['fullscreenControl', 'zoomControl']
            };
            var lpMapOptions2 = {
                center: [53.649669, 23.794629],
                zoom: 16,
                controls: ['fullscreenControl', 'zoomControl']
            };
            var lpMapOptions3 = {
                center: [53.941607, 30.327663],
                zoom: 16,
                controls: ['fullscreenControl', 'zoomControl']
            };
        
            if (window.innerWidth < 768) {
                lpMapOptions1.behaviors = ['multiTouch'];
                lpMapOptions2.behaviors = ['multiTouch'];
                lpMapOptions3.behaviors = ['multiTouch'];
            } else {
                lpMapOptions1.behaviors = ['drag'];
                lpMapOptions2.behaviors = ['drag'];
                lpMapOptions3.behaviors = ['drag'];
            }
        
            var lpMap1 = new ymaps.Map('lp-map1', lpMapOptions1);
            var lpMap2 = new ymaps.Map('lp-map2', lpMapOptions2);
            var lpMap3 = new ymaps.Map('lp-map3', lpMapOptions3);

            var lpPlacemark1 = new ymaps.Placemark(lpMapOptions1.center, {
                hintContent: 'BestPack',
                balloonContentHeader: 'BestPack',
                balloonContentBody: 'Производство и поставки: скотч, стрейч, малярная лента',
                balloonContentFooter: 'Минск, пр-т Партизанский,1'
            });
            var lpPlacemark2 = new ymaps.Placemark(lpMapOptions2.center, {
                hintContent: 'BestPack',
                balloonContentHeader: 'BestPack',
                balloonContentBody: 'Производство и поставки: скотч, стрейч, малярная лента',
                balloonContentFooter: 'Гродно, ст.Лососно,10'
            });
            var lpPlacemark3 = new ymaps.Placemark(lpMapOptions3.center, {
                hintContent: 'BestPack',
                balloonContentHeader: 'BestPack',
                balloonContentBody: 'Производство и поставки: скотч, стрейч, малярная лента',
                balloonContentFooter: 'Могилев, ул.Ушакова,11'
            });
        
            lpMap1.geoObjects.add(lpPlacemark1);
            lpMap2.geoObjects.add(lpPlacemark2);
            lpMap3.geoObjects.add(lpPlacemark3);
        };
       
      




    });
})(jQuery);
