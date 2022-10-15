var map = L.map('map').setView([5.538096837736783, -73.35982108728754], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

class Mapa {

    miVisor;
    mapaBase;
    posicionInicial;
    escalaInicial;
    proveedorURL;
    atributosProveedor;
    marcadores = [];
    circulos = [];
    poligonos = [];

    constructor() {

        this.posicionInicial = [5.538096837736783, -73.35982108728754];
        this.escalaInicial = 14;
        this.proveedorURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        this.atributosProveedor = {
            maxZoom: 20
        };


        this.miVisor = L.map("mapid");
        this.miVisor.setView(this.posicionInicial, this.escalaInicial);
        this.mapaBase = L.tileLayer(this.proveedorURL, this.atributosProveedor);
        this.mapaBase.addTo(this.miVisor);
    }


    colocarMarcador(posicion) {

        this.marcadores.push(L.marker(posicion));
        this.marcadores[this.marcadores.length - 1].addTo(this.miVisor);
    }

    colocarCirculo(posicion, configuracion) {

        this.circulos.push(L.circle(posicion, configuracion));
        this.circulos[this.circulos.length - 1].addTo(this.miVisor);

    }

    colocarPoligono(posicion) {

        this.poligonos.push(L.polygon(posicion));
        this.poligonos.addTo(this.miVisor);
    }

}

let miMapa = new Mapa();












miMapa.colocarMarcador().onclick = function(event){
    event.preventDefault()


}


miMapa.colocarCirculo([5.538096837736783, -73.35982108728754], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
});

