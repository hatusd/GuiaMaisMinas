var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
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
        var vih = window.innerHeight;
        var viw = window.innerWidth;
        var cab = document.getElementById('Cabecalho').offsetHeight;
        var rod = document.getElementById('Rodape').offsetHeight;
        var cor = vih - (cab+rod);
        var ima = cor/3;
        var cli =  document.getElementsByClassName("ads");
        var i;
        alert(ima);
        for (i = 0; i < cli.length; i++) {
           cli[i].height = ima;
           cli[i].width = viw;
        }
        cli[0].style.marginTop = cab + "px";
        var config = {
                    apiKey: "AIzaSyC5ycfXqjVpKQZqsQ-soPB_FCe_3wqs0hE",
                    authDomain: "teste-e3241.firebaseapp.com",
                    databaseURL: "https://teste-e3241.firebaseio.com",
                    projectId: "teste-e3241",
                    storageBucket: "teste-e3241.appspot.com",
                    messagingSenderId: "401343167321"
                };
        firebase.initializeApp(config);

        //Carregar imagem do storage
        //Criação de referencia a raiz do storage
        var storage = firebase.storage();
        var storageRef = storage.ref();
        
        //Acessando o arquivo
        storageRef.child('ads/Ads1.png').getDownloadURL().then(function(url) {
            //Variável de referencia onde será inserido a imagem
            var img = document.getElementById('ads1');
            img.src = url;
            }).catch(function(error) {
                //Em caso de erro
            });
        storageRef.child('ads/Ads2.png').getDownloadURL().then(function(url) {
            //Variável de referencia onde será inserido a imagem
            var img = document.getElementById('ads2');
            img.src = url;
            }).catch(function(error) {
                //Em caso de erro
            });
        storageRef.child('ads/Ads3.png').getDownloadURL().then(function(url) {
            //Variável de referencia onde será inserido a imagem
            var img = document.getElementById('ads3');
            img.src = url;
            img.width = "100%";
            }).catch(function(error) {
                //Em caso de erro
            });
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