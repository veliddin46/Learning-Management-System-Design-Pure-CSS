
//document.cookie = "Talha  = 'Yakışıklı'; expires = Mon, 1 Jan 2100 00:00:00 GMT"
//alert (document.cookie);

$(function() {
    $(document).on("keydown", window, function(a) {
        if (a.which == 123) {
            return false;
        }
    });
});



var lang = $('body').data('lang');
$(window).resize(function(){

	if ($(window).width() <= 577) {  
		$('.sidebox').addClass('sidebox-of');
	}     

});
$('#temalar').click(function (e) { 
	e.preventDefault();
	window.location.href = "../view/settings.html";
});
$('#profilim').click(function (e) { 
	e.preventDefault();
	window.location.href = "../view/profilim.html";
});
// Sistem Dili
$("#langbtngrps b").addClass("flag-icon-"+lang);
$('a#langbtngrps').click(function (e) { 
	e.preventDefault();
	$('#langbtngrps-selbox').toggleClass('selectinbox-on');
	$('#notifybtngrps-selbox').removeClass('selectinbox-on');
	$('#messangebtngrps-selbox').removeClass('selectinbox-on');
	$('#profilebtn-selbox').removeClass('selectinbox-on');
	$('.sidebox').addClass('sidebox-of');
});
$('#langbtngrps-selbox .item').click(function (e) { 
	e.preventDefault();
	let data = $(this).data('langtype');
	alert(data);
});
$('a#notifybtn').click(function (e) { 
	e.preventDefault();
	$('#notifybtngrps-selbox').toggleClass('selectinbox-on');
	$('#langbtngrps-selbox').removeClass('selectinbox-on');
	$('#messangebtngrps-selbox').removeClass('selectinbox-on');
	$('#profilebtn-selbox').removeClass('selectinbox-on');
	$('.sidebox').addClass('sidebox-of');
});
$('a#messangebtn').click(function (e) { 
	e.preventDefault();
	$('#messangebtngrps-selbox').toggleClass('selectinbox-on');
	$('#langbtngrps-selbox').removeClass('selectinbox-on');
	$('#notifybtngrps-selbox').removeClass('selectinbox-on');
	$('#profilebtn-selbox').removeClass('selectinbox-on');
	$('.sidebox').addClass('sidebox-of');
});
$('a#profilebtn').click(function (e) { 
	e.preventDefault();
	$('#profilebtn-selbox').toggleClass('selectinbox-on');
	$('#langbtngrps-selbox').removeClass('selectinbox-on');
	$('#notifybtngrps-selbox').removeClass('selectinbox-on');
	$('#messangebtngrps-selbox').removeClass('selectinbox-on');
	$('.sidebox').addClass('sidebox-of');
});
$('a#menubtn').click(function (e) { 
	e.preventDefault();
	$('.sidebox').toggleClass('sidebox-of');
	$('.has-sub').removeClass('open');
	$('#langbtngrps-selbox').removeClass('selectinbox-on');
	$('#notifybtngrps-selbox').removeClass('selectinbox-on');
	$('#messangebtngrps-selbox').removeClass('selectinbox-on');
	$('#profilebtn-selbox').removeClass('selectinbox-on');
	$('.yuzenbtn-openwndw').removeClass('openwndw-on');
	$('.yuzenbtn-openwndw ul').removeClass('openwndwul-block');
	//$('section.sidebox-of div.menubox #cssmenu ul li a div').hide();
	//if ($(".sidebox").hasClass("sidebox-of")) {
	//	$('section.sidebox-of div.menubox #cssmenu ul li a div').hide();
	//  }
	//else{
	//	$('section.sidebox div.menubox #cssmenu ul li a div').show(); 
	//}
})
//Tema Değiştirme

//fonksiyon olarak oluşturulup. Tema değerleri theme.js içinde funcshion oalrak tema değerleri tutulur
//Renklerdir resimdir.
$('a#themebtnGezintiAdd').click(function (e) { 
	e.preventDefault();
	document.documentElement.style.setProperty('--sideColor', '#c36c00');
	document.documentElement.style.setProperty('--sideColorhover', '#7d4703');
	$('section.sidebox').css("background", "linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url('https://i.pinimg.com/originals/ae/a9/dd/aea9dd461ab920e289a5dfa4b9b7c499.jpg')");
});
$('a#themebtnKediAdd').click(function (e) { 
	e.preventDefault();
	document.documentElement.style.setProperty('--sideColor', '#778ca0');
	document.documentElement.style.setProperty('--sideColorhover', '#505b65');
	$('section.sidebox').css("background", "linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url('https://i.pinimg.com/474x/a7/0d/af/a70dafebb7cd3f2d61d11be3020e4118.jpg')");
});
$('a#themebtnKisAdd').click(function (e) { 
	e.preventDefault();
	document.documentElement.style.setProperty('--sideColor', '#a3a3a3');
	document.documentElement.style.setProperty('--sideColorhover', '#787777');
	$('section.sidebox').css("background", "linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url('https://i.pinimg.com/474x/b5/ea/d1/b5ead101fd0b6790f34f62f549f1128b.jpg')");
});
$('a#themebtnSonbaharAdd').click(function (e) { 
	e.preventDefault();
	document.documentElement.style.setProperty('--sideColor', '#d0b61a');
	document.documentElement.style.setProperty('--sideColorhover', '#9e8b13');
	$('section.sidebox').css("background", "linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url('https://i.pinimg.com/originals/e3/26/96/e32696ea2e3d95c4674dc6e4d18c7968.jpg')");
});
$('a#themebtnDogaAdd').click(function (e) { 
	e.preventDefault();
	document.documentElement.style.setProperty('--sideColor', '#14a86f');
	document.documentElement.style.setProperty('--sideColorhover', '#0e754d');
	$('section.sidebox').css("background", "linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url('https://media.istockphoto.com/vectors/seasoning-icons-seamless-green-vector-pattern-herbs-icon-texture-vector-id1130377443')");
});
$('a#themebtnInternetingokyuzuAdd').click(function (e) { 
	e.preventDefault();
	document.documentElement.style.setProperty('--sideColor', '#149da8');
	document.documentElement.style.setProperty('--sideColorhover', '#117c84');
	$('section.sidebox').css("background", "linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url('https://i.pinimg.com/474x/0d/c8/78/0dc87896f66328a7e00afb0a09e0d5b0.jpg')");
});
$('a#themebtnKaratahtaAdd').click(function (e) { 
	e.preventDefault();
	document.documentElement.style.setProperty('--sideColor', '#260147');
	document.documentElement.style.setProperty('--sideColorhover', '#140124');
	$('section.sidebox').css("background", "linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url('https://c8.alamy.com/comp/WDBK7A/school-icon-seamless-pattern-illustration-fun-hand-drawn-chalk-doodles-on-blackboard-background-for-education-concept-WDBK7A.jpg')");
});
$('a#themebtnUzayAdd').click(function (e) { 
	e.preventDefault();
	document.documentElement.style.setProperty('--sideColor', '#330061');
	document.documentElement.style.setProperty('--sideColorhover', '#220838');
	$('section.sidebox').css("background", "linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url('https://img.freepik.com/free-vector/hand-drawn-outer-space-background_23-2148237473.jpg?size=626&ext=jpg')");
});
$('a#themebtnRemove').click(function (e) { 
	e.preventDefault();
	document.documentElement.style.setProperty('--sideColor', '#6214a8');
	document.documentElement.style.setProperty('--sideColorhover', '#511585');
	$('section.sidebox').css("background","none");
	$('section.sidebox').css("background-color", "var(--sideColor)");
});

$('.card .card-header .card-element a#cardofbtn2').click(function(e){
	e.preventDefault();
	$(".card-body.odevwg-body").toggleClass("card-of");
})
$('.card .card-header .card-element a#cardofbtn1').click(function(e){
	e.preventDefault();
	$(".card-body.gunlukprogramwg-body").toggleClass("card-of");
})
$('.card .card-header .card-element a#cardofbtn3').click(function(e){
	e.preventDefault();
	$(".card-body.haftalikprogramwg-body").toggleClass("card-of");
})
// Sidebox menu code
$('.menubox > #cssmenu li.active').addClass('open').children('ul').show();
$('.menubox > #cssmenu li.has-sub>a').on('click', function(){
	$('.sidebox').removeClass('sidebox-of');
	if ($(".sidebox").hasClass("sidebox-of")) {
		$('section.sidebox-of div.menubox #cssmenu ul li a div').hide();
	  }
	else{
		$('section.sidebox div.menubox #cssmenu ul li a div').show(); 
	}
	$(this).removeAttr('href');
	var element = $(this).parent('li');
	if (element.hasClass('open')) {
		element.removeClass('open');
		element.find('li').removeClass('open');
		element.find('ul').slideUp(200);
	}
    else
    {
		element.addClass('open');
		element.children('ul').slideDown(200);
		element.siblings('li').children('ul').slideUp(200);
		element.siblings('li').removeClass('open');
		element.siblings('li').find('li').removeClass('open');
		element.siblings('li').find('ul').slideUp(200);
	}
});
//Accordion
$('.acc-btn').click(function(){
    if ( $(this).next().is( ":hidden" ) ) {
      $('.acc-content').slideUp('selected');
      $(this).next().slideDown('selected');
    } else {
      $(this).next().slideUp('selected');
    };
});


	$('.sorusik').hover(function () {
		var dt = $(this).data('elemno');
		var tooptik = $(this).data('tooptik');
		$('#' + dt).change(function (e) { 
			e.preventDefault();  
				var $input = $( this );
				if ($input.prop( "checked" ) == true){
					$('#' + tooptik).prop( "checked", true );
				}
				else if($input.prop( "checked" ) == false){
					$('#' + tooptik).prop( "checked", false );
				}
			  }).change();
		});



// Yukarıki kısımda bir düzenlemeye gidilmeli. Soru numarasını el ile değil de for ile belirlenip ona göre checkedleri atamalı


	var ilksorunumber = parseInt($(".carousel-indicators li:first-child").attr("data-slide-to")) +1;
	var sonsorunumber = parseInt($(".carousel-indicators li:last-child").attr("data-slide-to")) +1;
	$(".carousel-control-prev").css("pointer-events", "none");
	$('#sorusirasi').html(ilksorunumber + ' / ' + sonsorunumber);
	  
	
 $('.carousel-control-prev').click(function (e) { 
	 e.preventDefault();
	 var slideno = parseInt($(".carousel-indicators li.active").attr("data-slide-to")) +1;
	 var slidenonrml = slideno - 1;
	 if(ilksorunumber == slidenonrml ){
		$(".carousel-control-prev").css("pointer-events", "none");
		$(".carousel-control-next").css("pointer-events", "all");
	 }
	 else{
		$(".carousel-control-prev").css("pointer-events", "all");
		$(".carousel-control-next").css("pointer-events", "all");
	 }
	

	 for (var i = 1; i <= sonsorunumber; i++) {
		if(slidenonrml == $('.optik .row[target='+i+']').attr("data")){	
			$('.optik .row[target='+slidenonrml+']').addClass("active");
			
		 }
		 else{
			for (var i = 1; i <= sonsorunumber; i++) {
				$('.optik .row[target='+slidenonrml+']').addClass("active");
				$('.optik .row[target='+i+']').removeClass("active");	
			}
		}
	}
	 $('#sorusirasi').html(slidenonrml + ' / ' + sonsorunumber);
	 
	
	 /*  else if($(".carousel-indicators li.active").attr("data-slide-to") == "0"){
		alert("birinci slayt konrol");
	   } */
 });

 $('.carousel-control-next').click(function (e) { 
	e.preventDefault();
	var slideno = parseInt($(".carousel-indicators li.active").attr("data-slide-to")) +1;
	var slidenonrml = slideno + 1;
	if(sonsorunumber == slidenonrml){
		$(".carousel-control-next").css("pointer-events", "none");
		$(".carousel-control-prev").css("pointer-events", "all");
	}
	else{
		$(".carousel-control-next").css("pointer-events", "all");
		$(".carousel-control-prev").css("pointer-events", "all");
	}
	for (var i = 1; i <= sonsorunumber; i++) {
		
		if(slidenonrml == $('.optik .row[target='+i+']').attr("data")){	
			$('.optik .row[target='+slidenonrml+']').addClass("active");
				
		}	 
		else{
			for (var i = 1; i <= sonsorunumber+1; i++) {
				$('.optik .row[target='+slidenonrml+']').addClass("active");
				$('.optik .row[target='+i+']').removeClass("active");		
			}
		}
	}
	$('#sorusirasi').html(slidenonrml + ' / ' + sonsorunumber);
	 /*  else if($(".carousel-indicators li.active").attr("data-slide-to") == "0"){
		$('#soru2optiksatir').addClass("active");
		$('#soru1optiksatir').removeClass("active");
	   } */
});
   
$('.carousel-control-prev').dblclick(function(){
	alert("Lütfen Tek Tek Basın");
  });
 $('.carousel-control-next').dblclick(function(){
	alert("Lütfen Tek Tek Basın");
  });

for (let i = 1; i <= sonsorunumber; i++) {	//optikteki classları seçime göre aktif ve pasif ediyor
	$('.optik .row[target='+i+']').click(function (e) {
		var sorukonumu = parseInt($(this).attr("data")); 
		if(ilksorunumber == sorukonumu){
			$(".carousel-control-prev").css("pointer-events", "none");
			$(".carousel-control-next").css("pointer-events", "all");
		}
		else{
			$(".carousel-control-prev").css("pointer-events", "all");
		}
		if(sonsorunumber == sorukonumu){
			$(".carousel-control-next").css("pointer-events", "none");
			$(".carousel-control-prev").css("pointer-events", "all");
		}
		else{
			$(".carousel-control-next").css("pointer-events", "all");
		}
		for (let i = 0; i <= sonsorunumber; i++) {
			$('.optik .row[target='+i+']').removeClass("active");
		}
		$('.optik .row[target='+i+']').addClass("active");
		$(".carousel").carousel(sorukonumu -1);
		$('#sorusirasi').html($(this).attr("data") + ' /  ' + sonsorunumber);
	});
	
}

$('#sinavbitir').click(function (e) { 
	e.preventDefault();
	$('.sorubox').append('<div class="row sorucozum" style="border-top: 1px solid #00000038;"><div class="col-12 mt-3" style="padding-right: 0px !important; padding-left: 0px !important;"><b>Çözüm /</b> <b style="color:#179949;" >Doğru Şık E</b><p style="margin-top: .5rem; margin-right: 0px; margin-bottom: 10px; margin-left: 0px; overflow-wrap: break-word;" >Yukarıdakilerden hangileri, sürücü adaylarına sürücü kurslarında okutulan derslerdendir?</p></div></div>');	
	$( ".optik" ).prepend( ' <div class="active2 p-2"><ul class="dogrusikpointer"><li class="#" style="width: 86%;"><p style="color: white; ">Doğru şık</p></li><li class="sorudogrusikoptik" style="border-left: 1px solid #ffffff4b; width: 14%;"><i class="fa fa-arrow-down" aria-hidden="true"></i></li></ul></div>' );
	$('.optik .alignment-menu').append('<li class="alignment-menu-item sorudogrusikoptik"><p>E</p></li>');
	$("#sinavbitir").css("pointer-events", "none");
	$("#sinavbitir a").css("color", "#949494");	
	$('.sorusik').css("pointer-events", "none"		);
});


	$('.carouse #matematikslide').hide();
	$('.carousel.slide #optiksiklariMatematik').hide(); //Seçilen Select Valuesına göre Optik getirme
	$('#denemekonusec').change(function() {
		var $option = $(this).find('option:selected');
		var value = $option.val();
		var text = $option.text();
		alert (value);
		if (value == "Türkce"){
			$('#optiksiklariTurkce').show();
			$('#optiksiklariMatematik').hide();
			$('#turkceslide').show();
			$('#matematikslide').hide();
		}
		else if (value == "Matematik"){
			$('#optiksiklariTurkce').hide();
			$('#optiksiklariMatematik').show();
			$('#turkceslide').hide();
			$('#matematikslide').show();
			$('#matematikslide').hide();
		}
	});
		$('.yuzenbtn-fvrsoru').click(function (e) { 
			e.preventDefault();
			$('.yuzenbtn-openwndw').toggleClass('openwndw-on');
			$('.yuzenbtn-openwndw ul').toggleClass('openwndwul-block');
			
		});
		
		

	

	
	
	



   $('.carousel').carousel({
	interval: 0
  })
/*
  $(".mySelect").select2({
	placeholder: placeholder,
	allowClear: false,
	minimumResultsForSearch: 5,
	"language": {
	  "noResults": function(){
		  return "Aradığınız Kitap Bulunamadı";
	  }
  },
  
}); var placeholder1 = "Kitap Ara"; */
  


 
  //select2-results__option select2-results__message

	 /*
	  if(ph == "/online-kutuphane"){    //Kitap Arama
        var placeholder = "Kitap Ara";
        $(".mySelect").select2({
            placeholder: placeholder,
            allowClear: false,
            minimumResultsForSearch: 5
        });
        $('.select2-search__field').keyup(function (e) { 
            var kitaparadata = $(this).val();
            $.ajax({
                type: "POST",
                url: "api/web.php?fx=kitapata",
                data: "ktext=" + kitaparadata,
                success: function (responseKitapara) {
                    $(".mySelect").html(responseKitapara);
                }
            });
        });
        $('.mySelect').on('change', function () {  //Aramadan Kitaba Gitme
            var kitap = $(this).val();
            setInterval(() => {
                window.location = "/kitapincele/" + kitap;
            }, 300);
        });
        $('.ktpktgrls').click(function (e) { //Kitap Kategori Kısmı Seçime Göre Kitap gösterme
            e.preventDefault();
            var ktgr = $(this).data('kitapk');
            $.ajax({
                type: "POST",
                url: "api/web.php?fx=kitapkategorilist",
                data: "kategori="+ktgr,
                success: function (responsektgr) {
                    $('#kitaplistview').html(responsektgr);
                    $('#kitapgetirbtn').removeClass('d-none');
                    $('#kitapgetirbtn').addClass('d-block');
                    var dataassdsdasd = $('#kitaplistview .row .col-lg-3 a.btn-success:last').attr("id");
                    $('#kitapgetirbtn').click(function (e) { 
                        e.preventDefault();
                        $.ajax({
                            type: "POST",
                            url: "api/web.php?fx=kitapkategorilist",
                            data: "kategori="+ktgr+"&listpar="+dataassdsdasd,
                            success: function (response200) {
                                $(this).remove();
                                $('#kitaplistview').append(response200);
                            }
                        });
                    });
                }
            });
        });
    }
	 
	 
	 
	 */

	$('#tabTestCozumBtn-negative').click(function (e) { 
		var durum_negative = "negative";
		var durum_positive = "positive";
		$('.test-wg-card-a[target='+durum_negative+']').fadeIn();
		$('.test-wg-card-a[target='+durum_positive+']').fadeOut();
		$('#tabTestCozumBtn-negative').addClass('active');
		$('#tabTestCozumBtn-positive').removeClass('active');
		
	});
	$('#tabTestCozumBtn-positive').click(function (e) { 
		var durum_negative = "negative";
		var durum_positive = "positive";
		$('.test-wg-card-a[target='+durum_negative+']').fadeOut();
		$('.test-wg-card-a[target='+durum_positive+']').fadeIn();
		$('#tabTestCozumBtn-positive').addClass('active');
		$('#tabTestCozumBtn-negative').removeClass('active');
		
	});

	

	$('#tabOdevCozumBtn-negative').click(function (e) { 
		var durum_negative = "negative";
		var durum_positive = "positive";
		$('.odev-wg-card-a[target='+durum_negative+']').fadeIn();
		$('.odev-wg-card-a[target='+durum_positive+']').fadeOut();
		$('#tabOdevCozumBtn-negative').addClass('active');
		$('#tabOdevCozumBtn-positive').removeClass('active');
		
	});
	$('#tabOdevCozumBtn-positive').click(function (e) { 
		var durum_negative = "negative";
		var durum_positive = "positive";
		$('.odev-wg-card-a[target='+durum_negative+']').fadeOut();
		$('.odev-wg-card-a[target='+durum_positive+']').fadeIn();
		$('#tabOdevCozumBtn-positive').addClass('active');
		$('#tabOdevCozumBtn-negative').removeClass('active');
	});


/*	var placeholder2 = "Test Ara";
  $(".select2Test").select2({
	  placeholder: placeholder,
	  allowClear: false,
	  minimumResultsForSearch: 5,
	  "language": {
		"noResults": function(){
			return "Aradığınız Test Bulunamadı";
		}
	},
	
  });
  var placeholder3 = "Ödev Ara";
  $(".select2Odev").select2({
	  placeholder: placeholder,
	  allowClear: false,
	  minimumResultsForSearch: 5,
	  "language": {
		"noResults": function(){
			return "Aradığınız Ödev Bulunamadı";
		}
	},
	
  }); */

  //favori soru popup soru ekle
  
  $('.fvrSoruEklePop-cardofbtn').click(function (e) { 
	  e.preventDefault();
	  $('.popup').fadeOut('500');
  });
  $('#fvrSoruEkle').click(function (e) { 
	  e.preventDefault();
	  $('.popup').removeClass("d-none");
	  $('.popup').fadeIn('500');
	  
  });
  $('.mainbox').click(function (e) { 
	  e.preventDefault();
	$('#messangebtngrps-selbox').removeClass('selectinbox-on');
	$('#langbtngrps-selbox').removeClass('selectinbox-on');
	$('#notifybtngrps-selbox').removeClass('selectinbox-on');
	$('#profilebtn-selbox').removeClass('selectinbox-on');
	$('.sidebox').addClass('sidebox-of');
  });



