var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        // document.body.style.minHeight = window.innerHeight;
        // document.body.style.maxHeight = window.innerHeight;
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        if(parentElement!=null)
        {
            var listeningElement = parentElement.querySelector('.listening');
            var receivedElement = parentElement.querySelector('.received');
            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');
        }
        console.log('Received Event: ' + id);
    }
};

document.getElementById("botaoPesquisa").addEventListener("click", function(){
    document.getElementById('caixaPesquisa').style.visibility="visible";
    document.getElementById('caixaPesquisa').focus()
});

document.getElementById("caixaPesquisa").addEventListener("blur", function(){
    document.getElementById('caixaPesquisa').style.visibility="hidden";
});