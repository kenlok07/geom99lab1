// Initialize and add the map
function initMap() {
  // The location of my first secondary school
  const uccke = { lat: 22.330807, lng: 114.22238 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: uccke,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uccke,
    map: map,
  });
}

// Initialize and add the map
function initMap() {
  // The location of my second high school
  const ac = { lat: 44.154520, lng: -77.393800 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map2"), {
    zoom: 14,
    center: ac,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: ac,
    map: map,
  });
}