import "./style.css";
import { crearNoticias,crearFiltro  } from "./helper/domHelper.js";
import { api_sources,url,options } from "./api.js";

const container = document.createElement("div");
const container_noticias = document.createElement("div");
container_noticias.classList.add("container-card");


const fetchSetNoticias = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    
    const span = document.createElement("span");
    span.textContent = "Filtro salvadoreño: ";

    const div_filtros = document.createElement("div");
    div_filtros.classList.add("container-filter");
    div_filtros.appendChild(span);

    const noticia_filtro = crearFiltro(json);
    noticia_filtro.addEventListener("change", (event) =>{
        let fetchUrl = event.target.value == "all" ? url : `${url}?source=${event.target.value}`;
        crearNoticias(fetchUrl,options);
    });
    div_filtros.appendChild(noticia_filtro);
    container.appendChild(div_filtros);
    document.body.appendChild(container);
}

const getNoticias = async(url,options) =>{
    const response = await fetch(url,options);
    const noticias = await response.json();
    container_noticias.append(...crearNoticias(noticias));
    container.appendChild(container_noticias);
}

fetchSetNoticias(api_sources);
getNoticias(url,options, "all");