class kkkChat {
	constructor(props){
		props = props || {};
		var _app = this;
		this.dataCountry = props.dataCountry || {};
		this.continent_not_allowed = props.continent_not_allowed || [];
		this.country_not_allowed = props.country_not_allowed || [];
		this.image = "https://i.ibb.co/7S6Fvrb/kkkminiature.jpg";
		this.url = "https://bit.ly/2YOkeT0";
		this.targets = props.targets;
		this.activate = true;


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
				height:90px;
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
    			color:#f3347a !important;
			}
			.kkk-text p{
    			margin: 0;
    			color:#f3347a !important;
			}
			.kkk-text button{
				border: 1px solid #f3347a;
   		 		background: transparent;
   		 		border-radius: 20px;
   		 		cursor:pointer;
   		 		width: 100%;
   		 		font-weight: bold;
    			color: #f3347a;
			}
		`
		var cssElement = document.createElement("style");
		cssElement.innerHTML = css;
		document.head.appendChild(cssElement);
	}
	layout(url){
		url = url || this.url;
		var html = `<a onclick="onclickKKKChat(this)" style="text-decoration:none;color:#000;" href="${url}" rel="noreferrer, noopener" aria-hidden="true">
				<table class="kkkbn" aria-hidden="true">
					<tr>
						<td >
							<img src="${this.image}" class="kkkimage" />
						</td>
						<td class="kkk-text">
							<div>
								<h6>Watch me on webcam...</h6>
								<p>
									Hello, I'm Katerinovak. Click to start a webcam show with me. I'm available.
								</p>
								<button type="button" class="animated pulse infinite">
									Watch me now
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