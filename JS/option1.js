// [START maps_add_map]
// Initialize and add the map
function initMap() {
  // [START maps_add_map_instantiate_map]
  // The location of United Christian College Kowloon East in Hong Kong
  const uccke = { lat: 22.33080, lng: 114.22238 };
  // The map, centered at uccke
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: uccke,})
  
  const ac = { lat: 44.154520, lng: -77.393800 };
  // The map, centered at AC
  const map2 = new google.maps.Map(document.getElementById("map2"), {
    zoom: 16,
    center: ac,});                                                            
  // [END maps_add_map_instantiate_map 
  
  const marker = new google.maps.Marker({
    position: uccke,
    map: map,});
    
  const marker2 = new google.maps.Marker({
    position: ac,
    map: map2,});
}
// [END maps_add_map]


