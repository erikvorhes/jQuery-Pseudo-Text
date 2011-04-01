# "Pseudo Text" plugin for jQuery

This plugin allows you to inject text content into a CSS [pseudo-element][] of your choosing. The plugin defaults to the CSS2 `:before` pseudo-element and duplicates the text of the jQuery selectors you've specified. This is the simplest usage of the plugin, applied to all `<h2>` elements on a page:

    $(document).ready(function () {
        $('h2').pseudoText();        
    });

This results in whatever text is in each `<h2>` to be duplicated _before_ the original text. The plugin achieves this by iterating over each element in your selector, assigning each one a unique class name, and generating a CSS style rule for it. Once this process is complete, the plugin appends a `<style>` element (containing all of the CSS rules) to the document `<head>`. For the above example, this generated code would look something like this (assuming 3 `<h2>` elements on the page):

    <style>
        .☌0:before { content: "Hello, text from the first h2."; }
        .☌1:before { content: "Hello, text from the second h2."; }
        .☌2:before { content: "Hello, text from the third h2."; }
    </style>

You have three optional parameters:

- `pseudoEl`: The pseudo-element you wish to use, which defaults to `:before`.
- `text`: The text you wish to inject, which defaults to the text in whichever instance of the element you're affecting.
- `clsName`: The prefix for the class you wish to use on each affected element. This option defaults to the Unicode character _☌_, since the odds of it appearing in your code is highly unlikely. (This character apparently signifies "conjunction," if that matters to you.)

## Admonition

Remember, content generated in CSS should be presentational only--and not be required to discern meaning. As such, you should only use this plugin for things of the "bells and whistles" variety.

## Compatibility

Due to the nature of pseudo-elements, the support for this plugin is a bit limited. (E.g., versions of Internet Explorer earlier than IE 9 are likely not to work.) This plugin has been tested and works in the following browsers:

- Firefox 3.6.x and Firefox 4
- Opera 11
- Safari 5
- Chrome 10
- Internet Explorer 9

If you run into any issues using this plugin, please file a ticket. If you have any enhancements, feel free to fork this!

## License

I don't really care how you use this thing, but if _you_ care about such things, let's say that this plugin is licensed under the [MIT license][mit]. Cool?

[pseudo-element]: http://www.w3.org/TR/css3-selectors/#pseudo-elements "CSS3 Pseudo elements"
[mit]: http://en.wikipedia.org/wiki/MIT_License