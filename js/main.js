jQuery.event.add(window, 'load', init);

function loadImages(){
	for (var i = 1; i <= 25; i++) {
        var img = document.createElement("IMG");
        img.src = "images/michael-alford" + i + ".jpg";
        img.setAttribute('title', 'click to enlarge');
		img.setAttribute('id','img'+i);
        document.getElementById('gallery').appendChild(img);
    }
}

function clickImages(){
	var imgs = $('#gallery').children('img');
	for (var i = 0; i < imgs.length; i++) {
		$(imgs[i]).bind('click', function(){
			$('#gallery').animate({
				opacity : .3
			},200);
			$('#gallery').css('z-index',0);
			$('#cur-img').attr('src',$(this).attr('src'));
			$('#cur-img').attr('title','click to close');
			$('#cur-img').width(800);
			$('#current').animate({
                opacity : 1
            },200);
			$('#current').css('z-index',1);
			$('#cur-img').bind('click',function(){
				$('#gallery').animate({
                    opacity : 1
                },200);
				$('#gallery').css('z-index',1);
				$('#current').css('z-index',0);
				$('#current').animate({
	                opacity : 0
	            },200);
			 });
		});
	}
}

function init(){
	loadImages();
	clickImages();
}