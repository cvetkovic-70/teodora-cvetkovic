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
	data() { 
		return {
		}
	},
	created() {	
	},
	mounted() {
		let showHint = true;
		let gtagCookie = getCookie("gtag"); 
		if(gtagCookie != null) {
			showHint = false;
		}		
		if(showHint) {
			var elem = document.getElementById('x-tracking-info');
			var instance = M.Modal.init(elem, {});
			instance.open();			
		}
	},
	updated() {

	},
	methods: {
		agree() {
			setCookie("gtag", "true", 9999);
		},
		disagree() {
			setCookie("gtag", "false", 9999);
		}
	},	
};