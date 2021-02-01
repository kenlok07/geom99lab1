// Initialize and add the map
function initMap() {
  // The location of my first secondary school, United Christian College Kowloon East (Hong Kong)
  const uccke = { lat: 22.330807, lng: 114.22238 };
  // The map, centered at uccke
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: uccke,
  });
  // The marker, positioned at uccke
  const marker = new google.maps.Marker({
    position: uccke,
    map: map,
  });
}

