var trackingInfoComponent = {
	template: `	
		<div id="x-tracking-info" class="modal">
			<div class="modal-content">
			  <h4>Information</h4>
			  <p>This site uses Google Analytics.</p>
			</div>
			<div class="modal-footer">
			  <a v-on:click="agree" class="modal-close waves-effect waves-green btn-flat">Agree</a>
			  <a v-on:click="disagree" class="modal-close waves-effect waves-green btn-flat">Disagree</a>
			</div>
		</div>
	`,
	props: ['visibility'],
	data() { 
		return {
			show: false,
		}
	},
	created() {	
		this.show = this.visibility;
	},
	mounted() {
		if(this.show) {
			var elem = document.getElementById('x-tracking-info');
			var instance = M.Modal.init(elem, {});
			instance.open();			
		}
	},
	updated() {

	},
	methods: {
		agree() {
			this.$gtag.optIn();
			setCookie("gtag", "true", 9999);
		},
		disagree() {
			this.$gtag.optOut();
			setCookie("gtag", "false", 9999);
		}
	},	
};