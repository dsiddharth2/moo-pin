MooPin - A Mootools Column Grid Plugin
===========================================
MooPin is a small [MooTools](http://mootools.net/) plugin to create Column grid as seen in Pinterest.
It can be used to create a column grid for infinite scroll. It been inspired from Wookmark Jquery
Plugin.


How to Use
----------


Basic Configuration
--------------------

Html Code:

	#HTML
    
    <div class="main" id="main">
        <div class="tiles">
            <div class="item"><img src="../assets/sample-images/image_1.jpg" width="200" height="283"><p>1</p></div>
            <div class="item"><img src="../assets/sample-images/image_2.jpg" width="200" height="300"><p>2</p></div>
            <div class="item"><img src="../assets/sample-images/image_3.jpg" width="200" height="252"><p>3</p></div>
            <div class="item"><img src="../assets/sample-images/image_4.jpg" width="200" height="158"><p>4</p></div>
            <div class="item"><img src="../assets/sample-images/image_5.jpg" width="200" height="300"><p>5</p></div>
            ......
            ......
            ......            
		</div>
	</div>

Snippt of Javascript Code:

	#JS

        var pins = new MooPin({
            container   : 'main'
        });

Events
--------------------
- onWindowResize : fires after the window is resized
- onRender : fires after the content is rendered on the screen


Testing
--------------------

Tested On Chrome(37+), Firefox(32+)

I have not tested on any other browsers, please let me know on which browsers its not working.
Or you can fork the Plugin and request a merge request.

Contibution
--------------------
Please Contribute or suggest changes.