const fetchPokemon = () =>{
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url=`https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) =>{
        if(res.status !="200"){
            console.log(res);
            pokeImage("/confundido.gif");
        }
        else{
        return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let poketipo = data.types[0].type.name;
        let pokeStats= data.stats[0].base_stat;
         pokeStats += data.stats[0].stat.name;
         let pokeStats2= data.stats[1].base_stat;
         pokeStats2 += data.stats[1].stat.name;
        let pokeEstadisticas= `${pokeStats}\n${pokeStats2}`;
        // for(let i=0;i<types.lenght;i++){
        //     poketipo += data.types[i].type.name; 
        // }
        // let pokestats = data.type
        console.log(pokeStats2)
        console.log(pokeStats)
        console.log(pokeEstadisticas)
        console.log(poketipo)
        console.log(pokeImg);
        pokeImage(pokeImg)

    })
} 



const pokeImage = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;

}

const poke_estadisticas = () =>{
    const estadisticas = document.getElementById("estadisticas");
    pokeImg.p = pokeEstadisticas;

}


// pokeImage("https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2021/09/Digimon-ghost-game-anime-adelanto-nuevo-anime.jpg?fit=1280%2C720&quality=80&ssl=1");

/*
const imprimir = () =>{
    const pokeName = document.getElementById("pokeName") //lee el documento y busca un elemento con Id que determinamos
    let pokeInput = pokeName.value; // el value es lo que tiene adentro el imput
    console.log("Hola " + pokeInput);
}
*/