Vue.config.devtools = true;

new Vue ({
	el: '.slider-wrapper',
	data: {
		currentImg: 'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',

		sliderImgs: [
			'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
			'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
			'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
			'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
		],

		first: 'false',
		last: 'false'
	},


	methods: {
		nextImg: function () {
			let currentIdx = this.sliderImgs.indexOf(this.currentImg);
			console.log(currentIdx)

			if (currentIdx === this.sliderImgs.length - 1) {
				this.currentImg = this.sliderImgs[0];
			} else {
				this.currentImg = this.sliderImgs[currentIdx + 1];
			}
		},

		prevImg: function () {
			let currentIdx = this.sliderImgs.indexOf(this.currentImg);
			console.log(currentIdx)

			if (currentIdx === 0) {
				this.currentImg = this.sliderImgs[this.sliderImgs.length - 1];
			} else {
				this.currentImg = this.sliderImgs[currentIdx - 1];
			}
		}
	}
});
