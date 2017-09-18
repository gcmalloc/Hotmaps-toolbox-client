/**
 * Created by lesly on 07.07.17.
 */
const prodUrl    = 'http://hotmaps.hevs.ch:9005/api';
const devUrl    = 'http://hotmaps.hevs.ch:9005/api';


export const geocodeUrl    = 'http://maps.googleapis.com/maps/api/geocode/json?address=';    // prefer
export const geoserverUrl = 'http://hotmaps.hevs.ch:9090/geoserver/hotmaps/wms';
export const geoserverGetFeatureInfoUrl = 'http://hotmaps.hevs.ch:9090/geoserver/hotmaps/wms';
export const getIpUrl    = 'http://ipv4.myexternalip.com/json';    // prefer
export const getLocationFromIp    = 'http://hotmaps.hevs.ch:9005/api/';
export const apiUrl = devUrl;
export const defaultLayer = 'heat-density-map';
export const postPopulationDensityInArea    = '/population/density/area/';
export const getGrid    = '/grids/1km/area/';
export const set404url   = 'set404url';
export const clickAccuracy   = 100000;