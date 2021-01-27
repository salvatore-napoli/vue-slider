Vue.config.devtools = true;

new Vue ({
	el: '.slider-wrapper',
	data: {
		sliderImgs: [
			'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
			'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
			'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
			'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
		],

		currentImg: 0
	},


	methods: {
		nextImg: function () {
			if (this.currentImg === this.sliderImgs.length - 1) {
				this.currentImg = 0;
			} else {
				this.currentImg += 1;
			}
		},

		prevImg: function () {
			if (this.currentImg === 0) {
				this.currentImg = this.sliderImgs.length - 1;
			} else {
				this.currentImg -= 1;
			}
		},

		colorDots: function () {
			var i = 0;
			while (i < this.sliderImgs.length) {
				console.log(i)
				if (i === this.currentImg) {
					return 'blue';
				} else {
					return 'white';
				}
				i++;
			}
		}

	}
});
