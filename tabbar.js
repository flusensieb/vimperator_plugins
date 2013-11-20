var INFO = 
<plugin name="treestyletab_tabbar" 
    version="0.1" 
    href="http://github.com/flusensieb/vimperator_plugins"
    summary="Adds a command to show/hide the tabbar of TreeStyleTab"
    xmlns="http://vimperator.org/namespaces/liberator">
    <author email="flusensieb@openmailbox.org">flusensieb</author> 
    <license href="http://opensource.org/licenses/MIT">MIT</license>
    <project name="Vimperator" minVersion="3.7"/>
    <p>
        This plugin provides a command "tabbar" to show and hide the tabbar of TreeStyleTab. It uses the same methods as TreeStyleTabs autohide-function.
    </p>
    <item>
        <tags>'tabbar'</tags>
        <spec>'tabbar'</spec>
        <type>string</type>
        <default>none</default>
        <description>
            <p>
                Use 'tabbar show' to show the tabbar, and 'tabbar hide' to hide the tabbar.
            </p>
        </description>
    </item>
</plugin>;

(function() {
    commands.addUserCommand(['tabbar'], 'Manage tabbar visibility', function() {},
        {
            subCommands: [
                new Command(['show'], 'Show tabbar', function(args) gBrowser.treeStyleTab.showTabbar("vimperator wants it")),
                new Command(['hide'], 'Hide tabbar', function(args) gBrowser.treeStyleTab.hideTabbar("vimperator wants it")),
            ],
        }, true);
})();



