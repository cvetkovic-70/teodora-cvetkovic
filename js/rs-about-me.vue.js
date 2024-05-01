var aboutMeComponentRs = {
	template: `	
		<div v-html="html" />
	`,
	data() { 
		return {
			html: '',
		}
	},
	created() {	
		this.$root.showLoader();	
	
		axios.get(this.$root.repo + '/md/rs/about-me.md')
		.then((response) => {
			this.$root.hideLoader();
			this.html = markdown.render(response.data);
			this.html = this.$root.render(this.html);
		})
		.catch((error) => {
			this.$root.hideLoader();
			if(error.response.status == "404") {
				this.$router.push({'name': '404'});
			}
		});		

		this.$root.checkLanguage();
	},
	mounted() {

	},
	updated() {

	},
	methods: {
		
	},
};