// TODO: LAYER INTERACTION SERVICE
// Default layer id are defined to 0 by default
// In this dictionnary, We can have calculation module

// Improvement of coding style :
// listing import lines alphabetized by the module
import { DataInteractionClass } from './layers-interaction.class';
import { business_name_wwtp, defaultLayer, populationLayerName,
  idDefaultLayer, calculation_module_category, defaultLayerType, industry_layer_order } from '../../shared/data.service';
import { zoomLevelDetectChange, styleNameHeat } from './../../shared/data.service';
export const potential_type = 'potential';
export const wwtp_type = 'wwtp';
export const gfa_type = 'gross_floor_area';
export const cp_type = 'construction_periods';
export const industry_type = 'industy';
export const population_type = 'population';
export const solar_potential_fields_type = 'solar_potential_fields';

export const building_volume_type = 'building_volumes';
export const gitlabUrl = 'https://gitlab.com/hotmaps/';

export const DataInteractionArray: DataInteractionClass[] = [

// Buildings
  {id: idDefaultLayer, name: 'Heat density total', category: 'Buildings', isSelected: true,
    workspaceName: 'heat_tot_curr_density', zoomLevel: 0, ref: ['overall', 'demand'], styleName: 'heat_tot_curr_density', layer_type: defaultLayerType,
    download_url: gitlabUrl + '/heat/heat_tot_curr_density/raw/master/data/heat_tot_curr_density.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/heat/heat_tot_curr_density/blob/master/README.md', isLoading:false},
  {id: idDefaultLayer, name: 'Heat density residential sector', category: 'Buildings', isSelected: false,
    workspaceName: 'heat_res_curr_density', zoomLevel: 0, ref: ['overall','demand'], styleName: 'heat_tot_curr_density', layer_type: defaultLayerType,
    download_url: gitlabUrl + '/heat/heat_res_curr_density/raw/master/data/heat_res_curr_density.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/heat/heat_res_curr_density/blob/master/README.md', isLoading:false},
  {id: idDefaultLayer, name: 'Heat density non-residential sector', category: 'Buildings', isSelected: false,
    workspaceName: 'heat_nonres_curr_density', zoomLevel: 0, ref: ['overall', 'demand'], styleName: 'heat_tot_curr_density', layer_type: defaultLayerType,
    download_url: gitlabUrl + '/heat/heat_nonres_curr_density/raw/master/data/heat_nonres_curr_density.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/heat/heat_nonres_curr_density/blob/master/README.md', isLoading:false},
  {id: idDefaultLayer, name: 'Cooling density total', category: 'Buildings', isSelected: false,
    workspaceName: 'cool_tot_curr_density', zoomLevel: 0, ref: ['overall', 'demand'], styleName: 'cool_density', layer_type: 'cooling',
    download_url: gitlabUrl + '/heat/cool_tot_curr_density/raw/master/data/cool_tot_curr_density.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/heat/cool_tot_curr_density/blob/master/README.md', isLoading:false},
  {id: idDefaultLayer, name: 'Gross floor area total', category: 'Buildings', isSelected: false,
    workspaceName: 'gfa_tot_curr_density', zoomLevel: 0, ref: ['overall', 'buildings'], styleName: 'gfa_tot_curr_density', layer_type: gfa_type,
    download_url: gitlabUrl + '/gfa_tot_curr_density/raw/master/data/gfa_tot_curr_density.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/gfa_tot_curr_density/blob/master/README.md', isLoading:false},
  {id: idDefaultLayer, name: 'Gross floor area residential', category: 'Buildings', isSelected: false,
    workspaceName: 'gfa_res_curr_density', zoomLevel: 0, ref: ['overall', 'buildings'], styleName: 'gfa_tot_curr_density', layer_type: gfa_type,
    download_url: gitlabUrl + '/gfa_res_curr_density/raw/master/data/gfa_res_curr_density.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/gfa_res_curr_density/blob/master/README.md', isLoading:false},
  {id: idDefaultLayer, name: 'Gross floor area non-residential', category: 'Buildings', isSelected: false,
    workspaceName: 'gfa_nonres_curr_density', zoomLevel: 0, ref: ['overall', 'buildings'], styleName: 'gfa_tot_curr_density', layer_type: gfa_type,
    download_url: gitlabUrl + '/gfa_nonres_curr_density/raw/master/data/gfa_nonres_curr_density.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/gfa_nonres_curr_density/blob/master/README.md', isLoading:false},



  {id: idDefaultLayer, name: 'Building volumes total', category: 'Buildings', isSelected: false,
    workspaceName: 'vol_tot_curr_density', zoomLevel: 0, ref: ['overall', 'buildings'], styleName: 'vol_tot_curr_density', layer_type: building_volume_type,
    download_url: gitlabUrl + '/vol_tot_curr_density/raw/master/data/vol_tot_curr_density.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/vol_tot_curr_density/blob/master/README.md', isLoading:false},
  {id: idDefaultLayer, name: 'Building volumes residential', category: 'Buildings', isSelected: false,
    workspaceName: 'vol_res_curr_density', zoomLevel: 0, ref: ['overall', 'buildings'], styleName: 'vol_tot_curr_density', layer_type: building_volume_type,
    download_url: gitlabUrl + '/vol_res_curr_density/raw/master/data/vol_res_curr_density.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/vol_res_curr_density/blob/master/README.md', isLoading:false},
  {id: idDefaultLayer, name: 'Building volumes non-residential', category: 'Buildings', isSelected: false,
    workspaceName: 'vol_nonres_curr_density', zoomLevel: 0, ref: ['overall', 'buildings'], styleName: 'vol_tot_curr_density', layer_type: building_volume_type,
    download_url: gitlabUrl + '/vol_nonres_curr_density/raw/master/data/vol_nonres_curr_density.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/vol_nonres_curr_density/blob/master/README.md', isLoading:false},



  {id: idDefaultLayer, name: 'Share of gross floor area - constructions before 1975', category: 'Buildings', isSelected: false,
    workspaceName: 'ghs_built_1975_100_share', zoomLevel: 0, ref: ['overall', 'buildings'], styleName: 'construction_periods', layer_type: cp_type,
    download_url: gitlabUrl + '/construction_periods/ghs_built_1975_100_share/raw/master/data/GHS_BUILT_1975_100_share.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/construction_periods/ghs_built_1975_100_share/blob/master/README.md', isLoading:false},

  {id: idDefaultLayer, name: 'Share of gross floor area - constructions between 1975 and 1990', category: 'Buildings', isSelected: false,
    workspaceName: 'ghs_built_1990_100_share', zoomLevel: 0, ref: ['overall', 'buildings'], styleName: 'construction_periods', layer_type: cp_type,
    download_url: gitlabUrl + '/construction_periods/ghs_built_1990_100_share/raw/master/data/GHS_BUILT_1990_100_share.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/construction_periods/ghs_built_1990_100_share/blob/master/README.md', isLoading:false},

  {id: idDefaultLayer, name: 'Share of gross floor area - constructions between 1990 and 2000', category: 'Buildings', isSelected: false,
    workspaceName: 'ghs_built_2000_100_share', zoomLevel: 0, ref: ['overall', 'buildings'], styleName: 'construction_periods', layer_type: cp_type,
    download_url: gitlabUrl + '/construction_periods/ghs_built_2000_100_share/raw/master/data/GHS_BUILT_2000_100_share.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/construction_periods/ghs_built_2000_100_share/blob/master/README.md', isLoading:false},

  {id: idDefaultLayer, name: 'Share of gross floor area - constructions between 2000 and 2014', category: 'Buildings', isSelected: false,
    workspaceName: 'ghs_built_2014_100_share', zoomLevel: 0, ref: ['overall', 'buildings'], styleName: 'construction_periods', layer_type: cp_type,
    download_url: gitlabUrl + '/construction_periods/ghs_built_2014_100_share/raw/master/data/GHS_BUILT_2014_100_share.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/construction_periods/ghs_built_2014_100_share/blob/master/README.md', isLoading:false},

  // Industry
  {id: idDefaultLayer, name: 'Industrial Sites Emissions', category: 'Industry', isSelected: false,
    workspaceName: 'industrial_database_emissions', zoomLevel: 0, ref: ['overall', 'industry'], styleName: 'industrial_emissions', layer_type: 'industrial_database_emissions',order:industry_layer_order,
    download_url: gitlabUrl + '/industrial_sites/industrial_sites_Industrial_Database/raw/master/data/Industrial_Database.csv',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/industrial_sites/industrial_sites_Industrial_Database/blob/master/README.md', isLoading:false},
  {id: idDefaultLayer, name: 'Industrial Sites Excess Heat', category: 'Industry', isSelected: false,
    workspaceName: 'industrial_database_excess_heat', zoomLevel: 0, ref: ['overall', 'industry'], styleName: 'industrial_excess_heat', layer_type: 'industrial_database_excess_heat',order:industry_layer_order,
    download_url: gitlabUrl + '/industrial_sites/industrial_sites_Industrial_Database/raw/master/data/Industrial_Database.csv',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/industrial_sites/industrial_sites_Industrial_Database/blob/master/README.md', isLoading:false},
  {id: idDefaultLayer, name: 'Industrial Sites Company Name', category: 'Industry', isSelected: false,
    workspaceName: 'industrial_database_compagnyname', zoomLevel: 0, ref: ['overall', 'industry'], styleName: 'industrial_compagny_name', layer_type: 'industrial_database_compagnyname', order:industry_layer_order,
    download_url: gitlabUrl + '/industrial_sites/industrial_sites_Industrial_Database/raw/master/data/Industrial_Database.csv',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/industrial_sites/industrial_sites_Industrial_Database/blob/master/README.md', isLoading:false},
  {id: idDefaultLayer, name: 'Industrial Sites Subsector', category: 'Industry', isSelected: false,
    workspaceName: 'industrial_database_subsector', zoomLevel: 0, ref: ['overall', 'industry'], styleName: 'industrial_subsector', layer_type: 'industrial_database_subsector', order:industry_layer_order,
    download_url: gitlabUrl + '/industrial_sites/industrial_sites_Industrial_Database/raw/master/data/Industrial_Database.csv',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/industrial_sites/industrial_sites_Industrial_Database/blob/master/README.md', isLoading:false},

// Population
  {id: 14, name: 'Population total', category: 'Population', isSelected: false,
    workspaceName: 'pop_tot_curr_density', zoomLevel: 0, ref: ['overall', 'demand'], styleName: 'pop_tot_curr_density', layer_type: 'pop_tot_curr_density',
    download_url: gitlabUrl + '/pop_tot_curr_density/raw/master/data/pop_tot_curr_density.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/pop_tot_curr_density/blob/master/README.md', isLoading:false},

// Potentials
  {id: idDefaultLayer, name: 'Waste Water Treatment Plants - Power', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'wwtp_power', zoomLevel: zoomLevelDetectChange, ref: ['overall', 'potential'], styleName: 'default', layer_type: 'wwtp_power',
    download_url: gitlabUrl + '/potential/WWTP/raw/master/data/2015/WWTP_2015.csv',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/potential/WWTP/blob/master/README.md', isLoading:false},
  {id: idDefaultLayer, name: 'Waste Water Treatment Plants - Capacity', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'wwtp_capacity',  zoomLevel: zoomLevelDetectChange, ref: ['overall', 'potential'], styleName: 'wwtp_capacity', layer_type: 'wwtp_capacity',
    download_url: gitlabUrl + '/potential/WWTP/raw/master/data/2015/WWTP_2015.csv',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/potential/WWTP/blob/master/README.md', isLoading:false},
  {id: idDefaultLayer, name: 'Agricultural residues', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'agricultural_residues_view', zoomLevel: 0, ref: ['overall','potential'], styleName: 'agriculture', layer_type: 'agricultural_residues_view',
    download_url: gitlabUrl + '/potential/potential_biomass/raw/master/data/agricultural_residues.csv',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/potential/potential_biomass/blob/master/README.md', isLoading:false},
  {id: idDefaultLayer, name: 'Livestock effluents', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'livestock_effluents_view', zoomLevel: 0, ref: ['overall','potential'], styleName: 'livestock', layer_type: 'livestock_effluents_view',
    download_url: gitlabUrl + '/potential/potential_biomass/raw/master/data/livestock_effluents.csv',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/potential/potential_biomass/blob/master/README.md', isLoading:false},
  {id: idDefaultLayer, name: 'Forest residues', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'potential_forest', zoomLevel: 0, ref: ['overall','potential'], styleName: 'forest', layer_type:  'potential_forest',
    download_url: gitlabUrl + '/potential/potential_biomass/raw/master/data/forest_residues.csv',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/potential_biomass/blob/master/README.md', isLoading:false},
  {id: idDefaultLayer, name: 'Municipal solid waste', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'potential_municipal_solid_waste', zoomLevel: 0, ref: ['overall','potential'], styleName: 'municipal_waste', layer_type: 'potential_municipal_solid_waste',
    download_url: gitlabUrl + '/potential/potential_municipal_solid_waste/raw/master/data/solid_waste.csv',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/potential/potential_municipal_solid_waste/blob/master/README.md', isLoading:false},
  {id: idDefaultLayer, name: 'Wind potential at 50 meters', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'wind_50m', zoomLevel: 0, ref: ['overall','potential'], styleName: 'wind', layer_type: 'wind_50m',
    download_url: gitlabUrl + '/potential/potential_wind/raw/master/data/wind_50m.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/potential/potential_wind/blob/master/README.md', isLoading:false},


  {id: idDefaultLayer, name: 'Solar radiation on building footprint', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'solar_optimal_total', zoomLevel: 0, ref: ['overall', 'potential'], styleName: 'solar_optimal_total', layer_type: 'solar_optimal_total',
    download_url: gitlabUrl + '/potential/potential_solar/raw/master/data/solar_opt.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/potential/potential_solar/blob/master/README.md', isLoading:false},

// shallow geothermal vector layer
  {id: idDefaultLayer, name: 'Geothermal potential Heat Conductivity ', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'shallow_geothermal_potential', zoomLevel: 0, ref: ['overall','potential']/*['no_showed']*/, styleName: 'shallow_geothermal_potential', layer_type:  'shallow_geothermal_potential',
    download_url: gitlabUrl + '/potential/potential_shallowgeothermal/-/archive/master/potential_shallowgeothermal-master.zip?path=data',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/potential/potential_shallowgeothermal/blob/master/README.md', isLoading:false},


  {id: idDefaultLayer, name: 'Potential solarthermal collectors - rooftop', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'potential_solarthermal_collectors_rooftop', zoomLevel: 0, ref: ['overall', 'potential'], styleName: 'solar_potential_fields', layer_type: solar_potential_fields_type,
    download_url: gitlabUrl + '/potential/potential_solarthermal_collectors_rooftop/raw/master/data/potential_solarthermal_collectors_rooftop.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/potential/potential_solarthermal_collectors_rooftop/blob/master/README.md', isLoading:false},

  {id: idDefaultLayer, name: 'Potential solarthermal collectors - open field', category: 'R.E.S. Potential', isSelected: false,
    workspaceName: 'potential_solarthermal_collectors_open_field', zoomLevel: 0, ref: ['overall', 'potential'], styleName: 'solar_potential_fields', layer_type: solar_potential_fields_type,
    download_url: gitlabUrl + '/potential/potential_solarthermal_collectors_open_field/raw/master/data/potential_solarthermal_collectors_open_field.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/potential/potential_solarthermal_collectors_open_field/blob/master/README.md', isLoading:false},


// I would suggest to only show on of the geothermal layers - in DB integrated as vector and raster - which one do we need for the indicator?
  /*  {id: idDefaultLayer, name: 'Geothermal Potential Hc Class ', category: 'R.E.S. Potential', isSelected: false,
      workspaceName: 'potential_shallowgeothermal_hc_class', zoomLevel: 0, ref: ['overall', 'potential'], styleName: 'potential_shallowgeothermal_hc_class', layer_type: defaultLayerType,
	description: 'Information on the layer can be found here: ' + gitlabUrl + '/potential/potential_shallowgeothermal/blob/master/README.md'}, isLoading:false},*/

// Climate

  {id: idDefaultLayer, name: 'Average temperature', category: 'Climate', isSelected: false,
    workspaceName: 'land_surface_temperature', zoomLevel: 0, ref: ['overall', 'climate'], styleName: 'temp_v2', layer_type: 'land_surface_temperature',
    download_url: gitlabUrl + '/climate/land_surface_temperature/raw/master/data/land_surface_temperature.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/climate/land_surface_temperature/blob/master/README.md', isLoading:false},
  {id: idDefaultLayer, name: 'Cooling degree days', category: 'Climate', isSelected: false,
    workspaceName: 'cdd_curr', zoomLevel: 0, ref: ['overall', 'climate'], styleName: 'cdd_curr_tif', layer_type: 'cdd_curr',
    download_url: gitlabUrl + '/climate/CDD_ha_curr/raw/master/data/CDD_curr.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/climate/CDD_ha_curr/blob/master/README.md', isLoading:false},
  {id: idDefaultLayer, name: 'Heating degree days', category: 'Climate', isSelected: false,
    workspaceName: 'hdd_curr', zoomLevel: 0, ref: ['overall', 'climate'], styleName: 'hdd_curr_tif', layer_type: 'hdd_curr',
    download_url: gitlabUrl + '/climate/HDD_ha_curr/raw/master/data/HDD_curr.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/climate/HDD_ha_curr/blob/master/README.md', isLoading:false},
  {id: idDefaultLayer, name: 'Solar radiation', category: 'Climate', isSelected: false,
    workspaceName: 'solar_radiation', zoomLevel: 0, ref: ['overall', 'climate'], styleName: 'solar_optimal_total', layer_type: 'climate_solar_radiation',
    download_url: gitlabUrl + '/climate/climate_solar_radiation/raw/master/data/output_solar_radiation.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/climate/climate_solar_radiation/blob/master/README.md', isLoading:false},
  {id: idDefaultLayer, name: 'Wind speed', category: 'Climate', isSelected: false,
    workspaceName: 'output_wind_speed', zoomLevel: 0, ref: ['overall','climate'], styleName: 'wind', layer_type:  'output_wind_speed',
    download_url: gitlabUrl + '/climate/climate_wind_speed/raw/master/data/EU_wind_speed_average.tif',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/climate/climate_wind_speed/blob/master/README.md', isLoading:false},

// Electricity
  {id: idDefaultLayer, name: 'Electricity CO2 emissions - country average', category: 'Electricity', isSelected: false,
    workspaceName: 'yearly_co2_emission', zoomLevel: 0, ref: ['overall', 'electricity'], styleName: 'yearly_co2_emission', layer_type: 'yearly_co2_emission',
    download_url: gitlabUrl + '/load_electricity/electricity_emissions_hourly/raw/master/data/Emissions_hourly.csv',
    description: 'Information on the layer can be found here: ' + gitlabUrl + '/load_electricity/electricity_emissions_hourly/blob/master/README.md', isLoading:false},


// CMs
  /* {id: idDefaultLayer, name: 'CM - Heat demand reduction', category: 'CM', isSelected: false,
    workspaceName: 'calculation_module_1', zoomLevel: 0, ref: ['overall', 'demand'], styleName: '', layer_type: calculation_module_category, isLoading:false}, */
];
export const cm_default_layer = {
  id: idDefaultLayer, name: '',
  category: calculation_module_category,
  isSelected: true,
  workspaceName: '',
  zoomLevel: 0, ref: ['overall', calculation_module_category],
  styleName: '',
  layer_type: calculation_module_category,
  cm_id: '',
  isLoading:false
}
