/*jslint white: true, browser: true, undef: true, nomen: true, eqeqeq: true, plusplus: false, bitwise: true, regexp: true, strict: true, newcap: true, immed: true, maxerr: 14 */
/*global window: false, REDIPS: true */

/* enable strict mode */
"use strict";

// define redipsInit variable
var redipsInit;

// redips initialization
redipsInit = function () {
	var num = 0,			// number of successfully placed elements
		rd = REDIPS.drag;	// reference to the REDIPS.drag lib
	// initialization
	rd.init();
	
	// enable shift animation
	rd.shift.animation = true;
	// in a moment when DIV element is moved, set drop_option property (shift or single)
	rd.event.moved = function () {
		// find parent table of moved element
		var tbl = rd.findParent('TABLE', rd.obj);
		// if table id is table1
		/*if (tbl.id === 'table1') {
			rd.dropMode = 'shift';
		}
		else {
			rd.dropMode = 'single';
		}*/
		rd.dropMode = 'shift';
	};
	
	// set hover color
	rd.hover.colorTd = '';
	// define green elements for green cells
	rd.mark.exception.green = 'green_cell';
	rd.mark.exception.greenc0 = 'green_cell';
	// define orange elements for orange cells
	rd.mark.exception.orange = 'orange_cell';
	rd.mark.exception.orangec0 = 'orange_cell';
	rd.mark.exception.orangec1 = 'orange_cell';
	rd.mark.exception.orangec2 = 'orange_cell';
	rd.mark.exception.orangec3 = 'orange_cell';
	// this function (event handler) is called after element is dropped
	rd.event.dropped = function () {
		// message text
		//var msg;
		// if the DIV element was placed on allowed cell then 
		if (rd.td.target.className.indexOf(rd.mark.exception[rd.obj.id]) !== -1) {
			// make it a unmovable
			rd.enableDrag(false, rd.obj);
			// increase counter
			num++;
			// prepare and display message
			
			if (proxPantalla == 1) { 
				if (num < 1) {
					//msg = 'Monedas ubicadas correctamente: ' + num;
				} else {
					//msg = 'Bien hecho...';
					//document.getElementById('message').innerHTML = msg;
					//alert('Listo :)');
					var timerHidePant = setTimeout(function() {
						$("#pantalla01").fadeOut(300);
						clearTimeout(timerHidePant);
					}, 200);
					var timerOk = setTimeout(function() {
						$("#respuestaOk").fadeIn(300);
						clearTimeout(timerOk);
					}, 500);
				}//end if num
			}//end if proxPantalla
			
			if (proxPantalla == 2) { 
				if (num < 2) {
				} else {
					var timerHidePant = setTimeout(function() {
						$("#pantalla02").fadeOut(300);
						clearTimeout(timerHidePant);
					}, 200);
					var timerOk = setTimeout(function() {
						$("#respuestaOk").fadeIn(300);
						clearTimeout(timerOk);
					}, 500);
				}//end if num
			}//end if proxPantalla
			
			if (proxPantalla == 3) { 
				if (num < 3) {
				} else {
					var timerHidePant = setTimeout(function() {
						$("#pantalla03").fadeOut(300);
						clearTimeout(timerHidePant);
					}, 200);
					var timerOk = setTimeout(function() {
						$("#respuestaOk").fadeIn(300);
						clearTimeout(timerOk);
					}, 500);
				}//end if num
			}//end if proxPantalla
			
			if (proxPantalla == 4) { 
				if (num < 4) {
				} else {
					var timerHidePant = setTimeout(function() {
						$("#pantalla04").fadeOut(300);
						clearTimeout(timerHidePant);
					}, 200);
					var timerOk = setTimeout(function() {
						$("#respuestaOk").fadeIn(300);
						clearTimeout(timerOk);
					}, 500);
				}//end if num
			}//end if proxPantalla
			
		}
	};
};

// add onload event listener
if (window.addEventListener) {
	window.addEventListener('load', redipsInit, false);
}
else if (window.attachEvent) {
	window.attachEvent('onload', redipsInit);
}
