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