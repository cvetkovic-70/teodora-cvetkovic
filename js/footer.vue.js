var footerComponent = {
	template: `
	<div class="x-footer-inner">
		<div class="x-footer-brand">
			<span class="x-footer-name">Teodora Cvetković</span>
			<span class="x-footer-tagline">Counseling & Mental Health</span>
		</div>
		<div class="x-footer-social">
			<a title="visit my Facebook profile" href="https://www.facebook.com/people/Counseling-and-mental-health-PSY/61564066372532/" target="_blank"><span v-html="facebook" /></a>
			<a title="visit my Instagram profile" href="https://www.instagram.com/psy.counseling.mental.health/" target="_blank"><span v-html="instagram" /></a>
			<a title="visit my LinkedIn profile" href="https://www.linkedin.com/in/teodora-counseling-28393a328" target="_blank"><span v-html="linkedin" /></a>
		</div>
		<div class="x-footer-copy">&copy; {{ date }} All rights reserved</div>
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
};