import { log } from 'log';

/**
 * The scoped constructor of the controller.
 **/
(function constructor() {
    
})();

function sliderValueChanged(e) {
    $.state.setText('Current value: ' + e.value.toFixed(2) + ' / ' + e.source.max);
    log.log('Ti.UI.Slider value changed to ' + e.value);
}
