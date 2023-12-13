// ADMIN level div_name attribute equal to province 
const province = 'div_name'
const commune = 'dist_name'
const powerplantName = 'name'
const upezilla = 'name_en'
let flood_exposure 
let floodExposureClass = 'class'

const alias ={'class':'Flood exposure'}

let lulcClass ='class_1'

let landslideExposure
let lulc

const featureKeys = ['class', 'class_1', 'class_1_13', 'class_1_14', 'class_1_15', 'class_12'];

const divisions =[

    'Sylhet Division' ,
    'Dhaka Division',
    'Chattogram Division',
    'Mymensingh Division',
    'Barishal Division',
    'Rangpur Division',
    'Rajshahi Division',
    'Khulna Division'

] 

const districtsByDivision = [
    {
      division: "Barishal Division",
      districts: ["Barishal District", "Bhola District", "Jhalokathi District", "Patuakhali District", "Barguna District"]
    },
    {
      division: "Chattogram Division",
      districts: ["Rangamati Hill District", "Chattogram District", "Khagrachari Hill District", "Cox's Bazar District", "Feni District", "Noakhali District", "Chandpur District", "Lakshmipur District"]
    },
    {
      division: "Dhaka Division",
      districts: ["Gazipur District", "Narayanganj District", "Tangail District", "Dhaka District", "Munshiganj District"]
    },
    {
      division: "Khulna Division",
      districts: ["Rangpur District", "Sirajganj District", "Bogura District", "Lalmonirhat District", "Pabna District", "Gaibandha District", "Dinajpur District", "Joypurhat District", "Natore District", "Naogaon District", "Kushtia District", "Nilphamari District", "Panchagarh District", "Thakurgaon District", "Rajshahi District", "Chapai Nawabganj District"]
    },
    {
      division: "Mymensingh Division",
      districts: ["Kishoreganj District", "Brahmanbaria District",  "Cumilla District", "Narsingdi District","Mymensingh District", "Netrokona District"]
    },
    {
      division: "Rajshahi Division",
      districts: ["Manikganj District", "Faridpur District", "Madaripur District", "Gopalganj District", "Pirojpur District", "Bagerhat District", "Rajbari District", "Magura District", "Jhenaidah District", "Narail District", "Khulna District"]
    },
    {
      division: "Rangpur Division",
      districts: ["Kurigram District", "Rangpur District", "Sirajganj District", "Bogura District", "Lalmonirhat District", "Pabna District", "Gaibandha District", "Dinajpur District", "Joypurhat District", "Natore District", "Naogaon District", "Panchagarh District", "Thakurgaon District"]
    },
    {
      division: "Sylhet Division",
      districts: ["Sylhet District", "Moulvibazar District", "Sunamganj District", "Habiganj District"]
    }
  ];
  

const districts = [

"Sylhet District", 
"Moulvibazar District",
"Sunamganj District", 
"Habiganj District",
"Kishoreganj District", 
"Brahmanbaria District", 
"Cumilla District", 
"Narsingdi District", 
"Mymensingh District", 
"Netrokona District",
"Gazipur District",
"Narayanganj District",
"Tangail District",
"Dhaka District",
"Munshiganj District",
"Rangamati Hill District",
"Chattogram District",
"Khagrachari Hill District",
"Cox's Bazar District",
"Feni District",
"Noakhali District",
"Chandpur District",
"Lakshmipur District",
"Shariatpur District",
"Barisal District",
"Bhola District",
"Jhalokathi District",
"Patuakhali District",
"Barguna District",
"Jamalpur District",
"Sherpur District",
"Kurigram District",
"Rangpur District",
"Sirajganj District",
"Bogura District",
"Lalmonirhat District",
"Pabna District",
"Gaibandha District",
"Dinajpur District",
"Joypurhat District",
"Natore District",
"Naogaon District",
"Kushtia District",
"Nilphamari District",
"Panchagarh District",
"Thakurgaon District",
"Rajshahi District",
"Chapai Nawabganj District",
"Manikganj District",
"Faridpur District",
"Madaripur District",
"Gopalganj District",
"Pirojpur District",
"Bagerhat District",
"Rajbari District",
"Magura District",
"Jhenaidah District",
"Narail District",
"Khulna District",
"Jashore District",
"Chuadanga District",
"Satkhira District" ] 



const tableAttributes = ['div_name','dist_name','name_en'] 

export{province,commune,divisions,districts,upezilla,featureKeys,districtsByDivision}

