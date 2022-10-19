class Color{
    constructor(r, g, b){
        this.r = r;
        this.g = g;
        this.b = b;
    }

    rgb(){
        const{r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    
}
const c1 = new Color(255,255,255);