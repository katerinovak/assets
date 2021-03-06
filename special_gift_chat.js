class kkkChat {
	constructor(props){
		props = props || {};
		var _app = this;
		this.dataCountry = props.dataCountry || {};
		this.continent_not_allowed = props.continent_not_allowed || [];
		this.country_not_allowed = props.country_not_allowed || [];
		this.image = "https://i.ibb.co/pKLVRhR/kkkminiaturev2.jpg";
		this.url = "https://1bit.space/api/durl?eu=aHR0cHM6Ly9iaXQubHkvMllPa2VUMA==";
		this.targets = props.targets;
		this.activate = true;
		this.country = _app.dataCountry.country;
		this.country_placement = this.country;
		if(typeof _app.dataCountry.country === "undefined"){
			this.country_placement = "your country";
		}


		this.testing = props.testing || false;
		if(this.testing === true){
			this.init();
			return;
		}


		this.country_not_allowed.forEach(function(co){
			if(_app.dataCountry.country_code === co){
				_app.activate = false;
			}
		})
		this.continent_not_allowed.forEach(function(continent){
			if(_app.dataCountry.continent_code === continent){
				_app.activate = false;
			}
		})
		if(this.activate === false){ return; }
		this.init();
	}
	css(){
		var css = `
			.kkkbn{
				max-width:320px;
				width:100%;
				font-family:Calibri, sans-serif;
			}
			.kkkimage{
				width:90px;
				border-radius: 4px;
    			box-shadow: 2px 2px 2px #ac9f9f;
			}
			.kkk-text{
				width:230px;
			}
			.kkk-text h6{
				font-weight:bolder;
				font-size: 1rem;
    			margin: 0;
    			color:#6733b8 !important;
			}
			.kkk-text p{
    			margin: 0;
    			color:#6733b8 !important;
			}
			.kkk-text button{
				border: 1px solid #6733b8;
   		 		background: transparent;
   		 		border-radius: 20px;
   		 		cursor:pointer;
   		 		width: 100%;
   		 		font-weight: bold;
    			color: #6733b8 !important;
			}
		`
		var cssElement = document.createElement("style");
		cssElement.innerHTML = css;
		document.head.appendChild(cssElement);
	}
	layout(url){
		url = url || this.url;
		var html = `<a target="_blank" onclick="onclickKKKChat(this)" style="text-decoration:none;color:#000;" data-origin="${this.url}" href="${url}" rel="noreferrer, noopener" aria-hidden="true">
				<table class="kkkbn" aria-hidden="true">
					<tr>
						<td >
							<img src="${this.image}" class="kkkimage" />
						</td>
						<td class="kkk-text">
							<div>
								<h6>Hey there!</h6>
								<p>
									I'm from <span class="bolder">${this.country_placement}</span>. I have an awesome gift for you!
								</p>
								<button type="button" class="animated pulse infinite slower">
									Chat Now
								</button>
							</div>
						</td>
					<tr>
				</table>
			</a>
		`
		return html;
	}
	init(){
		var app = this;
		this.css();
		this.targets.forEach(function( target ){
			var url = target.getAttribute("data-url");
			target.innerHTML = app.layout(url);
		})
	}
}

/*
new kkkChat({
    dataCountry: user_country,
    country_not_allowed: [],
    testing: true,
    targets: [document.querySelector(".prodbns[data-position='1']")],
})
*/