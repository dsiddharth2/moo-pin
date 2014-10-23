var MooPin = {};

(function($) { // Dollar Safe Mode
	MooPin = new Class({
		Implements: [Options, Events],

		options: {
			container 	: '.moo-main',		// Main Container for the display of items
			gutter		: 20,				// The Sapce between the columns displayed
		},

		initialize: function(options){
			this.setOptions(options);
			this.element = $(this.options.container);

			this.renderPins(); // Code to show the pins
		},

		renderPins: function() {
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
				array_Height[index_of_min] = array_Height[index_of_min] + 20 + item_size.y;

				item.setStyles({
					top: topPosition + 'px',
					left: leftPosition + 'px',
					position: 'absolute'
				});
			});
		}
	});
})(document.id);