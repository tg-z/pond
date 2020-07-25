// ############################################################################################
// ## init main vars
// ############################################################################################

menuabout = new Array()
menuItems = new Array()
var counter

maxRnd = 7

darkCol = "#000000"
liteCol = "#ffffff"
gifName = "r01.gif"

dCols = new Array("#cc3399","#664FA4","#7F6843","#7F436F","#7D7DBB","#000000","#C2CBDC")
lCols = new Array("#cc99cc","#9ED45A","#96D2AC","#64B196","#AABAE9","#FFFFFF","#7C86A4")
gCols = new Array("r00.gif","r01.gif","r02.gif","r03.gif","r04.gif","r05.gif","r06.gif")

setcols();

showFontStyles();

// set browser fav icon
document.write('<LINK REL="SHORTCUT ICON" HREF="/favicon.ico">')

function setcols(){
	randomNum = maxRnd*Math.random();
	cNum = Math.floor(randomNum);

	darkCol = dCols[cNum]
	liteCol = lCols[cNum]
	gifName = gCols[cNum]

	document.bgColor = liteCol
	document.text = darkCol

	//alert(document.style.);
	}

function setBG(){
	document.bgColor = liteCol
	}

function launchDoc(myURL,sizeX,sizeY) {
	myArgs  = "width=" + sizeX + "," 
			+ "height=" + sizeY + "," 
			+ "location=0," 
			+ "menubar=0,"
			+ "resizable=0,"
			+ "scrollbars=0,"
			+ "status=0,"             
			+ "titlebar=0,"
			+ "toolbar=0,"
			+ "hotkeys=0,"
			+ "screenx=0,"    
			+ "screeny=0,"
			+ "left=40,"
			+ "top=40";
	myWindow = open(myURL,"", myArgs);
	}
        
function launchDocScroll(myURL,sizeX,sizeY) {
	myArgs  = "width=" + sizeX + "," 
			+ "height=" + sizeY + "," 
			+ "location=0," 
			+ "menubar=0,"
			+ "resizable=0,"
			+ "scrollbars=0,"
			+ "status=0,"             
			+ "titlebar=0,"
			+ "toolbar=0,"
			+ "hotkeys=0,"
			+ "screenx=0,"    
			+ "screeny=0,"
			+ "left=40,"
			+ "top=40";
	myWindow = open(myURL,"", myArgs);
	}
        
function launchPic(myUrl,myName,myTitle,sizeX,sizeY) {
	myTarget = myName;
	myArgs  = "width=" + sizeX + "," 
			+ "height=" + sizeY + "," 
			+ "location=0," 
			+ "menubar=0,"
			+ "resizable=1,"
			+ "scrollbars=0,"
			+ "status=0,"             
			+ "titlebar=0,"
			+ "toolbar=0,"
			+ "hotkeys=0,"
			+ "screenx=50,"
			+ "screeny=50,"
			+ "left=40,"
			+ "top=40";
	myWindow = open("", myTarget, myArgs );
	myWindow.document.write("<html><title>"+myTitle+"</title><body bgcolor=#000000 marginwidth=0 marginheight=0 topmargin=0 leftmargin=0 link=#666666 vlink=#666666>");
	myWindow.document.write("<a href=\"javascript:window.close();\"><img src=\""+myUrl+"\" alt=\""+myTitle+" (Click to close)\" border=0 width=100% height=100%></a></body></html>");
	}

function launchParticle(itemNo,itemPos) {

myTarget = "itemWin"+menuItems[itemNo][0];

if (menuItems[itemNo][5]>0) {
	if (navigator.appVersion.indexOf("Macintosh") != -1){
		myArgs  = "width=" + menuItems[itemNo][5] + "," 
			+ "height=" + menuItems[itemNo][6] + "," 
			+ "location=0," 
			+ "menubar=0,"
			+ "resizable=0,"
			+ "scrollbars=0,"
			+ "status=0,"             
			+ "titlebar=0,"
			+ "toolbar=0,"
			+ "hotkeys=0,"
			+ "screenx=50,"
			+ "screeny=50,"
			+ "left=" + (40) + ","
			+ "top=" + (40) ;

		myURL = "/planet_02b/items/" + menuItems[itemNo][1] + menuItems[itemNo][2]
		myWindow = open(myURL, myTarget, myArgs );
	} else {
		myArgs  = "width=" + menuItems[itemNo][5] + "," 
			+ "height=" + (menuItems[itemNo][6]+166) + "," 
			+ "location=0," 
			+ "menubar=0,"
			+ "resizable=0,"
			+ "scrollbars=0,"
			+ "status=0,"             
			+ "titlebar=0,"
			+ "toolbar=0,"
			+ "hotkeys=0,"
			+ "screenx=50,"
			+ "screeny=50,"
			+ "left=" + (40) + ","
			+ "top=" + (40) ;


		myWindow = open("", myTarget, myArgs );
		myWindow.document.write('<html><title>Planet Particle '+menuItems[itemNo][1]+'</title>');
		//myWindow.document.write('<body bgcolor=#000000 marginwidth=0 marginheight=0 topmargin=0 leftmargin=0 link=#666666 vlink=#666666>test</body></html>');
	
		myWindow.document.write('<frameset rows="100,*,66" border=0 frameborder=0 framespacing=0>');
		myWindow.document.write('<frame src="/planet_02b/top.html" NAME="top_frame" SCROLLING=no MARGINHEIGHT=0 MARGINWIDTH=0 NORESIZE>');

		if (menuItems[itemNo][7] == "scroll") {
			myWindow.document.write('<frame src="/planet_02b/items/' + menuItems[itemNo][1] + menuItems[itemNo][2] + '" NAME="main_frame" SCROLLING=yes MARGINHEIGHT=0 MARGINWIDTH=0 NORESIZE>');
			byline = "For further inquiries, please contact us<br><br>::: by phone:&nbsp;&nbsp;+45 3393 0020<br>::: by email:&nbsp;&nbsp;&nbsp;beam@planet.dk";
		} else {
			myWindow.document.write('<frame src="/planet_02b/items/' + menuItems[itemNo][1] + menuItems[itemNo][2] + '" NAME="main_frame" SCROLLING=no   MARGINHEIGHT=0 MARGINWIDTH=0 NORESIZE>');
			byline = menuItems[itemNo][7];
		}

		myWindow.document.write('<frame src="/planet_02b/bottom.html" NAME="bot_frame" SCROLLING=no MARGINHEIGHT=2 MARGINWIDTH=2 NORESIZE>');
		myWindow.document.write('</frameset></html>');			

		myWindow.top_frame.document.write('<body bgcolor='+darkCol+'><img src="/planet_02b/rockets/'+gifName+'" width=100 height=100>');
		myWindow.top_frame.document.write('</html>');
		myWindow.bot_frame.document.write('<body bgcolor='+darkCol+'><table width=400 cellpadding=0 cellspacing=0 border=0><td><font face=verdana,arial style="font-size: 10px; color:'+liteCol+'">'+ byline +'</td></table>');
		myWindow.bot_frame.document.write('</html>');
	}

} else {
	if (menuItems[itemNo][6]>0) {
		myWindow = open(menuItems[itemNo][2], myTarget);
	} else {
		
	}
}
}

// ############################################################################################
// ## add item to list
// ############################################################################################

function AddItem(count,pDate,pURL,pGIF,pTXT,Sizex,pSizeY,pAbout) {
  menuItems[count] = new Array(count,pDate,pURL,pGIF,pTXT,Sizex,pSizeY,pAbout)
}


// ############################################################################################
// ## Draws an item
// ############################################################################################

function drawarray(tab){
	for (counter in tab){
		document.write("<tr><td colspan=3><img src=http://planet.dk/planet_02b/items/space.gif width=1 height=4></td></tr>")
		document.write("<tr><td colspan=3 align=center><table width=700 cellpadding=0 cellspacing=0 border=0>")
		document.write("<td width=200 align=right valign=bottom><font color="+darkCol+">"+tab[counter][1]+"</td>")
		document.write("<td width=100 align=right>&nbsp;</td>")

		if (tab[counter][5]==0 && tab[counter][6]==0){
			document.write('<td width=100><img src=/planet_02b/items/' + tab[counter][1] + tab[counter][3] + ' border=0 width=100 height=100></a></td>');

			document.write("<td width=10 align=right>&nbsp;</td>");
			document.write("<td width=290 align=left valign=bottom><font color="+darkCol+">"+tab[counter][4]+"</td>");
			document.write("</td></table></tr>");
		} else {
			document.write('<td width=100><a href="javaScript:launchParticle(' + tab[counter][0] + ',' + counter + ');"><img src=/planet_02b/items/' + tab[counter][1] + tab[counter][3] + ' border=0 width=100 height=100></a></td>');

			document.write("<td width=10 align=right>&nbsp;</td>");
			document.write('<td width=290 align=left valign=bottom><font color='+darkCol+'><a href="javaScript:launchParticle(' + tab[counter][0] + ',' + counter + ');">'+tab[counter][4]+'</a></td>');
			document.write("</td></table></tr>");
		}
	}
}


// ############################################################################################
// ## show main menu with applet
// ############################################################################################

function Showmenu(subjectText,doDrawItems){

//alert(navigator.appVersion);

if (doDrawItems==1) {
	document.write("<table width=100% cellpadding=1 cellspacing=0 border=0>");
	document.write("<tr><td bgColor="+darkCol+"><img src=http://planet.dk/planet_02b/items/space.gif width=100 height=1></td><td height=200 align=center bgColor="+darkCol+">");
	document.write("<font color="+liteCol+"><a href='mailto:beam@planet.dk?Subject=Inquiry...'><img src=http://planet.dk/planet_02b/rockets/"+gifName+" border=0></a>");  
	document.write("</td><td bgColor="+darkCol+" align=right valign=top><font style='color:"+liteCol+"'>archive:<br>");
	document.write("<a style='color:"+liteCol+";' href='/fonts/'>fonts</a><br>");
	document.write("<a style='color:"+liteCol+";' href='/96_index.html'>96</a><br>");
	document.write("<a style='color:"+liteCol+";' href='/97_index.html'>97</a><br>");
	document.write("<a style='color:"+liteCol+";' href='/98_index.html'>98</a><br>");
	document.write("<a style='color:"+liteCol+";' href='/99_index.html'>99</a><br>");
//	document.write("<a style='color:"+liteCol+";' href='/00_index.html'>00</a><br>");
	document.write("<br><img src=http://planet.dk/planet_02b/items/space.gif width=100 height=1></td></tr>");
	drawarray(menuItems);
	document.write("</table><br><br><br>");
} else {
	document.write("<table width=100% cellpadding=1 cellspacing=0 border=0>");
	document.write("<tr><td bgColor="+darkCol+"><img src=http://planet.dk/planet_02b/items/space.gif width=100 height=1></td><td height=200 align=center bgColor="+darkCol+">");
	document.write("<font color="+liteCol+"><a href='mailto:beam@planet.dk?Subject="+subjectText+"'><img src=http://planet.dk/planet_02b/rockets/"+gifName+" border=0></a>");  
	document.write("</td><td bgColor="+darkCol+" align=right valign=top><font style='color:"+liteCol+"'>archive:<br>");
	document.write("<a style='color:"+liteCol+";' href='/fonts/'>fonts</a><br>");
	document.write("<a style='color:"+liteCol+";' href='/96_index.html'>96</a><br>");
	document.write("<a style='color:"+liteCol+";' href='/97_index.html'>97</a><br>");
	document.write("<a style='color:"+liteCol+";' href='/98_index.html'>98</a><br>");
	document.write("<a style='color:"+liteCol+";' href='/99_index.html'>99</a><br>");
//	document.write("<a style='color:"+liteCol+";' href='/00_index.html'>00</a><br>");
	document.write("<br><img src=http://planet.dk/planet_02b/items/space.gif width=100 height=1></td></tr>");
	document.write("</table>");
	}
}

function showFontStyles(){

	document.write('<style type="text/css"><!--');
	document.write("h1		{ line-height: 12px; margin-height: 2px; color:"+darkCol+"; font-family: Verdana, arial; font-size: 18px }");
	document.write("font		{ color:"+darkCol+"; font-family: Verdana, arial; font-size: 10px }");
	document.write("td		{ color:"+darkCol+"; font-family: Verdana, arial; font-size: 10px }");
	document.write("hr		{ height: 2px; line-height: 2px; padding: 0px; border: 0px solid "+darkCol+"; background-color:"+darkCol+"; color:"+darkCol+"; font-size: 5px}");
	document.write("hr2		{ height: 1px; color "+darkCol+"; background-color:"+darkCol+"; }");
	document.write("pre		{ color:"+darkCol+"; font-family: lucida console, andale mono, monaco, system; font-size: 10px }");
	document.write(".nor		{ line-height: 12px; color:"+darkCol+"; font-family: lucida console, andale mono, monaco, system; font-size: 10px }");

	document.write("a		{ color:"+darkCol+"; text-decoration: none; }");
	document.write("a:hover		{ color:"+darkCol+"; text-decoration: underline; }");
	document.write("--></style>");
}




// ############################################################################################
// ## setup for the menu
// ############################################################################################
// addItem([no],[date],[URL],[iconimagename],[header],[popupwindowsizex (if zero, url will launch in new browser)],[popupwindowsizey (if zero, no link will be active)],[extended comments for popup window])



AddItem(369,"2011.09.15.","http://goo.gl/QmCI1","locationbrowser.png", "<b>The Worlds Coolest GPS Data Viewer!</a></b><br>While building our GPS aggregation service, <a href='http://apps.facebook.com/activities/' target='_empty'><u>Activities on Facebook</u></a>, we have accumulated several million tracks around the globe from users and partner services. <a href='http://goo.gl/QmCI1' target='_empty'><u>Click here to browse the entire data set</u></a> in full resolution, and click any track to view metadata like users, visits and pictures from the neighborhood!",0,1,"")
AddItem(370,"2011.08.01.","http://www.pulsetracks.com/","pulsetracks.png", "<b>Pulsetracks.com</a></b><br>Over the past 12 months, we have tweaked, tested, invented, and implemented hundreds of new features, and the Activities service has grown from a single machine serving a few neighborhood friends, to a scalable cloud of machines serving users around the globe...",0,1,"")
AddItem(371,"2008.01.11.","http://www.gamezebo.com/games/shroomz-quest-puppy/review","shroomz.gif", "<b>Shroomz reviewed on Gamezebo</a></b><br>Our old award-winning arcade game Shroomz got a rave if slightly belated review on Gamezebo last week. Read the review and try the online version on <a href='http://www.gamehouse.com/download-games/shroomz' target='_empty'><u>RealArcade</u></a>. If you like it, you should know that the <a href='http://www.gamehouse.com/download-games/shroomz' target='_empty'><u>download version</u></a> offers full screen play and tons of ever-changing challenges!",0,1,"")
AddItem(372,"2007.05.23.","http://www.bigfishgames.com/download-games/1655/highseasthefamilyf/index.html","highseas.jpg","<b>New Casual Game Launched</b></a><br>Our latest game, <a href='http://www.bigfishgames.com/download-games/1655/highseasthefamilyf/index.html' target='_new'><u>High Seas – The Family Fortune </u></a> soft-launched today on several casual portals. The innovative mechanics of High Seas introduces physics, sand-box interactivity, and multi-axis matching to the matching puzzle genre. Go check it out right away on <a href='http://www.bigfishgames.com/download-games/1655/highseasthefamilyf/index.html' target='_new'><u>BigFish Games</u></a>.",0,1,"")
AddItem(373,"2007.02.01.","game_teaser.html",                                   "game_teaser.jpg",  "<b>Upcoming game teaser #4</b><br>Prepare for the launch of a great new Planet game. This time we've teamed up with <a href='http://www.soupgames.net/' target='_new'><u>Soup Games</u></a> and spent over a year producing an innovative casual game, which combines sand-box gameplay with the mechanics of the traditional matching puzzler. We expect to launch on major download channels within a couple of months!",0,0,"")
AddItem(374,"2006.11.14.","http://www.fontriver.com/award/",                    "font_river.gif",   "<b>Best Designer Award 2006</b></a><br>The Planet has just received The Font River 2006 Best Designer Award for its beautiful and trend setting font designs. Check out the <a href='http://www.fontriver.com/' target='_new'><u>Award site</u></a> or <a href='/fonts/' target='_top'><u>download our fonts</u></a> and start making your world a prettier place :-)",0,1,"")
AddItem(375,"2006.02.24.","http://www.planet.dk/transscriber/",                 "transscriber.gif", "<b>transScriber v1.7 launched</b><br>Mads Rydahl of The Planet has just released a new and improved version of his shareware interview transcribtion tool. Have a look at the new feature set of this neat little tool.",0,1,"")
AddItem(376,"2004.11.22.","press.html",                                         "computerworld.jpg","<b>Press release: Shroomz</b><br></a>After winning international acclaim at the 2004 Digital Entertainment Awards, we have received much <a href='http://www.computerworld.dk/default.asp?Mode=2&ArticleID=26176' target='_empty'><u>attention from the Danish press</u></a>. To assist journalists seeking information about our company, The Planet has issued a general statement.", 600,450, "scroll")
AddItem(377,"2004.11.06.","http://www.digitalentertainmentawards.com/finalists.html","billboard.gif","<b>Web/Downloadable Game of the Year!</b></a><br>Yesterday, our most recent game, <a href='http://get.games.yahoo.com/proddesc?gamekey=shroomz' target='_new'><u>Shroomz</u></a> was awarded best webgame of the year at the Billboard Digital Entertainment Awards in Los Angeles! Thank you so much!",0,1,"")
AddItem(378,"2004.08.25.","http://www.gamehouse.com/download-games/shroomz",             "shroomz.gif",      "<b>Shroomz Launched on Shockwave.com</b><br>Try out our fabulous new puzzle/action game! It's all instant addictive action, and the download version offers full screen play and tons of levels!",0,1,"")
AddItem(379,"2004.03.10.","shroomz.html",                                       "shroomz.jpg",      "<b>Upcoming game teaser #3</b><br>After a long period without public releases, we are back to announce the launch of another Planet game. Stay tuned for another couple of months! You are just going to love this wacky babe!",0,0,"")
AddItem(380,"2004.02.15.","spain.html",                                         "spain.jpg",        "<b>Production has begun in our office in Spain.</b><br>We've had an office in Spain for about a year, and now it finally seems like we will be doing something down there besides surfing.", 700,360, "<b>A windy morning in The Canary Islands...</b><br>After months of setting up, checking out the Surf and hanging out, production of our next publicly available project has finally begun.<br>The picture shows the view from the balcony of our production office in Las Palmas de Gran Canaria. Yes; It <i>is</i> right on the beach ;-)")
AddItem(381,"2003.06.24.","http://club.lego.com/clubgames/dreamz/",             "dreamz_launch.gif","<b>LEGO Dreamz Launched</b><br>The Planet presents another great little puzzle gem... get ready for 90 levels of sickly cute minifig mayhem! If you don't have a sign-in at Lego Club, feel free to use <b>planetdk</b> as username and password.",0,1,"")
AddItem(382,"2003.05.03.","http://www.director-3d.com/article.php?story_id=98", "beltz_review.gif", "<b>Beltz Reviewed!</b><br>The Planet's recently released 'Beltz' game has already won the acclaim of many of our fellow Shockwave developers. At 'Director-3D', developer and author Allen Partridge reviews 'Beltz' and seems to like it...",0,1,"")
AddItem(383,"2003.04.04.","http://club.lego.com/clubgames/beltz/",              "beltz_launch.gif", "<b>LEGO Beltz Launched</b><br>The Planet's original arcade puzzler 'Beltz' is launched on lego.com to instant hit status... You may want to log in to the LEGO Club using <b>planetdk</b> as username and password, and then hit this link again.",0,1,"")
AddItem(384,"2002.12.20.","xmas.html",                                          "xmas.gif",         "<b>Holiday Greetings!</b><br>Merry Christmas, all the best wishes for the New Year, and a couple of words about the future...",    500,520,    "")
AddItem(385,"2002.08.01.","press.html",                                         "press.jpg",        "<b>Press Release: Legal info</b><br>Our company has been reconstructed to form 'The&nbsp;Planet&nbsp;A/S' a Danish incorporated.",    600,450,    "scroll")
AddItem(386,"2002.07.26.","bounce.html",                                        "bounce.jpg",       "<b>SW3D Concept prototype</b><br>An early proto of a 3D game concept we hope to start developing next year. NB: All graphics are placeholders. ;-)",                              640,580,    "<b>Try jumping off the side of the level...</b><br>Ctrl+SHIFT zooms the camera, use the buttons and leveleditor in the lower part of the screen to modify the level and invert controls when jumping around on the back side of the tiles...")
AddItem(387,"2002.07.15.","logo.html",                                          "logo.jpg",         "<b>New logo design released</b>",                              525,525,    "The Planet have announced a new take on the familiar rocket logo which has been with the company since its incept in 1995. ‘We are quite pleased with the new, tighter monochrome look. It’s really a natural progression from the previous incarnations.’")
AddItem(388,"2002.07.02.","http://club.lego.com/clubgames/dreamz/",             "dreamz.gif",       "<b>Upcoming game teaser #2</b><br>Watch this space for the upcoming Planet games...",0,1,"")
AddItem(389,"2002.07.01.","http://club.lego.com/clubgames/beltz/",              "beltz.gif",        "<b>Upcoming game teaser #1</b><br>Watch this space for the upcoming Planet games...",0,1,"")
AddItem(390,"2002.06.25.","http://rocketpunchmagazine.com/finn/planet.php",     "rocketpunch.gif",  "<b>RocketPunch Magazine interviews The Planet</b><br>Hip NYC anime magazine RocketPunch requested an audience with The Planet, which we gracefully accepted. The interview features lengthy comments to our relationship with Lego.com...",0,0,"")
AddItem(391,"2002.06.20.","http://web.archive.org/web/20040401203902/http://www.setpixel.com/content/?ID=30",      "setpixel.jpg",     "<b>Interview at SetPixel.com</b><br>Charles Forman’s excellent Shockwave community site ‘SetPixel’ requested an interview with The Planet. Check it out people.",    0,1,        "")
AddItem(392,"2002.05.15.","http://www.fhm.com/",                                "fhm100.gif",       "The Planet’s off-road racing game, ‘LEGO 4x4 Extreme Rally’, was selected by British men’s magazine FHM for ‘100 Greatest Online Games’. FHM puts ‘4x4’ at no. 9, and lauds the game for ‘beautifully rendered graphics from Denmark’s finest export after bacon’. We suspect they might mean LEGO, but thanks anyway!",0,1,"")
AddItem(393,"2002.02.01.","http://www.planet.dk/projects/galidor/",             "galidor.jpg",      "<b>Galidor Map Navigator</b><br>The Planet produced an atmospheric 3D web knowledge base interface for ‘Galidor’, the LEGO / Fox Kids sci-fi TV series. It’s our first fully Flash-based production, and we’re pretty pleased with it - you might want to note the use of a couple of new Planet fonts designed especially for the piece, namely Texalis and Universalis.",0,1,"")
AddItem(394,"2001.08.15.","4x4.html",                                           "4x4.jpg",          "<b>4x4 Extreme Rally</b><br>Developed for LEGO to coincide with the release of the Technic Offroaders line of products, this 3D racing game takes you on a wild ride through a barren frontier world. Earn awards racing and upgrade your 4x4 to tackle ever-crazier terrain.",    580,320,    "")
AddItem(395,"2001.05.08.","http://www.planet.dk/projects/skateboard/",          "sk8.jpg",          "<b>Pepper’s Skateboard Challenge</b><br>Skate and trick your way into the world league with this Planet take on popular extreme racers SSX and WipeOut. Collect stars to upgrade your board and avatar.",0,1,"")
AddItem(396,"2001.01.25.","http://www.planet.dk/planet_02b/items/2001.01.25.ski.html","ski.jpg",    "<b>Carlsberg 3D Ski Simulator</b><br>Pick your skis carefully for one of three disciplines in this downhill rush developed for Carlsberg’s after ski campaign in 2001. It has been relaunched for the 2003 season in a somewhat cut-down version.</i>",0,1,"")





