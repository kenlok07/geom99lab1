// Initialize and add the map
function initMap() {
  // The location of my second high school, Albert College
  const ac = { lat: 44.154520, lng: -77.393800 };
  // The map, centered at AC
  const map = new google.maps.Map(document.getElementById("map2"), {
    zoom: 14,
    center: ac,
  });
  // The marker, positioned at AC
  const marker = new google.maps.Marker({
    position: ac,
    map: map,
  });
}