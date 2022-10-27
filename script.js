let div=document.createElement("div");
div.setAttribute("class", "main1");

let formgroup=document.createElement("div");
formgroup.setAttribute("class", "form-group");

let input=document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("class", "form-control");
input.setAttribute("id", "main");
input.setAttribute("placeholder", "Search By City");
input.style.width="520px";


let button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="200px";
button.style.marginTop="20px";
button.addEventListener("click", foo);

let breweryname=document.createElement("div");
breweryname.setAttribute("id","breweryname");

let brewerytype=document.createElement("div");
brewerytype.setAttribute("id","brewerytype");

let breweryaddress=document.createElement("div");
breweryaddress.setAttribute("id","breweryaddress");

let phnumber=document.createElement("div");
phnumber.setAttribute("id","phnumber");

let brewerywebsite=document.createElement("div");
brewerywebsite.setAttribute("id","brewerywebsite");



formgroup.append(input,button,);
div.append(formgroup);
document.body.append(div);

async function foo(){
    let city=document.getElementById("main").value;
    console.log(city);
    
    let res=await fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`);
    let res1= await res.json();
    
    for(let i=0;i<res1.length;i++){
        console.log(res1[i]);
        try {
console.log(res1[i].name); 
breweryname.innerHTML=`Brewery Name :${res1[i].name}`; 

console.log(res1[i].brewery_type); 
brewerytype.innerHTML=`Brewery type :${res1[i].brewery_type}`; 

console.log(res1[i].street); 
breweryaddress.innerHTML=`Brewery Address :${res1[i].street}`; 

console.log(res1[i].phone); 
phnumber.innerHTML=`Brewery PhoneNumber :${res1[i].phone}`;

console.log(res1[i].website_url); 
brewerywebsite.innerHTML=`Brewery Website :${res1[i].website_url}`; 

formgroup.append(breweryname,brewerytype,breweryaddress,phnumber,brewerywebsite);
document.body.append(div);

} 
catch (error) {
      console.log(error);
    }
    }    
    }