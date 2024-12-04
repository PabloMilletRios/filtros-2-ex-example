import { News } from "../classes/News.js";

export function parseClases(Noticias_array) {
    return new Promise((resolve,reject)=>{
       if (Noticias_array !== null || Noticias_array !== undefined) {
        const newClasses = Noticias_array.map((Noticias)=>{
            const Noticias_Parse = new News(Noticias.title,Noticias.url,Noticias.source);
            return Noticias_Parse;
        })  
        resolve(newClasses);
       } else {
        let error = new Error("Error: ");
        error.name = "parserToClass";
        reject(error);
       }
    })
}