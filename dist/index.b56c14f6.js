function e(e){return e&&e.__esModule?e.default:e}var t,r,n,i=globalThis,a={},s={},o=i.parcelRequire3a11;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in s){var t=s[e];delete s[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){s[e]=t},i.parcelRequire3a11=o),(0,o.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),o("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.b56c14f6.js","eyyUD","icons.c14567a0.svg","hfd23","icons.c14567a0.svg"]'));const c="https://forkify-api.herokuapp.com/api/v2/recipes/",d="9b9b43ef-b695-4df8-9e65-36e5a97ec59b",l=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},u={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},p=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},h=async function(e){try{let t=await l(`${c}${e}?key=${d}`);u.recipe=p(t),u.bookmarks.some(t=>t.id===e)?u.recipe.bookmarked=!0:u.recipe.bookmarked=!1,console.log(u.recipe)}catch(e){throw e}},g=async function(e){try{u.search.query=e;let t=await l(`${c}?search=${e}&key=${d}`);console.log(t),u.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),u.search.page=1}catch(e){throw console.error(`${e}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},m=function(e=u.search.page){u.search.page=e;let t=(e-1)*u.search.resultsPerPage,r=e*u.search.resultsPerPage;return u.search.results.slice(t,r)},_=function(e){u.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/u.recipe.servings}),u.recipe.servings=e},f=function(){localStorage.setItem("bookmarks",JSON.stringify(u.bookmarks))},v=function(e){u.bookmarks.push(e),e.id===u.recipe.id&&(u.recipe.bookmarked=!0),f()},b=function(e){let t=u.bookmarks.findIndex(t=>t.id===e);u.bookmarks.splice(t,1),e===u.recipe.id&&(u.recipe.bookmarked=!1),f()};!function(){let e=localStorage.getItem("bookmarks");e&&(u.bookmarks=JSON.parse(e))}();const y=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format ;)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t};console.log(r);let n=await l(`${c}?key=${d}`,r);u.recipe=p(n),v(u.recipe)}catch(e){throw e}};var k={};k=new URL("icons.c14567a0.svg",import.meta.url).toString();class w{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let t=`
	<div class="spinner">
        <svg>
            <use href="${e(k)}#icon-loader"></use>
        </svg>
        </div> 
	`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(t=this._errorMessage){let r=`
		<div class="error">
				<div>
				<svg>
					<use href="${e(k)}#icon-alert-triangle"></use>
				</svg>
				</div>
				<p>${t}</p>
			</div>
		`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(t=this._message){let r=`
		<div class="message">
				<div>
				<svg>
					<use href="${e(k)}#icon-smile"></use>
				</svg>
				</div>
				<p>${t}</p>
			</div>
		`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var a=r.split("/");this.numerator=a[0],this.denominator=a[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(t=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},r=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(t(this.denominator)){var e=r(this.denominator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(t(this.numerator)){var e=r(this.numerator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},n=Fraction;class $ extends w{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.preventDefault(),t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
		<figure class="recipe__fig">
			<img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
			<h1 class="recipe__title">
				<span>${this._data.title}</span>
			</h1>
        </figure>

        <div class="recipe__details">
			<div class="recipe__info">
				<svg class="recipe__info-icon">
					<use href="${e(k)}#icon-clock"></use>
				</svg>
				<span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
				<span class="recipe__info-text">minutes</span>
			</div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${e(k)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${e(k)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${e(k)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
              <svg>
                <use href="${e(k)}#icon-user"></use>
              </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${e(k)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">

		  ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${e(k)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
		`}_generateMarkupIngredient(t){return`
			<li class="recipe__ingredient">
              	<svg class="recipe__icon">
                <use href="${e(k)}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${t.quantity?new n(t.quantity).toString():""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${t.unit}</span>
                ${t.description}
              </div>
            </li>
				`}}var E=new $;class F{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var S=new F,M=new class extends w{_parentElement="";_generateMarkup(){let t=window.location.hash.slice(1);return`
            <li class="preview">
                <a class="preview__link ${this._data.id===t?"preview__link--active":""}"  href="#${this._data.id}">
                <figure class="preview__fig">
                    <img src="${this._data.image}" alt="${this._data.title}" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${this._data.title}</h4>
                    <p class="preview__publisher">${this._data.publisher}</p>
                        <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                            <svg>
                            <use href="${e(k)}#icon-user"></use>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>
        `}};class H extends w{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return console.log(this._data),this._data.map(e=>M.render(e,!1)).join("")}}var q=new H;class A extends w{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let t=this._data.page,r=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(console.log(r),1==t&&r>1)?`
				<button data-goto="${t+1}" class="btn--inline pagination__btn--next">
				<span>Page ${t+1}</span>
				<svg class="search__icon">
				<use href="${e(k)}#icon-arrow-right"></use>
				</svg>
			</button>
			`:t===r&&r>1?`
				<button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
				<svg class="search__icon">
				<use href="${e(k)}#icon-arrow-left"></use>
				</svg>
				<span>Page ${t-1}</span>
			</button>
			`:t<r?`
			<button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
				<svg class="search__icon">
				<use href="${e(k)}#icon-arrow-left"></use>
				</svg>
				<span>Page ${t-1}</span>
			</button>

			<button data-goto="${t+1}" class="btn--inline pagination__btn--next">
				<span>Page ${t+1}</span>
				<svg class="search__icon">
				<use href="${e(k)}#icon-arrow-right"></use>
				</svg>
			</button>

			`:""}}var x=new A;class L extends w{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return console.log(this._data),this._data.map(e=>M.render(e,!1)).join("")}}var P=new L;new URL("icons.c14567a0.svg",import.meta.url).toString();class R extends w{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded!";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this.#e(),this.#t()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}#e(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}#t(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var T=new R;document.querySelector(".recipe");const j=async function(){try{let e=window.location.hash.slice(1);if(!e)return;E.renderSpinner(),q.update(m()),P.update(u.bookmarks),await h(e),E.render(u.recipe)}catch(e){E.renderError()}},D=async function(){try{let e=S.getQuery();if(!e)return;q.renderSpinner(),await g(e),q.render(m(1)),x.render(u.search)}catch(e){console.log(e)}},N=async function(e){try{T.renderSpinner(),await y(e),console.log(u.recipe),E.render(u.recipe),T.renderMessage(),P.render(u.bookmarks),window.history.pushState(null,"",`#${u.recipe.id}`),setTimeout(function(){T.toggleWindow()},2500)}catch(e){console.error("\uD83D\uDCA5\uD83D\uDCA5",e),T.renderError(e)}};P.addHandlerRender(function(){P.render(u.bookmarks)}),E.addHandlerRender(j),E.addHandlerUpdateServings(function(e){_(e),E.update(u.recipe)}),E.addHandlerAddBookmark(function(){u.recipe.bookmarked?b(u.recipe.id):v(u.recipe),E.update(u.recipe),P.render(u.bookmarks)}),S.addHandlerSearch(D),x.addHandlerClick(function(e){q.render(m(e)),x.render(u.search)}),T.addHandlerUpload(N);
//# sourceMappingURL=index.b56c14f6.js.map
