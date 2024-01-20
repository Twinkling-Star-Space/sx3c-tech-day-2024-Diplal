

document.addEventListener('DOMContentLoaded', function() {
  var map = L.map('map').setView([0,0],2); 
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  var  markerData =  [
    { lat: 40.7128, lng: -74.0060, url: 'https://www.usatoday.com/story/tech/2021/07/25/technology-changing-how-kids-learn-teachers-teach-education-system/7936443002/' },
      { lat: 28.00, lng: 84.00, url: 'https://www.facebook.com/sxc.computerclub' },
      { lat: 50.00, lng: 3.4, url: 'https://www.gsma.com/iot/wp-content/uploads/2012/10/mEducation_orange_09_121.pdf' },
   ];
  var markers = L.markerClusterGroup();
  markerData.forEach(function(marker) {
    var markerPopup = '<a href="' + marker.url + '"target="_blank"> Know more </a>';
    L.marker([marker.lat, marker.lng]).bindPopup(markerPopup).addTo(markers);

  })

  map.addLayer(markers);

})
  