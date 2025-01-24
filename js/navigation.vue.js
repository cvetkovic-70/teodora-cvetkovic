var navigationComponent = {
	template: `	
		<template v-if="language == 'en'">
			<li><router-link to="/en/home">Home</router-link></li>
			<li><router-link to="/en/about-me">About Me</router-link></li>
			<li><router-link to="/en/service">Service</router-link></li>
			<li><router-link to="/en/contact">Contact</router-link></li>
			<li><router-link to="/en/news">News</router-link></li>
			<li><router-link to="/en/blog">Blog</router-link></li>	
			<li class="hide-on-med-and-up"><div class="divider"></div></li>		
			<li>
				<a href="mailto:psycounsult@gmail.com" title="make an appointment">
					<i class="small material-icons x-icon">calendar_month</i>
					<span class="hide-on-med-and-up">&nbsp;make an appointment</span>
				</a>
			</li>			
		</template>
		<template v-else>
			<li><router-link to="/rs/home">Home</router-link></li>
			<li><router-link to="/rs/about-me">O meni</router-link></li>
			<li><router-link to="/rs/service">Usluge</router-link></li>
			<li><router-link to="/rs/contact">Kontakt</router-link></li>	
			<li><router-link to="/rs/news">Novosti</router-link></li>
			<li><router-link to="/rs/blog">Blog</router-link></li>		
			<li class="hide-on-med-and-up"><div class="divider"></div></li>		
			<li>
				<a href="mailto:psycounsult@gmail.com" title="zakažite sastanak">
					<i class="small material-icons x-icon">calendar_month</i>
					<span class="hide-on-med-and-up">&nbsp;zakažite sastanak</span>
				</a>
			</li>			
		</template>
		<li class="hide-on-med-and-up"><div class="divider"></div></li>
		<li>
			<a title="visit my Facebook profile" href="https://www.facebook.com/people/Counseling-and-mental-health-PSY/61564066372532/" target="_blank">
				<span class="hide-on-med-and-up" v-html="facebook" />
				<span class="hide-on-small-only" v-html="facebookAlt" />
				<span class="hide-on-med-and-up">&nbsp;Facebook</span>
			</a>
		</li>
		<li>
			<a title="visit my Instagram profile" href="https://www.instagram.com/psy.counseling.mental.health/" target="_blank">
				<span class="hide-on-med-and-up" v-html="instagram" />
				<span class="hide-on-small-only" v-html="instagramAlt" />
				<span class="hide-on-med-and-up">&nbsp;Instagram</span>
			</a>
		</li>
		<li>
			<a title="visit my LinkedIn profile" href="https://www.linkedin.com/in/teodora-counseling-28393a328" target="_blank">
				<span class="hide-on-med-and-up" v-html="linkedin" />
				<span class="hide-on-small-only" v-html="linkedinAlt" />
				<span class="hide-on-med-and-up">&nbsp;LinkedIn</span>
			</a>
		</li>
		<li class="hide-on-med-and-up"><div class="divider"></div></li>
		<li><router-link to="/rs/"><span class="fi fi-rs"></span>&nbsp;Srpski</router-link></li>
		<li><router-link to="/en/"><span class="fi fi-gb"></span>&nbsp;English</router-link></li>		
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