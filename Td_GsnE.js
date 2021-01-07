var fuckAdBlock = undefined, FuckAdBlock = undefined;

var adBlockDetected = function() {
            $('h1 span').text('yes');
        }
        var adBlockUndetected = function() {
            $('h1 span').text('no');
        }
        if(typeof  FuckAdBlock === 'undefined') {
            $(document).ready(adBlockDetected);
        } else {
            fuckAdBlock.on(true, adBlockDetected).on(false, adBlockUndetected);
        }
        // It removes the variable "fuckadblock" and "FuckAdBlock
        // so that it not be exploited by another script later
        // but beware, you can not use it too!
        fuckAdBlock = undefined;
        
        // Do not use FuckAdBlock outside this area
        // (between importing the script and the line above)
