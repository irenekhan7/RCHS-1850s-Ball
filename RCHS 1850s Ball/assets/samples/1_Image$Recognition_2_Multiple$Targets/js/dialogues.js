//dialogue windows

//Virginia Reel intro dialogue - breaks app if included - why?
/* $("#virginiareel").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"The Harts hired a 9-piece band who set up at the end of this hallway. 
		 They played this Virginia Reel and Polka songs for guests to dance in the parlor, to your right.
		 /n
		 To begin your visit, tap on the hallway maid for information about the Hart family Ball that
		 took place in this house with 132 guests in January 1850.": function() {
		    $(this).dialog("close");
		}
	}
});
*/

//Hallway maid
 $("#dialog1").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Hi Anna. Are things going well with the party so far?": function() {
		    $(this).dialog("close");
			$("#dialog2").dialog("open");
		},
		"Tell me about yourself, Anna. Where are you from? What are your duties around here?": function() {
			$(this).dialog("close");
			$("#dialog3").dialog("open");
		},
		"What a grand house. How long have you been employed here, Anna?": function() {
			$(this).dialog("close");
			$("#dialog4").dialog("open");
		},
		"You must have done a great deal to get this party set up. It looks absolutely wonderful. Do you work all day, Anna?": function() {
			$(this).dialog("close");
			$("#dialog5").dialog("open");
		},
		"I don't need anything right now. Thanks.": function() {
			$(this).dialog("close");
			$("#dialog6").dialog("open");
		}
	}
});
	
 $("#dialog2").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"The house is beautiful. I'm enjoying the view.": function() {
			$(this).dialog("close");
			$("#dialog1").dialog("open");
		},
		"To tell you the truth, balls really aren't for me.": function() {
			$(this).dialog("close");
			$("#dialog7").dialog("open");
		}
	}
});
	
$("#dialog3").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Well that's interesting. Why don't you tell me a bit about Mrs. Hart. What is life for her like, here?": function() {
			$(this).dialog("close");
			$("#dialog8").dialog("open");
		}
	}
});

$("#dialog4").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"That's quite commendable. I think I might go see if I can have a word with Mrs. Hart herself.": function() {
			$(this).dialog("close");
		}
	}
});

$("#dialog5").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"The Harts sound lovely. Perhaps I'll go see if Mrs. Hart is around.": function() {
			$(this).dialog("close");
			$("#dialog6").dialog("open");
		},
		"Tell me about Mrs. Hart. What is life for her like, here?": function() {
			$(this).dialog("close");
			$("#dialog8").dialog("open");
		}
	}
});

$("#dialog6").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Pleasure meeting you.": function() {
			$(this).dialog("close");
		}
	}
});

$("#dialog7").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"That's fascinating. I think I'll go have a look. Pleasure meeting you.": function() {
			$(this).dialog("close");
		}
	}
});

$("#dialog8").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Education for young women? Do tell me more. What has Mrs. Hart accomplished there?": function() {
			$(this).dialog("close");
			$("#dialog9").dialog("open");
		},
		"Was Mrs. Hart not always like this?": function() {
			$(this).dialog("close");
			$("#dialog10").dialog("open");
		}
	}
});

$("#dialog9").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"That's quite commendable. I think I might go see if I can have a word with Mrs. Hart herself.": function() {
			$(this).dialog("close");
		}
	}
});

$("#dialog10").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"That's fascinating. I think I'll go have a look. Pleasure meeting you, Anna.": function() {
			$(this).dialog("close");
		}
	}
});
//Desserts in drawing room dialog windows - unfortunately commented out right now as it breaks the home screen
/*
$("#dessert-dialog-intro").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"What type of desserts did they serve at an 1850 ball?": function() {
		    $(this).dialog("close");
			$("#dessert-dialog2").dialog("open");
		},
		"What was usually in this drawing room?": function() {
			$(this).dialog("close");
			$("#dessert-dialog3").dialog("open");
		},
		"How much did a Ball like this cost in 1850?": function() {
			$(this).dialog("close");
			$("#dessert-dialog4").dialog("open");
		}
	}
});

$("#dessert-dialog2").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"They served flavored desserts of elaborately carved ice, and baked scones": function() {
			$(this).dialog("close");
		}
	}
});
$("#dessert-dialog3").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"This room was for guests to meet others while enjoying desserts and drinks from here and the dining room.
		Guests could rest their feet from dancing in the parlor, on the other side of the hallway.": function() {
			$(this).dialog("close");
		}
	}
});
$("#dessert-dialog4").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"The bill was $132.25 in 1850, equal to over $4060 in 2014 dollars.": function() {
			$(this).dialog("close");
		},
		"View the actual bill sent to Mrs. Richard P. Hart": function() {
			$(this).dialog("close");
			$("#dessert-dialog-bill").dialog("open");
		}
	}
});	

$("#dessert-dialog-bill").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"../assets/danceball_bill_1850.jpg": function() {
			$(this).dialog("close");
		}
	}
});  
*/
	
	
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