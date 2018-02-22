import { log } from 'log';

/**
 * The scoped constructor of the controller.
 **/
(function constructor() {
    
})();

function openComponent(e) {
    var identifier = 'controls/views/' + e.section.getItemAt(e.itemIndex).properties.itemId;
    var component = Alloy.createController(identifier).getView();
    
    Alloy.Globals.setAndroidBackButton(component);
    Alloy.CFG.tabGroup.getActiveTab().open(component);

    log.log('Ti.UI.TabGroup.activeTab.open', identifier);
}
