var footerComponent = {
	template: `
	<div class="x-footer">
	© {{ date }} Teodora Cvetković 
	&nbsp;<a title="visit my Facebook profile" href="https://www.facebook.com/people/Counseling-and-mental-health-PSY/61564066372532/" target="_blank"><span v-html="facebook" /></a>
	&nbsp;<a title="visit my Instagram profile" href="https://www.instagram.com/psy.counseling.mental.health/" target="_blank"><span v-html="instagram" /></a>
	&nbsp;<a title="visit my Linkedin profile" href="https://www.linkedin.com/in/teodora-counseling-28393a328" target="_blank"><span v-html="linkedin" /></a>
	</div>
	`,
	data() { 
		return {
			date: new Date().getFullYear(),
			facebook: facebook,
			instagram: instagram,
			linkedin: linkedin,
		}
	},
	created() {	
	},
	mounted() {

	},
	updated() {

	},
	methods: {
		
	},	
};	