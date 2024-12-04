export class News{
    title;
    url;
    source;
    constructor(title,url,source){
        this.title = title;
        this.url = url;
        this.source = source;
    }
    get title(){
        return this.title;
    }
    set title(title){
        this.title = title;
    }
    get url(){
        return this.url;
    }
    set url(url){
        this.url = url;
    }
    get source(){
        return this.source;
    }
    set source(source){
        this.source = source;
    }
}