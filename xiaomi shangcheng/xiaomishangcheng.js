var mkk=document.getElementsByClassName("mk");
window.onscroll=function(){
	var bar=document.documentElement.scrollTop||document.body.scrollTop||window.scrollY||window.			pageYOffset;
	for(i=0;i<mkk.length;i++){
		var top=mkk[i].offsetTop-600;
		var immg=mkk[i].getElementsByTagName("img");
		if(bar>top){
			for(j=0;j<immg.length;j++){
				immg[j].src=immg[j].getAttribute("attr");
			}
		}
	}
}
