// Wow JS

if(document.querySelector('.wow'))
	new WOW().init();

// Wow JS



$(document).ready(function () {

	

	$('.info__click button').click(function () {
		$(this).closest('.block-3__lft').find('.info__click').hide()
		$(this).closest('.block-3__lft').find('.info__thanks').addClass('info__thanks_active')
	})
	$('.fast__inner .count__basket').click(function () {
		$(this).closest('.card__fast').find('.page-single__product').hide()
		$(this).closest('.card__fast').find('.fast__added').show()
	})


	$('.button__item_fast').click(function (e) {
		e.preventDefault()
		$(this).closest('.card').addClass('card_fast')
		$(this).closest('.slick-list').addClass('slick-fix')
		$(this).closest('.slick-track').addClass('slick-fix')
		$(this).closest('.card').find('.card__fast').addClass('card__fast_active')
		$(this).closest('.card').find('.page-single__product').show()
		$(this).closest('.card').find('.fast__added').hide()
	})
	$('.card .fast__bgd, .fast__close').click(function (e) {
		e.preventDefault()
		$(this).closest('.card').removeClass('card_fast')
		$(this).closest('.slick-list').removeClass('slick-fix')
		$(this).closest('.slick-track').removeClass('slick-fix')
		$(this).closest('.card').find('.card__fast').removeClass('card__fast_active')
	})







	// HEADER


	$('.header__popup .select-all').click(function () {
		$(this).closest('.header__popup').find('input[type="checkbox"]').prop("checked", true)
	})
	$('.header__popup .clear-all').click(function () {
		$(this).closest('.header__popup').find('input[type="checkbox"]').prop("checked", false)
	})



	$('.buttons__item .buttons__button').click(function () {
		$(this).parent().toggleClass('buttons__item_active')
		$(this).parent().find('.header__popup').slideToggle(300)
	})

	$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".buttons__item_active"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('.buttons__item').removeClass('buttons__item_active')
				$('.header__popup').slideUp(300)
    }
  });

	// HEADER









	// POPUPS

	let numCount1 = 59
	let interVal = setInterval(function () {
		numCount1--;
		$('.counting').text(numCount1+' сек')
		if( numCount1 < 1 ){
			// $(this).closest('form').find('.btn-green').removeClass('disabled')
			clearInterval(interVal);
		}
	}, 1000)




	$('.input_pass svg').click(function () {

		if( $(this).closest('.input').find('input').attr('type') == 'password' ){
			$(this).closest('.input').find('input').attr('type', 'text')
		}
		else{
			$(this).closest('.input').find('input').attr('type', 'password')
		}

	})








	$('.popup form button[type="submit"]').click(function () {


		let inp1 = $(this).closest('form').find('input[type="password"]').eq(0).val()
		let inp2 = $(this).closest('form').find('input[type="password"]').eq(1).val()

		$(this).closest('form').find('input:required').removeClass('input-fail')
		$(this).closest('form').find('.p-error').removeClass('p-error_active')

		$(this).closest('form').find('input:required').each(function () {
			
			if( $(this).val() == "" ){
				$(this).parent().parent().find('.p-error').addClass('p-error_active')
				$(this).addClass('input-fail')
			}else{
				$(this).parent().parent().find('.p-error').removeClass('p-error_active')
				$(this).removeClass('input-fail')
			}

		})

		$(this).parent().parent().find('.p-error-pass').removeClass('p-error-pass_active')
		$(this).parent().parent().find('input[type="password"]').removeClass('p-error-pass-inp')

		if( inp1 != inp2 ){
			$(this).parent().parent().find('.p-error-pass').addClass('p-error-pass_active')
			$(this).parent().parent().find('input[type="password"]').addClass('p-error-pass-inp')
		}



	})






	$('button').click(function () {
		
		if( $(this).data('popup') ){
			let NameClass = $(this).data('popup')

			$('.popup').removeClass('popup_active')
			$('.popup_'+NameClass).addClass('popup_active')
		}

	})

	$('.popup__bgd, .popup__close').click(function () {
		$('.popup').removeClass('popup_active')
	})

	// POPUPS













	// GUARANTEES SWITCHER

	$('.page-guarantees__switcher li').click(function () {
		$('.page-guarantees__switcher li').removeClass('li_active')
		$(this).addClass('li_active')

		$('.page-guarantees__block').hide()
		$('.page-guarantees__block').eq($(this).index()).show()
	})

	// GUARANTEES SWITCHER




	// AKKORDION

	$('.akkordion-head').click(function () {
		$(this).closest('.akkordion').find('.akkordion-body').slideToggle(300)
		$(this).closest('.akkordion').toggleClass('akkordion_open')
	})

	$('.akkordion').each(function () {
		$(this).find('.akkordion-body').hide()
		if( $(this).hasClass('akkordion_open') ){
			$(this).find('.akkordion-body').show()
		}

	})

	// AKKORDION





	// PROFILE

	$('.input__eye').click(function () {
		$(this).toggleClass('inp-txt')

		if( $(this).hasClass('inp-txt') )
			$(this).closest('.input').find('input').attr('type', 'text')
		else
			$(this).closest('.input').find('input').attr('type', 'password')
	})

	// PROFILE









	// BASKET

	$('.page-basket__item .item__add').click(function (e) {
		e.preventDefault();

		$(this).closest('.page-basket__item').toggleClass('page-basket__item_active')
	})

	$('.page-basket__slider .slider__close').click(function (e) {
		$(this).closest('.page-basket__item').removeClass('page-basket__item_active')
	})



	$('.point__ckeckboxes input').change(function () {
		let numBlock = $(this).data('num')

		$('.page-basket__point_else').each(function () {

			if( $(this).data('choice') == numBlock ){
				$('.page-basket__point_else').addClass('page-basket__point_hide')
				$('.page-basket__point_else').removeClass('page-basket__point_show')
				$(this).addClass('page-basket__point_show')
				$(this).removeClass('page-basket__point_hide')
			}
			
		})

	})

	// BASKET








$(document).scroll(function (e) {
	

	$('.page-single__tabs a').each(function () {
		
		var idHref = $(this).attr('href');

		if( ($(window).scrollTop() + 230) > $(idHref).offset().top ){
			$('.page-single__tabs a').removeClass('tabs__item_active')
			$(this).addClass('tabs__item_active')
		}

	})
})


$('.page-single__tabs a').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
    	    scrollTop: $(dest).offset().top - 200 // прокручиваем страницу к требуемому элементу
        }, 500 );
    }
    return false;
});


	





	// SINGLE


	$('.count__input').each(function () {

		$(this).find('.input__minus').click(function () {
			var valueToInput = $(this).closest('.count__input').find('.input__field input').val();

			let valInp = $(this).closest('.count__input').find('.input__field input').val()

			if( valueToInput > 1 )
				valueToInput--;

			$(this).closest('.count__input').find('.input__field input').val(valueToInput)

		})

		$(this).find('.input__plus').click(function () {
			var valueToInput = $(this).closest('.count__input').find('.input__field input').val();

			let valInp = $(this).closest('.count__input').find('.input__field input').val()

			valueToInput++;

			$(this).closest('.count__input').find('.input__field input').val(valueToInput)

		})



	})






	$('.photo__nav').slick({
		asNavFor: '.photo__for',
		slidesToShow: 5,
		swipeToSlide: true,
		vertical: true,
		focusOnSelect: true,
		responsive:[
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 576,
			settings: {
				vertical: false,
				slidesToShow: 3,
			}
		}
		]
	})
	$('.photo__for').slick({
		asNavFor: '.photo__nav',
		slidesToShow: 1,
		arrows: false,
		// swipe: false,
	})

	// SINGLE







	  $(".click__input").mask("+7 (999) 999 - 99 - 99");
	  $("#id-phone-point").mask("+7 (999) 999 - 99 - 99");
	  $("#pr-bl1-tel1").mask("+7 (999) 999 - 99 - 99");
	  $(".popup-phone-input").mask("+7 (999) 999 - 99 - 99");

		


    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $('.range-ot').val(ui.values[ 0 ]+' ₽')
        $('.range-do').val(ui.values[ 1 ]+' ₽')
      }
    });
    $('.range-ot').val($( "#slider-range" ).slider( "values", 0 )+' ₽')
    $('.range-do').val($( "#slider-range" ).slider( "values", 1 )+' ₽')




	// CATALOG TAGS

	$('.button__tabs .tab__item').click(function () {
		
		$('.button__tabs .tab__item').removeClass('tab__item_active')
		$(this).addClass('tab__item_active')

	})

	// CATALOG TAGS









	// SELECT


	$('.button__tabs .tab__item').click(function () {
		let dataThis = $(this).data('tab')

		$('.button__tabs .tab__item').removeClass('tab__item_active')
		$(this).addClass('tab__item_active')

		$('.cards__block').removeClass('cards__block_line')
		$('.cards__block').addClass('cards__block_'+dataThis)
	})





	$('.select .select__head').click(function () {
		$(this).closest('.select').toggleClass('select_active')
		$(this).closest('.select').find('.select__body').slideToggle(300)
	})

	$('.select__item').click(function () {

		$(this).closest('.select').find('.select__item').removeClass('select__item_active')
		$(this).addClass('select__item_active')

		$(this).closest('.select').find('.select__head').html($(this).html())

		$(this).closest('.select').removeClass('select_active')
		$(this).closest('.select').find('.select__body').slideUp(300)

		let chData = $(this).data('change')

		$(this).closest('.select').parent().find('.inpHiddenVal').hide()
		$(this).closest('.select').parent().find('.inpHiddenVal-'+chData).show()
	})

	  $(document).mouseup(function (e){ // событие клика по веб-документу
	    var div = $(".select_active"); // тут указываем ID элемента
	    if (!div.is(e.target) // если клик был не по нашему блоку
	        && div.has(e.target).length === 0) { // и не по его дочерним элементам
	        $('.select').removeClass('select_active')
			$('.select').find('.select__body').slideUp(300)
	    }
	  });

	// SELECT







	// CATALOG2


	$('.button__switcher-type input').change(function () {

		if( $(this).is(':checked') ){
			$('.cards__block').addClass('cards__block_collections')
		}else{
			$('.cards__block').removeClass('cards__block_collections')
		}

	})





	$('.card').each(function () {
		$(this).find('.card__nav').slick({
			slidesToShow: 3,
			asNavFor: $(this).closest('.card').find('.card__photo'),
			focusOnSelect: true,
			speed: 300,
			arrows: false
		})
		$(this).find('.card-line__bottom__nav').slick({
			slidesToShow: 3,
			asNavFor: $(this).closest('.card').find('.card__photo'),
			focusOnSelect: true,
			speed: 300,
			arrows: false
		})
		$(this).find('.card__photo').slick({
			slidesToShow: 1,
			asNavFor: $(this).closest('.card').find('.card__nav'),
			fade: true,
			swipe: false,
			speed: 200,
			arrows: false
		})


	})





	// $('.page-catalog-inner__slider-content .slider__content, .page-single__slider .slider__content').slick({
	$('.block-slider-three .slider__content').slick({
		slidesToShow: 3,
		infinite: false,
		responsive:[
			{
				breakpoint: 1360,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 700,
				settings: 'unslick'
			}
		]
	})




	$('.filter__block.filter__block_active').find('.filter__content').show()

	$('.filter__block .filter__top').click(function () {
		
		$(this).closest('.filter__block').toggleClass('filter__block_active')
		$(this).closest('.filter__block').find('.filter__content').slideToggle(300)

	})


	$('.filter__inner-block.filter__inner-block_active').find('.filter__inner-block__content').show()

	$('.filter__inner-block__top').click(function () {
		$(this).closest('.filter__inner-block').toggleClass('filter__inner-block_active')
		$(this).closest('.filter__inner-block').find('.filter__inner-block__content').slideToggle(300)
	})




	$('.page-catalog-inner__slider-top, .page-single__slider-top').slick({
		slidesToShow: 4,
		responsive:[
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 700,
				settings: 'unslick'
			}
		]
	})

	// CATALOG2







	// CATALOG1

	$('.page-catalog__item').each(function (w, q) {


		let itemBlock = $(this)
		
		if( $(this).find('li').length > 4 ){

			let countSum = 0;

			$(this).find('li').each(function (count) {
				let all = count - 4

				countSum = all

				if( $(this).index() >= 4 ){
					$(this).hide()
				}
			})

			$(this).find('.item__more').text('+'+(countSum + 1)+' категории')


			///////////////////////////////////////////////////


			$(this).find('.item__more').click(function (e) {
				e.preventDefault();

				if( $(this).hasClass('moreActive') ){

					$(this).parent().find('li').each(function (count) {
						let all = count - 4

						countSum = all

						if( $(this).index() >= 4 ){
							$(this).hide()
						}
					})

					$(this).text('+'+(countSum + 1)+' категории')
					$(this).removeClass('moreActive')

				}else{
					$(this).parent().find('.item__list li').show()
					$(this).text('-'+(countSum + 1)+' категории')
					$(this).addClass('moreActive')
				}


			})



		}else{
			$(this).find('.item__more').hide()
		}




	})

	// CATALOG1









	let countItemsNew = 0

	$('.switch__buttons li').click(function () {

		countItemsNew = 4

		let liIndex = $(this).index()
		
		$('.switch__block .switch__item').removeClass('switch__item_active')
		$('.switch__block .switch__item').eq(liIndex).addClass('switch__item_active')

		$('.switch__buttons li').removeClass('li_active')
		$(this).addClass('li_active')

	})

	$('.block-more-view').each(function () {

		let countItems = $(this).data('more-view')

		countItemsNew = countItems

		$(this).find('.item-more-view').each(function () {
			
			if( countItems <= $(this).index() ){
				$(this).hide()
			}else{
				$(this).show()
			}

		})



		$(this).parent().find('.show-more').click(function () {

			countItemsNew += countItems

			$(this).parent().find('.item-more-view').each(function (e, w) {

				
				if( countItemsNew <= $(this).index() ){
					$(this).hide()
				}
				else{
					$(this).show()
				}


				if( countItemsNew >= e ){
					$(this).closest('.block-more-view').parent().find('.show-more').hide()
				}else{
					$(this).closest('.block-more-view').parent().find('.show-more').show()
				}

			})

		})
	})






	$('.fix-catalog__lft li').click(function (e) {
		e.preventDefault();


		let aIndex = $(this).index()

		$('.fix-catalog__lft li').removeClass('li_active')
		$(this).addClass('li_active')

		$('.fix-catalog__rht .catalog__block').removeClass('catalog__block_active')
		$('.fix-catalog__rht .catalog__block').eq(aIndex).addClass('catalog__block_active')
	})





	$('.header__catalog, .header__catalog-button_mob').click(function () {
		$(this).toggleClass('header__catalog_active')
	})






	$('.header__bottom li').click(function () {

		$(this).toggleClass('li_active')

		$(this).closest('li').find('.categories__fixed').slideToggle(300)
	})

	$(document).mouseup( function(e){ // событие клика по веб-документу
		var div = $( ".header__bottom li.li_active" ); // тут указываем ID элемента
		if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
			$('.header__bottom li').removeClass('li_active')

			$('.header__bottom li').closest('li').find('.categories__fixed').slideUp(300)
		}
	});





	$('.arr__lft').click(function () {
		$(this).parent().parent().find('.slick-prev').click()
		$(this).closest('.block-slider-three').find('.slick-prev').click()
	})
	$('.arr__rht').click(function () {
		$(this).parent().parent().find('.slick-next').click()
		$(this).closest('.block-slider-three').find('.slick-next').click()
	})

	$('.header__slider ul').slick({
		slidesToShow: 9,
		variableWidth: true,
		swipeToSlide: true
	})

	$('.brands__slider .slider__block').slick({
		slidesToShow: 5,
		swipeToSlide: true,
		responsive:[

			{
				breakpoint: 992,
				settings:{
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 576,
				settings: 'unslick'
			}

		]
	})






	$('.list__item .item__inner').click(function () {

		if( $(this).closest('.list__item').hasClass('list__item_active') ){
			$(this).closest('.list__item').removeClass('list__item_active')
		}else{
			$('.list__item_active').removeClass('list__item_active')
			$(this).closest('.list__item').addClass('list__item_active')
		}

	})
	$('.list__item_sub_back').click(function () {

		$('.list__item .item__inner').closest('.list__item').removeClass('list__item_active')

	})
	$('.list__item .item__inner_sub').click(function () {
		
		$(this).closest('.list__item_sub').toggleClass('list__item_sub_active')
		$(this).closest('.list__item_sub').find('.list__sub-menu_2').slideToggle(300)

	})








// COPY TEXT

// $('.page-requisites__item').click(function () {
// 	let textInner = $(this).find('input')

// 	textInner.select();
//   document.execCommand("copy");
//   alert("Copied the text: " + textInner.value);
// })


document.querySelectorAll('.page-requisites__item').forEach((item) => {
	item.onclick = function () {
		let textInner = this.querySelector('input');
		textInner.select();
	  document.execCommand("copy");
	  alert("Текст скопирован");
	}
})


// COPY TEXT









// PAGE DELIVERY

$('.page-delivery__nav a').click(function (e) {
	e.preventDefault();
	$('.page-delivery__nav li').removeClass('li_active')
	$(this).closest('li').addClass('li_active')

	$('.page-delivery__block').hide()
	$('.page-delivery__block').eq($(this).closest('li').index()).show()
})

// PAGE DELIVERY

















	// MEDIA

	if( $(window).width() > 992 ){

		$('.header__slider li').click(function () {
			console.log($(this).offset().left + 6)
			if( ($(this).offset().left + 6) > 800 ){
				$(this).find('.categories__fixed').addClass('categories__fixed_rtl')
			}
		})


		$('.navigation a').on( 'click', function(){ 
	    var el = $(this);
	    var dest = el.attr('href'); // получаем направление
	    if(dest !== undefined && dest !== '') { // проверяем существование
	        $('html').animate({ 
	    	    scrollTop: $(dest).offset().top - 100 // прокручиваем страницу к требуемому элементу
	        }, 500 );
	    }
	    return false;
	});


		$(document).scroll(function (e) {
	

			$('.navigation li').each(function () {
				
				var idHref = $(this).find('a').attr('href');

				if( ($(window).scrollTop() + 130) > $(idHref).offset().top ){
					$('.navigation li').removeClass('li_active')
					$(this).addClass('li_active')
				}

			})

		})




		$('.header__catalog, .header__catalog-button_mob').click(function () {
			$('.header__fix-catalog').slideToggle(300);
		})

		$(document).scroll(function () {
		
			if( $(this).scrollTop() > 100 ){
				$('.header').addClass('header_fixed')
				$('.header__bottom').css('margin-top', $('.header__center').outerHeight()+'px')
			}
			else{
				$('.header').removeClass('header_fixed')
				$('.header__bottom').css('margin-top', '0px')
			}

		})

	}

	if( $(window).width() < 992 ){


		$('.header__slider li').click(function () {
			console.log($(this).offset().left + 6)
			if( ($(this).offset().left + 6) > 400 ){
				$(this).find('.categories__fixed').addClass('categories__fixed_rtl')
			}
		})


		$('.navigation a').on( 'click', function(){ 
		    var el = $(this);
		    var dest = el.attr('href'); // получаем направление
		    if(dest !== undefined && dest !== '') { // проверяем существование
		        $('html').animate({ 
		    	    scrollTop: $(dest).offset().top - 180 // прокручиваем страницу к требуемому элементу
		        }, 500 );
		    }
		    return false;
		});



		$(document).scroll(function (e) {
	
			$('.navigation li').each(function () {
				
				var idHref = $(this).find('a').attr('href');

				if( ($(window).scrollTop() + 220) > $(idHref).offset().top ){
					$('.navigation li').removeClass('li_active')
					$(this).addClass('li_active')
				}

			})

		})











		$('.filter__block').removeClass('filter__block_active')
		$('.filter__block .filter__content').hide()

		$('.filter-fixed__button').click(function () {
			$('.page-catalog-inner__filter').addClass('page-catalog-inner__filter_active')
		})
		$('.filter-fixed__close').click(function () {
			$('.page-catalog-inner__filter').removeClass('page-catalog-inner__filter_active')
		})

		$(document).scroll(function () {

		
			if( $(this).scrollTop() > 100 ){
				$('.header').addClass('header_fixed')
				$('.header__bottom').css('margin-top', $('.header__center').outerHeight()+$('.header__search-mob').outerHeight()+'px')
				$('.filter-fixed').addClass('filter-fixed_fix')
			}
			else{
				$('.filter-fixed').removeClass('filter-fixed_fix')
				$('.header').removeClass('header_fixed')
				$('.header__bottom').css('margin-top', '0px')
			}

		})

		$('.header__catalog, .header__catalog-button_mob').click(function () {
			$('.header-catalog_mob').addClass('header-catalog_mob_active')
		})
		$('.header-catalog__close, .header-catalog__bgd').click(function () {
			$('.header__catalog').removeClass('header__catalog_active')
			$('.header__catalog-button_mob').removeClass('header__catalog_active')
			$('.header-catalog_mob').removeClass('header-catalog_mob_active')
			$('.list__item .item__inner').closest('.list__item').removeClass('list__item_active')
		})

		$('.header__menu-button').click(function () {
			$('.header-menu_mob').addClass('header-menu_mob_active')
		})
		$('.header-menu__close, .header-menu__bgd').click(function () {
			$('.header__menu').removeClass('header__menu_active')
			$('.header-menu_mob').removeClass('header-menu_mob_active')
		})

		$('.header-menu_mob .list__li').click(function () {
			$(this).toggleClass('list__li_active')
			$(this).find('.list__submenu').slideToggle(300)
		})

		let countItemsNew = 0

	$('.switch__buttons li').click(function () {

		countItemsNew = 3

		let liIndex = $(this).index()
		
		$('.switch__block .switch__item').removeClass('switch__item_active')
		$('.switch__block .switch__item').eq(liIndex).addClass('switch__item_active')

		$('.switch__buttons li').removeClass('li_active')
		$(this).addClass('li_active')

	})

	$('.block-more-view').each(function () {

		let countItems = 3

		countItemsNew = countItems

		$(this).find('.item-more-view').each(function () {
			
			if( countItems <= $(this).index() ){
				$(this).hide()
			}else{
				$(this).show()
			}

		})



		$(this).parent().find('.show-more').click(function () {

			countItemsNew += countItems

			$(this).parent().find('.item-more-view').each(function (e, w) {

				
				if( countItemsNew <= $(this).index() ){
					$(this).hide()
				}
				else{
					$(this).show()
				}


				if( countItemsNew >= e ){
					$(this).closest('.block-more-view').parent().find('.show-more').hide()
				}else{
					$(this).closest('.block-more-view').parent().find('.show-more').show()
				}

			})

		})
	})

	}

	if( $(window).width() < 576 ){


		$('.header__slider li').click(function () {
			console.log($(this).offset().left + 6)
			if( ($(this).offset().left + 6) > 0 ){
				$(this).find('.categories__fixed').css('left', '-'+($(this).offset().left - 20)+'px')
			}
		})

		$('.block-more-view').each(function () {

			$(this).find('.item-more-view').show()
		
		})

		$(document).scroll(function () {
		
			if( $(this).scrollTop() > 100 ){
				$('.header').addClass('header_fixed')
				$('.header__bottom').css('margin-top', $('.header__center').outerHeight()+'px')
			}
			else{
				$('.header').removeClass('header_fixed')
				$('.header__bottom').css('margin-top', '0px')
			}

		})

		$('.page-index__banner').slick({
			centerMode: true,
			centerPadding: '12px',
			arrows: false
		})

	}

	if( document.querySelector('.photo__for') ){

		$('.photo__for .photo-zoom.slick-current img').imagezoomsl({ 
			 zoomrange: [1, 1],
			 zoomstart: 1.5,
			 innerzoom: true,
			 magnifierborder: "none"	
		});

		$('.page-single__photo .arr__rht, .page-single__photo .arr__lft, .page-single__photo .nav__item').click(function () {
			$('.tracker').hide()

			setTimeout(function () {
				$('.photo__for .photo-zoom.slick-current img').imagezoomsl({ 
					 zoomrange: [1, 1],
					 zoomstart: 1.5,
					 innerzoom: true,
					 magnifierborder: "none"	
				});		
			}, 500)
		})
	}
})































