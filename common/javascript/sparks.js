/*
 * Common initial setup for SPARKS activities
 */

// Create a dummy console.log when not run in Firebug
if (typeof console == 'undefined') {
    var console = { log: function() {} };
    //var console = { log: alert };
}

// Setup a global namespace to store page variables
jQuery.sparks = {};

// Parse the page params so things can be customized
var value = null;

value = jQuery.url.param("model_height");
jQuery.sparks.modelHeight = value != null ? value : '635';

jQuery.sparks.debug = jQuery.url.param("debug") != null;
jQuery.sparks.debug_mode = jQuery.url.param("debug_mode");

$(document).ready(function() {
    // In some cases (e.g. IE) Flash is loaded before document ready,
    // making initActivity() fail because activity isn't set up.
    // So for now creating activity in initActivity
    
    //jQuery.sparks.activity = new ResistorActivity();
    //jQuery.sparks.activity.initDocument();
});


/* 
 * This function gets called from Flash after Flash has set up the external
 * interface. Therefore all code that sends messages to Flash should be
 * initiated from this function.
 */
function initActivity() {
//function onFlashLoad() {
    console.log('ENTER initActivity');
    jQuery.sparks.activity = new ResistorActivity();
    jQuery.sparks.activity.initDocument();
    jQuery.sparks.activity.onFlashDone();
}

/**
The initial version of this was copied from the serializeArray method of jQuery
this version returns a result object and uses the names of the input elements
as the actual keys in the result object.  This requires more careful naming but it
makes using the returned object easier.  It could be improved to handle dates and
numbers perhaps using style classes to tag them as such.
*/
function serializeForm(form) {
    var result = {}
    form.map(function(){
     return this.elements ? jQuery.makeArray(this.elements) : this;
    })
    .filter(function(){
     return this.name &&
       (this.checked || /select|textarea/i.test(this.nodeName) ||
        /text|hidden|password|search/i.test(this.type));
    })
    .each(function(i){
     var val = jQuery(this).val();
     if(val == null){
       return;
     }
     
     if(jQuery.isArray(val)){
       result[this.name] = jQuery.makeArray(val)
     } else {
       result[this.name] = val;
     }
    })
    return result;
}