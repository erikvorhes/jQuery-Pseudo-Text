(function ($) {
    
    var styleEl,
        styleRules = "",
        defaultOptions = {
            "pseudoEl": ":before",
            "text": "",
            "clsName": "☌"
        };
    
    $.fn.pseudoText = function (customOptions) {
        
        var $this = this,
            options = $.extend({}, defaultOptions, customOptions);
        
        $this.each(function (i) {
            
            var $el = $(this),
                text = options["text"] || $el.text();
            
            $el.addClass(options["clsName"] + i);
            
            styleRules += "." + options["clsName"] + i + options["pseudoEl"] + "{content:\"" + text + "\";}";
        
        });
        
        styleEl = $("<style/>").text(styleRules).appendTo("head");
        
        return $this;
    
    }
    
})(jQuery);