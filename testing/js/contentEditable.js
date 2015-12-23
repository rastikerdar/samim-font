// jQuery contentEditable() plugin
//
// Created by: Makis Tracend (@tracend)
// Issue: http://stackoverflow.com/a/6263537
//
// Licensed under the GPL Version 2: http://www.gnu.org/licenses/gpl-2.0.html

(function( $ ){

  var methods = {
	 init : function( options ) {
		
		return this.each(function(){
		 
			var $this = $(this);
			
			//reset any previous change events set
			$this.unbind("change");
			
			$this.find('[contenteditable]').each(function(){
			
				$(this).contentEditable("field", $this);
				
			});
			
		});
	 },
	 field : function( parent ) {
	 
	 	return this.each(function(){
		
		 	var $this = $(this);
			// setting the key based on an attribute available on the same level as 'contentEditable'
			var key = $this.attr("data-key");
			// add triggers
			$this.live('focus', function() {
				var $this = $(this);
				$this.data('enter', $this.html());
				$this.data('before', $this.html());
				return $this;
			}).live('keyup paste', function() {
				var $this = $(this);
				var text = $this.html();
				if ($this.data('before') !== text) {
					$this.data('before', text);
					var data = {};
					data[key] = text;
					parent.trigger({type: 'change', action : 'update', changed: data});
				}
				return $this;
			}).live('blur', function() {
				var $this = $(this);
				var text = $this.html();
				if ($this.data('enter') !== text) {
					$this.data('enter', text);
					var data = {};
					data[key] = text;
					parent.trigger({type: 'change', action : 'save', changed: data});
				}
				return $this;
			})
	 	});
	 }
  };

  $.fn.contentEditable = function( method ) {
	
	if ( methods[method] ) {
	  return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
	} else if ( typeof method === 'object' || ! method ) {
	  return methods.init.apply( this, arguments );
	} else {
	  $.error( 'Method ' +  method + ' does not exist on jQuery.contentEditable' );
	}	
  
  };

})( jQuery );