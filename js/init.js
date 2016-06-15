$(function() {
	$(document).ready(function() {
		$(".nav-bar.mobile .logo").click(function() {
			var $this = $('.burger');
			if ($this.hasClass('alt')) {
				$this.removeClass('alt')
				$this.addClass('unalt')
			}else{
				$this.removeClass('unalt')
				$this.addClass('alt')
			}
		});
		$(".nav-bar.mobile .menu").click(function(event) {
			event.stopPropagation();
		});
		$(".nav-bar.mobile .calculator").click(function() {
			var $this = $('.burger');
			$this.removeClass('alt')
			$this.addClass('unalt')
		});
	});
});