(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/pokeball.83d6b10f.png"},23:function(e,t,a){e.exports=a(41)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),l=(a(28),a(29),a(30),a(13)),i=a.n(l),s=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"HOMEPAGE - POKEMONS"),r.a.createElement(i.a,{strings:["Here you can find anything"],typeSpeed:40}),r.a.createElement("br",null),r.a.createElement(i.a,{strings:["Search for products","Search for categories","Search for brands"],typeSpeed:40,backSpeed:50,loop:!0}))},m=a(20),u=a.n(m),p=(a(31),a(4)),d=function(){return r.a.createElement("div",{className:"navbar-container"},r.a.createElement(p.b,{to:"/",className:"logo-container"},r.a.createElement("img",{className:"logo",src:u.a,alt:"logo"})),r.a.createElement("div",{className:"navs"},r.a.createElement("div",{className:"nav-link"},r.a.createElement(p.b,{to:"/pokedexs"},"Pokedex")),r.a.createElement("div",{className:"nav-link"},r.a.createElement(p.b,{to:"/pokegame"},"Pokegame")),r.a.createElement("div",{className:"nav-link"},r.a.createElement(p.b,{to:"/"},"About"))))},f=a(1),h=a(5),v=a.n(h),E=a(7),b=a(8),g=a(9),y=a(10),k=a(11),x=(a(38),function(e){var t=e.item;return r.a.createElement("div",{className:"flip-card"},r.a.createElement("div",{className:"flip-card-inner"},r.a.createElement("div",{className:"flip-card-front"},r.a.createElement("img",{src:t.imageUrl,alt:"Pokemon"})),r.a.createElement("div",{className:"flip-card-back"},r.a.createElement("h1",null,t.name),r.a.createElement("p",null,"This is ",t.type," pokemon!"),r.a.createElement("p",null,"Exp: ",t.base_experience))))}),N=(a(39),function(e){var t=e.collection;return r.a.createElement("div",{className:"collection-overview-container"},t.map((function(e){return r.a.createElement(x,{key:e.id,item:e})})))}),w=function(e){Object(k.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={collection:[{id:4,name:"Charmander",type:"fire",base_experience:62,imageUrl:""},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:112},{id:39,name:"Jigglypuff",type:"normal",base_experience:95},{id:94,name:"Gengar",type:"poison",base_experience:225},{id:133,name:"Eevee",type:"normal",base_experience:65}]},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.state.collection.map(function(){var e=Object(E.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(e){return e<=999?"00".concat(e).slice(-3):e}(t.id),e.next=4,fetch("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/".concat(a,".png")).then((function(e){return t.imageUrl=e.url})).catch((function(e){return console.log(e)}));case 4:return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());Promise.all(t).then((function(a){t=a,e.setState({collection:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"pokedex-container"},r.a.createElement("h1",null,"Pokedex"),r.a.createElement(N,{collection:this.state.collection}))}}]),a}(r.a.Component),S=a(22),_=(a(40),function(e){Object(k.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={collection:[{id:4,name:"Charmander",type:"fire",base_experience:62,imageUrl:""},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:112},{id:39,name:"Jigglypuff",type:"normal",base_experience:95},{id:94,name:"Gengar",type:"poison",base_experience:225},{id:133,name:"Eevee",type:"normal",base_experience:65}]},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("Pokegame componentDidMount()");var t=this.state.collection.map(function(){var e=Object(E.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(e){return e<=999?"00".concat(e).slice(-3):e}(t.id),e.next=4,fetch("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/".concat(a,".png")).then((function(e){return t.imageUrl=e.url})).catch((function(e){return console.log(e)}));case 4:return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());Promise.all(t).then((function(a){t=a,e.setState({collection:t})})).catch((function(e){return console.log(e)}))}},{key:"randomSplitter",value:function(){for(var e=[],t=Object(S.a)(this.state.collection);e.length<t.length;){var a=Math.floor(Math.random()*t.length);e.push(t.splice(a,1)[0])}return{team1:e,team2:t}}},{key:"calculateScore",value:function(e){e.team1.score=e.team1.reduce((function(e,t){return e+t.base_experience}),0),e.team2.score=e.team2.reduce((function(e,t){return e+t.base_experience}),0)}},{key:"render",value:function(){var e=this.randomSplitter();return this.calculateScore(e),e.team1.score>e.team2.score?e.team1.winner=!0:e.team2.winner=!0,r.a.createElement("div",{className:"pokegame-container"},r.a.createElement("h1",null,"POKEGAME"),r.a.createElement("div",{className:"team1"},r.a.createElement("h2",{className:"title"},"Team1"),r.a.createElement("div",{className:"score-board"},r.a.createElement("span",{style:{fontSize:"20px",fontWeight:"bold",color:e.team1.winner?"chartreuse":"red",display:"block"}},e.team1.winner?"Wins":"Loses"),r.a.createElement("span",null,"Score: ",e.team1.score)),r.a.createElement(N,{collection:e.team1})),r.a.createElement("div",{className:"team2"},r.a.createElement("h2",{className:"title"},"Team2"),r.a.createElement("div",{className:"score-board"},r.a.createElement("span",{style:{fontSize:"20px",fontWeight:"bold",color:e.team2.winner?"chartreuse":"red",display:"block"}},e.team2.winner?"Wins":"Loses"),r.a.createElement("span",null,"Score: ",e.team2.score)),r.a.createElement(N,{collection:e.team2})))}}]),a}(r.a.Component));_.defaultProps={name:"hello"};var O=_;var P=function(){return r.a.createElement("div",{className:"main-app"},r.a.createElement("div",{className:"navbar"},r.a.createElement(d,null)),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/pokedex/",component:s}),r.a.createElement(f.a,{exact:!0,path:"/",component:s}),r.a.createElement(f.a,{path:"/pokedexs",component:w}),r.a.createElement(f.a,{path:"/pokegame",component:O})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,null,r.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.a0cbea12.chunk.js.map