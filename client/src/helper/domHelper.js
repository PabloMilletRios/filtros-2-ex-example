export const crearNoticias = (noticias) => {
    const espacio = noticias.map((articulo) =>{
        const art = document.createElement("div");
        art.classList.add("card");

        const art_contenido = document.createElement("div");
        art_contenido.classList.add("card-content");
        art.appendChild(art_contenido);
        
        const h2_content = document.createElement("h2");
        h2_content.classList.add("card-title");
        h2_content.textContent = articulo.source;
        
        art_contenido.appendChild(h2_content);
        const descripcion = document.createElement("p");
        descripcion.classList.add("card-description");
        descripcion.textContent = articulo.title;
        
        art_contenido.appendChild(descripcion);
        const url = document.createElement("p");
        url.classList.add("card-description");
        url.textContent = articulo.url;
        return art;
    });
    return espacio;
};
export const crearFiltro = (sources) => {
    const select = document.createElement("select");
    select.classList.add("styled-select");
    sources.forEach(recurso => {    
        const option = document.createElement("option");
        option.text = recurso.name;
        if (recurso.name == "") option.selected = true;
        select.appendChild(option);
    });
    return select;
};