var navigationComponent = {
	template: `	
		<template v-if="language == 'en'">
			<li><router-link to="/en/home">Home</router-link></li>
			<li><router-link to="/en/about-me">About Me</router-link></li>
			<li><router-link to="/en/service">Service</router-link></li>
			<li><router-link to="/en/news">News</router-link></li>
			<li><router-link to="/en/blog">Blog</router-link></li>
			<li><router-link to="/en/contact">Contact</router-link></li>
			<li class="hide-on-med-and-up"><div class="divider"></div></li>		
			<li class="x-nav-cta">
				<a href="mailto:psycounsult@gmail.com" title="make an appointment" class="x-cta-link">
					<i class="small material-icons x-icon">calendar_month</i>
					<span class="hide-on-med-and-up">&nbsp;make an appointment</span>
				</a>
			</li>
			<li class="hide-on-med-and-up"><div class="divider"></div></li>
			<li class="hide-on-med-and-up">
				<a title="visit my Facebook profile" href="https://www.facebook.com/people/Counseling-and-mental-health-PSY/61564066372532/" target="_blank">
					<span v-html="facebook" />&nbsp;Facebook
				</a>
			</li>
			<li class="hide-on-med-and-up">
				<a title="visit my Instagram profile" href="https://www.instagram.com/psy.counseling.mental.health/" target="_blank">
					<span v-html="instagram" />&nbsp;Instagram
				</a>
			</li>
			<li class="hide-on-med-and-up">
				<a title="visit my LinkedIn profile" href="https://www.linkedin.com/in/teodora-counseling-28393a328" target="_blank">
					<span v-html="linkedin" />&nbsp;LinkedIn
				</a>
			</li>
		</template>
		<template v-else>
			<li><router-link to="/rs/home">Home</router-link></li>
			<li><router-link to="/rs/about-me">O meni</router-link></li>
			<li><router-link to="/rs/service">Usluge</router-link></li>
			<li><router-link to="/rs/news">Novosti</router-link></li>
			<li><router-link to="/rs/blog">Blog</router-link></li>
			<li><router-link to="/rs/contact">Kontakt</router-link></li>
			<li class="hide-on-med-and-up"><div class="divider"></div></li>		
			<li class="x-nav-cta">
				<a href="mailto:psycounsult@gmail.com" title="zakažite sastanak" class="x-cta-link">
					<i class="small material-icons x-icon">calendar_month</i>
					<span class="hide-on-med-and-up">&nbsp;zakažite sastanak</span>
				</a>
			</li>
			<li class="hide-on-med-and-up"><div class="divider"></div></li>
			<li class="hide-on-med-and-up">
				<a title="visit my Facebook profile" href="https://www.facebook.com/people/Counseling-and-mental-health-PSY/61564066372532/" target="_blank">
					<span v-html="facebook" />&nbsp;Facebook
				</a>
			</li>
			<li class="hide-on-med-and-up">
				<a title="visit my Instagram profile" href="https://www.instagram.com/psy.counseling.mental.health/" target="_blank">
					<span v-html="instagram" />&nbsp;Instagram
				</a>
			</li>
			<li class="hide-on-med-and-up">
				<a title="visit my LinkedIn profile" href="https://www.linkedin.com/in/teodora-counseling-28393a328" target="_blank">
					<span v-html="linkedin" />&nbsp;LinkedIn
				</a>
			</li>
		</template>
		<li class="hide-on-med-and-up"><div class="divider"></div></li>
		<li class="x-lang-switch"><router-link to="/rs/"><span class="fi fi-rs"></span><span class="hide-on-med-and-up">&nbsp;Srpski</span></router-link></li>
		<li class="x-lang-switch"><router-link to="/en/"><span class="fi fi-gb"></span><span class="hide-on-med-and-up">&nbsp;English</span></router-link></li>		
	`,
	props: ['language'],
	data() { 
		return {
			facebook: facebook,
			instagram: instagram,
			linkedin: linkedin,
			facebookAlt: facebookAlt,
			instagramAlt: instagramAlt,
			linkedinAlt: linkedinAlt,			
		}
	},	
};