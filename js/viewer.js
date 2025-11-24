const map=L.map('map').setView([0,0],2);
let tifLayer,shapefileLayer;
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap contributors'}).addTo(map);
fetch('data/ortho.tif').then(r=>r.arrayBuffer()).then(a=>georaster(a)).then(g=>{tifLayer=new GeoRasterLayer({georaster:g,opacity:1,resolution:256}).addTo(map);map.fitBounds(tifLayer.getBounds());});
fetch('data/shapefile.geojson').then(r=>r.json()).then(g=>{shapefileLayer=L.geoJSON(g,{style:{color:'red',weight:2,opacity:0.8}}).addTo(map);});
document.getElementById('tifLayer').addEventListener('change',function(){if(this.checked)map.addLayer(tifLayer);else map.removeLayer(tifLayer);});
document.getElementById('shapefileLayer').addEventListener('change',function(){if(this.checked)map.addLayer(shapefileLayer);else map.removeLayer(shapefileLayer);});