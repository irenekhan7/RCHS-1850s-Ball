//RCHS 1850 Ball
$(document).ready(function() {
	var World = {
		loaded: false,
	
		init: function initFn() {
			/* Disable all sensors in "IR-only" Worlds to save performance. If the property is set to true, any geo-related components (such as GeoObjects and ActionRanges) are active. If the property is set to false, any geo-related components will not be visible on the screen, and triggers will not fire.*/
			AR.context.services.sensors = false;
			this.createOverlays();
		},
	
		createOverlays: function createOverlaysFn() {
			// Initialize Tracker images for four rooms
			// Important: If you replace the tracker file with your own, make sure to change the target name accordingly.
			// e.g. replace "pageOne" used for creating the AR.Trackeable2DOBject below, with the name of one of your new target images.
			this.tracker = new AR.Tracker("assets/four_rooms.wtc", {
				onLoaded: this.worldLoaded
			});
	
			// Create a overlay maid for hallway
			var imgHallwayMaid = new AR.ImageResource("assets/hallway_maid.png");
			var overlayHallwayMaid = new AR.ImageDrawable(imgHallwayMaid, 1, {
				offsetX: 0.05,
				offsetY: 0.05,
				scale: 0.7,
				opacity: 0.7
			});
			//Bridget Larkins hallway maid dialog window
			overlayHallwayMaid.onClick = function() {
	        	$("#bridget-dialog1").dialog("open");	
			};
			//render the hallway with the maid overlay
			var pageHallway = new AR.Trackable2DObject(this.tracker, "1_hallway", {
				drawables: {
					cam: overlayHallwayMaid
				}
			});
	
			// Drawing room - dessert items
			var imgDrawingDessert = new AR.ImageResource("assets/fooddrink/ice_fruits.png");
			var overlayDrawingDessert = new AR.ImageDrawable(imgDrawingDessert, 1, {
				offsetX: 0.07,
				offsetY: -0.01,
				scale: 0.4
			});
			//dessert dialog window
			overlayDrawingDessert.onClick = function() {
	        	$("#drawingroom").dialog("open");	
			};
			//render the drawing room with overlays
			var pageDrawingRoom = new AR.Trackable2DObject(this.tracker, "2_drawingroom", {
				drawables: {
					cam: overlayDrawingDessert
				}
			});
				
			// Front parlor - Create overlay young Hart Daughter
			var imgParlorLady = new AR.ImageResource("assets/parlor_hart_daughter.png");
			var overlayParlorLady = new AR.ImageDrawable(imgParlorLady, 1, {
				offsetX: 0.2,
				offsetY: 0.01,
				opacity: 0.8,
				scale: 0.8,
				zOrder: 1
			});
			// Front parlor - Create overlay drunk Billy
			var imgParlorBilly = new AR.ImageResource("assets/parlor_drunkman.png");
			var overlayParlorBilly = new AR.ImageDrawable(imgParlorBilly, 1, {
				offsetX: 0.05,
				offsetY: -0.1,
				opacity: 0.7,
				scale: 0.4,
				zOrder: -1
			});
			//render the front parlor with overlays
			var pageParlorDance = new AR.Trackable2DObject(this.tracker, "3_parlor_front", {
				drawables: {
					cam: [overlayParlorBilly, overlayParlorLady]
				}
			});
			//Virginia Reel song plays for 20 seconds
			//playVirginiaReel('hasDialogue');
			//Test Virginia Reel dialog window
			overlayParlorLady.onClick = function() {
	        	$("#virginiareel").dialog("open");	
			};
			
			// Dining room - Create overlay Richard Hart Jr. and food items
			var imgRichardHart = new AR.ImageResource("assets/hallway_maid.png");
			var overlayRichardHart = new AR.ImageDrawable(imgRichardHart, 1, {
				offsetX: 0.17,
				offsetY: -0.1,
				scale: 0.8,
				opacity: 0.7
			});
			var imgDiningFood = new AR.ImageResource("assets/fooddrink/ice_flowers.png");
			var overlayDiningFood = new AR.ImageDrawable(imgDiningFood, 1, {
				offsetX: -0.17,
				offsetY: -0.1,
				scale: 0.5
			});

			//render the dining room with overlays
			var pageDiningRoom = new AR.Trackable2DObject(this.tracker, "4_diningroom", {
				drawables: {
					cam: [overlayDiningFood, overlayRichardHart]
				}
			});
			
			//dining room maid dialog window
			overlayRichardHart.onClick = function() {
	        	$("#catherine-dialog1").dialog("open");	
			};
		},
		//thumbnail of the target image
		worldLoaded: function worldLoadedFn() {
			var cssDivLeft = " style='display: table-cell;vertical-align: middle; text-align: right; width: 50%; padding-right: 15px;'";
			var cssDivRight1 = " style='display: table-cell;vertical-align: middle; text-align: left; padding-right: 15px; width: 38px'";
			var cssDivRight2 = " style='display: table-cell;vertical-align: middle; text-align: left; padding-right: 15px;'";
			document.getElementById('loadingMessage').innerHTML =
			"<div" + cssDivLeft + ">Scan a room to begin</div>" +
				"<div" + cssDivRight1 + ">(view images)</div>";
		}
	};
	
	World.init();
});
