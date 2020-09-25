window.addEventListener('load',()=>{
   let lat,long,a;

    let timezone=[];
    let temperatureDescription=document.querySelector(".temperature-description");
    let temperatureDegree=document.querySelector(".temperature-degree")
    let locationTimeZone=document.querySelector(".location-timezone");
    
   
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(position=>{
			lat=position.coords.latitude;
            long= position.coords.longitude;
            const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${'8db2438286d29f8f8efd41f641bb6e4c'}`
            fetch(api)
              .then(response=>{
              	return response.json();
              })
              .then(data=>{
              	console.log(data);
                 temperatureDescription.textContent=data.weather[0].description;
                 temperatureDegree.textContent=data.main.temp;
                
              	 locationTimeZone.textContent=data.name;
                 if(data.weather[0].main=="Clear"){
                  a="CLEAR_DAY";
                 }else if(data.weather[0].main=="Rain"){
                  a="RAIN";
                  
                 }else if(data.weather[0].main=="Clouds"){
                  a="PARTLY_CLOUDY_DAY";
                 }
                 console.log(data.weather[0].main);
                 setIcons(a,document.querySelector(".icon"));

              });
		});
	}
  function setIcons(icon,iconId){
    const skycons=new Skycons({color:"white"});
    const currentIcon=icon;
    skycons.play();
    return skycons.set(iconId,Skycons[currentIcon]);
  }
});
	
