//Virginia Reel song plays for 20 seconds
function playVirginiaReel() {
	var sound = new AR.Sound("assets/virginia_reel_20secs.mp3", {
	  onLoaded : function(){sound.play();},
	  onError : function(){
	    // alert the user that the sound file could not be loaded - or not because they wouldnt know
	    },
	});
	sound.load();
	sound.play();
	sound.onFinishedPlaying = function() {
    	$("#virginiareel").dialog("open");	
	};
}

// Dialogue window buttons appended below the intro text
// App intro questions/answers
 $("#appintro").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Why did the Harts have this Ball dance?": function() {
		    $(this).dialog("close");
			$("#appintro1").dialog("open");
		},
		"What is this application?": function() {
			$(this).dialog("close");
			$("#appintro2").dialog("open");
		},
		"Close": function() {
			$(this).dialog("close");
		}
	}
});

$("#appintro1").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Return to the Introduction": function() {
			$(this).dialog("close");
			$("#appintro").dialog("open");
		}
	}
});

$("#appintro2").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Return to the Introduction": function() {
			$(this).dialog("close");
			$("#appintro").dialog("open");
		}
	}
});

//Virginia Reel questions/answers
$("#virginiareel").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"What is the Virginia Reel?": function() {
		    $(this).dialog("close");
		},
		"How late did they dance that night?": function() {
		    $(this).dialog("close");
		}
	}
});

//Drawing room food desserts questions/answers
$("#drawingroom").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"What type of desserts did they serve at an 1850 ball?": function() {
		    $(this).dialog("close");
			$("#dessert2").dialog("open");
		},
		"What was usually in this drawing room?": function() {
			$(this).dialog("close");
			$("#dessert3").dialog("open");
		},
		"How much did a Ball like this cost in 1850?": function() {
			$(this).dialog("close");
			$("#dessert4").dialog("open");
		}
	}
});

$("#dessert2").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Close": function() {
			$(this).dialog("close");
			$("#drawingfood").dialog("open");
		}
	}
});
$("#dessert3").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Close": function() {
			$(this).dialog("close");
			$("#drawingfood").dialog("open");
		}
	}
});

$("#dessert4").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"View the actual receipt sent to Mrs. Richard P. Hart": function() {
			//$(this).dialog("close");
			$("#partyreceipt").dialog("open");
		},
		"Close": function() {
			$(this).dialog("close");
			$("#drawingfood").dialog("open");
		}
	}
});	

//Receipt for actual party was $132.25 or over $4060 in 2014 dollars
$("#partyreceipt").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"The bill includes oysters, champagne, ice desserts items": function() {
			$(this).dialog("close");
		}
	}
});

//Bridget Larkins, hallway maid questions/answers
 $("#bridget-dialog1").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Hi Bridget. Are things going well with the party so far?": function() {
		    $(this).dialog("close");
			$("#bridget-dialog2").dialog("open");
		},
		"Tell me about yourself. Where are you from? What are your duties around here?": function() {
			$(this).dialog("close");
			$("#bridget-dialog3").dialog("open");
		},
		"What a grand house. How long have you been employed here?": function() {
			$(this).dialog("close");
			$("#bridget-dialog4").dialog("open");
		},
		"You must have done a great deal to get this party set up. It looks absolutely wonderful. Do you work all day?": function() {
			$(this).dialog("close");
			$("#bridget-dialog5").dialog("open");
		},
		"I don't need anything right now. Thanks.": function() {
			$(this).dialog("close");
			$("#bridget-dialog6").dialog("open");
		}
	}
});
	
$("#bridget-dialog2").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"The house is beautiful. I'm enjoying the view.": function() {
			$(this).dialog("close");
			$("#bridget-dialog1").dialog("open");
		},
		"To tell you the truth, balls really aren't for me.": function() {
			$(this).dialog("close");
			$("#bridget-dialog7").dialog("open");
		}
	}
});
	
$("#bridget-dialog3").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Well that's interesting. Why don't you tell me a bit about Mrs. Hart. What is life for her like, here?": function() {
			$(this).dialog("close");
			$("#bridget-dialog8").dialog("open");
		}
	}
});

$("#bridget-dialog4").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"That's quite commendable. I think I might go see if I can have a word with Mrs. Hart herself.": function() {
			$(this).dialog("close");
		}
	}
});

$("#bridget-dialog5").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"The Harts sound lovely. Perhaps I'll go see if Mrs. Hart is around.": function() {
			$(this).dialog("close");
			$("#bridget-dialog6").dialog("open");
		},
		"Tell me about Mrs. Hart. What is life for her like, here?": function() {
			$(this).dialog("close");
			$("#bridget-dialog8").dialog("open");
		}
	}
});

$("#bridget-dialog6").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Pleasure meeting you.": function() {
			$(this).dialog("close");
		}
	}
});

$("#bridget-dialog7").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"That's fascinating. I think I'll go have a look. Pleasure meeting you.": function() {
			$(this).dialog("close");
		}
	}
});

$("#bridget-dialog8").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Education for young women? Do tell me more. What has Mrs. Hart accomplished there?": function() {
			$(this).dialog("close");
			$("#bridget-dialog9").dialog("open");
		},
		"Was Mrs. Hart not always like this?": function() {
			$(this).dialog("close");
			$("#bridget-dialog10").dialog("open");
		}
	}
});

$("#bridget-dialog9").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"That's quite commendable. I think I might go see if I can have a word with Mrs. Hart herself.": function() {
			$(this).dialog("close");
		}
	}
});

$("#bridget-dialog10").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"That's fascinating. I think I'll go have a look. Pleasure meeting you, Bridget.": function() {
			$(this).dialog("close");
		}
	}
});

//Catherine Nichols, dining room maid questions/answers
$("#catherine-dialog1").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"That sounds great.": function() {
		    $(this).dialog("close");
			$("#catherine-dialog2").dialog("open");
		}
	}
});
		
$("#catherine-dialog2").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Alright.": function() {
			$(this).dialog("close");
			$("#catherine-dialog3").dialog("open");
		}
	}
});
	
$("#catherine-dialog3").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"This all looks wonderful. It most have taken you all day to prepare.": function() {
			$(this).dialog("close");
			$("#catherine-dialog4").dialog("open");
		},
		"That is all for now. I think I will join the other guests.": function() {
			$(this).dialog("close");
		}
	}
});

$("#catherine-dialog4").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"I am quite impressed.": function() {
			$(this).dialog("close");
			$("#catherine-dialog3").dialog("open");
		}
	}
});