'use strict';
'require view';

return view.extend({
    render: function() {
        var frame = E('iframe', {
            src: window.location.protocol + '//' + window.location.host + '/tinyfm/index.php',
            style: 'width: 100%; min-height: 100vh; border: none; border-radius: 4px;'
        });

        return E('div', { class: 'cbi-map' }, [
            E('br'),
            frame
        ]);
    }
});
