import { basemap } from './../pages/map/basemap';

import 'leaflet-draw';

/**
 * Created by lesly on 07.07.17.
 */
const prodUrl    = 'http://hotmaps.hevs.ch:9005/api';
const devUrl    = 'http://hotmaps.hevs.ch:9006/api';

export const geoserverProdUrl = 'http://hotmaps.hevs.ch:9090/geoserver/hotmaps/wms';
export const geocodeUrl    = 'http://maps.googleapis.com/maps/api/geocode/json?address=';    // prefer
export const geoserverUrl = 'http://hotmaps.hevs.ch:9009/geoserver/hotmaps/wms';
export const getIpUrl    = 'http://ipv4.myexternalip.com/json';    // prefer
export const getLocationFromIp    = 'http://hotmaps.hevs.ch:9005/api/';
export const apiUrl = devUrl;
export const defaultLayer = 'heat_density';
export const idDefaultLayer = 17;
export const wwtpLayerName   = 'wwtp';
export const urlSendMail = 'http://hotmaps.hevs.ch:8585/sendEmail/sendmail.php';
export const timeOutAjaxRequest = 10000;

// layer_name

export const geoserverGetFeatureInfoUrl = geoserverUrl + '?' +
  'SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&FORMAT=image/png&TRANSPARENT=true&QUERY_LAYERS=hotmaps:'
export const nuts_level   = '3';
export const populationLayerName = 'population_density'
export const postPopulationDensityInArea    = '/population/density/area/';
export const getGrid    = '/grids/1km/area/';
export const postStatsLayersArea = '/stats/layers/area/';
export const postHeatLoadAggregateMonth = '/load-profile/aggregate/month';
export const postStatsLayersNutsIds = '/stats/layers/nuts/';
export const postStatsLayersPoint = '/stats/layers/point/';
export const set404url   = 'set404url';

// Projection data string
export const proj3035 = '+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +units=m +no_defs';
export const proj4326 = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';




// layers constant
export const timeOut   = 200000;
// layers constant
export const clickAccuracy   = 100;
export const zoomLevelDetectChange = 10;
export const constant_year = 2012;
export const constant_year_sp_wwtp = 2015;
export const business_name_wwtp = 'Waste Water treatment plants';
export const business_name_population = 'Population';
export const unit_capacity   = 'population equivalent';
export const unit_heat_density   = 'MWh/ha';
export const unit_shape_area   = 'm2';
export const unit_population   = 'person/ha';
export const round_value   = '1.2-2';
export const defaultZoomLevel = 5;
export const map_options =  {
  zoomControl: false,
  center: L.latLng(47.1, 7.0833),
  zoom: defaultZoomLevel,
  minZoom: 4,
  maxZoom: 17,
  zoomAnimationThreshold: 3,
  layers: [basemap.Esri, basemap.Hybrid]
}
export const lau2name = 'tbl_lau2_4326';

// Scale Value
export const nuts0   = 'NUTS 0';
export const nuts1   = 'NUTS 1';
export const nuts2   = 'NUTS 2';
export const nuts3   = 'NUTS 3';
export const lau2   = 'LAU 2';
export const hectare   = 'Hectare';
export const initial_scale_value   = nuts3;

// Event variable
export const MAPDRAWEDITED = L.Draw.Event.EDITED;
export const MAPDRAWSTART = L.Draw.Event.DRAWSTART;
export const MAPDRAWDELETED = L.Draw.Event.DELETED;
export const MAPDRAWEDITSTOP = L.Draw.Event.EDITSTOP;
export const MAPDRAWEDITSTART = L.Draw.Event.EDITSTART;
export const MAPDRAWCREATED = L.Draw.Event.CREATED;
export const MAPCLICK = 'click';
export const MAPLAYERCHANCE = 'baselayerchange';
export const MAPZOOMSTART = 'zoomstart';
export const MAPZOOMEND = 'zoomend';
export const MAPLAYERSCONTROLEVENT = 'LayersControlEvent';
export const MAPLAYERADD = 'layeradd';
export const MAPDIDIUPDATELAYER = 'didUpdateLayers';
export const MAPOVERLAYADD = 'overlayadd';

export const rightPanelSize = 600;
export const leftPanelSize = 350;
