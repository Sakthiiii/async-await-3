


 function  fetchdata(){

 fetch ('https://reqres.in/api/users?page=2')
.then((result)=>{
   if(!result.ok){
      throw Error("ERROR"); }

     return result.json();
     })
     .then((data)=>{
        console.log(data.data);
      
      const res=data.data.map(user=>{
         return `<div class=" user">

         <p > <img style=padding-bottom:5px src="${user.avatar}" alt="${user.first_name}" /></p><b/>
         <p style=padding-top:20px>First Name:${user.first_name}</p><b/>
         <p style=padding-bottom:5px>Last Name:${user.last_name}</p>
         <p style=padding-bottom:5px> Email:${user.email}</p>
        
         
         </div>
         `;
      }).join(' ');
      console.log(res);
   
      document .querySelector('#get')
   .insertAdjacentHTML("afterbegin",res);
   })

     .catch((error)=>console.log(error));
   

   }
   fetchdata();
   //   for(let i=0;i<Array.length;i++){
   //       console.log(data[i].conversion_rates)
      



//  async function getdata(){
//     let res= fetch ('https://ipgeolocation.abstractapi.com/v1/?api_key=5b4f71b342c34ae68f5937fa46bda2d1')
//     let data  =await (await res).json();
//          // let {continent,continent_code,continent_geoname_id,country}=data
    
//          console.log(data);
//          console.log(data.city_geoname_id);
//         console.log(data.continent);
//         console.log(data.continent_code);
//         console.log(data.continent_geoname_id);
//         console.log(data.country_code);
//         console.log(data.country_geoname_id);
//         console.log(data.currency.currency_code);
//         console.log(data. currency.currency_name);
//         console.log(data.flag.emoji);
//         console.log(data.flag.png);
//         console.log(data.ip_address);
//         console.log(data.latitude);
//         console.log(data.longitude);
//         console.log(data.region);
//         console.log(data.region_geoname_id);
//         console.log(data.region_iso_code);
//         console.log(data.timezone.name);
//         console.log(data.timezone.abbreviation);
//         console.log(data.timezone.current_time);
       

      

//  }
// getdata();