// [START maps_add_map]
// Initialize and add the map
function initMap() {
  // [START maps_add_map_instantiate_map]
  // The location of University of Waterloo
  const uccke = { lat: 22.33080, lng: 114.22238 };
  // The map, centered at U of W
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: uccke,
  });
  // [END maps_add_map_instantiate_map]
  // [START maps_add_map_instantiate_marker]
  // The marker, positioned at U of W
  const marker = new google.maps.Marker({
    position: uccke,
    map: map,
  });
  // [END maps_add_map_instantiate_marker]
}
// [END maps_add_map]
