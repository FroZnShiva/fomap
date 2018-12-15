var isize = [32, 32];
var ianchor = [12, 12];
var panchor = [0, -2];
var map;
var i_Airfield = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Airfield.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_BoS = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/BoS.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Brownstone = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Brownstone.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Bunker = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Bunker.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_BunkerHill = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/BunkerHill.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Camper = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Camper.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Car = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Car.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Castle = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Castle.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Cave = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Cave.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Church = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Church.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_City = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/City.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_CountryClub = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/CountryClub.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_CustomHouse = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/CustomHouse.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_DiamondCity = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/DiamondCity.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Disciples = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Disciples.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_DriveIn = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/DriveIn.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_ElevatedHighway = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/ElevatedHighway.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Encampment = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Encampment.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Factory = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Factory.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_FaneuilHall = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/FaneuilHall.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Farm = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Farm.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_FillingStation = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/FillingStation.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Forested = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Forested.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Galactic = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Galactic.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Goodneighbor = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Goodneighbor.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Graveyard = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Graveyard.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Hospital = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Hospital.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_IndustrialDome = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/IndustrialDome.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_IndustrialStacks = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/IndustrialStacks.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Institute = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Institute.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_IrishPride = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/IrishPride.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Junkyard = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Junkyard.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Landmark = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Landmark.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Libertalia = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Libertalia.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_LowRise = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/LowRise.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Mechanist = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Mechanist.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Metro = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Metro.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_MilitaryBase = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/MilitaryBase.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Minutemen = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Minutemen.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Monorail = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Monorail.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Monument = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Monument.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Observatory = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Observatory.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Office = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Office.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Operators = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Operators.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Pack = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Pack.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Pier = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Pier.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_PoliceStation = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/PoliceStation.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_PondLake = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/PondLake.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_PotentitalVassalSettlement = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/PotentitalVassalSettlement.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Prydwen = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Prydwen.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Quarry = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Quarry.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_RadioactiveArea = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/RadioactiveArea.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_RadioTower = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/RadioTower.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_RaiderSettlement = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/RaiderSettlement.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Railroad = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Railroad.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_RailroadFaction = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/RailroadFaction.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Rides = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Rides.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Safari = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Safari.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Salem = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Salem.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_SancHills = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/SancHills.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Satellite = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Satellite.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_School = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/School.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Sentinel = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Sentinel.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Settlement = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Settlement.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Sewer = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Sewer.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Shipwreck = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Shipwreck.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Skyscraper = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Skyscraper.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Submarine = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Submarine.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_SwanPond = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/SwanPond.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_SynthHead = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/SynthHead.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Town = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Town.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_TownRuins = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/TownRuins.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_UrbanRuins = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/UrbanRuins.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_USSConstitution = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/USSConstitution.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_VassalSettlement = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/VassalSettlement.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Vault = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Vault.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Airfield_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Airfield-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_BoS_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/BoS-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Brownstone_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Brownstone-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Bunker_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Bunker-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_BunkerHill_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/BunkerHill-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Camper_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Camper-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Car_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Car-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Castle_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Castle-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Cave_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Cave-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Church_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Church-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_City_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/City-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_CountryClub_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/CountryClub-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_CustomHouse_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/CustomHouse-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_DiamondCity_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/DiamondCity-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Disciples_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Disciples-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_DriveIn_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/DriveIn-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_ElevatedHighway_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/ElevatedHighway-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Encampment_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Encampment-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Factory_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Factory-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_FaneuilHall_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/FaneuilHall-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Farm_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Farm-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_FillingStation_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/FillingStation-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Forested_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Forested-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Galactic_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Galactic-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Goodneighbor_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Goodneighbor-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Graveyard_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Graveyard-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Hospital_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Hospital-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_IndustrialDome_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/IndustrialDome-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_IndustrialStacks_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/IndustrialStacks-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Institute_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Institute-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_IrishPride_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/IrishPride-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Junkyard_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Junkyard-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Landmark_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Landmark-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Libertalia_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Libertalia-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_LowRise_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/LowRise-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Mechanist_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Mechanist-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Metro_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Metro-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_MilitaryBase_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/MilitaryBase-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Minutemen_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Minutemen-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Monorail_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Monorail-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Monument_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Monument-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Observatory_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Observatory-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Office_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Office-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Operators_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Operators-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Pack_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Pack-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Pier_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Pier-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_PoliceStation_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/PoliceStation-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_PondLake_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/PondLake-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_PotentitalVassalSettlement_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/PotentitalVassalSettlement-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Prydwen_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Prydwen-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Quarry_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Quarry-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_RadioactiveArea_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/RadioactiveArea-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_RadioTower_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/RadioTower-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_RaiderSettlement_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/RaiderSettlement-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Railroad_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Railroad-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_RailroadFaction_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/RailroadFaction-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Rides_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Rides-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Safari_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Safari-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Salem_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Salem-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_SancHills_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/SancHills-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Satellite_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Satellite-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_School_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/School-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Sentinel_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Sentinel-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Settlement_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Settlement-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Sewer_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Sewer-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Shipwreck_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Shipwreck-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Skyscraper_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Skyscraper-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Submarine_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Submarine-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_SwanPond_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/SwanPond-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_SynthHead_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/SynthHead-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Town_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Town-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_TownRuins_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/TownRuins-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_UrbanRuins_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/UrbanRuins-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_USSConstitution_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/USSConstitution-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_VassalSettlement_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/VassalSettlement-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var i_Vault_inv = L.icon({
	iconUrl: 'http://www.digital-utopia.org/fallout4/markers/Vault-inv.png',
	iconSize: isize,
	iconAnchor: ianchor,
	popupAnchor: panchor,
});
var markerData = [{
		x: 31184,
		y: 36967.5,
		icon: i_DiamondCity,
		icon_inv: i_DiamondCity_inv,
	},
	{
		x: 31722.1,
		y: 36432.8,
		icon: i_Settlement,
		icon_inv: i_Settlement_inv,
	},
	{
		x: 32114.3,
		y: 36795,
		icon: i_Settlement,
		icon_inv: i_Settlement_inv,
	},
	{
		x: 39578.9,
		y: 33121.3,
		icon: i_Goodneighbor,
		icon_inv: i_Goodneighbor_inv,
	},
	{
		x: 18210.6,
		y: 16118.1,
		icon: i_Farm,
		icon_inv: i_Farm_inv,
	},
	{
		x: 39825.7,
		y: 39743.7,
		icon: i_Metro,
		icon_inv: i_Metro_inv,
	},
	{
		x: 20194.2,
		y: 26307.7,
		icon: i_IndustrialStacks,
		icon_inv: i_IndustrialStacks_inv,
	},
	{
		x: 36417.5,
		y: 36898,
		icon: i_LowRise,
		icon_inv: i_LowRise_inv,
	},
	{
		x: 39158,
		y: 50063.1,
		icon: i_IndustrialStacks,
		icon_inv: i_IndustrialStacks_inv,
	},
	{
		x: 43427.3,
		y: 45732.6,
		icon: i_Junkyard,
		icon_inv: i_Junkyard_inv,
	},
	{
		x: 32658.9,
		y: 33672,
		icon: i_Brownstone,
		icon_inv: i_Brownstone_inv,
	},
	{
		x: 37319,
		y: 26372.7,
		icon: i_LowRise,
		icon_inv: i_LowRise_inv,
	},
	{
		x: 55813,
		y: 12111.9,
		icon: i_TownRuins,
		icon_inv: i_TownRuins_inv,
	},
	{
		x: 37525.9,
		y: 31396.2,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 38982.7,
		y: 31456.6,
		icon: i_Skyscraper,
		icon_inv: i_Skyscraper_inv,
	},
	{
		x: 38195.5,
		y: 31875.6,
		icon: i_Landmark,
		icon_inv: i_Landmark_inv,
	},
	{
		x: 25773.7,
		y: 29572.4,
		icon: i_IndustrialDome,
		icon_inv: i_IndustrialDome_inv,
	},
	{
		x: 28523,
		y: 15715.6,
		icon: i_Railroad,
		icon_inv: i_Railroad_inv,
	},
	{
		x: 36102.7,
		y: 40098.3,
		icon: i_Junkyard,
		icon_inv: i_Junkyard_inv,
	},
	{
		x: 42618.6,
		y: 50552.1,
		icon: i_Encampment,
		icon_inv: i_Encampment_inv,
	},
	{
		x: 40226,
		y: 41335.3,
		icon: i_Town,
		icon_inv: i_Town_inv,
	},
	{
		x: 45552.6,
		y: 31294.2,
		icon: i_Airfield,
		icon_inv: i_Airfield_inv,
	},
	{
		x: 47028.5,
		y: 32560.1,
		icon: i_Prydwen,
		icon_inv: i_Prydwen_inv,
	},
	{
		x: 37152.4,
		y: 33926.6,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 36837.9,
		y: 35717.9,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 37554.7,
		y: 35060.9,
		icon: i_Office,
		icon_inv: i_Office_inv,
	},
	{
		x: 37798.5,
		y: 34249.1,
		icon: i_Landmark,
		icon_inv: i_Landmark_inv,
	},
	{
		x: 37400.3,
		y: 36177.7,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 12825.3,
		y: 33849.8,
		icon: i_Bunker,
		icon_inv: i_Bunker_inv,
	},
	{
		x: 31374.8,
		y: 38956.5,
		icon: i_Railroad,
		icon_inv: i_Railroad_inv,
	},
	{
		x: 34247.8,
		y: 35410.7,
		icon: i_Monument,
		icon_inv: i_Monument_inv,
	},
	{
		x: 42913.9,
		y: 14025.2,
		icon: i_Farm,
		icon_inv: i_Farm_inv,
	},
	{
		x: 39010.2,
		y: 27519.5,
		icon: i_BunkerHill,
		icon_inv: i_BunkerHill_inv,
	},
	{
		x: 39036.8,
		y: 30132.4,
		icon: i_Office,
		icon_inv: i_Office_inv,
	},
	{
		x: 35503,
		y: 30874.1,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 36276.3,
		y: 27363.2,
		icon: i_Factory,
		icon_inv: i_Factory_inv,
	},
	{
		x: 34590.7,
		y: 28945.9,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 36030.6,
		y: 28734.5,
		icon: i_City,
		icon_inv: i_City_inv,
	},
	{
		x: 31699.6,
		y: 26770.6,
		icon: i_TownRuins,
		icon_inv: i_TownRuins_inv,
	},
	{
		x: 28675.2,
		y: 28416,
		icon: i_PoliceStation,
		icon_inv: i_PoliceStation_inv,
	},
	{
		x: 29017.4,
		y: 31131.4,
		icon: i_IndustrialStacks,
		icon_inv: i_IndustrialStacks_inv,
	},
	{
		x: 40514.1,
		y: 26884.4,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 41147.5,
		y: 26940.7,
		icon: i_RailroadFaction,
		icon_inv: i_RailroadFaction_inv,
	},
	{
		x: 36512.1,
		y: 32413,
		icon: i_Encampment,
		icon_inv: i_Encampment_inv,
	},
	{
		x: 28647,
		y: 35871,
		icon: i_PondLake,
		icon_inv: i_PondLake_inv,
	},
	{
		x: 27626.2,
		y: 41627.5,
		icon: i_MilitaryBase,
		icon_inv: i_MilitaryBase_inv,
	},
	{
		x: 28503.3,
		y: 27405.8,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 37903.7,
		y: 35505.6,
		icon: i_Settlement,
		icon_inv: i_Settlement_inv,
	},
	{
		x: 21796,
		y: 15029.9,
		icon: i_TownRuins,
		icon_inv: i_TownRuins_inv,
	},
	{
		x: 22513.8,
		y: 15581,
		icon: i_Monument,
		icon_inv: i_Monument_inv,
	},
	{
		x: 27381.7,
		y: 23736.3,
		icon: i_IndustrialStacks,
		icon_inv: i_IndustrialStacks_inv,
	},
	{
		x: 43491.9,
		y: 23879.4,
		icon: i_Farm,
		icon_inv: i_Farm_inv,
	},
	{
		x: 33281.8,
		y: 20542,
		icon: i_Settlement,
		icon_inv: i_Settlement_inv,
	},
	{
		x: 54887.3,
		y: 15791.4,
		icon: i_RadioactiveArea,
		icon_inv: i_RadioactiveArea_inv,
	},
	{
		x: 39746.7,
		y: 35431.6,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 55005.2,
		y: 22645.1,
		icon: i_TownRuins,
		icon_inv: i_TownRuins_inv,
	},
	{
		x: 28989.7,
		y: 46430.4,
		icon: i_Shipwreck,
		icon_inv: i_Shipwreck_inv,
	},
	{
		x: 37049.3,
		y: 14620.9,
		icon: i_PondLake,
		icon_inv: i_PondLake_inv,
	},
	{
		x: 37954.7,
		y: 37141.5,
		icon: i_School,
		icon_inv: i_School_inv,
	},
	{
		x: 32249.4,
		y: 37566.1,
		icon: i_Skyscraper,
		icon_inv: i_Skyscraper_inv,
	},
	{
		x: 44278,
		y: 29859.2,
		icon: i_Office,
		icon_inv: i_Office_inv,
	},
	{
		x: 52730.3,
		y: 4554.6,
		icon: i_Settlement,
		icon_inv: i_Settlement_inv,
	},
	{
		x: 23987.2,
		y: 18844.8,
		icon: i_LowRise,
		icon_inv: i_LowRise_inv,
	},
	{
		x: 49681.1,
		y: 15677.4,
		icon: i_Quarry,
		icon_inv: i_Quarry_inv,
	},
	{
		x: 51102.1,
		y: 15189,
		icon: i_RadioactiveArea,
		icon_inv: i_RadioactiveArea_inv,
	},
	{
		x: 43599.5,
		y: 28568.2,
		icon: i_PoliceStation,
		icon_inv: i_PoliceStation_inv,
	},
	{
		x: 44363.4,
		y: 27115.2,
		icon: i_Mechanist,
		icon_inv: i_Mechanist_inv,
	},
	{
		x: 45072.3,
		y: 27871.6,
		icon: i_School,
		icon_inv: i_School_inv,
	},
	{
		x: 46971.2,
		y: 27939.2,
		icon: i_Encampment,
		icon_inv: i_Encampment_inv,
	},
	{
		x: 28180.2,
		y: 43987.8,
		icon: i_Pier,
		icon_inv: i_Pier_inv,
	},
	{
		x: 31970.4,
		y: 41563.3,
		icon: i_TownRuins,
		icon_inv: i_TownRuins_inv,
	},
	{
		x: 32222.8,
		y: 43785.9,
		icon: i_Office,
		icon_inv: i_Office_inv,
	},
	{
		x: 41012.9,
		y: 32317.7,
		icon: i_Skyscraper,
		icon_inv: i_Skyscraper_inv,
	},
	{
		x: 40802.5,
		y: 31766,
		icon: i_FaneuilHall,
		icon_inv: i_FaneuilHall_inv,
	},
	{
		x: 27113,
		y: 50139.5,
		icon: i_Farm,
		icon_inv: i_Farm_inv,
	},
	{
		x: 15097.9,
		y: 24313,
		icon: i_Church,
		icon_inv: i_Church_inv,
	},
	{
		x: 16623.5,
		y: 25638.4,
		icon: i_Bunker,
		icon_inv: i_Bunker_inv,
	},
	{
		x: 12056.7,
		y: 48467.6,
		icon: i_Encampment,
		icon_inv: i_Encampment_inv,
	},
	{
		x: 12039.6,
		y: 48510.9,
		icon: i_Bunker,
		icon_inv: i_Bunker_inv,
	},
	{
		x: 32911.3,
		y: 34213.2,
		icon: i_Office,
		icon_inv: i_Office_inv,
	},
	{
		x: 30670.2,
		y: 35110.8,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 32085.5,
		y: 38026.9,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 33446.6,
		y: 35570.5,
		icon: i_PoliceStation,
		icon_inv: i_PoliceStation_inv,
	},
	{
		x: 30502.3,
		y: 34413.7,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 31407.1,
		y: 34533.1,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 30203.9,
		y: 36629,
		icon: i_City,
		icon_inv: i_City_inv,
	},
	{
		x: 30307.8,
		y: 36063.7,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 30779.6,
		y: 36299.7,
		icon: i_Sewer,
		icon_inv: i_Sewer_inv,
	},
	{
		x: 18264.2,
		y: 30646.8,
		icon: i_Camper,
		icon_inv: i_Camper_inv,
	},
	{
		x: 42195.1,
		y: 32729.4,
		icon: i_CustomHouse,
		icon_inv: i_CustomHouse_inv,
	},
	{
		x: 41497.8,
		y: 33217,
		icon: i_Skyscraper,
		icon_inv: i_Skyscraper_inv,
	},
	{
		x: 40833,
		y: 33747.6,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 47107.9,
		y: 20421.7,
		icon: i_Farm,
		icon_inv: i_Farm_inv,
	},
	{
		x: 21662.6,
		y: 34529,
		icon: i_TownRuins,
		icon_inv: i_TownRuins_inv,
	},
	{
		x: 15724.7,
		y: 31793.5,
		icon: i_MilitaryBase,
		icon_inv: i_MilitaryBase_inv,
	},
	{
		x: 12971.8,
		y: 31088.3,
		icon: i_Satellite,
		icon_inv: i_Satellite_inv,
	},
	{
		x: 51889.1,
		y: 34311.3,
		icon: i_MilitaryBase,
		icon_inv: i_MilitaryBase_inv,
	},
	{
		x: 42335.6,
		y: 37510.9,
		icon: i_IrishPride,
		icon_inv: i_IrishPride_inv,
	},
	{
		x: 29197,
		y: 29922.4,
		icon: i_Monument,
		icon_inv: i_Monument_inv,
	},
	{
		x: 43313.2,
		y: 38140.9,
		icon: i_IndustrialStacks,
		icon_inv: i_IndustrialStacks_inv,
	},
	{
		x: 36381.9,
		y: 13051.5,
		icon: i_Office,
		icon_inv: i_Office_inv,
	},
	{
		x: 49345.2,
		y: 21750.7,
		icon: i_Pier,
		icon_inv: i_Pier_inv,
	},
	{
		x: 13152.6,
		y: 55318.2,
		icon: i_RadioactiveArea,
		icon_inv: i_RadioactiveArea_inv,
	},
	{
		x: 22715.4,
		y: 47318.4,
		icon: i_Landmark,
		icon_inv: i_Landmark_inv,
	},
	{
		x: 20794.5,
		y: 57227.2,
		icon: i_Airfield,
		icon_inv: i_Airfield_inv,
	},
	{
		x: 21760.5,
		y: 52146.6,
		icon: i_Church,
		icon_inv: i_Church_inv,
	},
	{
		x: 18478.6,
		y: 49725.3,
		icon: i_Cave,
		icon_inv: i_Cave_inv,
	},
	{
		x: 19228.5,
		y: 55474,
		icon: i_Cave,
		icon_inv: i_Cave_inv,
	},
	{
		x: 17720.9,
		y: 58314,
		icon: i_Factory,
		icon_inv: i_Factory_inv,
	},
	{
		x: 16339.2,
		y: 51340,
		icon: i_Factory,
		icon_inv: i_Factory_inv,
	},
	{
		x: 8445.7,
		y: 48924,
		icon: i_Church,
		icon_inv: i_Church_inv,
	},
	{
		x: 21299.3,
		y: 53974.5,
		icon: i_Airfield,
		icon_inv: i_Airfield_inv,
	},
	{
		x: 15051.6,
		y: 46484,
		icon: i_Bunker,
		icon_inv: i_Bunker_inv,
	},
	{
		x: 14240.7,
		y: 50809.3,
		icon: i_Skyscraper,
		icon_inv: i_Skyscraper_inv,
	},
	{
		x: 11095.6,
		y: 56387.3,
		icon: i_IndustrialStacks,
		icon_inv: i_IndustrialStacks_inv,
	},
	{
		x: 9357.1,
		y: 53527.2,
		icon: i_IndustrialDome,
		icon_inv: i_IndustrialDome_inv,
	},
	{
		x: 17525.3,
		y: 60682.5,
		icon: i_Sentinel,
		icon_inv: i_Sentinel_inv,
	},
	{
		x: 31903.7,
		y: 47354.3,
		icon: i_RadioTower,
		icon_inv: i_RadioTower_inv,
	},
	{
		x: 39717.9,
		y: 34019.9,
		icon: i_ElevatedHighway,
		icon_inv: i_ElevatedHighway_inv,
	},
	{
		x: 39778.1,
		y: 33769.6,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 21039.9,
		y: 18183.1,
		icon: i_Encampment,
		icon_inv: i_Encampment_inv,
	},
	{
		x: 24492.8,
		y: 26646.8,
		icon: i_Farm,
		icon_inv: i_Farm_inv,
	},
	{
		x: 15810,
		y: 33158.8,
		icon: i_Hospital,
		icon_inv: i_Hospital_inv,
	},
	{
		x: 34809.6,
		y: 29928.5,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 34428.3,
		y: 30395.9,
		icon: i_Skyscraper,
		icon_inv: i_Skyscraper_inv,
	},
	{
		x: 41532.2,
		y: 16222.3,
		icon: i_Farm,
		icon_inv: i_Farm_inv,
	},
	{
		x: 41504.7,
		y: 40797.5,
		icon: i_Monument,
		icon_inv: i_Monument_inv,
	},
	{
		x: 41973.8,
		y: 39464.8,
		icon: i_IndustrialStacks,
		icon_inv: i_IndustrialStacks_inv,
	},
	{
		x: 36351.1,
		y: 33494.7,
		icon: i_Office,
		icon_inv: i_Office_inv,
	},
	{
		x: 29866.2,
		y: 37822.3,
		icon: i_TownRuins,
		icon_inv: i_TownRuins_inv,
	},
	{
		x: 39764.5,
		y: 36874.1,
		icon: i_Office,
		icon_inv: i_Office_inv,
	},
	{
		x: 48499.3,
		y: 18410.3,
		icon: i_Junkyard,
		icon_inv: i_Junkyard_inv,
	},
	{
		x: 36580.3,
		y: 34755.6,
		icon: i_Office,
		icon_inv: i_Office_inv,
	},
	{
		x: 36065.6,
		y: 34428.8,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 36771.2,
		y: 34436.5,
		icon: i_Vault,
		icon_inv: i_Vault_inv,
	},
	{
		x: 36569.8,
		y: 46601.8,
		icon: i_TownRuins,
		icon_inv: i_TownRuins_inv,
	},
	{
		x: 31335.2,
		y: 30336.8,
		icon: i_Institute,
		icon_inv: i_Institute_inv,
	},
	{
		x: 31331.2,
		y: 31176,
		icon: i_Office,
		icon_inv: i_Office_inv,
	},
	{
		x: 39145.2,
		y: 24994.8,
		icon: i_IrishPride,
		icon_inv: i_IrishPride_inv,
	},
	{
		x: 44238.9,
		y: 39904.9,
		icon: i_TownRuins,
		icon_inv: i_TownRuins_inv,
	},
	{
		x: 24799.1,
		y: 25077.5,
		icon: i_Junkyard,
		icon_inv: i_Junkyard_inv,
	},
	{
		x: 37198.6,
		y: 44014.9,
		icon: i_TownRuins,
		icon_inv: i_TownRuins_inv,
	},
	{
		x: 31688.3,
		y: 28472.2,
		icon: i_Hospital,
		icon_inv: i_Hospital_inv,
	},
	{
		x: 54647.5,
		y: 17802.9,
		icon: i_Pier,
		icon_inv: i_Pier_inv,
	},
	{
		x: 17698.8,
		y: 40065.1,
		icon: i_PondLake,
		icon_inv: i_PondLake_inv,
	},
	{
		x: 35988.2,
		y: 10714.7,
		icon: i_PondLake,
		icon_inv: i_PondLake_inv,
	},
	{
		x: 35298.6,
		y: 37093.9,
		icon: i_City,
		icon_inv: i_City_inv,
	},
	{
		x: 28928.9,
		y: 22725.6,
		icon: i_City,
		icon_inv: i_City_inv,
	},
	{
		x: 43421.6,
		y: 17243.7,
		icon: i_Bunker,
		icon_inv: i_Bunker_inv,
	},
	{
		x: 52550.3,
		y: 18757.6,
		icon: i_IndustrialStacks,
		icon_inv: i_IndustrialStacks_inv,
	},
	{
		x: 44341.1,
		y: 11230.1,
		icon: i_Settlement,
		icon_inv: i_Settlement_inv,
	},
	{
		x: 53358.8,
		y: 9474.5,
		icon: i_IndustrialStacks,
		icon_inv: i_IndustrialStacks_inv,
	},
	{
		x: 38263.1,
		y: 18048.6,
		icon: i_Metro,
		icon_inv: i_Metro_inv,
	},
	{
		x: 39241.3,
		y: 36237.8,
		icon: i_Hospital,
		icon_inv: i_Hospital_inv,
	},
	{
		x: 39310,
		y: 13888.2,
		icon: i_Factory,
		icon_inv: i_Factory_inv,
	},
	{
		x: 19514.4,
		y: 42289.3,
		icon: i_RadioactiveArea,
		icon_inv: i_RadioactiveArea_inv,
	},
	{
		x: 39355.7,
		y: 32091.3,
		icon: i_Skyscraper,
		icon_inv: i_Skyscraper_inv,
	},
	{
		x: 39111.4,
		y: 32110.9,
		icon: i_Skyscraper,
		icon_inv: i_Skyscraper_inv,
	},
	{
		x: 39601.2,
		y: 31893.5,
		icon: i_Office,
		icon_inv: i_Office_inv,
	},
	{
		x: 30641.5,
		y: 24909,
		icon: i_Quarry,
		icon_inv: i_Quarry_inv,
	},
	{
		x: 19836.3,
		y: 38003.4,
		icon: i_ElevatedHighway,
		icon_inv: i_ElevatedHighway_inv,
	},
	{
		x: 33858.9,
		y: 37626,
		icon: i_Settlement,
		icon_inv: i_Settlement_inv,
	},
	{
		x: 28503.1,
		y: 37546.3,
		icon: i_Settlement,
		icon_inv: i_Settlement_inv,
	},
	{
		x: 37440.4,
		y: 17884.6,
		icon: i_Hospital,
		icon_inv: i_Hospital_inv,
	},
	{
		x: 40080.2,
		y: 18976.5,
		icon: i_Hospital,
		icon_inv: i_Hospital_inv,
	},
	{
		x: 33294.5,
		y: 43008,
		icon: i_Hospital,
		icon_inv: i_Hospital_inv,
	},
	{
		x: 29700.2,
		y: 20637.3,
		icon: i_TownRuins,
		icon_inv: i_TownRuins_inv,
	},
	{
		x: 57167.5,
		y: 23407.6,
		icon: i_Church,
		icon_inv: i_Church_inv,
	},
	{
		x: 58160.7,
		y: 25312.9,
		icon: i_Pier,
		icon_inv: i_Pier_inv,
	},
	{
		x: 53239.1,
		y: 24571.6,
		icon: i_PoliceStation,
		icon_inv: i_PoliceStation_inv,
	},
	{
		x: 53024.3,
		y: 25163.7,
		icon: i_Pier,
		icon_inv: i_Pier_inv,
	},
	{
		x: 16496.6,
		y: 40840.1,
		icon: i_PoliceStation,
		icon_inv: i_PoliceStation_inv,
	},
	{
		x: 15983.1,
		y: 40613.3,
		icon: i_TownRuins,
		icon_inv: i_TownRuins_inv,
	},
	{
		x: 43588.3,
		y: 22147.8,
		icon: i_MilitaryBase,
		icon_inv: i_MilitaryBase_inv,
	},
	{
		x: 39761.3,
		y: 46119.6,
		icon: i_PondLake,
		icon_inv: i_PondLake_inv,
	},
	{
		x: 33604,
		y: 39043.2,
		icon: i_Railroad,
		icon_inv: i_Railroad_inv,
	},
	{
		x: 49091.3,
		y: 29878.2,
		icon: i_Farm,
		icon_inv: i_Farm_inv,
	},
	{
		x: 39731.3,
		y: 29793.8,
		icon: i_Office,
		icon_inv: i_Office_inv,
	},
	{
		x: 40263.8,
		y: 30327.2,
		icon: i_Office,
		icon_inv: i_Office_inv,
	},
	{
		x: 40239.6,
		y: 29949.7,
		icon: i_Graveyard,
		icon_inv: i_Graveyard_inv,
	},
	{
		x: 24888.5,
		y: 31649.2,
		icon: i_Farm,
		icon_inv: i_Farm_inv,
	},
	{
		x: 39788.2,
		y: 16049.4,
		icon: i_PondLake,
		icon_inv: i_PondLake_inv,
	},
	{
		x: 42151.9,
		y: 30534,
		icon: i_RailroadFaction,
		icon_inv: i_RailroadFaction_inv,
	},
	{
		x: 41379,
		y: 30351,
		icon: i_Church,
		icon_inv: i_Church_inv,
	},
	{
		x: 45811.3,
		y: 9322,
		icon: i_Factory,
		icon_inv: i_Factory_inv,
	},
	{
		x: 46565.7,
		y: 12104,
		icon: i_Hospital,
		icon_inv: i_Hospital_inv,
	},
	{
		x: 40877.7,
		y: 30088.4,
		icon: i_IrishPride,
		icon_inv: i_IrishPride_inv,
	},
	{
		x: 40718.4,
		y: 29901.2,
		icon: i_Office,
		icon_inv: i_Office_inv,
	},
	{
		x: 36143,
		y: 50868.8,
		icon: i_PondLake,
		icon_inv: i_PondLake_inv,
	},
	{
		x: 22256.1,
		y: 42012.5,
		icon: i_Factory,
		icon_inv: i_Factory_inv,
	},
	{
		x: 50254.2,
		y: 11539.3,
		icon: i_TownRuins,
		icon_inv: i_TownRuins_inv,
	},
	{
		x: 41343.1,
		y: 29425.5,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 44182.4,
		y: 49790,
		icon: i_IndustrialStacks,
		icon_inv: i_IndustrialStacks_inv,
	},
	{
		x: 37244.4,
		y: 24142.2,
		icon: i_IndustrialStacks,
		icon_inv: i_IndustrialStacks_inv,
	},
	{
		x: 15783.3,
		y: 37865.7,
		icon: i_IndustrialStacks,
		icon_inv: i_IndustrialStacks_inv,
	},
	{
		x: 38201.7,
		y: 47902.5,
		icon: i_Quarry,
		icon_inv: i_Quarry_inv,
	},
	{
		x: 41033.7,
		y: 48824.1,
		icon: i_Settlement,
		icon_inv: i_Settlement_inv,
	},
	{
		x: 41508,
		y: 49672.7,
		icon: i_PoliceStation,
		icon_inv: i_PoliceStation_inv,
	},
	{
		x: 15703.9,
		y: 15303.4,
		icon: i_Encampment,
		icon_inv: i_Encampment_inv,
	},
	{
		x: 39424.1,
		y: 8878.4,
		icon: i_Bunker,
		icon_inv: i_Bunker_inv,
	},
	{
		x: 19802.5,
		y: 13501.7,
		icon: i_FillingStation,
		icon_inv: i_FillingStation_inv,
	},
	{
		x: 47767.4,
		y: 22536,
		icon: i_Pier,
		icon_inv: i_Pier_inv,
	},
	{
		x: 32687.6,
		y: 9236.8,
		icon: i_RadioTower,
		icon_inv: i_RadioTower_inv,
	},
	{
		x: 38175.1,
		y: 11743,
		icon: i_RadioTower,
		icon_inv: i_RadioTower_inv,
	},
	{
		x: 40710,
		y: 22300.2,
		icon: i_RadioTower,
		icon_inv: i_RadioTower_inv,
	},
	{
		x: 34074.8,
		y: 40967,
		icon: i_RadioTower,
		icon_inv: i_RadioTower_inv,
	},
	{
		x: 15001.6,
		y: 29517.3,
		icon: i_RadioTower,
		icon_inv: i_RadioTower_inv,
	},
	{
		x: 23816.5,
		y: 33063.5,
		icon: i_RadioTower,
		icon_inv: i_RadioTower_inv,
	},
	{
		x: 23179.9,
		y: 54324.7,
		icon: i_RadioTower,
		icon_inv: i_RadioTower_inv,
	},
	{
		x: 47643.9,
		y: 24322.6,
		icon: i_Metro,
		icon_inv: i_Metro_inv,
	},
	{
		x: 46334.8,
		y: 22583.8,
		icon: i_Satellite,
		icon_inv: i_Satellite_inv,
	},
	{
		x: 15431.1,
		y: 39415.4,
		icon: i_LowRise,
		icon_inv: i_LowRise_inv,
	},
	{
		x: 23294.5,
		y: 9417.2,
		icon: i_Junkyard,
		icon_inv: i_Junkyard_inv,
	},
	{
		x: 24123.9,
		y: 45166.8,
		icon: i_Forested,
		icon_inv: i_Forested_inv,
	},
	{
		x: 22912,
		y: 24866.3,
		icon: i_Camper,
		icon_inv: i_Camper_inv,
	},
	{
		x: 30055.1,
		y: 17253.8,
		icon: i_Junkyard,
		icon_inv: i_Junkyard_inv,
	},
	{
		x: 53560.5,
		y: 14824.9,
		icon: i_Salem,
		icon_inv: i_Salem_inv,
	},
	{
		x: 17305.5,
		y: 11790.9,
		icon: i_SancHills,
		icon_inv: i_SancHills_inv,
	},
	{
		x: 54641.7,
		y: 13722.5,
		icon: i_Hospital,
		icon_inv: i_Hospital_inv,
	},
	{
		x: 46951.5,
		y: 18004.1,
		icon: i_IndustrialStacks,
		icon_inv: i_IndustrialStacks_inv,
	},
	{
		x: 25324.2,
		y: 46556.6,
		icon: i_Junkyard,
		icon_inv: i_Junkyard_inv,
	},
	{
		x: 41917.1,
		y: 34338.3,
		icon: i_Office,
		icon_inv: i_Office_inv,
	},
	{
		x: 34260.5,
		y: 43963.4,
		icon: i_School,
		icon_inv: i_School_inv,
	},
	{
		x: 33793,
		y: 13750.4,
		icon: i_Airfield,
		icon_inv: i_Airfield_inv,
	},
	{
		x: 38802.6,
		y: 18160.9,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 38194.3,
		y: 40484.4,
		icon: i_MilitaryBase,
		icon_inv: i_MilitaryBase_inv,
	},
	{
		x: 42237.3,
		y: 41868.7,
		icon: i_Office,
		icon_inv: i_Office_inv,
	},
	{
		x: 40476.9,
		y: 40778.2,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 40747.3,
		y: 39715.4,
		icon: i_PoliceStation,
		icon_inv: i_PoliceStation_inv,
	},
	{
		x: 51405.6,
		y: 43181.7,
		icon: i_Landmark,
		icon_inv: i_Landmark_inv,
	},
	{
		x: 26416.9,
		y: 18307.2,
		icon: i_DriveIn,
		icon_inv: i_DriveIn_inv,
	},
	{
		x: 35687.7,
		y: 48551,
		icon: i_School,
		icon_inv: i_School_inv,
	},
	{
		x: 16008.2,
		y: 22404,
		icon: i_Settlement,
		icon_inv: i_Settlement_inv,
	},
	{
		x: 27771.6,
		y: 21844.1,
		icon: i_City,
		icon_inv: i_City_inv,
	},
	{
		x: 27451.2,
		y: 21381.7,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 37536.3,
		y: 34422.2,
		icon: i_SwanPond,
		icon_inv: i_SwanPond_inv,
	},
	{
		x: 36463.8,
		y: 20773.3,
		icon: i_Office,
		icon_inv: i_Office_inv,
	},
	{
		x: 30155.8,
		y: 11603.1,
		icon: i_Farm,
		icon_inv: i_Farm_inv,
	},
	{
		x: 38432.9,
		y: 36513.7,
		icon: i_Metro,
		icon_inv: i_Metro_inv,
	},
	{
		x: 40045.2,
		y: 34760.8,
		icon: i_Skyscraper,
		icon_inv: i_Skyscraper_inv,
	},
	{
		x: 45607,
		y: 40516.1,
		icon: i_Castle,
		icon_inv: i_Castle_inv,
	},
	{
		x: 46525.8,
		y: 15541.7,
		icon: i_Farm,
		icon_inv: i_Farm_inv,
	},
	{
		x: 25111.1,
		y: 13055.6,
		icon: i_Quarry,
		icon_inv: i_Quarry_inv,
	},
	{
		x: 36114.2,
		y: 29795.4,
		icon: i_Skyscraper,
		icon_inv: i_Skyscraper_inv,
	},
	{
		x: 35832.8,
		y: 35755.4,
		icon: i_Skyscraper,
		icon_inv: i_Skyscraper_inv,
	},
	{
		x: 35307.4,
		y: 35317.4,
		icon: i_Church,
		icon_inv: i_Church_inv,
	},
	{
		x: 40158.9,
		y: 42768.5,
		icon: i_School,
		icon_inv: i_School_inv,
	},
	{
		x: 25929.1,
		y: 10754.4,
		icon: i_Satellite,
		icon_inv: i_Satellite_inv,
	},
	{
		x: 41047,
		y: 27774.2,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 40983.7,
		y: 27776.1,
		icon: i_USSConstitution,
		icon_inv: i_USSConstitution_inv,
	},
	{
		x: 40050.2,
		y: 28360.6,
		icon: i_TownRuins,
		icon_inv: i_TownRuins_inv,
	},
	{
		x: 41011.3,
		y: 31398.2,
		icon: i_Skyscraper,
		icon_inv: i_Skyscraper_inv,
	},
	{
		x: 31183.9,
		y: 32694,
		icon: i_Shipwreck,
		icon_inv: i_Shipwreck_inv,
	},
	{
		x: 15441.2,
		y: 11110,
		icon: i_Vault,
		icon_inv: i_Vault_inv,
	},
	{
		x: 37840.1,
		y: 33316,
		icon: i_Monument,
		icon_inv: i_Monument_inv,
	},
	{
		x: 38274.9,
		y: 33981.6,
		icon: i_Metro,
		icon_inv: i_Metro_inv,
	},
	{
		x: 38445,
		y: 33520.6,
		icon: i_Graveyard,
		icon_inv: i_Graveyard_inv,
	},
	{
		x: 39177.4,
		y: 17455,
		icon: i_School,
		icon_inv: i_School_inv,
	},
	{
		x: 39177.4,
		y: 17455,
		icon: i_Vault,
		icon_inv: i_Vault_inv,
	},
	{
		x: 26070.3,
		y: 34979.1,
		icon: i_Vault,
		icon_inv: i_Vault_inv,
	},
	{
		x: 26725.1,
		y: 35639.7,
		icon: i_Vault,
		icon_inv: i_Vault_inv,
	},
	{
		x: 24246.9,
		y: 49651.5,
		icon: i_Vault,
		icon_inv: i_Vault_inv,
	},
	{
		x: 37749.3,
		y: 32615.2,
		icon: i_Skyscraper,
		icon_inv: i_Skyscraper_inv,
	},
	{
		x: 9494.3,
		y: 59725.7,
		icon: i_Cave,
		icon_inv: i_Cave_inv,
	},
	{
		x: 19814,
		y: 21154.3,
		icon: i_PondLake,
		icon_inv: i_PondLake_inv,
	},
	{
		x: 47583.3,
		y: 46563,
		icon: i_Farm,
		icon_inv: i_Farm_inv,
	},
	{
		x: 42433.6,
		y: 31696.7,
		icon: i_Landmark,
		icon_inv: i_Landmark_inv,
	},
	{
		x: 33687,
		y: 25700.7,
		icon: i_Office,
		icon_inv: i_Office_inv,
	},
	{
		x: 37992.8,
		y: 22356.8,
		icon: i_TownRuins,
		icon_inv: i_TownRuins_inv,
	},
	{
		x: 24651.1,
		y: 39860.9,
		icon: i_PondLake,
		icon_inv: i_PondLake_inv,
	},
	{
		x: 21584.5,
		y: 30974.3,
		icon: i_IndustrialDome,
		icon_inv: i_IndustrialDome_inv,
	},
	{
		x: 33282.3,
		y: 44035,
		icon: i_Metro,
		icon_inv: i_Metro_inv,
	},
	{
		x: 16444.3,
		y: 16863.3,
		icon: i_Factory,
		icon_inv: i_Factory_inv,
	},
	{
		x: 35358.6,
		y: 23887.6,
		icon: i_Car,
		icon_inv: i_Car_inv,
	},
	{
		x: 15909.1,
		y: 30798.3,
		icon: i_FillingStation,
		icon_inv: i_FillingStation_inv,
	},
	{
		x: 34609,
		y: 36851.5,
		icon: i_Skyscraper,
		icon_inv: i_Skyscraper_inv,
	},
	{
		x: 34825.2,
		y: 33405,
		icon: i_ElevatedHighway,
		icon_inv: i_ElevatedHighway_inv,
	},
	{
		x: 35634,
		y: 33661.2,
		icon: i_Office,
		icon_inv: i_Office_inv,
	},
	{
		x: 41240.6,
		y: 35056,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 41109.2,
		y: 38343.8,
		icon: i_IndustrialStacks,
		icon_inv: i_IndustrialStacks_inv,
	},
	{
		x: 41454.3,
		y: 31231.8,
		icon: i_Metro,
		icon_inv: i_Metro_inv,
	},
	{
		x: 43131.3,
		y: 40733.9,
		icon: i_Graveyard,
		icon_inv: i_Graveyard_inv,
	},
	{
		x: 41981.8,
		y: 41077.2,
		icon: i_School,
		icon_inv: i_School_inv,
	},
	{
		x: 38700.4,
		y: 35150.6,
		icon: i_Skyscraper,
		icon_inv: i_Skyscraper_inv,
	},
	{
		x: 40335.8,
		y: 31450.2,
		icon: i_Skyscraper,
		icon_inv: i_Skyscraper_inv,
	},
	{
		x: 39827.5,
		y: 31363.2,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	},
	{
		x: 23674,
		y: 48233.1,
		icon: i_MilitaryBase,
		icon_inv: i_MilitaryBase_inv,
	},
	{
		x: 41796,
		y: 30978.1,
		icon: i_TownRuins,
		icon_inv: i_TownRuins_inv,
	},
	{
		x: 55499.4,
		y: 13415.6,
		icon: i_Office,
		icon_inv: i_Office_inv,
	},
	{
		x: 50129.9,
		y: 19838.2,
		icon: i_LowRise,
		icon_inv: i_LowRise_inv,
	},
	{
		x: 42208.1,
		y: 40213.3,
		icon: i_Office,
		icon_inv: i_Office_inv,
	},
	{
		x: 52452.3,
		y: 26789.1,
		icon: i_Libertalia,
		icon_inv: i_Libertalia_inv,
	},
	{
		x: 43988.3,
		y: 32476.9,
		icon: i_Pier,
		icon_inv: i_Pier_inv,
	}, {
		x: 33823,
		y: 34220.9,
		icon: i_Church,
		icon_inv: i_Church_inv,
	}, {
		x: 29764.5,
		y: 28410.3,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	}, {
		x: 30115.8,
		y: 27113.3,
		icon: i_Skyscraper,
		icon_inv: i_Skyscraper_inv,
	}, {
		x: 30170.6,
		y: 28910.9,
		icon: i_Office,
		icon_inv: i_Office_inv,
	}, {
		x: 30708,
		y: 29320.9,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	}, {
		x: 30803.6,
		y: 27866.1,
		icon: i_Graveyard,
		icon_inv: i_Graveyard_inv,
	}, {
		x: 32485.3,
		y: 27363.5,
		icon: i_Settlement,
		icon_inv: i_Settlement_inv,
	}, {
		x: 33203.6,
		y: 28445.5,
		icon: i_Landmark,
		icon_inv: i_Landmark_inv,
	}, {
		x: 35800.4,
		y: 26662.5,
		icon: i_Church,
		icon_inv: i_Church_inv,
	}, {
		x: 37072.5,
		y: 27977.5,
		icon: i_Skyscraper,
		icon_inv: i_Skyscraper_inv,
	}, {
		x: 32957.4,
		y: 30652.2,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	}, {
		x: 37116.8,
		y: 29300.3,
		icon: i_Pier,
		icon_inv: i_Pier_inv,
	}, {
		x: 32410.3,
		y: 29583.1,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	}, {
		x: 37947.3,
		y: 37804.5,
		icon: i_Car,
		icon_inv: i_Car_inv,
	}, {
		x: 38852,
		y: 37271.5,
		icon: i_Encampment,
		icon_inv: i_Encampment_inv,
	}, {
		x: 34020.2,
		y: 33827.5,
		icon: i_UrbanRuins,
		icon_inv: i_UrbanRuins_inv,
	}, {
		x: 29432.1,
		y: 34918.3,
		icon: i_Metro,
		icon_inv: i_Metro_inv,
	},
	{
		x: 32449.1,
		y: 16129.2,
		icon: i_Graveyard,
		icon_inv: i_Graveyard_inv,
	},
	{
		x: 48378.3,
		y: 48566.9,
		icon: i_Shipwreck,
		icon_inv: i_Shipwreck_inv,
	},
	{
		x: 26303.1,
		y: 42698.6,
		icon: i_RadioTower,
		icon_inv: i_RadioTower_inv,
	},
	{
		x: 44106,
		y: 35412.6,
		icon: i_Submarine,
		icon_inv: i_Submarine_inv,
	},
	{
		x: 10545.0743,
		y: 26149.7583,
		icon: i_Monorail,
		icon_inv: i_Monorail_inv,
	},
];
//2 -> 0,
var locale = {
	"en": {
		"url": "http://fallout.wikia.com/wiki/",
		"markerData": [{
				title: "Diamond City",
				page: "Diamond_City"
			},
			{
				title: "Diamond City Market",
				page: "Diamond_City_Market"
			},
			{
				title: "Home Plate",
				page: "Home_Plate"
			},
			{
				title: "Goodneighbor",
				page: "Goodneighbor"
			},
			{
				title: "Abernathy Farm",
				page: "Abernathy_Farm"
			},
			{
				title: "Andrew Station",
				page: "Andrew_Station"
			},
			{
				title: "ArcJet Systems",
				page: "ArcJet_Systems"
			},
			{
				title: "Wilson Atomatoys Corporate HQ",
				page: "Wilson_Atomatoys_Corporate_HQ"
			},
			{
				title: "Wilson Atomatoys Factory",
				page: "Wilson_Atomatoys_Factory"
			},
			{
				title: "Atom Cats Garage",
				page: "Atom_Cats_Garage"
			},
			{
				title: "Back Street Apparel",
				page: "Back_Street_Apparel"
			},
			{
				title: "BADTFL Regional Office",
				page: "BADTFL_Regional_Office"
			},
			{
				title: "Rook Family House",
				page: "Rook_Family_House"
			},
			{
				title: "Tower Apartments",
				page: "Tower_Apartments"
			},
			{
				title: "Boston Bugle Building",
				page: "Boston_Bugle_Building"
			},
			{
				title: "Lil' Gentry Playground",
				page: "Lil'_Gentry_Playground"
			},
			{
				title: "Beantown Brewery",
				page: "Beantown_Brewery"
			},
			{
				title: "Bedford Station",
				page: "Bedford_Station"
			},
			{
				title: "Big John's Salvage",
				page: "Big_John's_Salvage"
			},
			{
				title: "Peabody House",
				page: "Peabody_House"
			},
			{
				title: "Hawthorne Estate",
				page: "Hawthorne_Estate"
			},
			{
				title: "Boston Airport",
				page: "Boston_Airport"
			},
			{
				title: "The Prydwen",
				page: "The_Prydwen"
			},
			{
				title: "Prost Bar",
				page: "Prost_Bar"
			},
			{
				title: "Jimbo's Tower",
				page: "Jimbo's_Tower"
			},
			{
				title: "Boylston Club",
				page: "Boylston_Club"
			},
			{
				title: "Boston Common",
				page: "Boston_Common"
			},
			{
				title: "Warren Theater",
				page: "Warren_Theater"
			},
			{
				title: "Boston Mayoral Shelter",
				page: "Boston_Mayoral_Shelter"
			},
			{
				title: "Boston Police Rationing Site",
				page: "Boston_Police_Rationing_Site"
			},
			{
				title: "Boston Public Library",
				page: "Boston_Public_Library"
			},
			{
				title: "Breakheart Banks",
				page: "Breakheart_Banks"
			},
			{
				title: "Bunker Hill",
				page: "Bunker_Hill"
			},
			{
				title: "Cabot House",
				page: "Cabot_House"
			},
			{
				title: "Camp Kendall",
				page: "Camp_Kendall"
			},
			{
				title: "Cambridge Warehouse",
				page: "Cambridge_Warehouse"
			},
			{
				title: "Cambridge Crater",
				page: "Cambridge_crater"
			},
			{
				title: "Monsignor Plaza",
				page: "Monsignor_Plaza"
			},
			{
				title: "Cambridge Hardware Store",
				page: "Cambridge_Hardware_Store"
			},
			{
				title: "Cambridge Police Station",
				page: "Cambridge_Police_Station"
			},
			{
				title: "Cambridge Polymer Labs",
				page: "Cambridge_Polymer_Labs"
			},
			{
				title: "Raider Drug Den",
				page: "Raider_Drug_Den"
			},
			{
				title: "Mercer Safehouse",
				page: "Mercer_Safehouse"
			},
			{
				title: "Charles View Amphitheater",
				page: "Charles_View_Amphitheater"
			},
			{
				title: "Chestnut Hillock Reservoir",
				page: "Chestnut_Hillock_Reservoir"
			},
			{
				title: "Coast Guard Pier",
				page: "Coast_Guard_Pier"
			},
			{
				title: "College Square",
				page: "College_Square"
			},
			{
				title: "Combat Zone",
				page: "Combat_Zone"
			},
			{
				title: "Concord",
				page: "Concord"
			},
			{
				title: "Museum of Freedom",
				page: "Museum_of_Freedom"
			},
			{
				title: "Corvega Assembly Plant",
				page: "Corvega_Assembly_Plant"
			},
			{
				title: "County Crossing",
				page: "County_Crossing"
			},
			{
				title: "Covenant",
				page: "Covenant"
			},
			{
				title: "Crater House",
				page: "Crater_House"
			},
			{
				title: "Ticker Tape Lounge",
				page: "Ticker_Tape_Lounge"
			},
			{
				title: "Croup Manor",
				page: "Croup_Manor"
			},
			{
				title: "Cutler Bend",
				page: "Cutler_Bend"
			},
			{
				title: "Dark Hollow Pond",
				page: "Dark_Hollow_Pond"
			},
			{
				title: "D.B. Technical High School",
				page: "D.B._Technical_High_School"
			},
			{
				title: "South Fens Tower",
				page: "South_Fens_Tower"
			},
			{
				title: "RobCo Sales & Service Center",
				page: "RobCo_Sales_&_Service_Center"
			},
			{
				title: "Nakano Residence",
				page: "Nakano_Residence"
			},
			{
				title: "Drumlin Diner",
				page: "Drumlin_Diner"
			},
			{
				title: "Dunwich Borers",
				page: "Dunwich_Borers"
			},
			{
				title: "Hugo's Hole",
				page: "Hugo's_Hole"
			},
			{
				title: "East Boston Police Station",
				page: "East_Boston_Police_Station"
			},
			{
				title: "The Mechanist's Lair",
				page: "The_Mechanist's_Lair"
			},
			{
				title: "East Boston Preparatory School",
				page: "East_Boston_Preparatory_School"
			},
			{
				title: "Easy City Downs",
				page: "Easy_City_Downs"
			},
			{
				title: "Egret Tours Marina",
				page: "Egret_Tours_Marina"
			},
			{
				title: "Fairline Hill Estates",
				page: "Fairline_Hill_Estates"
			},
			{
				title: "Fallon's Department Store",
				page: "Fallon's_Department_Store"
			},
			{
				title: "Commonwealth Bank",
				page: "Commonwealth_Bank"
			},
			{
				title: "Faneuil Hall",
				page: "Faneuil_Hall"
			},
			{
				title: "Somerville Place",
				page: "Somerville_Place"
			},
			{
				title: "Lonely Chapel",
				page: "Lonely_Chapel"
			},
			{
				title: "Federal Ration Stockpile",
				page: "Federal_Ration_Stockpile"
			},
			{
				title: "Abandoned Shack",
				page: "Abandoned_Shack"
			},
			{
				title: "Federal Surveillance Center K-21B",
				page: "Federal_Surveillance_Center_K-21B"
			},
			{
				title: "Bridgeway Trust",
				page: "Bridgeway_Trust"
			},
			{
				title: "Brookline Building",
				page: "Brookline_Building"
			},
			{
				title: "Evans Way Cul-de-Sac",
				page: "Evans_Way_Cul-de-Sac"
			},
			{
				title: "Police Precinct 8",
				page: "Police_Precinct_8"
			},
			{
				title: "Hangman's Alley",
				page: "Hangman's_Alley"
			},
			{
				title: "Flagon Tunnel",
				page: "Flagon_Tunnel"
			},
			{
				title: "Parkview Apartments",
				page: "Parkview_Apartments"
			},
			{
				title: "Founder's Triangle",
				page: "Founder's_Triangle"
			},
			{
				title: "Fens Street Sewer",
				page: "Fens_Street_Sewer"
			},
			{
				title: "Fiddler's Green Trailer Estates",
				page: "Fiddler's_Green_Trailer_Estates"
			},
			{
				title: "Custom House Tower",
				page: "Custom_House_Tower"
			},
			{
				title: "35 Court",
				page: "35_Court"
			},
			{
				title: "Postal Square",
				page: "Postal_Square"
			},
			{
				title: "Finch Farm",
				page: "Finch_Farm"
			},
			{
				title: "Forest Grove Marsh",
				page: "Forest_Grove_Marsh"
			},
			{
				title: "Fort Hagen",
				page: "Fort_Hagen"
			},
			{
				title: "Fort Hagen Satellite Array",
				page: "Fort_Hagen_satellite_array"
			},
			{
				title: "Fort Strong",
				page: "Fort_Strong"
			},
			{
				title: "Four Leaf Fishpacking Plant",
				page: "Four_Leaf_Fishpacking_Plant"
			},
			{
				title: "Fraternal Post 115",
				page: "Fraternal_Post_115"
			},
			{
				title: "General Atomics Factory",
				page: "General_Atomics_Factory"
			},
			{
				title: "General Atomics Galleria",
				page: "General_Atomics_Galleria"
			},
			{
				title: "Gibson Point Pier",
				page: "Gibson_Point_Pier"
			},
			{
				title: "Crater of Atom",
				page: "Crater_of_Atom"
			},
			{
				title: "Edge of the Glowing Sea",
				page: "Edge_of_the_Glowing_Sea"
			},
			{
				title: "Skylanes Flight 1665",
				page: "Skylanes_Flight_1665"
			},
			{
				title: "Hopesmarch Pentecostal Church",
				page: "Hopesmarch_Pentecostal_Church"
			},
			{
				title: "Cave",
				page: "Cave"
			},
			{
				title: "Cave",
				page: "Cave"
			},
			{
				title: "O'Neill Family Manufacturing",
				page: "O'Neill_Family_Manufacturing"
			},
			{
				title: "Capsized Factory",
				page: "Capsized_Factory"
			},
			{
				title: "Forgotten Church",
				page: "Forgotten_Church"
			},
			{
				title: "Vertibird Wreckage",
				page: "Vertibird_Wreckage"
			},
			{
				title: "Federal Supply Cache 84NE",
				page: "Federal_Supply_Cache_84NE"
			},
			{
				title: "Atlantic Offices",
				page: "Atlantic_Offices"
			},
			{
				title: "Decrepit Factory",
				page: "Decrepit_Factory"
			},
			{
				title: "Decayed Reactor Site",
				page: "Decayed_Reactor_Site"
			},
			{
				title: "Sentinel Site",
				page: "Sentinel_Site"
			},
			{
				title: "Gunners Plaza",
				page: "Gunners_Plaza"
			},
			{
				title: "Fallen Skybridge",
				page: "Fallen_Skybridge"
			},
			{
				title: "Water Street Apartments",
				page: "Water_Street_Apartments"
			},
			{
				title: "Gorski Cabin",
				page: "Gorski_Cabin"
			},
			{
				title: "Graygarden",
				page: "Graygarden"
			},
			{
				title: "Greater Mass Blood Clinic",
				page: "Greater_Mass_Blood_Clinic"
			},
			{
				title: "Kendall Parking Garage",
				page: "Kendall_Parking_Garage"
			},
			{
				title: "Greenetech Genetics",
				page: "Greenetech_Genetics"
			},
			{
				title: "Greentop Nursery",
				page: "Greentop_Nursery"
			},
			{
				title: "Dorchester Heights Monument",
				page: "Dorchester_Heights_Monument"
			},
			{
				title: "Gwinnett Brewery",
				page: "Gwinnett_Brewery"
			},
			{
				title: "HalluciGen, Inc.",
				page: "HalluciGen,_Inc."
			},
			{
				title: "Hardware Town",
				page: "Hardware_Town"
			},
			{
				title: "Hesters Consumer Robotics",
				page: "Hesters_Consumer_Robotics"
			},
			{
				title: "Hub City Auto Wreckers",
				page: "Hub_City_Auto_Wreckers"
			},
			{
				title: "Hubris Comics",
				page: "Hubris_Comics"
			},
			{
				title: "Shenley's Oyster Bar",
				page: "Shenley's_Oyster_Bar"
			},
			{
				title: "Vault 114",
				page: "Vault_114"
			},
			{
				title: "Hyde Park",
				page: "Hyde_Park"
			},
			{
				title: "The Institute",
				page: "The_Institute_(location)"
			},
			{
				title: "C.I.T. Ruins",
				page: "C.I.T._Ruins"
			},
			{
				title: "Irish Pride Industries Shipyard",
				page: "Irish_Pride_Industries_Shipyard"
			},
			{
				title: "Ivan's",
				page: "Ivan's"
			},
			{
				title: "Jalbert Brothers Disposal",
				page: "Jalbert_Brothers_Disposal"
			},
			{
				title: "Jamaica Plain",
				page: "Jamaica_Plain"
			},
			{
				title: "Kendall Hospital",
				page: "Kendall_Hospital"
			},
			{
				title: "Kingsport Lighthouse",
				page: "Kingsport_Lighthouse"
			},
			{
				title: "Lake Cochituate",
				page: "Lake_Cochituate"
			},
			{
				title: "Lake Quannapowitt",
				page: "Lake_Quannapowitt"
			},
			{
				title: "Layton Towers",
				page: "Layton_Towers"
			},
			{
				title: "Lexington Apartments",
				page: "Lexington_Apartments"
			},
			{
				title: "Listening Post Bravo",
				page: "Listening_Post_Bravo"
			},
			{
				title: "Longneck Lukowski's Cannery",
				page: "Longneck_Lukowski's_Cannery"
			},
			{
				title: "Lynn Woods",
				page: "Lynn_Woods"
			},
			{
				title: "Mahkra Fishpacking",
				page: "Mahkra_Fishpacking"
			},
			{
				title: "Malden Center",
				page: "Malden_Center"
			},
			{
				title: "Mass Bay Medical Center",
				page: "Mass_Bay_Medical_Center"
			},
			{
				title: "Mass Fusion Containment Shed",
				page: "Mass_Fusion_Containment_Shed"
			},
			{
				title: "Mass Fusion Disposal Site",
				page: "Mass_Fusion_disposal_site"
			},
			{
				title: "Mass Fusion Executive Suite",
				page: "Mass_Fusion_Executive_Suite"
			},
			{
				title: "Mass Fusion Building",
				page: "Mass_Fusion_Building"
			},
			{
				title: "Old Corner Bookstore",
				page: "Old_Corner_Bookstore"
			},
			{
				title: "Mass Gravel & Sand",
				page: "Mass_Gravel_&_Sand"
			},
			{
				title: "Mass Pike Interchange",
				page: "Mass_Pike_Interchange"
			},
			{
				title: "Mass Pike Tunnel East",
				page: "Mass_Pike_Tunnel_East"
			},
			{
				title: "Mass Pike Tunnel West",
				page: "Mass_Pike_Tunnel_West"
			},
			{
				title: "Medford Memorial Hospital",
				page: "Medford_Memorial_Hospital"
			},
			{
				title: "Med-Tek Research",
				page: "Med-Tek_Research"
			},
			{
				title: "Milton General Hospital",
				page: "Milton_General_Hospital"
			},
			{
				title: "Mystic Pines",
				page: "Mystic_Pines"
			},
			{
				title: "Nahant Chapel",
				page: "Nahant_Chapel"
			},
			{
				title: "Nahant Oceanological Society",
				page: "Nahant_Oceanological_Society"
			},
			{
				title: "Nahant Sherrif's Department",
				page: "Nahant_Sherrif's_Department"
			},
			{
				title: "Nahant Wharf",
				page: "Nahant_Wharf"
			},
			{
				title: "Natick Police Department",
				page: "Natick_Police_Department"
			},
			{
				title: "Natick Banks",
				page: "Natick_Banks"
			},
			{
				title: "National Guard Training Yard",
				page: "National_Guard_Training_Yard"
			},
			{
				title: "Neponset Park",
				page: "Neponset_Park"
			},
			{
				title: "NH&M Freight Depot",
				page: "NH&M_Freight_Depot"
			},
			{
				title: "Nordhagen Beach",
				page: "Nordhagen_Beach"
			},
			{
				title: "Apartment",
				page: "Apartment"
			},
			{
				title: "Mean Pastries",
				page: "Mean_Pastries"
			},
			{
				title: "North End Graveyard",
				page: "North_End_Graveyard"
			},
			{
				title: "Oberland Station",
				page: "Oberland_Station"
			},
			{
				title: "Old Gullet Sinkhole",
				page: "Old_Gullet_Sinkhole"
			},
			{
				title: "Railroad HQ",
				page: "Railroad_HQ"
			},
			{
				title: "Old North Church",
				page: "Old_North_Church"
			},
			{
				title: "Parsons Creamery",
				page: "Parsons_Creamery"
			},
			{
				title: "Parsons State Insane Asylum",
				page: "Parsons_State_Insane_Asylum"
			},
			{
				title: "Boxing Gym",
				page: "Boxing_Gym"
			},
			{
				title: "Pickman Gallery",
				page: "Pickman_Gallery"
			},
			{
				title: "Murkwater Construction Site",
				page: "Murkwater_Construction_Site"
			},
			{
				title: "Electrical Hobbyist's Club",
				page: "Electrical_Hobbyist%27s_club"
			},
			{
				title: "Coastal Cottage",
				page: "Coastal_Cottage"
			},
			{
				title: "Pizza Parlour",
				page: "Pizza_Parlour"
			},
			{
				title: "Poseidon Energy",
				page: "Poseidon_Energy"
			},
			{
				title: "Poseiden Energy Turbine #18-F",
				page: "Poseiden_Energy_Turbine_#18-F"
			},
			{
				title: "Poseidon Reservoir",
				page: "Poseidon_Reservoir"
			},
			{
				title: "Quincy Quarries",
				page: "Quincy_Quarries"
			},
			{
				title: "Quincy Ruins",
				page: "Quincy_Ruins"
			},
			{
				title: "Quincy Police Station",
				page: "Quincy_Police_Station"
			},
			{
				title: "Ranger Cabin",
				page: "Ranger_Cabin"
			},
			{
				title: "Recon Bunker Theta",
				page: "Recon_Bunker_Theta"
			},
			{
				title: "Red Rocket Truck Stop",
				page: "Red_Rocket_Truck_Stop"
			},
			{
				title: "Reeb Marina",
				page: "Reeb_Marina"
			},
			{
				title: "Outpost Zimonja",
				page: "Outpost_Zimonja"
			},
			{
				title: "Radio Tower 3SM-U81",
				page: "Radio_Tower_3SM-U81"
			},
			{
				title: "Relay Tower 0MC-810",
				page: "Relay_Tower_0MC-810"
			},
			{
				title: "Relay Tower 0SC-527",
				page: "Relay_Tower_0SC-527"
			},
			{
				title: "Relay Tower 0BB-915",
				page: "Relay_Tower_0BB-915"
			},
			{
				title: "Relay Tower 1DL-109",
				page: "Relay_Tower_1DL-109"
			},
			{
				title: "Relay Tower 0DB-521",
				page: "Relay_Tower_0DB-521"
			},
			{
				title: "Revere Beach Station",
				page: "Revere_Beach_Station"
			},
			{
				title: "Revere Satellite Array",
				page: "Revere_Satellite_Array"
			},
			{
				title: "Roadside Pines Motel",
				page: "Roadside_Pines_Motel"
			},
			{
				title: "Robotics Disposal Ground",
				page: "Robotics_Disposal_Ground"
			},
			{
				title: "Robotics Pioneer Park",
				page: "Robotics_Pioneer_Park"
			},
			{
				title: "Rocky Narrows Park",
				page: "Rocky_Narrows_Park"
			},
			{
				title: "Rotten Landfill",
				page: "Rotten_Landfill"
			},
			{
				title: "Museum of Witchcraft",
				page: "Museum_of_Witchcraft"
			},
			{
				title: "Sanctuary",
				page: "Sanctuary_Hills"
			},
			{
				title: "Sandy Coves Convalescent Home",
				page: "Sandy_Coves_Convalescent_Home"
			},
			{
				title: "Saugus Ironworks",
				page: "Saugus_Ironworks"
			},
			{
				title: "Scrap Palace",
				page: "Scrap_Palace"
			},
			{
				title: "The Shamrock Taphouse",
				page: "The_Shamrock_Taphouse"
			},
			{
				title: "Shaw High School",
				page: "Shaw_High_School"
			},
			{
				title: "Skylanes Flight 1981",
				page: "Skylanes_Flight_1981"
			},
			{
				title: "Slocum's Joe Corporate HQ",
				page: "Slocum's_Joe_Corporate_HQ"
			},
			{
				title: "S. Boston Military Checkpoint",
				page: "S._Boston_Military_Checkpoint"
			},
			{
				title: "L Street Bathhouse",
				page: "L_Street_Bathhouse"
			},
			{
				title: "Union Man's Circle",
				page: "Union_Man's_Circle"
			},
			{
				title: "South Boston Police Department",
				page: "South_Boston_Police_Department"
			},
			{
				title: "Spectacle Island",
				page: "Spectacle_Island"
			},
			{
				title: "Starlight Drive In",
				page: "Starlight_Drive_In"
			},
			{
				title: "Suffolk County Charter School",
				page: "Suffolk_County_Charter_School"
			},
			{
				title: "Sunshine Tidings Co-op",
				page: "Sunshine_Tidings_Co-op"
			},
			{
				title: "Lexington",
				page: "Lexington"
			},
			{
				title: "Super Duper Mart",
				page: "Super_Duper_Mart_(Fallout_4)"
			},
			{
				title: "Swan's Pond",
				page: "Swan's_Pond"
			},
			{
				title: "Taffington Boathouse",
				page: "Taffington_Boathouse"
			},
			{
				title: "Tenpines Bluff",
				page: "Tenpines_Bluff"
			},
			{
				title: "Medical Center Metro",
				page: "Medical_Center_Metro"
			},
			{
				title: "Hub 360",
				page: "Hub_360"
			},
			{
				title: "The Castle",
				page: "The_Castle"
			},
			{
				title: "The Slog",
				page: "The_Slog"
			},
			{
				title: "Thicket Excavations",
				page: "Thicket_Excavations"
			},
			{
				title: "Ticonderoga",
				page: "Ticonderoga"
			},
			{
				title: "Trinity Tower",
				page: "Trinity_Tower"
			},
			{
				title: "Trinity Plaza",
				page: "Trinity_Plaza"
			},
			{
				title: "University Point",
				page: "University_Point"
			},
			{
				title: "USAF Satellite Station Olivia",
				page: "USAF_Satellite_Station_Olivia"
			},
			{
				title: "Weatherby Savings & Loan",
				page: "Weatherby_Savings_&_Loan"
			},
			{
				title: "USS Constitution",
				page: "USS_Constitution"
			},
			{
				title: "Navy Yard",
				page: "Navy_Yard"
			},
			{
				title: "Weatherby Investment Trust",
				page: "Weatherby_Investment_Trust"
			},
			{
				title: "Wreck of the USS Riptide",
				page: "Wreck_of_the_USS_Riptide"
			},
			{
				title: "Vault 111",
				page: "Vault_111"
			},
			{
				title: "Massachusetts State House",
				page: "Massachusetts_State_House"
			},
			{
				title: "Park Street Station",
				page: "Park_Street_Station"
			},
			{
				title: "Old Granary Burying Ground",
				page: "Old_Granary_Burying_Ground"
			},
			{
				title: "Malden Middle School",
				page: "Malden_Middle_School"
			},
			{
				title: "Vault 75",
				page: "Vault_75"
			},
			{
				title: "Vault 81 Atrium",
				page: "Vault_81_Atrium"
			},
			{
				title: "Vault 81",
				page: "Vault_81"
			},
			{
				title: "Vault 95",
				page: "Vault_95"
			},
			{
				title: "Vault-Tec Regional HQ",
				page: "Vault-Tec_Regional_HQ"
			},
			{
				title: "Rocky Cave",
				page: "Rocky_Cave"
			},
			{
				title: "Walden Pond",
				page: "Walden_Pond"
			},
			{
				title: "Warwick Homestead",
				page: "Warwick_Homestead"
			},
			{
				title: "Christopher Columbus Park",
				page: "Christopher_Columbus_Park"
			},
			{
				title: "Wattz Consumer Electronics",
				page: "Wattz_Consumer_Electronics"
			},
			{
				title: "West Everett Estates",
				page: "West_Everett_Estates"
			},
			{
				title: "Westing Estate",
				page: "Westing_Estate"
			},
			{
				title: "Weston Water Treatment Plant",
				page: "Weston_Water_Treatment_Plant"
			},
			{
				title: "West Roxbury Station",
				page: "West_Roxbury_Station"
			},
			{
				title: "Wicked Shipping Fleet Lockup",
				page: "Wicked_Shipping_Fleet_Lockup"
			},
			{
				title: "Tucker Memorial Bridge",
				page: "Tucker_Memorial_Bridge"
			},
			{
				title: "Fort Hagen Filling Station",
				page: "Fort_Hagen_filling_station"
			},
			{
				title: "Dartmouth Professional Building",
				page: "Dartmouth_Professional_Building"
			},
			{
				title: "Footbridge Camp",
				page: "Footbridge_Camp"
			},
			{
				title: "Marlborough House",
				page: "Marlborough_House"
			},
			{
				title: "Harbormaster Hotel",
				page: "Harbormaster_Hotel"
			},
			{
				title: "Factory",
				page: "Factory"
			},
			{
				title: "Valenti Station",
				page: "Valenti_Station"
			},
			{
				title: "South Boston Graveyard",
				page: "South_Boston_graveyard"
			},
			{
				title: "South Boston High School",
				page: "South_Boston_High_School"
			},
			{
				title: "Oakwood Residences",
				page: "Oakwood_Residences"
			},
			{
				title: "Garden Terrace",
				page: "Garden_Terrace"
			},
			{
				title: "Haymarket Mall",
				page: "Haymarket_Mall"
			},
			{
				title: "Waypoint Echo",
				page: "Waypoint_Echo"
			},
			{
				title: "Paul Revere House",
				page: "Paul_Revere_House"
			},
			{
				title: "Salem",
				page: "Salem"
			},
			{
				title: "Lynn Pier Parking",
				page: "Lynn_Pier_Parking"
			},
			{
				title: "The Gwinnett Restaurant",
				page: "The_Gwinnett_Restaurant"
			},
			{
				title: "Libertalia",
				page: "Libertalia"
			},
			{
				title: "Long Wharf",
				page: "Long_Wharf"
			}, {
				title: "Holy Mission Congregation",
				page: "Holy_Mission_Congregation"
			}, {
				title: "Cambridge Academic Center",
				page: "Cambridge_Academic_Center"
			}, {
				title: "Collegiate Administration Building",
				page: "Collegiate_Administration_Building"
			}, {
				title: "Cambridge Campus Diner",
				page: "Cambridge_Campus_Diner"
			}, {
				title: "Campus Law Offices",
				page: "Campus_Law_Offices"
			}, {
				title: "Cambridge Graveyard",
				page: "Cambridge_Graveyard"
			}, {
				title: "Cambridge Raider Base",
				page: "Cambridge_Raider_Base"
			}, {
				title: "Cambridge Baseball Diamond",
				page: "Cambridge_Baseball_Diamond"
			}, {
				title: "Cambridge Church",
				page: "Cambridge_Church"
			}, {
				title: "Cambridge Construction Site",
				page: "Cambridge_Construction_Site"
			}, {
				title: "East C.I.T. Raider Camp",
				page: "East_C.I.T._Raider_Camp"
			}, {
				title: "Science Center Gift Shop",
				page: "Science_Center_Gift_Shop"
			}, {
				title: "Major Crossroad",
				page: "Major_Crossroad"
			}, {
				title: "Freeway Pileup",
				page: "Freeway_Pileup"
			}, {
				title: "Back Alley Camp",
				page: "Back_Alley_Camp"
			}, {
				title: "Raider Alleyway Outpost",
				page: "Raider_Alleyway_Outpost"
			}, {
				title: "Subway Station",
				page: "Subway_Station"
			},
			{
				title: "Wildwood Cemetery",
				page: "Wildwood_Cemetery"
			},
			{
				title: "Wreck of the FMS Northern Star",
				page: "Wreck_of_the_FMS_Northern_Star"
			},
			{
				title: "WRVR Broadcast Station",
				page: "WRVR_Broadcast_Station"
			},
			{
				title: "Yangtze",
				page: "Yangtze"
			},
			{
				title: "Nuka-World Transit Center",
				page: "Nuka-World_Transit_Center"
			},
		],
		"rectData": [{
			name: "Diamond City",
			markerData: [{
					title: "Diamond City",
					page: "Diamond_City"
				},
				{
					title: "Diamond City Market",
					page: "Diamond_City_market"
				},
				{
					title: "Home Plate",
					page: "Home_Plate"
				},
			]
		}, ],
		"filterText": {
			"Airfield": "Airfield",
			"Brownstone": "Brownstone",
			"Bunker": "Bunker",
			"BunkerHill": "Bunker Hill",
			"Camper": "Camper",
			"Car": "Car",
			"Castle": "Castle",
			"Cave": "Cave",
			"Church": "Church",
			"City": "City",
			"CountryClub": "Country Club",
			"CustomHouse": "Custom House",
			"DiamondCity": "Diamond City",
			"DriveIn": "Drive-in",
			"ElevatedHighway": "Elevated Highway",
			"Encampment": "Encampment",
			"Factory": "Factory",
			"FaneuilHall": "Faneuil Hall",
			"Farm": "Farm",
			"FillingStation": "Filling Station",
			"Forested": "Forested",
			"Goodneighbor": "Goodneighbor",
			"Graveyard": "Graveyard",
			"Hospital": "Hospital",
			"IndustrialDome": "Industrial Dome",
			"IndustrialStacks": "Industrial Stacks",
			"Institute": "Institute",
			"IrishPride": "Irish Pride",
			"Junkyard": "Junkyard",
			"Landmark": "Landmark",
			"Libertalia": "Libertalia",
			"LowRise": "Low-rise",
			"Mechanist": "Mechanist",
			"Metro": "Metro",
			"MilitaryBase": "Military Base",
			"Monorail": "Monorail",
			"Monument": "Monument",
			"Observatory": "Observatory",
			"Office": "Office",
			"Pier": "Pier",
			"PoliceStation": "Police Station",
			"PondLake": "Pond/Lake",
			"Prydwen": "Prydwen",
			"Quarry": "Quarry",
			"RadioactiveArea": "Radioactive Area",
			"RadioTower": "Radio Tower",
			"Railroad": "Railroad",
			"RailroadFaction": "Railroad (Faction)",
			"Salem": "Salem",
			"SancHills": "Sanctuary Hills",
			"Satellite": "Satellite",
			"School": "School",
			"Sentinel": "Sentinel Site",
			"Settlement": "Settlement",
			"Sewer": "Sewer",
			"Shipwreck": "Shipwreck",
			"Skyscraper": "Skyscraper",
			"Submarine": "Submarine",
			"SwanPond": "Swan Pond",
			"Town": "Town",
			"TownRuins": "Town Ruins",
			"UrbanRuins": "Urban Ruins",
			"USSConstitution": "USS Constitution",
			"Unmarked": "Unmarked",
			"Vault": "Vault",
			"Region": "Region",
		},
		"text": {
			"Locations": "Locations",
			"Hide": "Hide",
			"Filter": "Filter",
			"See more": "See more",
		}
	},
	"ru": {
		"url": "http://ru.fallout.wikia.com/wiki/",
		"markerData": [{
				title: "Чеви-Чейз — восток",
				page: "Чеви-Чейз_—_восток"
			},
			{
				title: "Чеви-Чейз — север",
				page: "Чеви-Чейз — север"
			},
			{
				title: "Здание «Новости Галактики»",
				page: "Здание_«Новости_Галактики»"
			},
			{
				title: "Дюпон — восток",
				page: "Дюпон_—_восток"
			},
			{
				title: "Дюпон — северо-восток",
				page: "Дюпон_—_северо-восток"
			},
			{
				title: "Станция Дюпон-сёркл",
				page: "Станция_Дюпон-сёркл"
			},
			{
				title: "Дюпон — запад",
				page: "Дюпон_—_запад"
			},
			{
				title: "Такома, фабрика",
				page: "Такома,_фабрика"
			},
			{
				title: "Такома-парк",
				page: "Такома-парк"
			},
			{
				title: "Больница Надежды",
				page: "Больница_Надежды"
			},
			{
				title: "Гостиница «Стейтсмен»",
				page: "Гостиница_«Стейтсмен»"
			},
			{
				title: "Штаб-квартира «Волт-Тек»",
				page: "Штаб-квартира_«Волт-Тек»"
			},
			{
				title: "Вернон-сквер — восток",
				page: "Вернон-сквер_—_восток"
			},
			{
				title: "Вернон-сквер — север",
				page: "Вернон-сквер_—_север"
			},
			{
				title: "Станция «Вернон-сквер»",
				page: "Станция_«Вернон-сквер»"
			},
			{
				title: "Метро-центр",
				page: "Метро-центр"
			},
			{
				title: "Пенсильвания-авеню — восток",
				page: "Пенсильвания-авеню_—_восток"
			},
			{
				title: "Пенсильвания-авеню — север",
				page: "Пенсильвания-авеню_—_север"
			},
			{
				title: "Пенсильвания-авеню — северо-запад",
				page: "Пенсильвания-авеню_—_северо-запад"
			},
			{
				title: "Пенсильвания-авеню — юг",
				page: "Пенсильвания-авеню_—_юг"
			},
			{
				title: "Белый Дом",
				page: "Белый_Дом"
			},
			{
				title: "Белый Дом — площадь",
				page: "Белый_Дом_—_площадь"
			},
			{
				title: "Мемориал Линкольна",
				page: "Мемориал_Линкольна"
			},
			{
				title: "Молл северо-запад",
				page: "Молл_северо-запад"
			},
			{
				title: "Молл юго-запад",
				page: "Молл_юго-запад"
			},
			{
				title: "Здание Управления музеями",
				page: "Здание_управления_музеями"
			},
			{
				title: "Исторический музей",
				page: "Исторический_музей"
			},
			{
				title: "Технический музей",
				page: "Технический_музей"
			},
			{
				title: "Капитолий",
				page: "Капитолий_(Fallout 3)"
			},
			{
				title: "Молл юго-запад",
				page: "Молл_юго-запад"
			},
			{
				title: "Национальный архив",
				page: "Национальный_архив"
			},
			{
				title: "Монумент Вашингтона",
				page: "Монумент_Вашингтона"
			},
			{
				title: "Ланфан-плаза",
				page: "Ланфан-плаза"
			},
			{
				title: "Ланфан — юг",
				page: "Ланфан_—_юг"
			},
			{
				title: "Джорджтаун — восток",
				page: "Джорджтаун_—_восток"
			},
			{
				title: "Джорджтаун_—_север",
				page: "Джорджтаун_—_север"
			},
			{
				title: "Джорджтаун — юг",
				page: "Джорджтаун_—_юг"
			},
			{
				title: "Джорджтаун — запад",
				page: "Джорджтаун_—_запад"
			},
			{
				title: "База рейнджеров Рейли",
				page: "База_рейнджеров_Рейли"
			},
			{
				title: "Станция «Сьюард-сквер» — север",
				page: "Станция_«Сьюард-сквер»_—_север"
			},
			{
				title: "Сьюард-сквер — северо-запад",
				page: "Сьюард-сквер_—_северо-запад"
			},
			{
				title: "Сьюард-сквер — юго-восток",
				page: "Сьюард-сквер_—_юго-восток"
			},
			{
				title: "Хьюбрис Комикс (локация)",
				page: "Хьюбрис_Комикс_(локация)"
			},
			{
				title: "Район Мейсон — юг",
				page: "Район Мейсон_—_юг"
			},
			{
				title: "Фоллз-Чёрч — восток",
				page: "Фоллз-Чёрч_—_восток"
			},
			{
				title: "Станция «Фоллз-Чёрч»",
				page: "Станция_«Фоллз-Чёрч»"
			},
			{
				title: "Фоллз-Чёрч — север",
				page: "Фоллз-Чёрч_—_север"
			},
			{
				title: "Арлингтонское кладбище — север",
				page: "Арлингтонское_кладбище_—_север"
			},
			{
				title: "Арлингтонское кладбище — юг",
				page: "Арлингтонское_кладбище_—_юг"
			},
			{
				title: "Мама Дольче",
				page: "Мама_Дольче"
			},
			{
				title: "Станция метро «Бейлиз Кроссроудз»",
				page: "Станция_метро_«Бейлиз_Кроссроудз»"
			},
			{
				title: "Аванпост Изгоев",
				page: "Аванпост_Изгоев"
			},
			{
				title: "Мегатонна",
				page: "Мегатонна"
			},
			{
				title: "Заброшенная стоянка",
				page: "Заброшенная_стоянка"
			},
			{
				title: "Дом Агаты",
				page: "Дом_Агаты"
			},
			{
				title: "Оружейные склады Александрии",
				page: "Оружейные_склады_Александрии"
			},
			{
				title: "Корабль пришельцев",
				page: "Корабль_пришельцев"
			},
			{
				title: "Анакостия",
				page: "Анакостия"
			},
			{
				title: "Анкориджский мемориал",
				page: "Анкориджский_мемориал"
			},
			{
				title: "Андейл",
				page: "Андейл"
			},
			{
				title: "Логово НеМирмики",
				page: "Логово_НеМирмики"
			},
			{
				title: "Арефу",
				page: "Арефу"
			},
			{
				title: "Арлингтонская библиотека",
				page: "Арлингтонская_библиотека"
			},
			{
				title: "Развалины Бетесды",
				page: "Развалины_Бетесды"
			},
			{
				title: "Большой Город",
				page: "Большой_Город"
			},
			{
				title: "Телебашня KB5",
				page: "Телебашня_KB5"
			},
			{
				title: "Телебашня KT8",
				page: "Телебашня_KT8"
			},
			{
				title: "Телебашня LP8",
				page: "Телебашня_LP8"
			},
			{
				title: "Община Кентербери",
				page: "Община_Кентербери"
			},
			{
				title: "Сгоревший дом",
				page: "Сгоревший_дом"
			},
			{
				title: "Ферма «Чистые земли»",
				page: "Ферма_«Чистые_земли»"
			},
			{
				title: "Крайслус-билдинг",
				page: "Крайслус-билдинг"
			},
			{
				title: "Пещера Клиффсайд",
				page: "Пещера_Клиффсайд"
			},
			{
				title: "Селение Клиффтоп",
				page: "Селение_Клиффтоп"
			},
			{
				title: "Завод «Корвега»",
				page: "Завод_«Корвега»"
			},
			{
				title: "Убежище когтей смерти",
				page: "Убежище_когтей_смерти"
			},
			{
				title: "Церковь Дикерсона",
				page: "Церковь_Дикерсона"
			},
			{
				title: "Разрушенная переправа через Девил",
				page: "Разрушенная_переправа_через_Девил"
			},
			{
				title: "Жилище Дукова",
				page: "Жилище_Дукова"
			},
			{
				title: "Данвич-билдинг",
				page: "Данвич-билдинг"
			},
			{
				title: "Национальный лагерь Эверглоу",
				page: "Национальный_лагерь_Эверглоу"
			},
			{
				title: "Эвергрин-Миллс",
				page: "Эвергрин-Миллс"
			},
			{
				title: "Трасса и палаточный лагерь Ф. Скотта",
				page: "Трасса_и_палаточный_лагерь_Ф._Скотта"
			},
			{
				title: "Бывший район особняков",
				page: "Бывший_район_особняков"
			},
			{
				title: "Развалины Фэйрфакса",
				page: "Развалины_Фэйрфакса"
			},
			{
				title: "Станция метро Фаррагут-вест",
				page: "Станция_метро_Фаррагут-вест"
			},
			{
				title: "Стоянка «Пять осей»",
				page: "Стоянка_«Пять_осей»"
			},
			{
				title: "Затопленное метро‎",
				page: "Затопленное_метро‎"
			},
			{
				title: "Метро Арлингтон/Пустоши",
				page: "Метро_Арлингтон/Пустоши"
			},
			{
				title: "Мемориальное поле Фордем-Флэша",
				page: "Мемориальное_поле_Фордем-Флэша"
			},
			{
				title: "Форт Баннистер",
				page: "Форт_Баннистер"
			},
			{
				title: "Форт Константин",
				page: "Форт_Константин"
			},
			{
				title: "Форт Индепенденс",
				page: "Форт_Индепенденс"
			},
			{
				title: "Френдшип-Хайтс",
				page: "Френдшип-Хайтс"
			},
			{
				title: "Полицейский участок Джермантауна",
				page: "Полицейский_участок_Джермантауна"
			},
			{
				title: "Гердершейд",
				page: "Гердершейд"
			},
			{
				title: "Грейдич",
				page: "Грейдич"
			},
			{
				title: "Свалка Гринер Пасчерс",
				page: "Свалка_Гринер_Пасчерс"
			},
			{
				title: "Жуткая закусочная",
				page: "Жуткая_закусочная"
			},
			{
				title: "Кладбище Холлоуд Мурс",
				page: "Кладбище_Холлоуд_Мурс"
			},
			{
				title: "Тайник Гамильтона",
				page: "Тайник_Гамильтона"
			},
			{
				title: "Монастырь Вечного Света",
				page: "Монастырь_Вечного_Света"
			},
			{
				title: "Заражённое радиацией метро",
				page: "Заражённое_радиацией_метро"
			},
			{
				title: "Мусорная свалка братьев Джалбертов",
				page: "Мусорная_свалка_братьев_Джалбертов"
			},
			{
				title: "Мемориал Джефферсона",
				page: "Мемориал_Джефферсона"
			},
			{
				title: "Заправка и магазинчик Джоко",
				page: "Заправка_и_магазинчик_Джоко"
			},
			{
				title: "Станция метро «Жюри-стрит»",
				page: "Станция_метро_«Жюри-стрит»"
			},
			{
				title: "Пансион Кэйлин",
				page: "Пансион_Кэйлин"
			},
			{
				title: "Литл-Лэмплайт",
				page: "Литл-Лэмплайт"
			},
			{
				title: "Станция Мэриголд",
				page: "Станция_Мэриголд"
			},
			{
				title: "Утиль Мейсона Диксона",
				page: "Утиль_Мейсона_Диксона"
			},
			{
				title: "Станция-ретранслятор MDPL",
				page: "Станция-ретранслятор_MDPL"
			},
			{
				title: "Электростанция MDPL-05",
				page: "Электростанция_MDPL-05"
			},
			{
				title: "Электростанция MDPL-13",
				page: "Электростанция_MDPL-13"
			},
			{
				title: "Электростанция MDPL-16",
				page: "Электростанция_MDPL-16"
			},
			{
				title: "Электростанция MDPL-21",
				page: "Электростанция_MDPL-21"
			},
			{
				title: "Депо «Мерешти»",
				page: "Депо_«Мерешти»"
			},
			{
				title: "Минное поле",
				page: "Минное_поле"
			},
			{
				title: "Водохранилище округа Монтгомери",
				page: "Водохранилище_округа_Монтгомери"
			},
			{
				title: "Открытый кинотеатр «Лунный луч",
				page: "Открытый_кинотеатр_«Лунный_луч"
			},
			{
				title: "Лагерь на горе Мэйбл",
				page: "Лагерь_на_горе_Мэйбл"
			},
			{
				title: "База Национальной гвардии",
				page: "База_Национальной_гвардии"
			},
			{
				title: "Станция «Сенека» — северо-запад",
				page: "Станция_«Сенека»_—_северо-запад"
			},
			{
				title: "Завод «Ядер-кола»",
				page: "Завод_«Ядер-кола»"
			},
			{
				title: "Оазис",
				page: "Оазис"
			},
			{
				title: "Олд-Олни",
				page: "Олд-Олни"
			},
			{
				title: "Парадиз-Фоллз",
				page: "Парадиз-Фоллз"
			},
			{
				title: "Радиовышка",
				page: "Радиовышка"
			},
			{
				title: "Рэйвен-Рок",
				page: "Рэйвен-Рок"
			},
			{
				title: "Курорт Риклайнин-Гроув",
				page: "Курорт_Риклайнин-Гроув"
			},
			{
				title: "Завод «Ред Рейсер»",
				page: "Завод_«Ред_Рейсер»"
			},
			{
				title: "Штаб-квартира Регуляторов",
				page: "Штаб-квартира_Регуляторов"
			},
			{
				title: "Башня-ретранслятор KX-B8-11",
				page: "Башня-ретранслятор_KX-B8-11"
			},
			{
				title: "Лодочный причал",
				page: "Лодочный_причал"
			},
			{
				title: "Ривет-Сити",
				page: "Ривет-Сити"
			},
			{
				title: "Комплекс «РобКо»",
				page: "Комплекс_«РобКо»"
			},
			{
				title: "Сервис-центр роботехники",
				page: "Сервис-центр_роботехники"
			},
			{
				title: "Пещеры Рок-Крик",
				page: "Пещеры_Рок-Крик"
			},
			{
				title: "Заправка Рокбрейкера",
				page: "Заправка_Рокбрейкера"
			},
			{
				title: "Автомобильный туннель Роклэнд",
				page: "Автомобильный_туннель_Роклэнд"
			},
			{
				title: "Академия Рузвельта",
				page: "Академия_Рузвельта"
			},
			{
				title: "Станция сети «СатКом» NN-03d",
				page: "Станция_сети_«СатКом»_NN-03d"
			},
			{
				title: "Станция сети «СатКом» NW-05a",
				page: "Станция_сети_«СатКом»_NW-05a"
			},
			{
				title: "Станция сети «СатКом» NW-07c",
				page: "Станция_сети_«СатКом»_NW-07c"
			},
			{
				title: "Свалка",
				page: "Свалка"
			},
			{
				title: "Промежуточная станция коллектора",
				page: "Промежуточная_станция_коллектора"
			},
			{
				title: "Шейлбридж",
				page: "Шейлбридж"
			},
			{
				title: "Гараж Кейси Смита",
				page: "Гараж_Кейси_Смита"
			},
			{
				title: "Спрингвейл",
				page: "Спрингвейл"
			},
			{
				title: "Школа Спрингвейла",
				page: "Школа_Спрингвейла"
			},
			{
				title: "Супермарт",
				page: "Супермарт"
			},
			{
				title: "Храм Единения",
				page: "Храм_Единения"
			},
			{
				title: "Тенпенни-Тауэр",
				page: "Тенпенни-Тауэр_(локация)"
			},
			{
				title: "Тёплый коллектор",
				page: "Тёплый_коллектор"
			},
			{
				title: "Цитадель",
				page: "Цитадель"
			},
			{
				title: "Открытый кинотеатр «Обозреватель»",
				page: "Открытый_кинотеатр_«Обозреватель»"
			},
			{
				title: "Республика Дэйва",
				page: "Республика_Дэйва"
			},
			{
				title: "Открытый кинотеатр «Белая полоса»",
				page: "Открытый_кинотеатр_«Белая_полоса»"
			},
			{
				title: "Питтсбургский туннель",
				page: "Питтсбургский_туннель"
			},
			{
				title: "Электростанция VAPL-58",
				page: "Электростанция_VAPL-58"
			},
			{
				title: "Электростанция VAPL-66",
				page: "Электростанция_VAPL-66"
			},
			{
				title: "Электростанция VAPL-84",
				page: "Электростанция_VAPL-84"
			},
			{
				title: "Убежище 101",
				page: "Убежище_101"
			},
			{
				title: "Убежище 106",
				page: "Убежище_106"
			},
			{
				title: "Убежище 108",
				page: "Убежище_108"
			},
			{
				title: "Убежище 87",
				page: "Убежище_87"
			},
			{
				title: "Убежище 92",
				page: "Убежище_92"
			},
			{
				title: "Станция Уоррингтон",
				page: "Станция_Уоррингтон"
			},
			{
				title: "Депо «Уоррингтон»",
				page: "Депо_«Уоррингтон»"
			},
			{
				title: "Арсенал Уитона",
				page: "Арсенал_Уитона"
			},
			{
				title: "Товарная станция Вильхельма",
				page: "Товарная_станция_Вильхельма"
			},
			{
				title: "Станция вещания WKML",
				page: "Станция_вещания_WKML"
			},
			{
				title: "Туннели_яо-гаев",
				page: "Туннели яо-гаев"
			},
		],
		"rectData": [{
				name: "Чеви-Чейз",
				markerData: [{
						title: "Чеви-Чейз — восток",
						page: "Чеви-Чейз_—_восток"
					},
					{
						title: "Чеви-Чейз — север",
						page: "Чеви-Чейз — север"
					},
					{
						title: "Здание «Новости Галактики»",
						page: "Здание_«Новости_Галактики»"
					},
				]
			},
			{
				name: "Дюпон-сёркл",
				markerData: [{
						title: "Дюпон — восток",
						page: "Дюпон_—_восток"
					},
					{
						title: "Дюпон — северо-восток",
						page: "Дюпон_—_северо-восток"
					},
					{
						title: "Станция Дюпон-сёркл",
						page: "Станция_Дюпон-сёркл"
					},
					{
						title: "Дюпон — запад",
						page: "Дюпон_—_запад"
					},
				]
			},
			{
				name: "Такома-парк",
				markerData: [{
						title: "Такома, фабрика",
						page: "Такома,_фабрика"
					},
					{
						title: "Такома-парк",
						page: "Такома-парк"
					},
				]
			},
			{
				name: "Вернон-сквер",
				markerData: [{
						title: "Больница Надежды",
						page: "Больница_Надежды"
					},
					{
						title: "Гостиница «Стейтсмен»",
						page: "Гостиница_«Стейтсмен»"
					},
					{
						title: "Штаб-квартира «Волт-Тек»",
						page: "Штаб-квартира_«Волт-Тек»"
					},
					{
						title: "Вернон-сквер — восток",
						page: "Вернон-сквер_—_восток"
					},
					{
						title: "Вернон-сквер — север",
						page: "Вернон-сквер_—_север"
					},
					{
						title: "Станция «Вернон-сквер»",
						page: "Станция_«Вернон-сквер»"
					},
				]
			},
			{
				name: "Пенсильвания-авеню",
				markerData: [{
						title: "Метро-центр",
						page: "Метро-центр"
					},
					{
						title: "Пенсильвания-авеню — восток",
						page: "Пенсильвания-авеню_—_восток"
					},
					{
						title: "Пенсильвания-авеню — север",
						page: "Пенсильвания-авеню_—_север"
					},
					{
						title: "Пенсильвания-авеню — северо-запад",
						page: "Пенсильвания-авеню_—_северо-запад"
					},
					{
						title: "Пенсильвания-авеню — юг",
						page: "Пенсильвания-авеню_—_юг"
					},
					{
						title: "Белый Дом",
						page: "Белый_Дом"
					},
					{
						title: "Белый Дом — площадь",
						page: "Белый_Дом_—_площадь"
					},
				]
			},
			{
				name: "Молл",
				markerData: [{
						title: "Мемориал Линкольна",
						page: "Мемориал_Линкольна"
					},
					{
						title: "Молл северо-запад",
						page: "Молл_северо-запад"
					},
					{
						title: "Молл юго-запад",
						page: "Молл_юго-запад"
					},
					{
						title: "Здание Управления музеями",
						page: "Здание_управления_музеями"
					},
					{
						title: "Исторический музей",
						page: "Исторический_музей"
					},
					{
						title: "Технический музей",
						page: "Технический_музей"
					},
					{
						title: "Капитолий",
						page: "Капитолий_(Fallout 3)"
					},
					{
						title: "Молл юго-запад",
						page: "Молл_юго-запад"
					},
					{
						title: "Национальный архив",
						page: "Национальный_архив"
					},
					{
						title: "Монумент Вашингтона",
						page: "Монумент_Вашингтона"
					},
				]
			},
			{
				name: "Ланфан-плаза",
				markerData: [{
						title: "Ланфан-плаза",
						page: "Ланфан-плаза"
					},
					{
						title: "Ланфан — юг",
						page: "Ланфан_—_юг"
					},
				]
			},
			{
				name: "Джорджтаун",
				markerData: [{
						title: "Джорджтаун — восток",
						page: "Джорджтаун_—_восток"
					},
					{
						title: "Джорджтаун_—_север",
						page: "Джорджтаун_—_север"
					},
					{
						title: "Джорджтаун — юг",
						page: "Джорджтаун_—_юг"
					},
					{
						title: "Джорджтаун — запад",
						page: "Джорджтаун_—_запад"
					},
				]
			},
			{
				name: "Сьюард-сквер",
				markerData: [{
						title: "База рейнджеров Рейли",
						page: "База_рейнджеров_Рейли"
					},
					{
						title: "Станция «Сьюард-сквер» — север",
						page: "Станция_«Сьюард-сквер»_—_север"
					},
					{
						title: "Сьюард-сквер — северо-запад",
						page: "Сьюард-сквер_—_северо-запад"
					},
					{
						title: "Сьюард-сквер — юго-восток",
						page: "Сьюард-сквер_—_юго-восток"
					},
				]
			},
			{
				name: "Район Мейсон",
				markerData: [{
						title: "Хьюбрис Комикс (локация)",
						page: "Хьюбрис_Комикс_(локация)"
					},
					{
						title: "Район Мейсон — юг",
						page: "Район Мейсон_—_юг"
					},
				]
			},
			{
				name: "Фоллз-Чёрч",
				markerData: [{
						title: "Фоллз-Чёрч — восток",
						page: "Фоллз-Чёрч_—_восток"
					},
					{
						title: "Станция «Фоллз-Чёрч»",
						page: "Станция_«Фоллз-Чёрч»"
					},
					{
						title: "Фоллз-Чёрч — север",
						page: "Фоллз-Чёрч_—_север"
					},
				]
			},
			{
				name: "Арлингтонское кладбище",
				markerData: [{
						title: "Арлингтонское кладбище — север",
						page: "Арлингтонское_кладбище_—_север"
					},
					{
						title: "Арлингтонское кладбище — юг",
						page: "Арлингтонское_кладбище_—_юг"
					},
					{
						title: "Мама Дольче",
						page: "Мама_Дольче"
					},
				]
			},
			{
				name: "Бейлиз Кроссроудз",
				markerData: [{
						title: "Станция метро «Бейлиз Кроссроудз»",
						page: "Станция_метро_«Бейлиз_Кроссроудз»"
					},
					{
						title: "Аванпост Изгоев",
						page: "Аванпост_Изгоев"
					},
				]
			},
		],
		"text": {
			"Locations": "Локации",
			"Cave": "Пещера",
			"City": "Город",
			"Encampment": "Лагерь",
			"Factory": "Завод",
			"Metro": "Метро",
			"Military": "Военный объект",
			"Monument": "Достопримечательность",
			"Natural Landmark": "Прочее",
			"Office": "Офис",
			"Sewer Ruins": "Коллектор",
			"Town Ruins": "Район",
			"Urban Ruins": "Руины",
			"Settlement": "Поселение",
			"Unmarked": "Неотмечаемая",
			"Vault": "Убежище",
			"Region": "область",
			"Hide": "Скрыть",
			"Filter": "Фильтр",
			"See more": "Подробнее",
		}
	},
};
var rectData = [{
		left: 30523,
		top: 34774,
		right: 34115,
		bottom: 38266,
		world: "DiamondCity",
		markerData: [{
				x: 913,
				y: 2495,
				icon: i_DiamondCity,
			},
			{
				x: 1451.1,
				y: 1960,
				icon: i_Settlement,
			},
			{
				x: 1843.3,
				y: 2323,
				icon: i_Settlement,
			},
		]
	},
	/*{left:11967.40017,top:10461.74934,right:12607.40017,bottom:11357.74934,name:"Dupont Circle",world:"dcworld03",markerData:[
		{x:4682.699225,y:5056.559075,icon: i_office,},
		{x:4310.19335,y:3553.0747,icon: i_metro,},
		{x:2984,y:5608,icon: i_metro,},
		{x:1849.688475,y:4404.224125,icon: i_metro,},

	]},
	{left:14108.11999,top:10278.37514,right:14927.31999,bottom:11097.57514,name:"Takoma Park",world:"dcworld05",markerData:[
		{x:4940.671875,y:3040.349375,icon: i_factory,},
		{x:2285.2207,y:5543.8938,icon: i_ruins_urban,},

	]},
	{left:12939.09901,top:10209.50049,right:13899.09901,bottom:11553.50049,name:"Vernon Square",world:"dcworld06",markerData:[
		{x:2814,y:5338,icon: i_office,},
		{x:3838.61915,y:4507.732425,icon: i_office,},
		{x:4793,y:2149,icon: i_office,},
		{x:4110.31835,y:3014.044925,icon: i_metro,},
		{x:4169.0547,y:1727.4026,icon: i_metro,},
		{x:2557,y:4145,icon: i_metro,},

	]},
	{left:12686.00017,top:11134.50038,right:13838.00017,bottom:11774.50038,name:"Pennsylvania Avenue",world:"dcworld08",markerData:[
		{x:7019.99805,y:2872.00195,icon: i_metro,},
		{x:7979.982425,y:4266.9043,icon: i_metro,},
		{x:4806.33985,y:1555.311525,icon: i_metro,},
		{x:2959.9873,y:2999.928225,icon: i_metro,},
		{x:5120.52735,y:3881.51465,icon: i_metro,},
		{x:2036.609375,y:1918.811025,icon: i_monument,},
		{x:3035.563475,y:2330.745125,icon: i_monument,},

	]},
	{left:12186.67464,top:11558.09992,right:14029.87464,bottom:12377.29992,name:"The Mall",world:"dcworld09",markerData:[
		{x:5597.526375,y:4615.759775,icon: i_monument,},
		{x:7174.732425,y:3801.03515,icon: i_metro,},
		{x:6514.336925,y:5678.789075,icon: i_metro,},
		{x:8175.142575,y:5639.4502,icon: i_office,},
		{x:10978.94728,y:3321.36035,icon: i_monument,},
		{x:13652,y:5648,icon: i_monument,},
		{x:17060,y:4632,icon: i_monument,},
		{x:14587,y:1503,icon: i_metro,},
		{x:14004,y:2754,icon: i_office,},
		{x:10341.9707,y:4606.3545,icon: i_monument,},

	]},
	{left:12637.74962,top:12216.50009,right:13533.74962,bottom:12984.50009,world:"dcworld10",markerData:[
		{x:2339.46095,y:1755.8047,icon: i_metro,},
		{x:5982,y:5365,icon: i_metro,},
	]},
	{left:11647.99942,top:10624.0001,right:13439.99942,bottom:12160.0001,world:"dcworld11",markerData:[
		{x:6056,y:4018,icon: i_metro,},
		{x:4760.85645,y:2279.536625,icon: i_metro,},
		{x:4770,y:4675.54005,icon: i_metro,},
		{x:3220.721675,y:1909.9004,icon: i_metro,},
	]},
	{left:13938.59992,top:11745.09978,right:14757.79992,bottom:12666.69978,world:"dcworld12",markerData:[
		{x:6876,y:5776,icon: i_military,},
		{x:2724.177725,y:5151.213875,icon: i_metro,},
		{x:1407.61915,y:4129.381825,icon: i_monument,},
		{x:5749.99415,y:7868.01465,icon: i_metro,},
	]},
	{left:11282.05036,top:12971.7999,right:11589.25036,bottom:13586.1999,world:"dcworld15",markerData:[
		{x:2423.884775,y:2167.2666,icon: i_ruins_urban,},
		{x:2754.152825,y:6281.13085,icon: i_metro,},
	]},
	{left:10560.00017,top:12291.00006,right:11328.00017,bottom:13187.00006,world:"dcworld17",markerData:[
		{x:4791,y:4301,icon: i_ruins_urban,},
		{x:1633.465325,y:4248.0205,icon: i_metro,},
		{x:3920,y:3728,icon: i_metro,},
	]},
	{left:10956.39932,top:11432.59937,right:11493.99932,bottom:12328.59937,world:"dcworld18",markerData:[
		{x:3615.824225,y:2130.340825,icon: i_metro,},
		{x:2650,y:7994,icon: i_metro,},
		{x:4047,y:8132,icon: i_factory,},
	]},
	{left:9536.999086,top:12954.50089,right:10496.99909,bottom:14298.50089,world:"dlc02baileyscrossroads",markerData:[
		{x:4848.368175,y:2697.82325,icon: i_metro,},
		{x:2888.411125,y:4063.46875,icon: i_ruins_urban,},
	]},*/
];
var childMapData = [{
		width: 4096,
		height: 4096,
		zoom: 3
	},
	/*{width:6144,height:8192,zoom:3},
	{width:8192,height:8192,zoom:3},
	{width:6144,height:8192,zoom:3},
	{width:10240,height:6144,zoom:3},
	{width:20480,height:8192,zoom:4},
	{width:8192,height:6144,zoom:3},
	{width:8192,height:6144,zoom:3},
	{width:8192,height:10240,zoom:3},
	{width:6144,height:8192,zoom:3},
	{width:6144,height:8192,zoom:3},
	{width:6144,height:10240,zoom:3},
	{width:6144,height:8192,zoom:3},*/
];
var pX;
var pY;
var bounds;
var offBounds;
var rectArray = [];
var markers = [];
var popups = [];
var currentMarker;
var activePath;
var currentPath;
var fcontent = "<div class=\"filter_bg\"><div class=\"filterFooter\"></div><a href=\"#\"class=\"mCSB_buttonUp\"></a><a href=\"#\"class=\"mCSB_buttonDown\"></a><div class=\"ul-container mCS-dir-rtl\"><ul id=\"filterMenu\"></ul></div></div>";
var fstub = "<li class=\"li-header\"><div class=\"menu-container\"><div class=\"selector selector-on\"></div><div class=\"menu-label\"></div><div class=\"menu-icon\"><img class=\"menu-img\"/><img class=\"menu-img-over\"/></div></div></div></li>";
var topbar = '<table cellspacing="0" cellpadding="0" class="va-navbox-border va-navbox-bottom"><tbody><tr><td class="va-navbox-padding"><table cellspacing="0" cellpadding="0" class="va-navbox collapsible autocollapse"><tbody><tr><th class="va-navbox-title va-navbox-maintitle" colspan="1" width="100%"><span class="collapseButton" style="float:left;text-align:left;font-weight:normal;">[<span tabindex="0" class="collapseLink" style="cursor:pointer;">Filter</span>]</span></th></tr></tbody></table></td></tr></tbody></table>';
var allHidden = false;

function updateFilter() {
	//this is to mostly compensate for new markers being "added" via opening a map popup.
	//assuming that if the user wanted to hide a marker type - they don't want to see it on any map.
	srcArray = [];
	$(".menu-container").each(function(i) {
		if ($(this).parent().attr("id") != "filterHeader") {
			var im = $(".menu-img", $(this)).attr("src");
			srcArray[im] = "none";
			if ($(".selector-on", $(this)).length) {
				srcArray[im] = "block";
			}
		}
	});
	$('.leaflet-marker-icon').each(function(i) {
		$(this).css("display", srcArray[$(this).attr("src")]);
	});
}

function markerGen(map) {
	var cX = 2560 + (42 * 256);
	var cY = 2560 + (43 * 256);
	for (var i = 0; i < markerData.length; i++) {
		var key = "fallout4/" + escape(locale[lang].markerData[i].page) + "/visited";
		var visited = localStorage.getItem(key) === "true";
		var visitedBtn = "<span onclick=\"localStorage.setItem('" + key + "', " + (visited ? "false" : "true") + ")\">" + (visited ? "✅" : "🛑") + "</span>";
		mx = markerData[i].x;
		my = markerData[i].y;
		var m = new L.marker(map.unproject([mx, my], 6), {
			icon: visited ? markerData[i].icon_inv : markerData[i].icon,
			ctitle: locale[lang].markerData[i].title
		})
		m.addTo(map);
		m.on('mouseover', function(e) {
			currentMarker = e.target;
		});
		markers.push(m);
		var popupContent = "<div page=\"" + locale[lang].markerData[i].page + "\"id=\"WikiaMainContentContainer\" class=\"WikiaMainContentContainer\"><header id=\"WikiaPageHeader\" class=\"WikiaPageHeader\"><h1 id=\"title\">" + visitedBtn + " " + locale[lang].markerData[i].title + "</h1></header><div id=\"overlay\"><span class=\"helper\"></span><img class=\"ajax\" src=\"http://www.digital-utopia.org/fallout4/ajax.gif\"/></div><div id=\"mw-content-text\" lang=\"en\" dir=\"ltr\" class=\"mw-content-ltr\"><table id=\"va-infobox0\" class=\"va-infobox\" style=\"width: 100px;\" cellspacing=\"0\" cellpadding=\"0\"><tbody><tr><td class=\"va-infobox-mainimage-image\" style=\"\"><img id=\"image\"/></td></tr></tbody></table></div><span class=\"seeMore\"><a target=\"blank\"href=\"" + locale[lang].url + locale[lang].markerData[i].page + "\">" + locale[lang].text["See more"] + "></a></span></div>";
		var p = new L.popup({
			maxWidth: 415,
			minWidth: 415
		}).setContent(popupContent);
		m.bindPopup(popupContent, {
			maxWidth: 415,
			minWidth: 415
		});
		m.on('popupopen', function(e) {
			if ($("#overlay").css("display") != "none") {
				var jqxhr = $.getJSON("http://www.digital-utopia.org/fallout4/pageGrabber.php?p=" + $("#WikiaMainContentContainer").attr("page") + "&lng=" + lang, function(data) {
						$("#mw-content-text").css("display", "block");
						$("#mw-content-text").append(data.content);
						$("#image").attr("src", data.img);
						$("#overlay").css("display", "none");
						$(".editsection").css("display", "none");
						$("#va-titleicons").css("display", "none");
						$(".va-quotation").css("display", "none");
						$(".center").css("display", "none");
						$("center").css("display", "none");
					})
					.fail(function() {
						console.log("error");
					})
			}
		});
		popups.push(p);
	}
}
var cX = 2560 + (42 * 256);
var cY = 2560 + (43 * 256);
var testX = ((-10420.6055 / 4096) * 256) + cX;
var testY = cY - ((12619.6797 / 4096) * 256);
var pathOps = {
	color: '#17ee77',
	weight: 1,
	opacity: .3,
	fillOpacity: .05,
	className: "childpath"
};

function rectGen(map) {
	for (var i = 0; i < rectData.length; i++) {
		pathOps.className = "childpath " + i;
		var r = L.rectangle([map.unproject([rectData[i].right, rectData[i].bottom], 6), map.unproject([rectData[i].left, rectData[i].top], 6)], pathOps).addTo(map);
		r.options.ctitle = locale[lang].rectData[i].name;
		r.options.world = rectData[i].world;
		r.options.index = i;
		r.bindPopup("<div id=\"mapWrapper\" class=\"mapWrapper\"></div>", {
			minWidth: 500,
			maxWidth: 1024
		});
		r.options.className = "childpath." + i;
		r.on('mouseover', function(e) {
			currentPath = e.target;
		});
		r.on('popupopen', function(e) {
			p = currentPath;
			var idx = p.options.index;
			activePath = i;
			var cmap = L.map('mapWrapper', {
				scrollWheelZoom: 'center',
				minZoom: 0,
				crs: L.CRS.Simple
			});
			cmap.zoomControl.setPosition('bottomright');
			//L.tileLayer("zipimg.php?n="+p.options.world+"&z={z}&x={x}&y={y}", {
			L.tileLayer("http://www.digital-utopia.org/fo4maps/" + p.options.world + "/{z}/{x}_{y}.png", {
				continuousWorld: 'true',
				errorTileUrl: 'http://www.digital-utopia.org/fo4maps/' + p.options.world + '/blank.png',
				maxZoom: childMapData[p.options.index].zoom
			}).addTo(cmap);
			var w = childMapData[p.options.index].width;
			var h = childMapData[p.options.index].height;
			var z = childMapData[p.options.index].zoom;
			var bounds = L.latLngBounds(cmap.unproject([w, h], z), cmap.unproject([0, 0], z));
			cmap.setMaxBounds(bounds);
			cmap.setView(cmap.unproject([1884, 1702], childMapData[p.options.index].zoom), 1);
			for (var j = 0; j < rectData[idx].markerData.length; j++) {
				mx = rectData[idx].markerData[j].x;
				my = rectData[idx].markerData[j].y;
				var m = new L.marker(cmap.unproject([mx, my], 3), {
					icon: rectData[idx].markerData[j].icon,
					ctitle: locale[lang].rectData[idx].markerData[j].title
				})
				m.addTo(cmap);
				m.on('mouseover', function(e) {
					currentMarker = e.target;
				});
				$('.leaflet-marker-icon').mouseover(function(e) {
					$("#tooltip").css("display", "block");
					$("#tooltip").insertAfter($(e.target));
					$("#tooltext").html(currentMarker.options.ctitle);
					var pos = $(e.target).position();
					var z = map.getZoom();
					$("#tooltip").css("top", pos.top + (z * 1) + 16);
					$("#tooltip").css("left", pos.left - parseInt($("#tooltip").width() / 2));
				});
				$('.leaflet-marker-icon').mouseout(function() {
					$("#tooltip").css("display", "none");
				});
				markers.push(m);
				var popupContent = "<div page=\"" + locale[lang].rectData[idx].markerData[j].page + "\"id=\"WikiaMainContentContainer\" class=\"WikiaMainContentContainer\"><header id=\"WikiaPageHeader\" class=\"WikiaPageHeader\"><h1 id=\"title\">" + locale[lang].rectData[idx].markerData[j].title + "</h1></header><div id=\"overlay\"><span class=\"helper\"></span><img class=\"ajax\" src=\"ajax.gif\"/></div><div id=\"mw-content-text\" lang=\"en\" dir=\"ltr\" class=\"mw-content-ltr\"><table id=\"va-infobox0\" class=\"va-infobox\" style=\"width: 100px;\" cellspacing=\"0\" cellpadding=\"0\"><tbody><tr><td class=\"va-infobox-mainimage-image\" style=\"\"><img id=\"image\"/></td></tr></tbody></table></div><span class=\"seeMore\"><a target=\"blank\"href=\"http://" + lang + ".fallout.wikia.com/wiki/" + locale[lang].rectData[idx].markerData[j].page + "\">See more ></a></span></div>";
				var p = new L.popup({
					maxWidth: 415,
					minWidth: 415
				}).setContent(popupContent);
				m.bindPopup(popupContent, {
					maxWidth: 415,
					minWidth: 415
				});
				m.on('popupopen', function(e) {
					if ($("#overlay").css("display") != "none") {
						var jqxhr = $.getJSON("http://www.digital-utopia.org/fallout4/pageGrabber.php?p=" + $("#WikiaMainContentContainer").attr("page") + "&lng=" + lang, function(data) {
								$("#mw-content-text").css("display", "block");
								$("#mw-content-text").append(data.content);
								$("#image").attr("src", data.img);
								$("#overlay").css("display", "none");
								$(".editsection").css("display", "none");
								$("#va-titleicons").css("display", "none");
								$(".va-quotation").css("display", "none");
								$(".center").css("display", "none");
								$("center").css("display", "none");
							})
							.fail(function() {
								console.log("error");
							})
					}
				});
				//popups.push(p);
			}
			updateFilter();
		})
		rectArray.push(r);
	}
}

function showFilter() {
	$(".collapseLink").html(locale[lang].text["Hide"]);
	$(".filter_bg").css("display", "block");
}

function hideFilter() {
	$(".collapseLink").html(locale[lang].text["Filter"]);
	$(".filter_bg").css("display", "none");
	map.scrollWheelZoom.enable();
	map.dragging.enable();
	map.doubleClickZoom.enable();
}

function init() {
	map = L.map('map', {
		scrollWheelZoom: 'center',
		minZoom: 1,
		crs: L.CRS.Simple
	})
	map.zoomControl.setPosition('bottomright');
	//L.tileLayer('zipimg.php?n=wasteland&z={z}&x={x}&y={y}', {
	L.tileLayer('http://www.digital-utopia.org/fo4maps/commonwealth/{z}/{x}_{y}.png', {
		continuousWorld: 'true',
		errorTileUrl: 'http://www.digital-utopia.org/fo4maps/blank.png',
		maxZoom: 6
	}).addTo(map);
	var bounds = L.latLngBounds(map.unproject([61953, 63758], 6), map.unproject([3583, 1775], 6));
	map.setMaxBounds(bounds);
	map.setView(map.unproject([32768, 32768], 6), 1);
	markerGen(map);
	rectGen(map);
	map.attributionControl.addAttribution("By <a target=\"blank\" href=\"http://digital-utopia.org\">Digital_Utopia</a> for <a target=\"blank\" href=\"http://fallout.wikia.com\">Nukapedia</a>");
}
$(document).ready(function() {
	init();
	$('#map').append(fcontent);
	$('#map').append(topbar);
	$(".ul-container").mCustomScrollbar({
		axis: "y",
		snapAmount: 52,
		scrollButtons: {
			enable: true,
		},
		callbacks: {
			onOverflowY: function() {},
			whileScrolling: function() {
				console.log(this.mcs.topPct);
				if (this.mcs.topPct > 0 && this.mcs.topPct < 100) {
					$('.mCSB_buttonUp').css("display", "block");
					$('.mCSB_buttonDown').css("display", "block");
				}
				if (this.mcs.topPct == 100) {
					$('.mCSB_buttonDown').css("display", "none");
				}
				if (this.mcs.topPct == 0) {
					$('.mCSB_buttonUp').css("display", "none");
				}
			},
		}
	});
	$(document).on("mousemove", function(e) {
		pX = e.pageX;
		pY = e.pageY;
	});
	var loc = $(fstub).appendTo("#filterMenu");
	$(".menu-label", loc).html(locale[lang].text["Locations"]);
	$(loc).attr("id", "filterHeader");
	$.each(locale[lang].filterText, function(k, v) {
		var sl = $(fstub).appendTo("#filterMenu");
		$(".menu-label", sl).html(v);
		$(".menu-img", sl).attr("src", "http://www.digital-utopia.org/fallout4/markers/" + k + ".png");
		$(".menu-img-over", sl).attr("src", "http://www.digital-utopia.org/fallout4/markers/" + k + "-inv.png");
	});
	var space = $(fstub).appendTo("#filterMenu");
	$(".selector", space).css("display", "none");
	var space = $(fstub).appendTo("#filterMenu");
	$(".selector", space).css("display", "none");
	/*var airfield=$(fstub).appendTo("#filterMenu");
	$(".menu-label",airfield).html(locale[lang].text["Airfield"]);
	$(".menu-img",airfield).attr("src","markers/Airfield.png");
	$(".menu-img-over",airfield).attr("src","markers/Airfield-inv.png");
	var city=$(fstub).appendTo("#filterMenu");
	$(".menu-label",city).html(locale[lang].text["City"]);
	$(".menu-img",city).attr("src","../newvegas/nvworld/markers/fo3/icon_map_city.png");
	var encampment=$(fstub).appendTo("#filterMenu");
	$(".menu-label",encampment).html(locale[lang].text["Encampment"]);
	$(".menu-img",encampment).attr("src","../newvegas/nvworld/markers/fo3/icon_map_encampment.png");
	var factory=$(fstub).appendTo("#filterMenu");
	$(".menu-label",factory).html(locale[lang].text["Factory"]);
	$(".menu-img",factory).attr("src","../newvegas/nvworld/markers/fo3/icon_map_factory.png");
	var metro=$(fstub).appendTo("#filterMenu");
	$(".menu-label",metro).html(locale[lang].text["Metro"]);
	$(".menu-img",metro).attr("src","../newvegas/nvworld/markers/fo3/icon_map_metro.png");
	var military=$(fstub).appendTo("#filterMenu");
	$(".menu-label",military).html(locale[lang].text["Military"]);
	$(".menu-img",military).attr("src","../newvegas/nvworld/markers/fo3/icon_map_military.png");
	var monument=$(fstub).appendTo("#filterMenu");
	$(".menu-label",monument).html(locale[lang].text["Monument"]);
	$(".menu-img",monument).attr("src","../newvegas/nvworld/markers/fo3/icon_map_monument.png");
	var natural_landmark=$(fstub).appendTo("#filterMenu");
	$(".menu-label",natural_landmark).html(locale[lang].text["Natural Landmark"]);
	$(".menu-img",natural_landmark).attr("src","../newvegas/nvworld/markers/fo3/icon_map_natural_landmark.png");
	var office=$(fstub).appendTo("#filterMenu");
	$(".menu-label",office).html(locale[lang].text["Office"]);
	$(".menu-img",office).attr("src","../newvegas/nvworld/markers/fo3/icon_map_office.png");
	var ruins_sewer=$(fstub).appendTo("#filterMenu");
	$(".menu-label",ruins_sewer).html(locale[lang].text["Sewer Ruins"]);
	$(".menu-img",ruins_sewer).attr("src","../newvegas/nvworld/markers/fo3/icon_map_ruins_sewer.png");
	var ruins_town=$(fstub).appendTo("#filterMenu");
	$(".menu-label",ruins_town).html(locale[lang].text["Town Ruins"]);
	$(".menu-img",ruins_town).attr("src","../newvegas/nvworld/markers/fo3/icon_map_ruins_town.png");
	var ruins_urban=$(fstub).appendTo("#filterMenu");
	$(".menu-label",ruins_urban).html(locale[lang].text["Urban Ruins"]);
	$(".menu-img",ruins_urban).attr("src","../newvegas/nvworld/markers/fo3/icon_map_ruins_urban.png");
	var settlement=$(fstub).appendTo("#filterMenu");
	$(".menu-label",settlement).html(locale[lang].text["Settlement"]);
	$(".menu-img",settlement).attr("src","../newvegas/nvworld/markers/fo3/icon_map_settlement.png");
	var undiscovered=$(fstub).appendTo("#filterMenu");
	$(".menu-label",undiscovered).html(locale[lang].text["Unmarked"]);
	$(".menu-img",undiscovered).attr("src","../newvegas/nvworld/markers/fo3/icon_map_undiscovered.png");
	var vault=$(fstub).appendTo("#filterMenu");
	$(".menu-label",vault).html(locale[lang].text["Vault"]);
	$(".menu-img",vault).attr("src","../newvegas/nvworld/markers/fo3/icon_map_vault.png");
	var region=$(fstub).appendTo("#filterMenu");
	$(".menu-label",region).html(locale[lang].text["Region"]);
	$(".menu-img",region).attr("src","../newvegas/nvworld/markers/fo3/region.png");*/
	hideFilter()
	$(".filter_bg").mouseover(function(e) {
		map.scrollWheelZoom.disable();
		map.dragging.disable();
		map.doubleClickZoom.disable();
	});
	$(".filter_bg").mouseout(function(e) {
		map.scrollWheelZoom.enable();
		map.dragging.enable();
		map.doubleClickZoom.enable();
	});
	$(".menu-container").mouseover(function(e) {
		if ($('.menu-label', e.currentTarget).html() == "") {
			return
		};
		$(e.currentTarget).attr("class", "menu-container menu-container-over");
		if ($(".selector", e.currentTarget).attr("class") == "selector selector-on") {
			$(".selector", e.currentTarget).attr("class", "selector selector-on selector-over");
		} else {
			$(".selector", e.currentTarget).attr("class", "selector selector-over");
		}
		$(".menu-img", e.currentTarget).css("display", "none");
		$(".menu-img-over", e.currentTarget).css("display", "inline-block");
	});
	$(".menu-container").mouseout(function(e) {
		if ($('.menu-label', e.currentTarget).html() == "") {
			return
		};
		$(e.currentTarget).attr("class", "menu-container");
		if ($(".selector", e.currentTarget).attr("class") == "selector selector-on selector-over") {
			$(".selector", e.currentTarget).attr("class", "selector selector-on");
		} else {
			$(".selector", e.currentTarget).attr("class", "selector");
		}
		$(".menu-img", e.currentTarget).css("display", "inline-block");
		$(".menu-img-over", e.currentTarget).css("display", "none");
	});
	$(".menu-container").click(function(e) {
		if ($('.menu-label', e.currentTarget).html() == "") {
			return
		};
		for (var i = 0; i < markers.length; i++) {
			markers[i].closePopup();
		}
		if ($(".selector", e.currentTarget).attr("class") == "selector selector-on selector-over") {
			//$(".selector",e.currentTarget).attr("class","selector selector-over");
			if ($(e.currentTarget).parent().attr("id") == "filterHeader") {
				//it's the locations entry - hide all of them
				$('.selector').each(function(i) {
					if ($(this).attr("class") == "selector selector-on selector-over") {
						$(this).attr("class", "selector selector-over");
					} else {
						$(this).attr("class", "selector");
					}
					if ($(".menu-img", $(this).parent()).attr("src") != undefined) {
						var micon = $(".menu-img", $(this).parent()).attr("src");
						$(".leaflet-marker-icon").each(function(i) {
							if ($(this).attr("src") == micon) {
								$(this).css("display", "none");
							}
						});
						$(".childpath").each(function(i) {
							$(this).css("display", "none");
						});
					}
				});
				allHidden = true;
			} else {
				//just an individual item
				$(".selector", e.currentTarget).attr("class", "selector selector-over");
				micon = $(".menu-img", e.currentTarget).attr("src");
				if (micon.indexOf("Region.png") == -1) {
					$(".leaflet-marker-icon").each(function(i) {
						if ($(this).attr("src") == micon) {
							$(this).css("display", "none");
						}
					});
				} else {
					$(".childpath").each(function(i) {
						$(this).css("display", "none");
					});
				}
			}
		} else {
			//$(".selector",e.currentTarget).attr("class","selector selector-on selector-over");
			if ($(e.currentTarget).parent().attr("id") == "filterHeader") {
				//it's the locations entry - show all of them
				$('.selector').each(function(i) {
					if ($(this).attr("class") == "selector selector-over") {
						$(this).attr("class", "selector selector-on selector-over");
					} else {
						$(this).attr("class", "selector selector-on");
					}
					if ($(".menu-img", $(this).parent()).attr("src") != undefined) {
						var micon = $(".menu-img", $(this).parent()).attr("src");
						$(".leaflet-marker-icon").each(function(i) {
							if ($(this).attr("src") == micon) {
								$(this).css("display", "block");
							}
						});
						$(".childpath").each(function(i) {
							$(this).css("display", "block");
						});
					}
				});
			} else {
				//just an individual item
				if (allHidden == true) {
					$(".selector", $("#filterHeader")).attr("class", "selector selector-on");
				}
				$(".selector", e.currentTarget).attr("class", "selector selector-on selector-over");
				micon = $(".menu-img", e.currentTarget).attr("src");
				if (micon.indexOf("Region.png") == -1) {
					$(".leaflet-marker-icon").each(function(i) {
						if ($(this).attr("src") == micon) {
							$(this).css("display", "block");
						}
					});
				} else {
					$(".childpath").each(function(i) {
						$(this).css("display", "block");
					});
				}
			}
			allHidden = false;
		}
	});
	$(".menu-container", space).click(function(e) {});
	$('.childpath').mouseover(function(e) {
		bounds = document.body.getBoundingClientRect();
		$("#tooltip").css("display", "block");
		$("#tooltip").insertAfter($(".leaflet-objects-pane:first"));
		var c = $(e.currentTarget).attr("class");
		var ca = c.split(" ");
		$("#tooltext").html(rectArray[ca[1]].options.ctitle);
		//$("#tooltext").html(currentPath.options.ctitle);
		var pos = $(e.target).position();
		var z = map.getZoom();
		//first get the real position
		var bbox = e.currentTarget.getBBox();
		//now get the fake position
		var fakeBounds = e.target.getBoundingClientRect();
		//get the difference
		var rOffsetX = bbox.x - fakeBounds.left;
		var rOffsetY = bbox.y - fakeBounds.top;
		//now compute the text offset.
		var toff = ($("#tooltip").width() / 2);
		var boundTest = e.target.getBoundingClientRect();
		$("#tooltip").css("top", (rOffsetY + pY + 18));
		$("#tooltip").css("left", (rOffsetX + pX - toff + 18));
	});
	$('.childpath').mousemove(function(e) {
		var z = map.getZoom();
		//first get the real position
		var bbox = e.currentTarget.getBBox();
		//now get the fake position
		var fakeBounds = e.target.getBoundingClientRect();
		//get the difference
		var rOffsetX = bbox.x - fakeBounds.left;
		var rOffsetY = bbox.y - fakeBounds.top;
		//now compute the text offset.
		var toff = ($("#tooltip").width() / 2);
		var boundTest = e.target.getBoundingClientRect();
		$("#tooltip").css("top", (rOffsetY + pY + 18));
		$("#tooltip").css("left", (rOffsetX + pX - toff + 18));
	});
	$('.childpath').mouseout(function(e) {
		$("#tooltip").css("display", "none");
	});
	$('.leaflet-marker-icon').mouseover(function(e) {
		$("#tooltip").css("display", "block");
		$("#tooltip").insertAfter($(e.target));
		//$(".leaflet-popup-pane").append($("#tooltip"));
		$("#tooltext").html(currentMarker.options.ctitle);
		var pos = $(e.target).position();
		//var trans=getTransform($(e.target));
		//$("#tooltip").css("transform","translate3d("+toolX+"px,"+toolY+"px,0px)");
		var z = map.getZoom();
		$("#tooltip").css("top", pos.top + (z * 1.0) + 16.0);
		$("#tooltip").css("left", pos.left - parseInt($("#tooltip").width() / 2));
	});
	$('.leaflet-marker-icon').mouseout(function() {
		$("#tooltip").css("display", "none");
	});
	$('.collapseLink').click(function(e) {
		if ($(e.currentTarget).html() == locale[lang].text["Filter"]) {
			showFilter();
		} else {
			hideFilter();
		}
	});
});
