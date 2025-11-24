const map = L.map('map').setView([0,0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap contributors'}).addTo(map);
fetch('data/ortho.tif').then(r=>r.arrayBuffer()).then(a=>georaster(a)).then(g=>{const l=new GeoRasterLayer({georaster:g,opacity:1,resolution:256});l.addTo(map);map.fitBounds(l.getBounds());});
fetch('data/shapefile.geojson').then(r=>r.json()).then(g=>{const l=L.geoJSON(g,{style:{color:'red',weight:2,opacity:0.8}}).addTo(map);L.control.layers(null,{"Shapefile Layer":l},{collapsed:false}).addTo(map);});