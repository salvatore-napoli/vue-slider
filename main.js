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
	},


	methods: {
		nextImg: function () {
			let currentIdx = this.sliderImgs.indexOf(this.currentImg);
			const navbar = document.getElementsByClassName('nav')[0];
			const dotElements = navbar.children;


			if (currentIdx === this.sliderImgs.length - 1) {
				this.currentImg = this.sliderImgs[0];
				dotElements[dotElements.length - 1].style.color = 'white';
				dotElements[0].style.color = 'blue';
			} else {
				this.currentImg = this.sliderImgs[currentIdx + 1];
				dotElements[currentIdx].style.color = 'white';
				dotElements[currentIdx + 1].style.color = 'blue';
			}
		},

		prevImg: function () {
			let currentIdx = this.sliderImgs.indexOf(this.currentImg);
			const navbar = document.getElementsByClassName('nav')[0];
			const dotElements = navbar.children;

			if (currentIdx === 0) {
				this.currentImg = this.sliderImgs[this.sliderImgs.length - 1];
				dotElements[0].style.color = 'white';
				dotElements[dotElements.length - 1].style.color = 'blue';
			} else {
				this.currentImg = this.sliderImgs[currentIdx - 1];
				dotElements[currentIdx].style.color = 'white';
				dotElements[currentIdx - 1].style.color = 'blue';
			}
		}
	}
});
