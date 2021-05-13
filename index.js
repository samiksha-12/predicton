let data;
let model;
let xs, ys;
let Area, Location, NoofBedrooms, Resale, MaintenanceStaff, Gymnasium, SwimmingPool, LandscapedGardens, JoggingTrack, RainWaterHarvesting, IndoorGames, ShoppingMall, Intercom, SportsFacility, ATM, ClubHouse, School,twemtufoutbySecurity, PowerBackup, CarParking, StaffQuarter, Cafeteria, MultipurposeRoom, Hospital, WashingMachine, Gasconnection,AC, Wifi, Childrensplayarea, LiftAvailable, BED, VaastuCompliant, Microwave, GolfCourse, TV, DiningTable, Sofa, Wardrobe, Refrigerator;
let labelP;
let lossP;
let loc;
let btn;
let labelList = [4850000,4500000,6700000,5000000,17000000,12500000,10500000,15000000,8700000,9000000,11000000,9700000,8000000,8500000,9300000,9900000,4200000,28000000,40000000,16000000,9500000,7500000,13000000,13700000,7700000,6000000,6200000,6500000,5200000,5500000,16500000,11399999,13500000,22500000,5700000,4800000,4300000,5300000,4803000,15500000,9400000,5600000,17500000,12000000,16600000,4900000,22000000,17800000,14000000,7200000,7000000,10000000,6900000,8300000,5100000,5400000,17100000,11800000,4100000,19000000,13600000,8600000,4700000,16200000,13200000,11600000,2018000,65000000,45000000,2375000,19500000,2000000,2500000,2250000,2700000,43500000,4760000,18100000,23800000,21200000,36500000,23700000,21400000,18000000,35300000,15300000,25000000,13899999,33500000,14500000,21600000,27799999,27900000,81600000,38600000,60100000,31500000,37500000,31000000,21100000,26000000,15200000,2300000,33000000,29000000,11200000,11500000,12100000,27000000,30200000,41200000,30500000,36700000,20500000,32500000,27500000,35900000,42000000,33100000,106000000,101400000,18500000,9200000,50100000,34100000,21800000,3000000,17900000,6400000,90000000,2100000,3600000,10100000,10800000,12700000,8800000,16800000,16299999,3400000,33700000,10700000,17600000,4000000,6250000,3800000,4400000,2600000,21000000,19600000,18600000,21500000,13799999,9600000,2010000,2005000,2548000,2492000,2418000,2400000,21700000,16700000,2900000,5425000,7100000,7800000,5900000,4050000,5050000,7400000,6800000,7950000,5460000,4950000,8575000,7900000,36000000,35000000,30000000,14900000,3700000,3850000,2850000,6850000,10200000,3100000,32799999,36100000,3682000,2865000,2374000,62500000,26500000,10600000,3985000,2200000,2650000,4600000,72000000,6100000,3950000,11100000,3500000,5800000,8200000,29500000,3588000,3650000,3001000,3300000,6300000,2580000,3594000,5760000,6952000,2451000,6137000,8100000,3350000,85000000,125000000,80000000,28800000,45100000,39200000,25400000,20000000,46500000,33400000,2035000,6600000,11700000,23000000,20700000,3874000,22100000,28500000,18800000,24000000,9800000,28200000,26400000,10900000,7300000,19100000,2170000,34800000,11299999,8725000,58500000,40199999,2350000,2800000,31100000,30400000,12300000,13300000,180000000,29400000,24500000,47000000,100000000,360000000,7600000,3200000,9350000,48000000,72500000,70000000,175000000,86500000,120000000,75000000,32000000,150000000,55000000,400000000,25500000,112500000,6990000,14200000,23300000,110000000,56000000,52500000,12600000,38000000,92500000,12200000,12400000,28400000,6656000,9750000,50000000,9250000,20099999,41500000,24800000,5545000,5556000,7311000,2399000,60000000,3467000,6370000,3310000,2770000,2670000,2110000,200000000,65300000,38700000,51500000,14800000,2050000,8009999,8400000,7430000,25700000,62000000,2011000,2014999,2021000,2116000,37000000,19900000,32100000,18200000,39600000,32599999,18900000,21900000,23500000,220000000,42500000,3720000,14700000,43700000,63000000,12900000,14100000,31200000,39900000,22200000,20200000,2625000,145000000,6350000,3250000,2450000,2750000,2077000,12800000,8900000,8750000,2476000,34000000,19400000,24100000,6193000,10300000,8655000,3900000,3624000,7031000,39000000,2357000,15400000,17200000,6050000,15800000,7050000,53000000,4665000,28600000,2164000,5994000,2534000,19700000,2105000,160000000,250000000,4350000,153600000,3750000,260000000,32300000,35500000,11900000,9100000,46000000,140000000,170000000,57000000,420000000,8250000,7053000,4713000,95100000,119900000,4199000,7575000,39400000,66600000,59500000,43000000,44000000,9485000,8184999,9377000,9958000,9997000,10400000,92400000,113400000,139500000,4925000,5898000,6498999,9497000,6497000,7998000,9496000,5894000,7494000,6498000,7495999,9499000,4250000,15900000,5550000,29200000,59400000,7959999,3979999,4380000,5060000,4580000,4450000,2840000,2560000,4650000,105500000,88000000,122500000,71000000,2816000,2596000,6559999,7240000,7940000,25800000,2394000,2436000,2225000,2565000,25600000,77500000,82500000,3853000,4907000,8323999,33800000,23900000,3797999,3890000,2425000,2815000,3615000,3999000,3954999,3415000,3410000,15100000,5399000,29900000,8338000,6426000,8480000,6048000,8330000,6120000,57500000,41900000,7837000,5250000,230000000,7150000,8320000,5160000,5690000,8413000,5330000,27300000,67500000,14600000,9150000,15700000,19300000,16399999,23600000,16900000,7450000,19800000,38100000,9709000,36400000,27599999,78700000,6217000,8020000,28700000,51000000,6419000,41000000,58000000,38500000,74500000,71500000,3951000,4151000,2899000,5999000,5699000,4099000,5499000,5299000,4399000,5599000,5990000,4550000,5325000,3049000,2099000,4499000,3372000,3446000,4656000,4621000,8298999,7598999,7998999,7798999,7898999,6351000,44500000,27400000,3990000,4225000,4140999,16100000,7209999,5637000,9450000,5150000,31800000,46200000,31300000,8920000,7320000,13100000,52100000,14300000,24600000,2150000,2190000,5518000,5650000,7650000,64300000,39100000,60500000,34700000,25200000,105000000,4150000,82000000,54200000,55400000,55700000,60700000,79200000,62100000,85600000,54500000,65500000,68100000,2999000,67000000,8016000,4043000,4498000,8294000,6242000,17700000,99000000,17400000,69900000,57200000,45199999,37400000,56500000,9041000,9167000,7881000,5686000,52600000,84500000,50800000,101800000,47800000,51300000,20900000,17300000,32700000,59000000,8628000,9745000,9013000,4750000,47500000,27100000,35400000,39800000,20299999,8844000,7290000,6787000,7198999,7884000,35700000,31700000,22300000,20800000,19200000,45500000,90399999,95000000,2064000,2888000,2898000,2886000,6998999,34500000,8499000,36600000,3747999,4351000,4140000,26900000,3425000,9620000,8420000,88699999,4517000,2210000,2684000,9520000,2669000,2779000,6299000,75100000,26800000,5850000,2378000,2283000,2435000,5577000,3329999,49500000,2585000,2574000,2551000,4095000,2599000,2582000,6320000,3120000,8359999,9230000,6450000,2174000,2156000,2460000,7548000,3599000,22400000,30900000,6022000,9570000,14400000,9199000,6448999,55599999,2249000,94900000,52400000,3424000,2360000,2320000,2640000,63900000,51900000,47600000,5099000,7298999,8999000,23200000,3299000,3799000,4602000,5675000,6650000,7250000,28100000,23400000,59600000,45700000,26200000,2075000,8495000,4823000,7618000,6454000,8287000,7930000,2990000,3185000,3445000,3565999,4267000,4427000,3872000,3125000,2725000,3811999,4052000,2950000,2575000,6694000,6663000,13400000,9774000,9226000,54000000,46300000,8990000,7731000,8198999,9599000,7498999,6575000,7815000,8053000,7652000,8030000,7745999,6738000,5229000,2515000,6666000,3977000,2795000,7350000,4390000,2882000,2485000,3150000,8381999,6186000,6164000,8527000,2331000,3317000,8588000,2178000,3877000,3499000,3536000,4361000,4459000,3258000,4067000,3087000,8399000,8975000,8599000,9618000,3920000,27200000,2139000,4280000,2780000,2875000,6220000,7020000,9370000,9550000,9990000,9650000,8994000,8822000,2940000,4785000,3663000,5555000,2799000,5199000,2550000,2781000,5097000,26700000,7890000,7909999,49000000,47900000,107600000,36800000,79900000,3550000,3872999,4794000,4554000,72300000,2130000,38800000,35200000,28300000,29800000,73700000,42600000,44300000,59700000,62800000,78800000,3711999,3728000,68000000,8668000,8580000,3450000,5350000,39500000,115000000,4425000,4489000,3151000,8733000,6898999,2910000,3925000,4207000,3622000,3779999,3735000,4072000,3757000,3892000,3420000,2677000,2835000,3690000,2970000,4275000,2520000,4004999,3397000,2767000,4045000,3645000,4117000,4410000,3899000,3960000,3829999,2288000,3110000,3243000,54100000,5040000,2390000,5583000,37600000,41100000,22799999,32900000,37800000,35100000,34600000,36900000,8950000,4799000,31900000,15600000,18400000,26100000,9601000,7929000,4837000,6187000,8212000,6637000,7481000,6862000,4556000,18700000,3325000,2836000,21300000,23100000,3050000,3675000,6542000,4475000,4396000,4278000,2948000,3847000,4163000,2804000,3133000,3365999,5750000,5742000,8355000,8064000,138000000,40400000,2330000,2265000,2925000,2445000,2345000,2255000,2310000,2440000,2305000,4179999,4170000,4299000,4349000,6190000,40300000,3188000,91800000,3061000,2063000,2929000,4699000,4999000,3699000,3488000,8192000,5401000,6798999,4801000,8995000,8978000,5950000,2057000,3722999,3988000,3308000,3661000,6152000,3459000,4371000,3574000,4584000,3326000,29700000,4260000,2576000,240000000,3064000,37700000,79000000,2465000];


function preload() {
  data = loadJSON('mumbai_dataset.json');
}

function setup() {
  // Crude interface
  labelP = createP('Amount');
  lossP = createP('loss');


  Area = createInput();
  
  Area.attribute("placeholder", "Enter Area");

  Area.parent("area");
  
   loc = ["Kharghar","Sector-13 Kharghar","Sector 18 Kharghar","Sector 20 Kharghar","Sector 15 Kharghar","Dombivali","Churchgate","Prabhadevi","Jogeshwari West","Kalyan East","Malad East","Virar East","Virar","Malad West","Borivali East","Mira Road East","Goregaon West","Kandivali West","Borivali West","Kandivali East","Andheri East","Goregaon East","Wadala","Ulwe","Dahisar","kandivali","Goregaon","Bhandup West","thakur village kandivali east","Santacruz West","Kanjurmarg","I C Colony","Dahisar W","Marol","Parel","Lower Parel","Worli","Jogeshwari East","Chembur Shell Colony","Central Avenue","Chembur East","Diamond Market Road","Mulund","Nalasopara West","raheja vihar","Powai Lake","MHADA Colony 20","Tolaram Colony","Taloja","Thane West","Vangani","Sector 5 Ulwe","Sector12 New Panvel","Sector 17 Ulwe","Sector9 Kamothe","Sector 19 Kharghar","Navi Basti","Sector12 Kamothe","Sector 21 Kamothe","Rutu Enclave","taloja panchanand","Virar West","Chembur","Sector 20 Kamothe","Sector 22 Kamothe","Sector 18 Kamothe","Sector-5 Kamothe","Sector-6A Kamothe","Sector 11 Kamothe","Sector-18 Ulwe","Sector-12 Kamothe","azad nagar","Sindhi Society Chembur","Kurla","Sahkar Nagar","Deonar","Thane","Jankalyan Nagar","Badlapur","Ambarnath","Ambernath West","Vakola","Kamothe","Kamothe Sector 16","Almeida Park","Khar","Bandra West","Pali Hill","15th Road","Palghar","Sector13 Kharghar","Sector 21 Kharghar","Sector 12 Kharghar","Vivek Vidyalaya Marg","Vasai east","Nahur","Badlapur West","Panvel","Kalyan","Badlapur East","Mira Bhayandar","Juhu","Naigaon East","Sector 21 Ulwe","Bandra East","Dronagiri","Nerul","Karanjade","Sanpada","Sector-8 Ulwe","Sector-3 Ulwe","Sector 23 Ulwe","ULWE SECTOR 19","Ghodbunder Road","Bhiwandi","Vasai","Nala Sopara","Dadar East","Ghatkopar","Breach Candy","Worli South Mumbai","Asangaon","Koparkhairane Station Road","Kopar Khairane Sector 19A","Koper Khairane","Eastern Express Highway Vikhroli","Magathane","Rawal Pada","Ambernath East","Dokali Pada","Dattapada","Rajendra Nagar","Kulupwadi","Samata Nagar Thakur Village","Mira Road and Beyond","West Amardeep Colony","Pant Nagar","mumbai","Four Bungalows","no 9","kolshet","Hiranandani Meadows","Kalpataru","Petali","Kharghar Sector 34C","Ghatkopar East","Mumbai Agra National Highway","vasant vihar thane west","Kalyan West","Shirgaon","Pokhran 2","juhu tara","Peddar Road","Palm Beach","Sector 10","Sector 19 Kamothe","Tilak Nagar","Ghatkopar West","Tardeo","Napeansea Road","Mahalaxmi","Dahisar West","Mulund West","Natakwala Lane","Link Road","Devidas Cross Lane","Soniwadi Road","Haridas Nagar","Shimpoli","TPS Road","Off Shimpoli road","Rustomjee Global City","Sunil Nagar","Sector 30 Kharghar","Sector 12 A","Sector 18","Sector13 Khanda Colony","Sector16 Airoli","Ranjanpada","Sector 15","Sector 35G","Sector 5","Sector 35I Kharghar","Sector35D Kharghar","Sector34 A Kharghar","Sector 30","Sector 36 Kharghar","Sector 11 Belapur","Sector-34B Kharghar","Dombivali East","Roadpali","Sector-50 Seawoods","Mumbai Highway","Sector 7 Kharghar","Lokhandwala Township","Andheri","Andheri West","Shastri Nagar","Wadala East Wadala","Kalwa","PARSIK NAGAR","Maharashtra Nagar","Patlipada","Belapur","Seawoods","Majiwada","4 Bunglows","Airoli","Kolshet Road","Sector 10 Khanda Colony","Pokharan Road","Kharegaon","Panch Pakhadi","Sector 36 Kamothe","Dombivli (West)","DN Nagar Road","Godrej Hill","Ganesh Nagar","Haware City","Mahatma Gandhi Road","Akurli Nagar","Kasar vadavali","Vasai West","Mumbai Nashik Expressway","Katrap","Mira Road","Kasheli","Western Express Highway Kandivali East","Vasind","KASHELI","Thakurli","Shakti Nagar","Bhayandar East","Dahisar East","ulhasnagar 4","Sector-26 Taloja","Koproli","Mumbai Central","Greater Khanda","link road borivali west","Manpada","Sector 2 Ulwe","Govind nagar","Krishanlal Marwah Marg","Sector-9 Ulwe","Vikhroli","Kalamboli","Lokhandwala","Patel Nagar","Yari Road","Thakur complex","Khar West","Sector 11 Kharghar","Ghansoli","Sector8 Sanpada","Jeejamata Nagar","Pandurangwadi","Shreyas Colony","Kannamwar Nagar II","gokuldham","Bangur Nagar","Shivaji Colony","Jawahar Nagar","Vedant Complex","Titwala","Manvel pada Road","Govandi","Shilphata Road Thane","Vasant Vihar","Thakur Village","Samata nagar","Wadi Bandar","Kapurbawadi","Thane Belapur Road Kalwa","Suburbs Mumbai","Ramdev Park","Sector-35 Kamothe","Sector 58A Seawoods Navi Mumbai","Diva","Borivali","Gundavali Gaothan","Kondivita Road","Koldongri","Saki Naka","Bhayandar West","Versova","Hanuman Nagar","worli sea face","Sea Face","Shiv Sagar Estate","Grant Road West","Sriprastha","Off Nepean Sea Road","Morya Nagar","Upper Worli","worli sea Fase","Powai","Agripada","Sion","Girgaon","IT Colony","Bhayandarpada","Sector-24 Kamothe","Phase 2","Sector 6","Malad","Haji Ali","Majiwada thane","Yogi Hills","Sector 19 Nerul","Owale","MG Road","roadpali navimumbai","Taloja Bypass Nitalas Link Road","Rasayani","Sector 10 Kamothe","kavesar","Kopara","royal palms goregaon east","Dadar West","vrindavan society","CBD Belapur East","Parel Village","Karave Nagar","Sector 19A Nerul","Antop Hill","Suman Nagar","Bhakti Park","Hanuman Chowk","Willingdon","VishnuNagar","Vichumbe","Vashi","Poonam Sagar Complex","Santacruz East","Mulund East","Sector-8 Sanpada","Sector-9 Ghansoli","Balkum","Hiranandani Estates","Vartak Nagar","Charkop","dhanukarwadi","Vazira","Four Bunglows","Palava","Oshiwara Police Station Road","Seven Bunglow","Poddar Road","Gulmohar Road","Vile Parle E","Pokhran Road No 2","Sainath Nagar","Kapur Bawdi","Manpada near Tiku ji ni wadi","Kolshet Industrial Area","Sector16 Ulwe","Anand Nagar Thane West","Charkop Sector 8","Vile Parle","Marine Lines","Bandra Kurla Complex","sec 50 new","Vakola Pipeline Road","Neral","Shil Phata","Ville Parle East","matunga east","Dharavi","vile parle west","Anjurdive","Uran","Boisar","Kanjurmarg East","Kurla West","Sewri","Matunga","Goregaon (East)","Malabar Hill","Ambivali","Nalasopara East","Vijay Nagar","Chedda Nagar","Kurla East","Kharodi","Ville Parle West","Vikhroli West","Wadala East","Palidevad","Vikroli East","Mahim","Khalapur","Karjat","Vitthalwadi","Bhoiwada Kalyan","Beturkar Pada","Ambivli","Nilje Gaon","Khopoli","Taloje","Gulal Wadi","Tilak Nagar Mumbai","Chandivali","Nere","Kewale","Sector 9 Airoli","Diva Gaon","Sen Nagar","Adaigaon","Syndicate","Gandhar Nagar","Byculla","Padle Gaon","Naigaon"];
  Location = createSelect();
  Location.id("loc");
  Location.parent("location");
  var i, len, txt;
for (i = 0, len = loc.length, txt = ""; i < len; i++) {
 
 // const strr = loc[i];
	 // const textToBinaryy = (strr = '') => {
	    // let ress = '';
	    // ress = strr.split('').map(char => {
		   // return char.charCodeAt(0).toString(2);
	    // }).join('');
	   
	    // return ress= parseInt((ress + '').replace(/[^01]/gi, ''), 2);
	    // return res;
	 // };
	 // var xp=parseInt(textToBinaryy(loc[i]));
 
   // console.log(xp+",");
   Location.option(loc[i]);
  // Location.value();
}
  

  NoofBedrooms = createInput();
  NoofBedrooms.attribute("placeholder", "No of bedrooms");
  NoofBedrooms.parent("noobedrooms");
  
  Resale = createInput();
  Resale.attribute("placeholder", "Resale");
  Resale.parent("resale");
  
  MaintenanceStaff = createInput();
  MaintenanceStaff.attribute("placeholder", "Maintenance Staff");
  MaintenanceStaff.parent("maintenance");  
  
  Gymnasium = createInput();
  Gymnasium.attribute("placeholder", "Gymnasium");
  Gymnasium.parent("gymnasium");
  
  SwimmingPool = createInput();
  SwimmingPool.attribute("placeholder", "Swimming Pool");
  SwimmingPool.parent("swimmingpool");
  
  LandscapedGardens = createInput();
  LandscapedGardens.attribute("placeholder", "Landscaped Gardens");
  LandscapedGardens.parent("landscapedgardens");
  
  JoggingTrack = createInput();
  JoggingTrack.attribute("placeholder", "Jogging Track");
  JoggingTrack.parent("joggingtrack");
  
  
  RainWaterHarvesting = createInput();
  RainWaterHarvesting.attribute("placeholder", "Rain Water Harvesting");
  RainWaterHarvesting.parent("rainwaterharvesting");
  
  
  IndoorGames = createInput();
  IndoorGames.attribute("placeholder", "Indoor Games");
  IndoorGames.parent("indoorgames");
  
  ShoppingMall = createInput();
  ShoppingMall.attribute("placeholder", "Shopping Mall");
  ShoppingMall.parent("shoppingmall");
  
  Intercom = createInput();
  Intercom.attribute("placeholder", "Intercom");
  Intercom.parent("intercoms");

  SportsFacility = createInput();
  SportsFacility.attribute("placeholder", "Sports Facility");
  SportsFacility.parent("sportsfacility");
  
  ATM = createInput();
  ATM.attribute("placeholder", "ATM");
  ATM.parent("atm");
  
  ClubHouse = createInput();
  ClubHouse.attribute("placeholder", "Club House");
  ClubHouse.parent("clubhouse");
    
  School = createInput();
  School.attribute("placeholder", "School");
  School.parent("school");
  
  
  twemtufoutbySecurity = createInput();
  twemtufoutbySecurity.attribute("placeholder", "24x7 Security");
  twemtufoutbySecurity.parent("tfsec");
  
  PowerBackup = createInput();
  PowerBackup.attribute("placeholder", "Power Backup");
  PowerBackup.parent("powerbackup");
  
  CarParking = createInput();
  CarParking.attribute("placeholder", "Car Parking");
  CarParking.parent("carparking");

  StaffQuarter = createInput();
  StaffQuarter.attribute("placeholder", "Staff Quarter");
  StaffQuarter.parent("staffquarters");
  
  Cafeteria = createInput();
  Cafeteria.attribute("placeholder", "Cafeteria");
  Cafeteria.parent("cafeteria");
  
  MultipurposeRoom = createInput();
  MultipurposeRoom.attribute("placeholder", "Multi purpose Room");
  MultipurposeRoom.parent("multipurposerooms");
  
  Hospital = createInput();
  Hospital.attribute("placeholder", "Hospital");
  Hospital.parent("hospital");
  
  WashingMachine = createInput();
  WashingMachine.attribute("placeholder", "Washing Machine");
  WashingMachine.parent("washingmachine");
  
  Gasconnection = createInput();
  Gasconnection.attribute("placeholder", "Gas Connection");
  Gasconnection.parent("gasconnection");
  
  AC = createInput();
  AC.attribute("placeholder", "AC");
  AC.parent("ac");
  
  Wifi = createInput();
  Wifi.attribute("placeholder", "Wifi");
  Wifi.parent("wifi");
  
  Childrensplayarea = createInput();
  Childrensplayarea.attribute("placeholder", "Childrens play area");
  Childrensplayarea.parent("childrenplayarea");  
  
  LiftAvailable = createInput();
  LiftAvailable.attribute("placeholder", "Lift Available");
  LiftAvailable.parent("liftavailable");  
  
  BED = createInput();
  BED.attribute("placeholder", "BED");
  BED.parent("bed");  
     
  VaastuCompliant = createInput();
  VaastuCompliant.attribute("placeholder", "Vaastu Compliant");
  VaastuCompliant.parent("vaastucompliant");  
  
  Microwave = createInput();
  Microwave.attribute("placeholder", "Microwave");
  Microwave.parent("microwave");
  
  GolfCourse = createInput();
  GolfCourse.attribute("placeholder", "Golf Course");
  GolfCourse.parent("golfcourse");
  
  TV = createInput();
  TV.attribute("placeholder", "TV");
  TV.parent("tv");
  
  DiningTable = createInput();
  DiningTable.attribute("placeholder", "Dining Table");
  DiningTable.parent("diningtable"); 
  
  Sofa = createInput();
  Sofa.attribute("placeholder", "Sofa");
  Sofa.parent("sofa");  
        
  Wardrobe = createInput();
  Wardrobe.attribute("placeholder", "Wardrobe");
  Wardrobe.parent("wardrobe");    
  
  Refrigerator = createInput();
  Refrigerator.attribute("placeholder", "Refrigerator");
  Refrigerator.parent("refrigerator");   
  
  createP();
  btn=createButton("Predict");

  btn.attribute("onclick", "predictAmount()");
  btn.attribute("type", "button");
  btn.attribute("class", "btn btn-primary");
  btn.attribute("data-toggle", "modal");
  btn.attribute("data-toggle", "modal");
  btn.attribute("data-target", "#exampleModal");
  
  btn.parent("predict");
   createP(); 
   createP();
  let colors = [];
  let labels = [];

  for (let record of data.entries) {
	//2nd number==>record.Location,
	 // const str = record.Location;
	 // const textToBinary = (str = '') => {
	    // let res = '';
	    // res = str.split('').map(char => {
		   // return char.charCodeAt(0).toString(2);
	    // }).join('');
	   
	    // return ress= parseInt((res + '').replace(/[^01]/gi, ''), 2);
	    // return res;
	 // };
	 // var xp=parseInt(textToBinary(record.Location));
	//xp,
    let col = [record.Area, record.NoofBedrooms, record.Resale, record.MaintenanceStaff, record.Gymnasium, record.SwimmingPool, record.LandscapedGardens,record.JoggingTrack, record.RainWaterHarvesting, record.IndoorGames, record.ShoppingMall, record.Intercom, record.SportsFacility, record.ATM, record.ClubHouse,record.School, record.twemtufoutbySecurity, record.PowerBackup, record.CarParking,record.StaffQuarter, record.Cafeteria, record.MultipurposeRoom, record.Hospital,record.WashingMachine, record.Gasconnection, record.AC, record.Wifi, record.Childrensplayarea, record.LiftAvailable, record.BED, record.VaastuCompliant, record.Microwave, record.GolfCourse, record.TV, record.DiningTable, record.Sofa, record.Wardrobe, record.Refrigerator];
    colors.push(col);

    var xx=labels.push(labelList.indexOf(record.Price));
  }

  xs = tf.tensor2d(colors);
 // console.log(labels);
  let labelsTensor = tf.tensor1d(labels, 'int32');
  //labelsTensor.print();
  //977 is a toal length of labelList Array
  ys = tf.oneHot(labelsTensor, 9).cast('float32');
  
   // console.log(xs.shape);
   console.log(ys);
   // xs.print();
   // ys.print();
  labelsTensor.dispose();

  model = tf.sequential();
  const hidden = tf.layers.dense({
    units: 16,
    inputShape: [38],
    activation: 'sigmoid'
  });
  const output = tf.layers.dense({
    units: 9,
    activation: 'softmax'
  });
  model.add(hidden);
  model.add(output);

  const LEARNING_RATE = 0.25;
  const optimizer = tf.train.sgd(LEARNING_RATE);

  model.compile({
    optimizer: optimizer,
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy']
  });

  train();
}

async function train() {

  await model.fit(xs, ys, {
    shuffle: true,
    validationSplit: 0.1,
    epochs: 5,
    callbacks: {
      onEpochEnd: (epoch, logs) => {
        console.log(epoch);
		 document.getElementById("trlbl").innerHTML="Training "+epoch+" Epoch";
		document.getElementById("loadercontainer").setAttribute("class","loadercontainer");
		document.getElementById("loader").setAttribute("class","loader");
        lossP.html('Loss: ' + logs.loss.toFixed(5));
		lossP.parent("loss");
		//console.log(logs);
      },
      onBatchEnd: async (batch, logs) => {
        await tf.nextFrame();
      },
      onTrainEnd: () => {
        console.log('finished');
		document.getElementById("loadercontainer").removeAttribute("class");
		document.getElementById("loader").removeAttribute("class");
		document.getElementById("trlbl").removeAttribute("id");
      }
    }
  });
}
function predictAmount(){
	let Areas =Area.value(); 
let Locations =Location.value(); 
//console.log(Locations);
let NoofBedroomss =NoofBedrooms.value(); 

let Resales =Resale.value(); 
let MaintenanceStaffs =MaintenanceStaff.value(); 
let Gymnasiums =Gymnasium.value(); 
let SwimmingPools =SwimmingPool.value(); 
let LandscapedGardenss =LandscapedGardens.value();
let JoggingTracks =JoggingTrack.value(); 
let RainWaterHarvestings =RainWaterHarvesting.value(); 
let IndoorGamess =IndoorGames.value(); 
let ShoppingMalls =ShoppingMall.value(); 
let Intercoms =Intercom.value(); 
let SportsFacilitys =SportsFacility.value(); 
let ATMs =ATM.value(); 
let ClubHousess =ClubHouse.value();
let Schools =School.value(); 
let twemtufoutbySecuritys =twemtufoutbySecurity.value(); 
let PowerBackups =PowerBackup.value(); 
let CarParkings =CarParking.value();
let StaffQuarters =StaffQuarter.value(); 
let Cafeterias =Cafeteria.value(); 
let MultipurposeRooms =MultipurposeRoom.value(); 
let Hospitals =Hospital.value();
let WashingMachines =WashingMachine.value(); 
let Gasconnections =Gasconnection.value(); 
let ACs =AC.value(); 
let Wifis =Wifi.value(); 
let Childrensplayareas =Childrensplayarea.value(); 
let LiftAvailables =LiftAvailable.value(); 
let BEDs =BED.value(); 
let VaastuCompliants =VaastuCompliant.value(); 
let Microwaves =Microwave.value(); 
let GolfCourses =GolfCourse.value(); 
let TVs =TV.value(); 
let DiningTables =DiningTable.value(); 
let Sofas =Sofa.value(); 
let Wardrobes =Wardrobe.value(); 
let Refrigerators =Refrigerator.value();
if(Refrigerators!="" || Areas!="" || NoofBedroomss!="" || Resales!="" || MaintenanceStaffs!="" || Gymnasiums!="" || SwimmingPools!="" || LandscapedGardenss!="" || JoggingTracks!="" || RainWaterHarvestings!="" || IndoorGamess!="" || ShoppingMalls!="" || Intercoms!="" || SportsFacilitys!="" || ATMs!="" || ClubHousess!="" || Schools!="" || twemtufoutbySecuritys!="" || PowerBackups!="" || CarParkings!="" || StaffQuarters!="" || Cafeterias!="" || MultipurposeRooms!="" || Hospitals!="" || WashingMachines!="" || Gasconnections!="" || ACs!="" || Wifis!="" || Childrensplayareas!="" || LiftAvailables!="" || BEDs!="" || VaastuCompliants!="" || Microwaves!="" || GolfCourses!="" || TVs!="" || DiningTables!="" || Sofas!="" || Wardrobes!=""){
//Locations,
  tf.tidy(() => {
    const input = tf.tensor2d([[Areas, NoofBedroomss, Resales, MaintenanceStaffs, Gymnasiums, SwimmingPools, LandscapedGardenss,JoggingTracks, RainWaterHarvestings, IndoorGamess, ShoppingMalls, Intercoms, SportsFacilitys, ATMs, ClubHousess, Schools, twemtufoutbySecuritys, PowerBackups, CarParkings, StaffQuarters, Cafeterias,MultipurposeRooms,Hospitals, WashingMachines, Gasconnections, ACs, Wifis, Childrensplayareas, LiftAvailables, BEDs, VaastuCompliants, Microwaves, GolfCourses, TVs, DiningTables, Sofas, Wardrobes, Refrigerators]]);
    let results = model.predict(input);
    let argMax = results.argMax(1);
    let index = argMax.dataSync()[0];
	
    let label = labelList[index];
    labelP.html("Amount:"+label);
	labelP.parent("predictamt");
  });
}else{
	labelP.html("Please Enter All Fields!!");
	labelP.parent("predictamt");
}
}
function draw() {

}