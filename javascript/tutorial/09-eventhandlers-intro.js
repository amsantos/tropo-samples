// --------------------------------------------
// handling wrong things the right way - introducing event handlers
// See http://www.tropo.com for more info
// --------------------------------------------

answer();

result=ask( "For sales, just say sales or press 1. For support, say support or press 2.", 
			{ choices:"sales( 1, sales), support( 2, support)", repeat:3,
			  onBadChoice: function() { say("I'm sorry, I didn't understand what you said.") } 
			} );

if (result.name=='choice')
{
	if (result.value=="sales") 
	{ 
		say( "Ok, let me transfer you to sales."       );
		transfer( "14075551111");
	}
	if (result.value=="support") 
	{ 
		say( "Sure, let me get support.  Please hold." );
		transfer( "14085552222");
	}
}

