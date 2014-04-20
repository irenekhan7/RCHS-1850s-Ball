//Virginia Reel song plays for 20 seconds
var hasDialogue = '';
function playVirginiaReel(hasDialogue, played) {
if(played === false)
{
	var sound = new AR.Sound("assets/virginia_reel_20secs.mp3", {
	  onLoaded : function(){sound.play();},
	  onError : function(){
	    // alert the user that the sound file could not be loaded - or not because they wouldnt know
	    },
	});
	sound.load();
	sound.play();
	sound.onFinishedPlaying = function() {
    	if (hasDialogue) {
    		$("#virginiareel").dialog("open");
    	}
	};
}
}

// =====================================================================
// enable to tap outside the modal dialogue to close it
$(document.body).on("click", ".ui-widget-overlay", function() {
    $.each($(".ui-dialog"), function() {
        var $dialog;
        $dialog = $(this).children(".ui-dialog-content");
        if($dialog.dialog("option", "modal")) {
            $dialog.dialog("close");
        }
    });
});

// Dialogue window buttons appended below the intro text
// ======================================================================
// App intro questions/answers
 $("#appintromain").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Start Tour": function() {
			$(this).dialog("close");
		},
		"Tell Me More...": function() {
		    $(this).dialog("close");
			$("#appintro1").dialog("open");
		},
		"What is this application?": function() {
			$(this).dialog("close");
			$("#appintro2").dialog("open");
		}
	}
});

$("#appintro1").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Return to Invitation": function() {
			$(this).dialog("close");
			$("#appintromain").dialog("open");
		}
	}
});

$("#appintro2").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Return to Invitation": function() {
			$(this).dialog("close");
			$("#appintromain").dialog("open");
		}
	}
});

// ======================================================================
//Virginia Reel questions/answers
$("#virginiareel").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"What is the Virginia Reel?": function() {
		    $(this).dialog("close");
		    $("#virginiareel1").dialog("open");
		},
		"How late will we dance tonight?": function() {
		    $(this).dialog("close");
		    $("#virginiareel2").dialog("open");
		},
		"Close": function() {
			$(this).dialog("close");
		}
	}
});
$("#virginiareel1").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Return": function() {
			$(this).dialog("close");
			$("#virginiareel").dialog("open");
		}
	}
});
$("#virginiareel2").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Return": function() {
			$(this).dialog("close");
			$("#virginiareel").dialog("open");
		}
	}
});

// ======================================================================
//Maria Tillman questions/answers

$("#maria").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Can't you ask Mr. Hart for a dance yourself?": function() {
		    $(this).dialog("close");
		    $("#maria1").dialog("open");
		},
		"What's so special about a couple's dance?": function() {
		    $(this).dialog("close");
		    $("#maria2").dialog("open");
		}
	}
});

$("#maria1").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Return": function() {
			$(this).dialog("close");
			$("#maria").dialog("open");
		}
	}
});
	
$("#maria2").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Return": function() {
			$(this).dialog("close");
			$("#maria").dialog("open");
		}
	}
});

// ======================================================================
//Billy Burden questions/answers

$("#billy").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Why is champagne the only drink served?": function() {
		    $(this).dialog("close");
		    $("#billy1").dialog("open");
		},
		"You seem to like champagne a lot. Why is it so popular?": function() {
		    $(this).dialog("close");
		    $("#billy2").dialog("open");
		}
	}
});

$("#billy1").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Return": function() {
			$(this).dialog("close");
			$("#billy").dialog("open");
		}
	}
});
	
$("#billy2").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Return": function() {
			$(this).dialog("close");
			$("#billy").dialog("open");
		}
	}
});


// ======================================================================
//Drawing room food desserts questions/answers
$("#drawingroommain").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"What type of desserts do they serve at this Ball?": function() {
		    $(this).dialog("close");
			$("#dessert1").dialog("open");
		},
		"Who is usually in this drawing room?": function() {
			$(this).dialog("close");
			$("#dessert2").dialog("open");
		}
	}
});

$("#dessert1").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Return": function() {
			$(this).dialog("close");
			$("#drawingroommain").dialog("open");
		}
	}
});
$("#dessert2").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Return": function() {
			$(this).dialog("close");
			$("#drawingroommain").dialog("open");
		}
	}
});

// ======================================================================
//Bridget Larkins, hallway maid questions/answers
 $("#bridgetmain").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Tell me, how late will you have guests?": function() {
		    $(this).dialog("close");
			$("#bridget1").dialog("open");
		},
		"I detect an accent. Where are you from originally?": function() {
			$(this).dialog("close");
			$("#bridget2").dialog("open");
		},
		"How long have you been employed by the Harts?": function() {
			$(this).dialog("close");
			$("#bridget3").dialog("open");
		},
		"You must have done a great deal to prepare for this party. Did you work all day?": function() {
			$(this).dialog("close");
			$("#bridget4").dialog("open");
		}
	}
});
	
$("#bridget1").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Return": function() {
			$(this).dialog("close");
			$("#bridgetmain").dialog("open");
		}
	}
});
	
$("#bridget2").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Return": function() {
			$(this).dialog("close");
			$("#bridgetmain").dialog("open");
		}
	}
});

$("#bridget3").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Return": function() {
			$(this).dialog("close");
			$("#bridgetmain").dialog("open");
		}
	}
});

$("#bridget4").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Return": function() {
			$(this).dialog("close");
			$("#bridgetmain").dialog("open");
		}
	}
});

// ======================================================================
//Richard Hart Jr. in the dining room
$("#richardhartmain").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"What is your occupation?": function() {
			$(this).dialog("close");
			$("#richardhart1").dialog("open");
		},
		"Tell me about your parents": function() {
			$(this).dialog("close");
			$("#richardhart2").dialog("open");
		},
		"Mrs. Hart has been supportive of education, especially for women?": function() {
			$(this).dialog("close");
			$("#richardhart3").dialog("open");
		}
	}
});

$("#richardhart1").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Return": function() {
			$(this).dialog("close");
			$("#richardhartmain").dialog("open");
		}
	}
});

$("#richardhart2").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Return": function() {
			$(this).dialog("close");
			$("#richardhartmain").dialog("open");
		}
	}
});

$("#richardhart3").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Return": function() {
			$(this).dialog("close");
			$("#richardhartmain").dialog("open");
		}
	}
});

// ======================================================================
//Food items and Receipt, dining room
$("#diningfoodmain").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Tell me more about the food and drinks": function() {
		    $(this).dialog("close");
			$("#diningfood1").dialog("open");
		},
		"How much did a Ball like this cost in 1850?": function() {
			$(this).dialog("close");
			$("#ballcost").dialog("open");
		}
	}
});
		
$("#diningfood1").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Return": function() {
			$(this).dialog("close");
			$("#diningfoodmain").dialog("open");
		}
	}
});


$("#ballcost").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"View the actual receipt for food and drink": function() {
			$("#partyreceipt").dialog("open");
		},
		"Return": function() {
			$(this).dialog("close");
			$("#diningfoodmain").dialog("open");
		}
	}
});	

//Receipt for actual party was $132.25 or over $4060 in 2014 dollars
$("#partyreceipt").dialog({
    autoOpen: false,
	modal: true,
	resizable: false,
	buttons: {
		"Return": function() {
			$(this).dialog("close");
			$("#ballcost").dialog("open");
		}
	}
});
