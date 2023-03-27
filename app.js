window.addEventListener('load', () => {
    let lon, lat, keyApi
    let iconoAnimado = document.getElementById('icono-animado') 
 
   
 
    
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
            console.log("hola")

            lon = posicion.coords.longitude
            lat = posicion.coords.latitude
            keyApi = '' //key de la api
            console.log(lon, lat)
            //ubicación actual    
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keyApi}`

            const api = new XMLHttpRequest();
            api.open('GET', url, true);
            api.send();
            api.onreadystatechange = function () {
                if (this.status == 200 && this.readyState == 4) {
                    console.log(this.responseText)
                    let datos=JSON.parse(this.responseText);
                    let temperatura = Math.round(datos.main.temp)/10
                    let descripcionTemperatura = datos.weather[0].description
                    let tipo=datos.weather[0].main
                    let velocidadViento=datos.wind.speed+ "m/s"
                    let ubicacion=datos.name
                 
                    console.log(datos)
                    console.log(temperatura)
                    console.log(descripcionTemperatura)
                    console.log(tipo)
                    console.log(ubicacion)


                    switch (tipo) {
                        
                        case 'Thunderstorm':
                          iconoAnimado.src='animated/thunder.svg'
                          console.log('TORMENTA');
                          break;
                        case 'Drizzle':
                          iconoAnimado.src='animated/rainy-2.svg'
                          console.log('LLOVIZNA');
                          break;
                        case 'Rain':
                          iconoAnimado.src='animated/rainy-7.svg'
                          console.log('LLUVIA');
                          break;
                        case 'Snow':
                          iconoAnimado.src='animated/snowy-6.svg'
                            console.log('NIEVE');
                          break;                        
                        case 'Clear':
                            iconoAnimado.src='animated/day.svg'
                            console.log('LIMPIO');
                          break;
                        case 'Atmosphere':
                          iconoAnimado.src='animated/weather.svg'
                            console.log('ATMOSFERA');
                            break;  
                        case 'Clouds':
                            iconoAnimado.src='animated/cloudy-day-1.svg'
                            console.log('NUBES');
                            break;  
                        default:
                          iconoAnimado.src='animated/cloudy-day-1.svg'
                          console.log('por defecto');
                      }
    
                
                    document.getElementById('viento-velocidad').innerHTML=velocidadViento 
                    document.getElementById('ubicacion').innerHTML= ubicacion
                    document.getElementById('temperatura-valor').innerHTML=temperatura 
                    document.getElementById('temperatura-descripcion').innerHTML=descripcionTemperatura.toUpperCase() 


                }
            }})
        
    }
}
)