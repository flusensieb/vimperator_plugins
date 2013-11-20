var INFO = 
<plugin name="inputhint" 
    version="0.1" 
    href="http://github.com/flusensieb/vimperator_plugins"
    summary="Extended hint mode for input fields"
    xmlns="http://vimperator.org/namespaces/liberator">
    <author email="flusensieb@openmailbox.org">flusensieb</author> 
    <license href="http://opensource.org/licenses/MIT">MIT</license>
    <project name="Vimperator" minVersion="3.7"/>
    <p>
        This plugin provides an extended hint mode that only hints input fields (input, textarea or div with contenteditable=true).
        You can start this hint mode like any other extended hint mode, it's mode letter is 'i'. So: ";i" will start this hint mode.
    </p>
</plugin>;

(function() {

    const INPUT_HINT_TAGS = '//input[@type="text" or @type="password" or not(@type)] | //textarea | //*[@contenteditable="true"]';

    options.add(["inputhinttags", "iht"], 
        "XPath string of hintable elements for input hints activated by ;i",
        "string", INPUT_HINT_TAGS);

    hints.addMode('i', 'Restrict to input fields', function(elem) buffer.focusElement(elem), function() options["inputhinttags"]);
})();



