
var isize=[32, 32];
      	var ianchor=[12,12];
      	var panchor=[0,-2];
      	var map;
				var i_Airfield = L.icon({iconUrl: '../markers/Airfield.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_BoS = L.icon({iconUrl: '../markers/BoS.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Brownstone = L.icon({iconUrl: '../markers/Brownstone.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Bunker = L.icon({iconUrl: '../markers/Bunker.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_BunkerHill = L.icon({iconUrl: '../markers/BunkerHill.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Camper = L.icon({iconUrl: '../markers/Camper.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Car = L.icon({iconUrl: '../markers/Car.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Castle = L.icon({iconUrl: '../markers/Castle.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Cave = L.icon({iconUrl: '../markers/Cave.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Church = L.icon({iconUrl: '../markers/Church.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_City = L.icon({iconUrl: '../markers/City.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_CountryClub = L.icon({iconUrl: '../markers/CountryClub.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_CustomHouse = L.icon({iconUrl: '../markers/CustomHouse.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_DiamondCity = L.icon({iconUrl: '../markers/DiamondCity.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_DriveIn = L.icon({iconUrl: '../markers/DriveIn.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_ElevatedHighway = L.icon({iconUrl: '../markers/ElevatedHighway.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Encampment = L.icon({iconUrl: '../markers/Encampment.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Factory = L.icon({iconUrl: '../markers/Factory.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_FaneuilHall = L.icon({iconUrl: '../markers/FaneuilHall.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Farm = L.icon({iconUrl: '../markers/Farm.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_FillingStation = L.icon({iconUrl: '../markers/FillingStation.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Forested = L.icon({iconUrl: '../markers/Forested.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Goodneighbor = L.icon({iconUrl: '../markers/Goodneighbor.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Graveyard = L.icon({iconUrl: '../markers/Graveyard.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Hospital = L.icon({iconUrl: '../markers/Hospital.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_IndustrialDome = L.icon({iconUrl: '../markers/IndustrialDome.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_IndustrialStacks = L.icon({iconUrl: '../markers/IndustrialStacks.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Institute = L.icon({iconUrl: '../markers/Institute.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_IrishPride = L.icon({iconUrl: '../markers/IrishPride.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Junkyard = L.icon({iconUrl: '../markers/Junkyard.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Landmark = L.icon({iconUrl: '../markers/Landmark.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Libertalia = L.icon({iconUrl: '../markers/Libertalia.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_LowRise = L.icon({iconUrl: '../markers/LowRise.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Mechanist = L.icon({iconUrl: '../markers/Mechanist.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Metro = L.icon({iconUrl: '../markers/Metro.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_MilitaryBase = L.icon({iconUrl: '../markers/MilitaryBase.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Minutemen = L.icon({iconUrl: '../markers/Minutemen.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Monument = L.icon({iconUrl: '../markers/Monument.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Observatory = L.icon({iconUrl: '../markers/Observatory.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Office = L.icon({iconUrl: '../markers/Office.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Pier = L.icon({iconUrl: '../markers/Pier.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_PoliceStation = L.icon({iconUrl: '../markers/PoliceStation.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_PondLake = L.icon({iconUrl: '../markers/PondLake.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_PotentitalVassalSettlement = L.icon({iconUrl: '../markers/PotentitalVassalSettlement.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Prydwen = L.icon({iconUrl: '../markers/Prydwen.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Quarry = L.icon({iconUrl: '../markers/Quarry.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_RadioactiveArea = L.icon({iconUrl: '../markers/RadioactiveArea.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_RadioTower = L.icon({iconUrl: '../markers/RadioTower.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_RaiderSettlement = L.icon({iconUrl: '../markers/RaiderSettlement.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Railroad = L.icon({iconUrl: '../markers/Railroad.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_RailroadFaction = L.icon({iconUrl: '../markers/RailroadFaction.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Salem = L.icon({iconUrl: '../markers/Salem.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_SancHills = L.icon({iconUrl: '../markers/SancHills.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Satellite = L.icon({iconUrl: '../markers/Satellite.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_School = L.icon({iconUrl: '../markers/School.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Sentinel = L.icon({iconUrl: '../markers/Sentinel.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Settlement = L.icon({iconUrl: '../markers/Settlement.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Sewer = L.icon({iconUrl: '../markers/Sewer.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Shipwreck = L.icon({iconUrl: '../markers/Shipwreck.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Skyscraper = L.icon({iconUrl: '../markers/Skyscraper.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Submarine = L.icon({iconUrl: '../markers/Submarine.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_SwanPond = L.icon({iconUrl: '../markers/SwanPond.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_SynthHead = L.icon({iconUrl: '../markers/SynthHead.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Town = L.icon({iconUrl: '../markers/Town.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_TownRuins = L.icon({iconUrl: '../markers/TownRuins.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_UrbanRuins = L.icon({iconUrl: '../markers/UrbanRuins.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_USSConstitution = L.icon({iconUrl: '../markers/USSConstitution.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_VassalSettlement = L.icon({iconUrl: '../markers/VassalSettlement.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});
				var i_Vault = L.icon({iconUrl: '../markers/Vault.png',iconSize: isize,iconAnchor: ianchor, popupAnchor: panchor,});

			
			
      	var markerData=[
      		{x:23109.4,y:15161.9,icon:i_Observatory,},
{x:16602.6,y:7084.6,icon:i_Hospital,},
{x:25627.2,y:11215.4,icon:i_DriveIn,},
{x:13857.5,y:29410.2,icon:i_Observatory,},
{x:21462.7,y:8520.8,icon:i_UrbanRuins,},
{x:15520.6,y:3314.6,icon:i_Farm,},
{x:1634.3,y:13555.8,icon:i_Landmark,},
{x:18131.1,y:21587,icon:i_TownRuins,},
{x:10741.3,y:17170,icon:i_PondLake,},
{x:21154.4,y:18143.6,icon:i_PondLake,},
{x:8059.1,y:21595.3,icon:i_RadioactiveArea,},
{x:11483.3,y:23643.7,icon:i_Church,},
{x:11065.6,y:20242.7,icon:i_Landmark,},
{x:9601.2,y:18468,icon:i_Forested,},
{x:9379,y:13950.9,icon:i_PondLake,},
{x:16859.5,y:27846.4,icon:i_School,},
{x:12224.9,y:5708.6,icon:i_Encampment,},
{x:12483.3,y:8963.5,icon:i_Factory,},
{x:9949,y:15364.2,icon:i_Factory,},
{x:13102.2,y:11859.5,icon:i_DriveIn,},
{x:26711,y:9113.5,icon:i_Settlement,},
{x:10590.4,y:27117.4,icon:i_Pier,},
{x:6809.9,y:23240.1,icon:i_Landmark,},
{x:23818.2,y:21479.8,icon:i_Goodneighbor,},
{x:18404.5,y:12782.9,icon:i_Airfield,},
{x:19459.4,y:14192.7,icon:i_Cave,},
{x:26553.2,y:7340.8,icon:i_Encampment,},
{x:29490.4,y:18754.3,icon:i_Shipwreck,},
{x:21247.6,y:10377.3,icon:i_PondLake,},
{x:17606.6,y:8968.8,icon:i_TownRuins,},
{x:19914.3,y:6621.4,icon:i_Settlement,},
{x:14945.9,y:26038.2,icon:i_Quarry,},
{x:14358.3,y:18163.7,icon:i_RadioactiveArea,},
{x:19108.5,y:17607.3,icon:i_Cave,},
{x:3653.5,y:15199,icon:i_Encampment,},
{x:4937.4,y:20988.5,icon:i_Pier,},
{x:14081.2,y:19489.9,icon:i_RadioTower,},
{x:16167.3,y:22987.8,icon:i_Factory,},
{x:23075.6,y:25220.7,icon:i_Forested,},
{x:22089.5,y:27982.3,icon:i_Pier,},
{x:21022.3,y:27044.4,icon:i_Farm,},
{x:19798,y:25583.4,icon:i_Pier,},
{x:24645.2,y:15166.5,icon:i_Bunker,},
{x:7296.9,y:19563.3,icon:i_RadioTower,},

];













//2 -> 0, 
var locale={
	"en":{
		"url":"http://fallout.wikia.com/wiki/",
		"markerData":[
			{title:"Acadia",page:"Acadia_(location)"},
{title:"Aldersea Day Spa",page:"Aldersea_Day_Spa"},
{title:"Beaver Creek Lanes",page:"Beaver_Creek_Lanes"},
{title:"Brooke's Head Lighthouse",page:"Brooke's_Head_Lighthouse"},
{title:"Cliff's Edge Hotel",page:"Cliff's_Edge_Hotel"},
{title:"Dalton Farm",page:"Dalton_Farm"},
{title:"DiMA's Cache",page:"DiMA's_Cache"},
{title:"Southwest Harbor",page:"Southwest_Harbor"},
{title:"Atom's Spring",page:"Atom's_Spring"},
{title:"Old Pond House",page:"Old_Pond_House"},
{title:"Children of Atom Shrine",page:"Children_of_Atom_Shrine"},
{title:"Ruined Church",page:"Ruined_Church"},
{title:"Radiant Crest Shrine",page:"Radiant_Crest_Shrine"},
{title:"Glowing Grove",page:"Glowing_Grove"},
{title:"Briney's Bait and Tackle",page:"Briney's_Bait_and_Tackle"},
{title:"Waves Crest Orphanage",page:"Waves_Crest_Orphanage"},
{title:"Oceanarium",page:"Oceanarium"},
{title:"Eagle's Cove Tannery",page:"Eagle's_Cove_Tannery"},
{title:"Echo Lake Lumber",page:"Echo_Lake_Lumber"},
{title:"Eden Meadows Cinemas",page:"Eden_Meadows_Cinemas"},
{title:"Far Harbor",page:"Far_Harbor"},
{title:"Fringe Cove Docks",page:"Fringe_Cove_Docks"},
{title:"Haddock Cove",page:"Haddock_Cove"},
{title:"Harbor Grand Hotel",page:"Harbor_Grand_Hotel"},
{title:"Horizon Flight 1207",page:"Horizon_Flight_1207"},
{title:"Kitteredge Pass",page:"Kitteredge_Pass"},
{title:"Longfellow's Cabin",page:"Longfellow's_Cabin"},
{title:"MS Azalea",page:"MS_Azalea"},
{title:"National Park Campground",page:"National_Park_Campground"},
{title:"National Park HQ",page:"National_Park_HQ"},
{title:"National Park Visitor's Center",page:"National_Park_Visitor's_Center"},
{title:"Northwood Ridge Quarry",page:"Northwood_Ridge_Quarry"},
{title:"The Nucleus",page:"The_Nucleus"},
{title:"Pine Crest Cavern",page:"Pine_Crest_Cavern"},
{title:"Rayburn Point",page:"Rayburn_Point"},
{title:"Rock Point Camp",page:"Rock_Point_Camp"},
{title:"Ruined Radio Tower",page:"Ruined_Radio_Tower"},
{title:"Vim! Pop Factory",page:"Vim!_Pop_Factory"},
{title:"Huntress Island",page:"Huntress_Island"},
{title:"Cranberry Island Supply Shed",page:"Cranberry_Island_Supply_Shed"},
{title:"Cranberry Island Bog",page:"Cranberry_Island_Bog"},
{title:"Cranberry Island Docks",page:"Cranberry_Island_Docks"},
{title:"Wind Farm Maintenance",page:"Wind_Farm_Maintenance"},
{title:"Zephyr Ridge Camp",page:"Zephyr_Ridge_Camp"},


		],
		"rectData":[
			{name:"Chevy Chase",markerData:[
				{title:"Chevy Chase East",page:"Chevy_Chase_East"},
				{title:"Chevy Chase North",page:"Chevy_Chase_North"},
				{title:"GNR Building Plaza",page:"GNR_building_plaza"},
			]},
			{name:"Dupont Circle",markerData:[
				{title:"Dupont East",page:"Dupont_East"},
				{title:"Dupont Northeast",page:"Dupont_Northeast"},
				{title:"Dupont Station",page:"Dupont_Station"},
				{title:"Dupont West",page:"Dupont_West"},
			]},
			{name:"Takoma Park",markerData:[
				{title:"Takoma Industrial",page:"Takoma_Industrial"},
				{title:"Takoma Park",page:"Takoma_Park"},
				
			]},
			{name:"Vernon Square",markerData:[
				{title:"Our Lady of Hope Hospital",page:"Our_Lady_of_Hope_Hospital"},
				{title:"The Statesman Hotel",page:"The_Statesman_Hotel"},
				{title:"Vault-Tec Headquarters",page:"Vault-Tec_Headquarters"},
				{title:"Vernon Square East",page:"Vernon_Square_East"},
				{title:"Vernon Square North",page:"Vernon_Square_North"},
				{title:"Vernon Square Station",page:"Vernon_Square_Station"},
				
			]},
			{name:"Pennsylvania Avenue",markerData:[
				{title:"Metro Central",page:"Metro_Central"},
				{title:"Penn. Ave East",page:"Penn._Ave_East"},
				{title:"Penn. Ave North",page:"Penn._Ave_North"},
				{title:"Penn. Ave Northwest",page:"Penn._Ave_Northwest"},
				{title:"Penn. Ave South",page:"Penn._Ave_South"},
				{title:"White House",page:"White_House"},
				{title:"White House Plaza",page:"White_House_Plaza"},
				
			]},
			{name:"The Mall",markerData:[
				{title:"Lincoln Memorial",page:"Lincoln_Memorial"},
				{title:"Mall Northwest",page:"Mall_Northwest"},
				{title:"Mall Southwest",page:"Mall_Southwest"},
				{title:"Museum Authority Building",page:"Museum_Authority_Building"},
				{title:"Museum of History",page:"Museum_of_History"},
				{title:"Museum of Technology",page:"Museum_of_Technology"},
				{title:"The Capitol Building",page:"The_Capitol_Building"},
				{title:"The Mall Northeast",page:"The_Mall_Northeast"},
				{title:"The National Archives",page:"The_National_Archives"},
				{title:"The Washington Monument",page:"The_Washington_Monument"},
				
			]},
			{name:"L'Enfant Plaza",markerData:[
				{title:"L'Enfant Plaza",page:"L%27Enfant_Plaza"},
				{title:"L'Enfant South",page:"L%27Enfant_South"},
				
			]},
			{name:"Georgetown",markerData:[
				{title:"Georgetown East",page:"Georgetown_East"},
				{title:"Georgetown North",page:"Georgetown_North"},
				{title:"Georgetown South",page:"Georgetown_South"},
				{title:"Georgetown West",page:"Georgetown_West"},
				
			]},
			{name:"Seward Square",markerData:[
				{title:"Ranger Compound",page:"Ranger_Compound"},
				{title:"Seward Sq. North Metro",page:"Seward_Sq._North_Metro"},
				{title:"Seward Sq. Northwest",page:"Seward_Sq._Northwest"},
				{title:"Seward Sq. Southeast",page:"Seward_Sq._Southeast"},
				
			]},
			{name:"Mason District",markerData:[
				{title:"Hubris Comics",page:"Hubris_Comics_(location)"},
				{title:"Mason District South",page:"Mason_District_South"},
				
			]},
			{name:"Falls Church",markerData:[
				{title:"Falls Church East",page:"Falls_Church_East"},
				{title:"Falls Church Metro",page:"Falls_Church_Metro"},
				{title:"Falls Church North",page:"Falls_Church_North"},
				
			]},
			{name:"Arlington Cemetery",markerData:[
				{title:"Arlington Cemetery North",page:"Arlington_Cemetery_North"},
				{title:"Arlington Cemetery South",page:"Arlington_Cemetery_South"},
				{title:"Mama Dolce's",page:"Mama_Dolce%27s"},
			]},
			{name:"Bailey's Crossroads",markerData:[
				{title:"Bailey's Crossroads Metro",page:"Bailey%27s_Crossroads_Metro"},
				{title:"Outcast Outpost",page:"Outcast_Outpost"},
			]},
		
		],
		"filterText":{
			"Airfield":"Airfield",
			"Brownstone":"Brownstone",
			"Bunker":"Bunker",
			"BunkerHill":"Bunker Hill",
			"Camper":"Camper",
			"Car":"Car",
			"Castle":"Castle",
			"Cave":"Cave",
			"Church":"Church",
			"City":"City",
			"CountryClub":"Country Club",
			"CustomHouse":"Custom House",
			"DiamondCity":"Diamond City",
			"DriveIn":"Drive-in",
			"ElevatedHighway":"Elevated Highway",
			"Encampment":"Encampment",
			"Factory":"Factory",
			"FaneuilHall":"Faneuil Hall",
			"Farm":"Farm",
			"FillingStation":"Filling Station",
			"Forested":"Forested",
			"Goodneighbor":"Goodneighbor",
			"Graveyard":"Graveyard",
			"Hospital":"Hospital",
			"IndustrialDome":"Industrial Dome",
			"IndustrialStacks":"Industrial Stacks",
			"Institute":"Institute",
			"IrishPride":"Irish Pride",
			"Junkyard":"Junkyard",
			"Landmark":"Landmark",
			"Libertalia":"Libertalia",
			"LowRise":"Low-rise",
			"Mechanist":"Mechanist",
			"Metro":"Metro",
			"MilitaryBase":"Military Base",
			"Monument":"Monument",
			"Observatory":"Observatory",
			"Office":"Office",
			"Pier":"Pier",
			"PoliceStation":"Police Station",
			"PondLake":"Pond/Lake",
			"Prydwen":"Prydwen",
			"Quarry":"Quarry",
			"RadioactiveArea":"Radioactive Area",
			"RadioTower":"Radio Tower",
			"Railroad":"Railroad",
			"RailroadFaction":"Railroad (Faction)",
			"Salem":"Salem",
			"SancHills":"Sanctuary Hills",
			"Satellite":"Satellite",
			"School":"School",
			"Sentinel":"Sentinel Site",
			"Settlement":"Settlement",
			"Sewer":"Sewer",
			"Shipwreck":"Shipwreck",
			"Skyscraper":"Skyscraper",
			"Submarine":"Submarine",
			"SwanPond":"Swan Pond",
			"Town":"Town",
			"TownRuins":"Town Ruins",
			"UrbanRuins":"Urban Ruins",
			"USSConstitution":"USS Constitution",
			"Unmarked":"Unmarked",
			"Vault":"Vault",
			"Region":"Region",
		},
		"text":{
			"Locations":"Locations",
			
			"Hide":"Hide",
			"Filter":"Filter",
			"See more":"See more",
		}
	},
	"ru":{
		"url":"http://ru.fallout.wikia.com/wiki/",
		"markerData":[
			{title:"Чеви-Чейз — восток",page:"Чеви-Чейз_—_восток"},
			{title:"Чеви-Чейз — север",page:"Чеви-Чейз — север"},
			{title:"Здание «Новости Галактики»",page:"Здание_«Новости_Галактики»"},
			{title:"Дюпон — восток",page:"Дюпон_—_восток"},
			{title:"Дюпон — северо-восток",page:"Дюпон_—_северо-восток"},
			{title:"Станция Дюпон-сёркл",page:"Станция_Дюпон-сёркл"},
			{title:"Дюпон — запад",page:"Дюпон_—_запад"},
			{title:"Такома, фабрика",page:"Такома,_фабрика"},
			{title:"Такома-парк",page:"Такома-парк"},
			{title:"Больница Надежды",page:"Больница_Надежды"},
			{title:"Гостиница «Стейтсмен»",page:"Гостиница_«Стейтсмен»"},
			{title:"Штаб-квартира «Волт-Тек»",page:"Штаб-квартира_«Волт-Тек»"},
			{title:"Вернон-сквер — восток",page:"Вернон-сквер_—_восток"},
			{title:"Вернон-сквер — север",page:"Вернон-сквер_—_север"},
			{title:"Станция «Вернон-сквер»",page:"Станция_«Вернон-сквер»"},
			{title:"Метро-центр",page:"Метро-центр"},
			{title:"Пенсильвания-авеню — восток",page:"Пенсильвания-авеню_—_восток"},
			{title:"Пенсильвания-авеню — север",page:"Пенсильвания-авеню_—_север"},
			{title:"Пенсильвания-авеню — северо-запад",page:"Пенсильвания-авеню_—_северо-запад"},
			{title:"Пенсильвания-авеню — юг",page:"Пенсильвания-авеню_—_юг"},
			{title:"Белый Дом",page:"Белый_Дом"},
			{title:"Белый Дом — площадь",page:"Белый_Дом_—_площадь"},
			{title:"Мемориал Линкольна",page:"Мемориал_Линкольна"},
			{title:"Молл северо-запад",page:"Молл_северо-запад"},
			{title:"Молл юго-запад",page:"Молл_юго-запад"},
			{title:"Здание Управления музеями",page:"Здание_управления_музеями"},
			{title:"Исторический музей",page:"Исторический_музей"},
			{title:"Технический музей",page:"Технический_музей"},
			{title:"Капитолий",page:"Капитолий_(Fallout 3)"},
			{title:"Молл юго-запад",page:"Молл_юго-запад"},
			{title:"Национальный архив",page:"Национальный_архив"},
			{title:"Монумент Вашингтона",page:"Монумент_Вашингтона"},
			{title:"Ланфан-плаза",page:"Ланфан-плаза"},
			{title:"Ланфан — юг",page:"Ланфан_—_юг"},
			{title:"Джорджтаун — восток",page:"Джорджтаун_—_восток"},
			{title:"Джорджтаун_—_север",page:"Джорджтаун_—_север"},
			{title:"Джорджтаун — юг",page:"Джорджтаун_—_юг"},
			{title:"Джорджтаун — запад",page:"Джорджтаун_—_запад"},
			{title:"База рейнджеров Рейли",page:"База_рейнджеров_Рейли"},
			{title:"Станция «Сьюард-сквер» — север",page:"Станция_«Сьюард-сквер»_—_север"},
			{title:"Сьюард-сквер — северо-запад",page:"Сьюард-сквер_—_северо-запад"},
			{title:"Сьюард-сквер — юго-восток",page:"Сьюард-сквер_—_юго-восток"},
			{title:"Хьюбрис Комикс (локация)",page:"Хьюбрис_Комикс_(локация)"},
			{title:"Район Мейсон — юг",page:"Район Мейсон_—_юг"},
			{title:"Фоллз-Чёрч — восток",page:"Фоллз-Чёрч_—_восток"},
			{title:"Станция «Фоллз-Чёрч»",page:"Станция_«Фоллз-Чёрч»"},
			{title:"Фоллз-Чёрч — север",page:"Фоллз-Чёрч_—_север"},
			{title:"Арлингтонское кладбище — север",page:"Арлингтонское_кладбище_—_север"},
			{title:"Арлингтонское кладбище — юг",page:"Арлингтонское_кладбище_—_юг"},
			{title:"Мама Дольче",page:"Мама_Дольче"},
			{title:"Станция метро «Бейлиз Кроссроудз»",page:"Станция_метро_«Бейлиз_Кроссроудз»"},
			{title:"Аванпост Изгоев",page:"Аванпост_Изгоев"},
			{title:"Мегатонна",page:"Мегатонна"},
			{title:"Заброшенная стоянка",page:"Заброшенная_стоянка"},
			{title:"Дом Агаты",page:"Дом_Агаты"},
			{title:"Оружейные склады Александрии",page:"Оружейные_склады_Александрии"},
			{title:"Корабль пришельцев",page:"Корабль_пришельцев"},
			{title:"Анакостия",page:"Анакостия"},
			{title:"Анкориджский мемориал",page:"Анкориджский_мемориал"},
			{title:"Андейл",page:"Андейл"},
			{title:"Логово НеМирмики",page:"Логово_НеМирмики"},
			{title:"Арефу",page:"Арефу"},
			{title:"Арлингтонская библиотека",page:"Арлингтонская_библиотека"},
			{title:"Развалины Бетесды",page:"Развалины_Бетесды"},
			{title:"Большой Город",page:"Большой_Город"},
			{title:"Телебашня KB5",page:"Телебашня_KB5"},
			{title:"Телебашня KT8",page:"Телебашня_KT8"},
			{title:"Телебашня LP8",page:"Телебашня_LP8"},
			{title:"Община Кентербери",page:"Община_Кентербери"},
			{title:"Сгоревший дом",page:"Сгоревший_дом"},
			{title:"Ферма «Чистые земли»",page:"Ферма_«Чистые_земли»"},
			{title:"Крайслус-билдинг",page:"Крайслус-билдинг"},
			{title:"Пещера Клиффсайд",page:"Пещера_Клиффсайд"},
			{title:"Селение Клиффтоп",page:"Селение_Клиффтоп"},
			{title:"Завод «Корвега»",page:"Завод_«Корвега»"},
			{title:"Убежище когтей смерти",page:"Убежище_когтей_смерти"},
			{title:"Церковь Дикерсона",page:"Церковь_Дикерсона"},
			{title:"Разрушенная переправа через Девил",page:"Разрушенная_переправа_через_Девил"},
			{title:"Жилище Дукова",page:"Жилище_Дукова"},
			{title:"Данвич-билдинг",page:"Данвич-билдинг"},
			{title:"Национальный лагерь Эверглоу",page:"Национальный_лагерь_Эверглоу"},
			{title:"Эвергрин-Миллс",page:"Эвергрин-Миллс"},
			{title:"Трасса и палаточный лагерь Ф. Скотта",page:"Трасса_и_палаточный_лагерь_Ф._Скотта"},
			{title:"Бывший район особняков",page:"Бывший_район_особняков"},
			{title:"Развалины Фэйрфакса",page:"Развалины_Фэйрфакса"},
			{title:"Станция метро Фаррагут-вест",page:"Станция_метро_Фаррагут-вест"},
			{title:"Стоянка «Пять осей»",page:"Стоянка_«Пять_осей»"},
			{title:"Затопленное метро‎",page:"Затопленное_метро‎"},
			{title:"Метро Арлингтон/Пустоши",page:"Метро_Арлингтон/Пустоши"},
			{title:"Мемориальное поле Фордем-Флэша",page:"Мемориальное_поле_Фордем-Флэша"},
			{title:"Форт Баннистер",page:"Форт_Баннистер"},
			{title:"Форт Константин",page:"Форт_Константин"},
			{title:"Форт Индепенденс",page:"Форт_Индепенденс"},
			{title:"Френдшип-Хайтс",page:"Френдшип-Хайтс"},
			{title:"Полицейский участок Джермантауна",page:"Полицейский_участок_Джермантауна"},
			{title:"Гердершейд",page:"Гердершейд"},
			{title:"Грейдич",page:"Грейдич"},
			{title:"Свалка Гринер Пасчерс",page:"Свалка_Гринер_Пасчерс"},
			{title:"Жуткая закусочная",page:"Жуткая_закусочная"},
			{title:"Кладбище Холлоуд Мурс",page:"Кладбище_Холлоуд_Мурс"},
			{title:"Тайник Гамильтона",page:"Тайник_Гамильтона"},
			{title:"Монастырь Вечного Света",page:"Монастырь_Вечного_Света"},
			{title:"Заражённое радиацией метро",page:"Заражённое_радиацией_метро"},
			{title:"Мусорная свалка братьев Джалбертов",page:"Мусорная_свалка_братьев_Джалбертов"},
			{title:"Мемориал Джефферсона",page:"Мемориал_Джефферсона"},
			{title:"Заправка и магазинчик Джоко",page:"Заправка_и_магазинчик_Джоко"},
			{title:"Станция метро «Жюри-стрит»",page:"Станция_метро_«Жюри-стрит»"},
			{title:"Пансион Кэйлин",page:"Пансион_Кэйлин"},
			{title:"Литл-Лэмплайт",page:"Литл-Лэмплайт"},
			{title:"Станция Мэриголд",page:"Станция_Мэриголд"},
			{title:"Утиль Мейсона Диксона",page:"Утиль_Мейсона_Диксона"},
			{title:"Станция-ретранслятор MDPL",page:"Станция-ретранслятор_MDPL"},
			{title:"Электростанция MDPL-05",page:"Электростанция_MDPL-05"},
			{title:"Электростанция MDPL-13",page:"Электростанция_MDPL-13"},
			{title:"Электростанция MDPL-16",page:"Электростанция_MDPL-16"},
			{title:"Электростанция MDPL-21",page:"Электростанция_MDPL-21"},
			{title:"Депо «Мерешти»",page:"Депо_«Мерешти»"},
			{title:"Минное поле",page:"Минное_поле"},
			{title:"Водохранилище округа Монтгомери",page:"Водохранилище_округа_Монтгомери"},
			{title:"Открытый кинотеатр «Лунный луч",page:"Открытый_кинотеатр_«Лунный_луч"},
			{title:"Лагерь на горе Мэйбл",page:"Лагерь_на_горе_Мэйбл"},
			{title:"База Национальной гвардии",page:"База_Национальной_гвардии"},
			{title:"Станция «Сенека» — северо-запад",page:"Станция_«Сенека»_—_северо-запад"},
			{title:"Завод «Ядер-кола»",page:"Завод_«Ядер-кола»"},
			{title:"Оазис",page:"Оазис"},
			{title:"Олд-Олни",page:"Олд-Олни"},
			{title:"Парадиз-Фоллз",page:"Парадиз-Фоллз"},
			{title:"Радиовышка",page:"Радиовышка"},
			{title:"Рэйвен-Рок",page:"Рэйвен-Рок"},
			{title:"Курорт Риклайнин-Гроув",page:"Курорт_Риклайнин-Гроув"},
			{title:"Завод «Ред Рейсер»",page:"Завод_«Ред_Рейсер»"},
			{title:"Штаб-квартира Регуляторов",page:"Штаб-квартира_Регуляторов"},
			{title:"Башня-ретранслятор KX-B8-11",page:"Башня-ретранслятор_KX-B8-11"},
			{title:"Лодочный причал",page:"Лодочный_причал"},
			{title:"Ривет-Сити",page:"Ривет-Сити"},
			{title:"Комплекс «РобКо»",page:"Комплекс_«РобКо»"},
			{title:"Сервис-центр роботехники",page:"Сервис-центр_роботехники"},
			{title:"Пещеры Рок-Крик",page:"Пещеры_Рок-Крик"},
			{title:"Заправка Рокбрейкера",page:"Заправка_Рокбрейкера"},
			{title:"Автомобильный туннель Роклэнд",page:"Автомобильный_туннель_Роклэнд"},
			{title:"Академия Рузвельта",page:"Академия_Рузвельта"},
			{title:"Станция сети «СатКом» NN-03d",page:"Станция_сети_«СатКом»_NN-03d"},
			{title:"Станция сети «СатКом» NW-05a",page:"Станция_сети_«СатКом»_NW-05a"},
			{title:"Станция сети «СатКом» NW-07c",page:"Станция_сети_«СатКом»_NW-07c"},
			{title:"Свалка",page:"Свалка"},
			{title:"Промежуточная станция коллектора",page:"Промежуточная_станция_коллектора"},
			{title:"Шейлбридж",page:"Шейлбридж"},
			{title:"Гараж Кейси Смита",page:"Гараж_Кейси_Смита"},
			{title:"Спрингвейл",page:"Спрингвейл"},
			{title:"Школа Спрингвейла",page:"Школа_Спрингвейла"},
			{title:"Супермарт",page:"Супермарт"},
			{title:"Храм Единения",page:"Храм_Единения"},
			{title:"Тенпенни-Тауэр",page:"Тенпенни-Тауэр_(локация)"},
			{title:"Тёплый коллектор",page:"Тёплый_коллектор"},
			{title:"Цитадель",page:"Цитадель"},
			{title:"Открытый кинотеатр «Обозреватель»",page:"Открытый_кинотеатр_«Обозреватель»"},
			{title:"Республика Дэйва",page:"Республика_Дэйва"},
			{title:"Открытый кинотеатр «Белая полоса»",page:"Открытый_кинотеатр_«Белая_полоса»"},
			{title:"Питтсбургский туннель",page:"Питтсбургский_туннель"},
			{title:"Электростанция VAPL-58",page:"Электростанция_VAPL-58"},
			{title:"Электростанция VAPL-66",page:"Электростанция_VAPL-66"},
			{title:"Электростанция VAPL-84",page:"Электростанция_VAPL-84"},
			{title:"Убежище 101",page:"Убежище_101"},
			{title:"Убежище 106",page:"Убежище_106"},
			{title:"Убежище 108",page:"Убежище_108"},
			{title:"Убежище 87",page:"Убежище_87"},
			{title:"Убежище 92",page:"Убежище_92"},
			{title:"Станция Уоррингтон",page:"Станция_Уоррингтон"},
			{title:"Депо «Уоррингтон»",page:"Депо_«Уоррингтон»"},
			{title:"Арсенал Уитона",page:"Арсенал_Уитона"},
			{title:"Товарная станция Вильхельма",page:"Товарная_станция_Вильхельма"},
			{title:"Станция вещания WKML",page:"Станция_вещания_WKML"},
			{title:"Туннели_яо-гаев",page:"Туннели яо-гаев"},
		
		],
		"rectData":[
			{name:"Чеви-Чейз",markerData:[
				{title: "Чеви-Чейз — восток", page: "Чеви-Чейз_—_восток"},
				{title: "Чеви-Чейз — север", page: "Чеви-Чейз — север"},
				{title: "Здание «Новости Галактики»", page: "Здание_«Новости_Галактики»"},
			]},
			{name:"Дюпон-сёркл",markerData:[
				{title:"Дюпон — восток",page:"Дюпон_—_восток"},
				{title:"Дюпон — северо-восток",page:"Дюпон_—_северо-восток"},
				{title:"Станция Дюпон-сёркл",page:"Станция_Дюпон-сёркл"},
				{title:"Дюпон — запад",page:"Дюпон_—_запад"},
			]},
			{name:"Такома-парк",markerData:[
				{title:"Такома, фабрика",page:"Такома,_фабрика"},
				{title:"Такома-парк",page:"Такома-парк"},
				
			]},
			{name:"Вернон-сквер",markerData:[
				{title:"Больница Надежды",page:"Больница_Надежды"},
				{title:"Гостиница «Стейтсмен»",page:"Гостиница_«Стейтсмен»"},
				{title:"Штаб-квартира «Волт-Тек»",page:"Штаб-квартира_«Волт-Тек»"},
				{title:"Вернон-сквер — восток",page:"Вернон-сквер_—_восток"},
				{title:"Вернон-сквер — север",page:"Вернон-сквер_—_север"},
				{title:"Станция «Вернон-сквер»",page:"Станция_«Вернон-сквер»"},
				
			]},
			{name:"Пенсильвания-авеню",markerData:[
				{title:"Метро-центр",page:"Метро-центр"},
				{title:"Пенсильвания-авеню — восток",page:"Пенсильвания-авеню_—_восток"},
				{title:"Пенсильвания-авеню — север",page:"Пенсильвания-авеню_—_север"},
				{title:"Пенсильвания-авеню — северо-запад",page:"Пенсильвания-авеню_—_северо-запад"},
				{title:"Пенсильвания-авеню — юг",page:"Пенсильвания-авеню_—_юг"},
				{title:"Белый Дом",page:"Белый_Дом"},
				{title:"Белый Дом — площадь",page:"Белый_Дом_—_площадь"},
				
			]},
			{name:"Молл",markerData:[
				{title:"Мемориал Линкольна",page:"Мемориал_Линкольна"},
				{title:"Молл северо-запад",page:"Молл_северо-запад"},
				{title:"Молл юго-запад",page:"Молл_юго-запад"},
				{title:"Здание Управления музеями",page:"Здание_управления_музеями"},
				{title:"Исторический музей",page:"Исторический_музей"},
				{title:"Технический музей",page:"Технический_музей"},
				{title:"Капитолий",page:"Капитолий_(Fallout 3)"},
				{title:"Молл юго-запад",page:"Молл_юго-запад"},
				{title:"Национальный архив",page:"Национальный_архив"},
				{title:"Монумент Вашингтона",page:"Монумент_Вашингтона"},
				
			]},
			{name:"Ланфан-плаза",markerData:[
				{title:"Ланфан-плаза",page:"Ланфан-плаза"},
				{title:"Ланфан — юг",page:"Ланфан_—_юг"},
				
			]},
			{name:"Джорджтаун",markerData:[
				{title:"Джорджтаун — восток",page:"Джорджтаун_—_восток"},
				{title:"Джорджтаун_—_север",page:"Джорджтаун_—_север"},
				{title:"Джорджтаун — юг",page:"Джорджтаун_—_юг"},
				{title:"Джорджтаун — запад",page:"Джорджтаун_—_запад"},

				
			]},
			{name:"Сьюард-сквер",markerData:[
				{title:"База рейнджеров Рейли",page:"База_рейнджеров_Рейли"},
				{title:"Станция «Сьюард-сквер» — север",page:"Станция_«Сьюард-сквер»_—_север"},
				{title:"Сьюард-сквер — северо-запад",page:"Сьюард-сквер_—_северо-запад"},
				{title:"Сьюард-сквер — юго-восток",page:"Сьюард-сквер_—_юго-восток"},
				
			]},
			{name:"Район Мейсон",markerData:[
				{title:"Хьюбрис Комикс (локация)",page:"Хьюбрис_Комикс_(локация)"},
				{title:"Район Мейсон — юг",page:"Район Мейсон_—_юг"},
				
			]},
			{name:"Фоллз-Чёрч",markerData:[
				{title:"Фоллз-Чёрч — восток",page:"Фоллз-Чёрч_—_восток"},
				{title:"Станция «Фоллз-Чёрч»",page:"Станция_«Фоллз-Чёрч»"},
				{title:"Фоллз-Чёрч — север",page:"Фоллз-Чёрч_—_север"},
				
			]},
			{name:"Арлингтонское кладбище",markerData:[
				{title:"Арлингтонское кладбище — север",page:"Арлингтонское_кладбище_—_север"},
				{title:"Арлингтонское кладбище — юг",page:"Арлингтонское_кладбище_—_юг"},
				{title:"Мама Дольче",page:"Мама_Дольче"},
			]},
			{name:"Бейлиз Кроссроудз",markerData:[
				{title:"Станция метро «Бейлиз Кроссроудз»",page:"Станция_метро_«Бейлиз_Кроссроудз»"},
				{title:"Аванпост Изгоев",page:"Аванпост_Изгоев"},
			]},
		
		],
		"text":{
			"Locations":"Локации",
			"Cave":"Пещера",
			"City":"Город",
			"Encampment":"Лагерь",
			"Factory":"Завод",
			"Metro":"Метро",
			"Military":"Военный объект",
			"Monument":"Достопримечательность",
			"Natural Landmark":"Прочее",
			"Office":"Офис",
			"Sewer Ruins":"Коллектор",
			"Town Ruins":"Район",
			"Urban Ruins":"Руины",
			"Settlement":"Поселение",
			"Unmarked":"Неотмечаемая",
			"Vault":"Убежище",
			"Region":"область",
			"Hide":"Скрыть",
			"Filter":"Фильтр",
			"See more":"Подробнее",
		}
		
	},
};




var rectData=[
	/*{left:12607.99943,top:10116.24926,right:13247.99943,bottom:10884.24926,world:"dcworld01",markerData:[
		{x:4484,y:2496,icon: i_metro,},
		{x:3098.355475,y:1667.10205,icon: i_metro,},
		{x:2996.618175,y:4567.7998,icon: i_office,},
	]},
	{left:11967.40017,top:10461.74934,right:12607.40017,bottom:11357.74934,name:"Dupont Circle",world:"dcworld03",markerData:[
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

var childMapData=[
	/*){width:6144,height:6144,zoom:3},
	{width:6144,height:8192,zoom:3},
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
				var rectArray=[];
      	var markers=[];
      	var popups=[];
      	var currentMarker;
      	var activePath;
      	var currentPath;
      	var fcontent="<div class=\"filter_bg\"><div class=\"filterFooter\"></div><a href=\"#\"class=\"mCSB_buttonUp\"></a><a href=\"#\"class=\"mCSB_buttonDown\"></a><div class=\"ul-container mCS-dir-rtl\"><ul id=\"filterMenu\"></ul></div></div>";
      	var fstub="<li class=\"li-header\"><div class=\"menu-container\"><div class=\"selector selector-on\"></div><div class=\"menu-label\"></div><div class=\"menu-icon\"><img class=\"menu-img\"/><img class=\"menu-img-over\"/></div></div></div></li>";
      	var topbar='<table cellspacing="0" cellpadding="0" class="va-navbox-border va-navbox-bottom"><tbody><tr><td class="va-navbox-padding"><table cellspacing="0" cellpadding="0" class="va-navbox collapsible autocollapse"><tbody><tr><th class="va-navbox-title va-navbox-maintitle" colspan="1" width="100%"><span class="collapseButton" style="float:left;text-align:left;font-weight:normal;">[<span tabindex="0" class="collapseLink" style="cursor:pointer;">Filter</span>]</span></th></tr></tbody></table></td></tr></tbody></table>';
      	var allHidden=false;
      	
      	function updateFilter()
      	{
      		//this is to mostly compensate for new markers being "added" via opening a map popup. 
      		//assuming that if the user wanted to hide a marker type - they don't want to see it on any map. 

      		srcArray=[];
      		$(".menu-container").each(function(i){
      			if($(this).parent().attr("id")!="filterHeader")
      			{
      				var im=$(".menu-img",$(this)).attr("src");
      				srcArray[im]="none";
      				if($(".selector-on",$(this)).length)
      				{
      					srcArray[im]="block";
      				}

      				
      			}
      			
      		});
      		$('.leaflet-marker-icon').each(function(i){
      			$(this).css("display",srcArray[$(this).attr("src")]);
      		});
      		
      	}
      	
      	
      	function markerGen(map)
      	{
      		var cX = 2560+(42*256);
      		var cY = 2560+(43*256);
      		for(var i=0; i < markerData.length; i++)
      		{
      			mx=markerData[i].x;
      			my=markerData[i].y;
      			var m=new L.marker(map.unproject([mx,my],5),
					{
						icon: markerData[i].icon,
						ctitle: locale[lang].markerData[i].title
					})
					m.addTo(map);
					m.on('mouseover',function(e){
						currentMarker=e.target;
					});
					
					markers.push(m);
					var popupContent="<div page=\""+locale[lang].markerData[i].page+"\"id=\"WikiaMainContentContainer\" class=\"WikiaMainContentContainer\"><header id=\"WikiaPageHeader\" class=\"WikiaPageHeader\"><h1 id=\"title\">"+locale[lang].markerData[i].title+"</h1></header><div id=\"overlay\"><span class=\"helper\"></span><img class=\"ajax\" src=\"ajax.gif\"/></div><div id=\"mw-content-text\" lang=\"en\" dir=\"ltr\" class=\"mw-content-ltr\"><table id=\"va-infobox0\" class=\"va-infobox\" style=\"width: 100px;\" cellspacing=\"0\" cellpadding=\"0\"><tbody><tr><td class=\"va-infobox-mainimage-image\" style=\"\"><img id=\"image\"/></td></tr></tbody></table></div><span class=\"seeMore\"><a target=\"blank\"href=\""+locale[lang].url+locale[lang].markerData[i].page+"\">"+locale[lang].text["See more"]+"></a></span></div>";
      		var p=new L.popup({maxWidth:415,minWidth:415}).setContent(popupContent);
      		m.bindPopup(popupContent,{maxWidth:415,minWidth:415});
      		m.on('popupopen',function(e){
						if($("#overlay").css("display")!="none"){
						var jqxhr = $.getJSON( "pageGrabber.php?p="+$("#WikiaMainContentContainer").attr("page")+"&lng="+window.lang, function(data) {
						  $("#mw-content-text").css("display","block");
						  $("#mw-content-text").append(data.content);
						  $("#image").attr("src",data.img);
						  $("#overlay").css("display","none");
						  $(".editsection").css("display","none");
						  $("#va-titleicons").css("display","none");
						  $(".va-quotation").css("display","none");
						  $(".center").css("display","none");
						  $("center").css("display","none");
						})
						  
						  .fail(function() {
						    console.log( "error" );
						  })
						}
					});
      		popups.push(p);
      		
      		}
      		
      	}
      	
      	var cX = 2560+(42*256);
      	var cY = 2560+(43*256);
      	var testX = ((-10420.6055/4096)*256)+cX;
      	var testY = cY-((12619.6797/4096)*256);
      	
      	var pathOps={
      		color:'#17ee77',
      		weight:1,
      		opacity:.3,
      		fillOpacity:.05,
      		className:"childpath"
      		
      	};
      	
      	function rectGen(map)
      	{
      		for(var i=0; i < rectData.length; i++)
      		{
      			pathOps.className="childpath "+i;
      			var r=L.rectangle([map.unproject([rectData[i].right,rectData[i].bottom],4),map.unproject([rectData[i].left,rectData[i].top],4)],pathOps).addTo(map);
      			r.options.ctitle=locale[lang].rectData[i].name;
      			r.options.world=rectData[i].world;
      			r.options.index=i;
      			r.bindPopup("<div id=\"mapWrapper\" class=\"mapWrapper\"></div>",{minWidth:500,maxWidth:1024});
      			r.options.className="childpath."+i;
      			r.on('mouseover',function(e){
      				
							currentPath=e.target;
							
						});
						r.on('popupopen',function(e){
							p=currentPath;
							var idx=p.options.index;
							activePath=i;
							var cmap = L.map('mapWrapper',{
		      			scrollWheelZoom: 'center',
		      			minZoom:0,
		      			crs: L.CRS.Simple
		      		});
		      		cmap.zoomControl.setPosition('bottomright');
							
		      		//L.tileLayer("zipimg.php?n="+p.options.world+"&z={z}&x={x}&y={y}", {
		      		L.tileLayer("/fo3maps/"+p.options.world+"/{z}/{x}_{y}.png", {
		      			continuousWorld: 'true',
		      			errorTileUrl: '../fo3maps/blank.png',
		    				maxZoom: childMapData[p.options.index].zoom
							}).addTo(cmap);
							var w=childMapData[p.options.index].width;
							var h=childMapData[p.options.index].height;
							var z=childMapData[p.options.index].zoom;
		      		var bounds = L.latLngBounds(cmap.unproject([w,h],z),cmap.unproject([0,0],z));
							cmap.setMaxBounds(bounds);
							cmap.setView(cmap.unproject([w/2,h/2],childMapData[p.options.index].zoom), 0);
		      		for(var j=0; j < rectData[idx].markerData.length; j++)
      		{
      			mx= rectData[idx].markerData[j].x;
      			my= rectData[idx].markerData[j].y;
      			var m=new L.marker(cmap.unproject([mx,my],3),
					{
						icon: rectData[idx].markerData[j].icon,
						ctitle: locale[lang].rectData[idx].markerData[j].title
					})
					m.addTo(cmap);
					m.on('mouseover',function(e){
						currentMarker=e.target;
					});
					$('.leaflet-marker-icon').mouseover(function(e){
      			$("#tooltip").css("display","block");
      			$("#tooltip").insertAfter($(e.target));
      			$("#tooltext").html(currentMarker.options.ctitle);
      			var pos=$(e.target).position();
      			var z = map.getZoom();
      			$("#tooltip").css("top",pos.top+(z*2.6)+6.0);
      			$("#tooltip").css("left",pos.left-parseInt($("#tooltip").width()/2));
      		});
      		$('.leaflet-marker-icon').mouseout(function(){
      			$("#tooltip").css("display","none");
      		});
					markers.push(m);
					var popupContent="<div page=\""+locale[lang].rectData[idx].markerData[j].page+"\"id=\"WikiaMainContentContainer\" class=\"WikiaMainContentContainer\"><header id=\"WikiaPageHeader\" class=\"WikiaPageHeader\"><h1 id=\"title\">"+locale[lang].rectData[idx].markerData[j].title+"</h1></header><div id=\"overlay\"><span class=\"helper\"></span><img class=\"ajax\" src=\"ajax.gif\"/></div><div id=\"mw-content-text\" lang=\"en\" dir=\"ltr\" class=\"mw-content-ltr\"><table id=\"va-infobox0\" class=\"va-infobox\" style=\"width: 100px;\" cellspacing=\"0\" cellpadding=\"0\"><tbody><tr><td class=\"va-infobox-mainimage-image\" style=\"\"><img id=\"image\"/></td></tr></tbody></table></div><span class=\"seeMore\"><a target=\"blank\"href=\"http://"+lang+".fallout.wikia.com/wiki/"+locale[lang].rectData[idx].markerData[j].page+"\">See more ></a></span></div>";
      		var p=new L.popup({maxWidth:415,minWidth:415}).setContent(popupContent);
      		m.bindPopup(popupContent,{maxWidth:415,minWidth:415});
      		m.on('popupopen',function(e){
						if($("#overlay").css("display")!="none"){
						var jqxhr = $.getJSON( "pageGrabber.php?p="+$("#WikiaMainContentContainer").attr("page")+"&lng="+window.lang, function(data) {
						  $("#mw-content-text").css("display","block");
						  $("#mw-content-text").append(data.content);
						  $("#image").attr("src",data.img);
						  $("#overlay").css("display","none");
						  $(".editsection").css("display","none");
						  $("#va-titleicons").css("display","none");
						  $(".va-quotation").css("display","none");
						  $(".center").css("display","none");
						  $("center").css("display","none");
						})
						  
						  .fail(function() {
						    console.log( "error" );
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
      	
      	function showFilter()
      	{
      		$(".collapseLink").html(locale[lang].text["Hide"]);
      		$(".filter_bg").css("display","block");
      	}
      	function hideFilter()
      	{
      		$(".collapseLink").html(locale[lang].text["Filter"]);
      		$(".filter_bg").css("display","none");
			map.scrollWheelZoom.enable();
			map.dragging.enable();
			map.doubleClickZoom.enable();  
      	}
      	
      	
      	
      	
      	
      	function init()
      	{
      		
      		
      		
      		map = L.map('map',{
      			scrollWheelZoom: 'center',
      			minZoom:1,
      			crs: L.CRS.Simple
      		})
      		map.zoomControl.setPosition('bottomright');

      		//L.tileLayer('zipimg.php?n=wasteland&z={z}&x={x}&y={y}', {
      		L.tileLayer('/fo4maps/dlc03farharbor/{z}/{x}_{y}.png', {
      			continuousWorld: 'true',
      			errorTileUrl: '../../fo4maps/blank.png',
      	
    				maxZoom: 5
					}).addTo(map);
					var bounds = L.latLngBounds(map.unproject([32548,32098],5),map.unproject([220,670],5));
					map.setMaxBounds(bounds);
					map.setView(map.unproject([16384,16384],5), 1);
					markerGen(map);
					rectGen(map);
					map.attributionControl.addAttribution("By <a target=\"blank\" href=\"http://digital-utopia.org\">Digital_Utopia</a> for <a target=\"blank\" href=\"http://fallout.wikia.com\">Nukapedia</a>");
					
					
				}
				
				$( document ).ready(function() {
					init();
					$('#map').append(fcontent);
					$('#map').append(topbar);
					$(".ul-container").mCustomScrollbar({
						axis:"y",
						snapAmount:52,
						scrollButtons:{
							enable:true,
						},
						callbacks:
						{
						  onOverflowY:function(){
						
						  },
						  whileScrolling: function(){
							  console.log(this.mcs.topPct);
							  if(this.mcs.topPct > 0 && this.mcs.topPct < 100)
							  {
								  $('.mCSB_buttonUp').css("display","block");
								  $('.mCSB_buttonDown').css("display","block");
							  }
							  if(this.mcs.topPct == 100)
							  {
								  $('.mCSB_buttonDown').css("display","none");
							  }
							  if(this.mcs.topPct == 0)
							  {
								  $('.mCSB_buttonUp').css("display","none");
							  }
						  },						
						 }
					});
					$(document).on("mousemove",function(e){
						pX=e.pageX;
						pY=e.pageY;
					});


					var loc=$(fstub).appendTo("#filterMenu");
					$(".menu-label",loc).html(locale[lang].text["Locations"]);
					$(loc).attr("id","filterHeader");
					$.each(locale[lang].filterText, function(k,v){
						var sl = $(fstub).appendTo("#filterMenu");
						$(".menu-label",sl).html(v);
						$(".menu-img",sl).attr("src","../markers/"+k+".png");
						$(".menu-img-over",sl).attr("src","../markers/"+k+"-inv.png");
					});
					var space=$(fstub).appendTo("#filterMenu");
					$(".selector",space).css("display","none");
					var space=$(fstub).appendTo("#filterMenu");
					$(".selector",space).css("display","none");
					hideFilter()
					
					$(".filter_bg").mouseover(function(e){
						map.scrollWheelZoom.disable();
						map.dragging.disable();
						map.doubleClickZoom.disable();
					});
					$(".filter_bg").mouseout(function(e){
						map.scrollWheelZoom.enable();
						map.dragging.enable();
						map.doubleClickZoom.enable();
					});
					$(".menu-container").mouseover(function(e){
						if($('.menu-label',e.currentTarget).html()==""){return};
						$(e.currentTarget).attr("class","menu-container menu-container-over");
						if($(".selector",e.currentTarget).attr("class")=="selector selector-on")
						{
							$(".selector",e.currentTarget).attr("class","selector selector-on selector-over");
						}else{
							$(".selector",e.currentTarget).attr("class","selector selector-over");
						}
						$(".menu-img",e.currentTarget).css("display","none");
						$(".menu-img-over",e.currentTarget).css("display","inline-block");
						
					});
					$(".menu-container").mouseout(function(e){
						if($('.menu-label',e.currentTarget).html()==""){return};
						$(e.currentTarget).attr("class","menu-container");
						if($(".selector",e.currentTarget).attr("class")=="selector selector-on selector-over")
						{
							$(".selector",e.currentTarget).attr("class","selector selector-on");
						}else{
							$(".selector",e.currentTarget).attr("class","selector");
						}
						$(".menu-img",e.currentTarget).css("display","inline-block");
						$(".menu-img-over",e.currentTarget).css("display","none");
					});
					$(".menu-container").click(function(e){
						if($('.menu-label',e.currentTarget).html()==""){return};
						for(var i=0; i < markers.length;i++)
						{
							markers[i].closePopup();
						}
						if($(".selector",e.currentTarget).attr("class")=="selector selector-on selector-over")
						{
							//$(".selector",e.currentTarget).attr("class","selector selector-over");
							if($(e.currentTarget).parent().attr("id")=="filterHeader")
							{
								//it's the locations entry - hide all of them
								
									$('.selector').each(function(i){
									if($(this).attr("class")=="selector selector-on selector-over")
									{
										$(this).attr("class","selector selector-over");
									}else{
										$(this).attr("class","selector");
									}
									if($(".menu-img",$(this).parent()).attr("src")!=undefined)
									{
										var micon=$(".menu-img",$(this).parent()).attr("src");
										$(".leaflet-marker-icon").each(function(i){
											if($(this).attr("src")==micon)
											{
												$(this).css("display","none");
											}
										});
										$(".childpath").each(function(i){
									
												$(this).css("display","none");
											
										});
									}
								});
								allHidden=true;
							}else{
								//just an individual item
								
								$(".selector",e.currentTarget).attr("class","selector selector-over");
								micon=$(".menu-img",e.currentTarget).attr("src");
								if(micon.indexOf("Region.png")==-1)
								{
								$(".leaflet-marker-icon").each(function(i){
									if($(this).attr("src")==micon)
									{
										$(this).css("display","none");
									}
								});
							}else{
								$(".childpath").each(function(i){
									
										$(this).css("display","none");
									
								});
							}
							}
						}else{
							//$(".selector",e.currentTarget).attr("class","selector selector-on selector-over");
							if($(e.currentTarget).parent().attr("id")=="filterHeader")
							{
								//it's the locations entry - show all of them

								$('.selector').each(function(i){

									if($(this).attr("class")=="selector selector-over")
									{
										$(this).attr("class","selector selector-on selector-over");
									}else{
										$(this).attr("class","selector selector-on");
									}
									if($(".menu-img",$(this).parent()).attr("src")!=undefined)
									{
										var micon=$(".menu-img",$(this).parent()).attr("src");
										$(".leaflet-marker-icon").each(function(i){
											if($(this).attr("src")==micon)
											{
												$(this).css("display","block");
											}
										});
										$(".childpath").each(function(i){
									
												$(this).css("display","block");
											
										});
									}
								});
							}else{
								//just an individual item

								if(allHidden==true)
								{
									$(".selector",$("#filterHeader")).attr("class","selector selector-on");
								}
								$(".selector",e.currentTarget).attr("class","selector selector-on selector-over");
								micon=$(".menu-img",e.currentTarget).attr("src");
								if(micon.indexOf("Region.png")==-1)
								{
								$(".leaflet-marker-icon").each(function(i){
									if($(this).attr("src")==micon)
									{
										$(this).css("display","block");
									}
								});
							}else{
								
								$(".childpath").each(function(i){
									
										$(this).css("display","block");
									
								});
							}
							}
							allHidden=false;
						}
					});
					$(".menu-container",space).click(function(e){});
					
					
					$('.childpath').mouseover(function(e){
						bounds=document.body.getBoundingClientRect();
						$("#tooltip").css("display","block");
      			$("#tooltip").insertAfter($(".leaflet-objects-pane:first"));
      			var c=$(e.currentTarget).attr("class");
      			var ca=c.split(" ");
      			$("#tooltext").html(rectArray[ca[1]].options.ctitle);
      			
      			//$("#tooltext").html(currentPath.options.ctitle);
      			
      			var pos=$(e.target).position();
						
      			var z = map.getZoom();
      			//first get the real position
      			var bbox=e.currentTarget.getBBox();
      			//now get the fake position
      			var fakeBounds=e.target.getBoundingClientRect();
      			//get the difference
      			var rOffsetX = bbox.x - fakeBounds.left;
      			var rOffsetY = bbox.y - fakeBounds.top;
      			//now compute the text offset.
      			var toff=($("#tooltip").width()/2);
      			var boundTest=e.target.getBoundingClientRect();
      			$("#tooltip").css("top",(rOffsetY+pY+18));
      			$("#tooltip").css("left",(rOffsetX+pX-toff+18));
						
					});
					
					$('.childpath').mousemove(function(e){
						var z = map.getZoom();
						//first get the real position
      			var bbox=e.currentTarget.getBBox();
      					//now get the fake position
      			var fakeBounds=e.target.getBoundingClientRect();
      			//get the difference
      			var rOffsetX = bbox.x - fakeBounds.left;
      			var rOffsetY = bbox.y - fakeBounds.top;
      			//now compute the text offset.
      			var toff=($("#tooltip").width()/2);
      			var boundTest=e.target.getBoundingClientRect();
      			$("#tooltip").css("top",(rOffsetY+pY+18));
      			$("#tooltip").css("left",(rOffsetX+pX-toff+18));
					});
					
					$('.childpath').mouseout(function(e){
						$("#tooltip").css("display","none");
					});
					
					$('.leaflet-marker-icon').mouseover(function(e){
						
      			$("#tooltip").css("display","block");
      			$("#tooltip").insertAfter($(e.target));
      			//$(".leaflet-popup-pane").append($("#tooltip"));
      			$("#tooltext").html(currentMarker.options.ctitle);
      			
      			var pos=$(e.target).position();
      			
      			
      			//var trans=getTransform($(e.target));
      			
      			//$("#tooltip").css("transform","translate3d("+toolX+"px,"+toolY+"px,0px)");
      			var z = map.getZoom();
      			$("#tooltip").css("top",pos.top+(z*1)+16);
      			$("#tooltip").css("left",pos.left-parseInt($("#tooltip").width()/2));
						
      			
      		});
      		$('.leaflet-marker-icon').mouseout(function(){
      			$("#tooltip").css("display","none");
      		});
      		$('.collapseLink').click(function(e){
      			if($(e.currentTarget).html()==locale[lang].text["Filter"])
      			{

      				showFilter();
      			}else{

      				hideFilter();
      			}
      		});
      		
				});