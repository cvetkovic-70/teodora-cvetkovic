var contactComponentRs = {
	template: `	
		<div v-html="html" />
		
		<!-- todo
		<div class="card-panel">
			<form action="mailto:dev.cvetkovic@gmail.com" method="GET" enctype="text/plain" class="col s12">
				<input type="hidden" name="subject" value="Contact Form" />
				<div class="row" style="gap: 1em;">
					<div class="s12 m6 input-field outlined">
						<input type="text" name="firstname" id="x-firstname" required="true" />
						<label for="x-firstname">First Name</label>
					</div>				
					<div class="s12 m6 input-field outlined">
						<input type="text" name="lastname" id="x-lastname" required="true" />
						<label for="x-lastname">Last Name</label>
					</div>
					<div class="s12 m6 input-field outlined">
						<input type="tel" name="phone" id="x-phone" />
						<label for="x-phone">Phone Number</label>
					</div>
					<div class="s12 m6 input-field outlined">
						<input type="email" name="email" id="x-email" required="true" />
						<label for="x-email">E-Mail</label>
					</div>					
					<div class="s12 input-field outlined">
						<textarea name="body" id="x-message"></textarea>
						<label for="x-message">Message</label>
					</div>
					<div class="s12">
						<button type="submit" class="btn outlined icon-left">Send</button>
					</div>
				</div>
			</form>
		</div>		
		-->
	`,
	data() { 
		return {
			html: '',
		}
	},
	created() {	
		this.$root.showLoader();	
	
		axios.get('/md/rs/contact.md')
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