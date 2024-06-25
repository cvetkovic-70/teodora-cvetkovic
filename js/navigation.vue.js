var navigationComponent = {
	template: `	
		<template v-if="language == 'en'">
			<li><router-link to="/en/home">Home</router-link></li>
			<li><router-link to="/en/about-me">About Me</router-link></li>
			<li><router-link to="/en/service">Service</router-link></li>
			<li><router-link to="/en/contact">Contact</router-link></li>
		</template>
		<template v-else>
			<li><router-link to="/rs/home">Home</router-link></li>
			<li><router-link to="/rs/about-me">O meni</router-link></li>
			<li><router-link to="/rs/service">Usluge</router-link></li>
			<li><router-link to="/rs/contact">Kontakt</router-link></li>				
		</template>
	`,
	props: ['language'],
};