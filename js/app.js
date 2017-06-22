var Loader = (function() {
	
	'use strict';
	return {
		init: function() {
			
			this.loader = document.getElementById('loader');
			this.preogressBar = document.getElementById('loaderProgressBar');
			this.loaderPercent = document.getElementById('loaderPercent');
			this.images = document.getElementsByTagName('img');
			
			this.events();
			for (var i = 0; i < Loader.images.length; i++) {
				this.loadImage(i);
			}
		},

		events: function() {
			for (var i = 0; i < Loader.images.length - 1; i++) {
				//Loader.images[i].addEventListener('load', Loader.loadImage(i));
			}
		},

		loadImage: function(i) {
			// call this function on image load or error event
			if (Loader.images[i].complete) {
				Loader.loadedCallback();

			} else {
			  Loader.images[i].addEventListener('load', Loader.loadedCallback);
			  Loader.images[i].addEventListener('error', function() {
			    console.log('error');
			  })
			}
			/*var progress = 0;
			var additing = 100 / Loader.images.length;
			for (var i = 0; i < Loader.images.length; i++) {
				
					progress += additing;
					Loader.increaseProgressBar(progress);
				if (!Loader.images[i].complete) {
					console.log(false);
				} 
			}*/
		},

		increaseProgressBar: function(progress) {
			// use this method to increase progress bar percentage and color filling
			Loader.preogressBar.style.width = progress + '%';
			Loader.loaderPercent.innerHTML = Math.round(progress) + '%';
		},

		loadedCallback: function() {
			 // call this function once images will be loaded. Put code inside this method which will hide progress bar.
			console.log('loaded');
		}
	};
})();

Loader.init();