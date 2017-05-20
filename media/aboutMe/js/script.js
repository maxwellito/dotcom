$(document).ready(function(){
	$("#nav_button_prev").click( function() { prevTitle(); } );
	$("#nav_button_next").click( function() { nextTitle(); } );
});


// Page positions
var onMVMT = false;
var pagePos = [	0,
				3000,
				7000,
				12000,
				16000,
				19000,
				21200 ];

function prevTitle() {
	if (!onMVMT) {
		founded = false;
		actualPos = getPos();
		for(i=pagePos.length - 1; i>=0 && !founded; i--) {
			if (actualPos > pagePos[i]) {
				founded = true;
				goTo(pagePos[i]);
			}
		}
	}
}

function nextTitle() {
	if (!onMVMT) {
		founded = false;
		actualPos = getPos();
		for(i=0; i<pagePos.length && !founded; i++) {
			if (actualPos < pagePos[i]) {
				founded = true;
				goTo(pagePos[i]);
			}
		}
	}
}

function goTo(pPos) {
	onMVMT=true;
	duration=Math.abs(getPos() - pPos);
	$('html,body').animate({scrollTop: pPos}, duration, function() { onMVMT=false; });
}

function getPos () {
	if ($('html,body').scrollTop() > $(window).scrollTop()) {
		return $('html,body').scrollTop();
	} else {
		return $(window).scrollTop();
	}
}



// Micellaneous
$(document).ready(function(){
	$('a[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body')
				.animate({scrollTop: targetOffset}, 1000);
				return false;
			}
		}
	});
});




