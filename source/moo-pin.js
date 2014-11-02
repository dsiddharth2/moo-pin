/*
---

description: Moo-pin is a small Mootools javascript plugin inspired from jquery Wookmark plugin.
It attempts to display the elements in a dynamic column grid.

license: MIT-style

authors:
- Siddharth Deshpande (dsiddharth2@gmail.com)

requires:
- core/1.4: '*'
- more/1.4: '*'

provides:
- MooPin
...

* Mootools Pin
* Version 1.0
* Copyright (c) 2014 Siddharth Deshpande
*
* Requires:
* MooTools http://mootools.net
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*
*/

var MooPin = {};

(function($) { // Dollar Safe Mode
	MooPin = new Class({
		Implements: [Options, Events],

		options: {
			container 			: '.moo-main',		// Main Container for the display of items
			gutter				: 20,				// The Sapce between the columns displayed
			bottom_margin		: 30,				// The Bottom Margin of each pin
			autoResize			: true,				// Adjust the pins on resize of window
			/* 	onWindowResize	: $empty,			// Event fired after the Window is resized 
				onRender		: $empty,			// Event fired after pins are rendered	
			*/
		},

		initialize: function(options){
			this.setOptions(options);
			this.element = $(this.options.container);
			this.attach();
			this.render(); // Code to show the pins
		},

		attach: function() {
			if(this.options.autoResize) {
				window.addEvent('resize', function(){
					this.render();
					this.fireEvent('windowResize'); // Fire event when window is resized
				}.bind(this));
			}
		},

		/**
		 * Function that will render the pins on the screen in the layout
		 */
		render: function() {
			var self = this;
			
			var // Get the column size
				column_size = self.element.getElement('.item').getSize(),

				// Get the total width of the container
				totalContainerWidth = self.element.getElement('.tiles').getSize().x + 20,

				// Calculate total number of columns that can be fit into the tile width
				totalColumns = (totalContainerWidth / ( column_size.x + this.options.gutter )).toInt(),

				// Array of heights to store each column heights
				array_Height = new Array(totalColumns);

			// Initialze array elements with zero
			for (var i = 0; i < array_Height.length ; i++) {
				array_Height[i] = 0;
			}
			
			// Decide the position of elements
			self.element.getElements('.item').each(function(item, index) {				
				min_value = array_Height.min();
				item_size = item.getSize();
				topPosition = min_value;
				index_of_min = array_Height.indexOf(min_value);				
				leftPosition = (item_size.x + self.options.gutter) * (index_of_min);
				array_Height[index_of_min] = array_Height[index_of_min] + self.options.bottom_margin + item_size.y;

				item.setStyles({
					top: topPosition + 'px',
					left: leftPosition + 'px',
					position: 'absolute'
				});
			});
			this.fireEvent('render'); // Fire event after pins are rendered
		}
	});
})(document.id);