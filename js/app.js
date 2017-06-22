var Loader = (function() {
	
	'use strict';
	return {
		init: function() {
			
			this.loader = document.getElementById('loader');
			this.preogressBar = document.getElementById('loaderProgressBar');
			this.loaderPercent = document.getElementById('loaderPercent');
			this.images = document.getElementsByTagName('img');
			var loaded = false;
			this.events();
		},

		events: function() {
			for (var i = 0; i < Loader.images.length - 1; i++) {
				Loader.images[i].addEventListener('load', Loader.loadImage(i));
			}
		},

		loadImage: function(i) {
			var progress = 0;
			var additing = 100 / Loader.images.length;
			for (var i = 0; i < Loader.images.length; i++) {
				
					progress += additing;
					Loader.increaseProgressBar(progress);
				if (!Loader.images[i].complete) {
					console.log(false);
				} 
			}
		},

		increaseProgressBar: function(progress) {
			Loader.preogressBar.style.width = progress + '%';
			Loader.loaderPercent.innerHTML = Math.round(progress) + '%';
		},

		loadedCallback: function() {

		}
	};
})();

Loader.init();