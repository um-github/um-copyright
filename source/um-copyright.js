var UMCopyright = {
	
	timerOutId: null,
	pathToImage: 'copyright.gif',
	offsetImageTop: -107,
	offsetImageLeft: -63,

	init: function(object){
		root = this;
		openImage = this.openImage;

		if (!openImage) {
			openImage = $('<img src="'+this.pathToImage+'" />');
			openImage.css({
				'id': 'UMImage',
				'display': 'none',
				'position': 'absolute',
				'top': this.offsetImageTop,
				'left': this.offsetImageLeft,
				'z-index': 100
			});
			$(object).append(openImage);
		};

		object.mouseover(function(){
			(root.timerOutId != null)
				? root.clearTimer()
				: openImage.slideDown().attr('src', root.pathToImage+'?'+(new Date().getTime()));
		})

		object.mouseout(function(){
			if (root.timerOutId == null) {
				root.timerOutId = setTimeout('openImage.fadeOut(150, function(){ root.clearTimer(); }); ', 100);
			}
		})
	},

	clearTimer: function()
	{
		clearTimeout(root.timerOutId); 
		root.timerOutId = null;
	}
}
