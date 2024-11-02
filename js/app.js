const routes = [
	{ name: 'root', path: '', redirect: '/en/home' },
	{ name: 'home', path: '/en/home',  component: homeComponent, }, 
	{ name: 'service', path: '/en/service',  component: serviceComponent, }, 
	{ name: 'about-me', path: '/en/about-me',  component: aboutMeComponent, },	
	{ name: 'news', path: '/en/news',  component: newsComponent, },
	{ name: 'blog', path: '/en/blog',  component: blogComponent, },
	{ name: 'contact', path: '/en/contact',  component: contactComponent, },
	{ name: 'rs-home', path: '/rs/home',  component: homeComponentRs, }, 
	{ name: 'rs-service', path: '/rs/service',  component: serviceComponentRs, }, 
	{ name: 'rs-about-me', path: '/rs/about-me',  component: aboutMeComponentRs, },	
	{ name: 'rs-news', path: '/rs/news',  component: newsComponentRs, },
	{ name: 'rs-blog', path: '/rs/blog',  component: blogComponentRs, },	
	{ name: 'rs-contact', path: '/rs/contact',  component: contactComponentRs, },	
	{ name: '404', path: '/:pathMatch(.*)*', component: pageNotFoundComponent },
];

const router = VueRouter.createRouter({
	  history: VueRouter.createWebHashHistory(),
	  routes,
});

router.afterEach((to, from) => {
  var elems = document.querySelectorAll('.sidenav');
  if(elems[0] !== "undefined") {
	var instance = M.Sidenav.getInstance(elems[0]);
	if(typeof instance != "undefined") {
		instance.close();
	}
  }
});

const markdown = markdownit({
  html: true,
  linkify: true,
  typographer: false
}).use(window.markdownitContainer, 'center-align')
.use(window.markdownitContainer, 'card-panel');

const app = Vue.createApp({
	data() { 
		return {
		    isLoading: 0,
			language: 'en',
		}
	},
	created() {
	
	},
	mounted() {
		var elems = document.querySelectorAll('.sidenav');
		var instances = M.Sidenav.init(elems, {});		
	},
	methods: {
	    showLoader() {
	    	this.isLoading += 1;
	    },
	   	hideLoader() {
	    	if(this.isLoading > 0) {
	    		this.isLoading -= 1;
	    	}
	    },
		checkLanguage() {
			let language = /\/en\//.exec(window.location.href);
			if(language != null) {
				this.language = 'en';
			} else {
				this.language = 'sr';
			}				
		},
		render(html) {
			return html.replaceAll(/%%%\sfacebook\s%%%/g, facebook).replaceAll(/%%%\sinstagram\s%%%/g, instagram).replaceAll(/%%%\slinkedin\s%%%/g, linkedin).replaceAll(/%%%\s([\w\s]*)\s%%%/g, '<i class="small material-icons">$1</i>');
		},
	},	
});

app.component('x-navigation', navigationComponent);

app.component('x-footer', footerComponent);

app.use(router);

app.mount('#app');