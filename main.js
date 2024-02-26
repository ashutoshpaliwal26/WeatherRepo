


const optData = async() =>{
    const api_key = '9255f2deae55c3075f41e5ac20eb1cba';
    const api_link= 'https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=';
    let responce = await fetch(api_link + api_key + `&q=pune`);
    let data = await responce.json()

    const country = data.sys.country;
    document.querySelector('.city').innerHTML = data.name +', ' + country ;
    const temp = data.main.temp ;
    document.querySelector('.temp').innerHTML = `${Math.round(temp)}<span>°c</span>`;
    const status = data.weather[0].main;
    document.querySelector('.weather').innerHTML = status;
    document.querySelector('.hi-low').innerHTML = Math.round(data.main.temp_min) + '/' + Math.round(data.main.temp_max);
    document.querySelector('.date').innerHTML = new Date(day,'DD-MM-YYYY');
}

optData();
