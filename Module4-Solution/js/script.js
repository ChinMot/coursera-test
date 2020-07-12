
(function (){
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	var initial;
	for(var i=0;i<names.length;i++){
		initial=names[i].charAt(0).toLowerCase();
		if(initial==='j'){
			byeSpeaker.speak(names[i]);
		}
		else{
			helloSpeaker.speak(names[i]);
		}
	}
})()

