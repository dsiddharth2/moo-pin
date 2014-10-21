var MooPin = {};

(function($) { // Dollar Safe Mode
	MooPin = new Class({
		Implements: [Options, Events],

		options: {
			container 	: '.moo-main',		// Main Container for the display of items
			gutter		: '20',				// The Sapce between the columns displayed
		},

		initialize: function(options){
			this.setOptions(options);
			this._load();
		},

		// Private Methods
		_load: function() {
	        this.element = $(this.container);

	        var column_size = this.element.getElement('.item').getSize(), // Get the column size
	        	widthParentTiles = this.element.getElement('.tiles').getSize().x + 20, // Get the total width
	        	array_Height = null, // Array for storing the heights of each elements

	        // Calculate total number of columns that can be fit into the tile width
        	this.totalColumns = (widthParentTiles / ( column_size.x + this.gutter )).toInt();

        	// Array of heights to store each column heights
	        var array_Height = new Array(totalElementsCanFit);
	        var item_elements = main_contet.getElements('.item');
	        var theIndex = 0;
	        var tiles_position = main_contet.getElement('.tiles').getPosition(main_contet);

	        var leftPosition = tiles_position.x;
	        var topPosition = tiles_position.y;
	        var item_size = 0;
	        var min_value = 0;

	        for (var i = 0; i < array_Height.length ; i++) {
	          array_Height[i] = 0;
	        }

	        item_elements.each(function(item, index) {
	          theIndex = index % totalElementsCanFit;
	          item_size = item.getSize();

	          min_value = array_Height.min();
	          index_of_min = array_Height.indexOf(min_value);

	          topPosition = min_value;
	          leftPosition = (item_size.x + col_margin) * (index_of_min);
	          array_Height[index_of_min] = array_Height[index_of_min] + 20 + item_size.y;

	          console.log({
	            top: topPosition + 'px',
	            left: leftPosition + 'px',
	            position: 'absolute'
	          });

	          item.setStyles({
	            top: topPosition + 'px',
	            left: leftPosition + 'px',
	            position: 'absolute'
	          });
	        });



		}.protect(),
	});
})(document.id);