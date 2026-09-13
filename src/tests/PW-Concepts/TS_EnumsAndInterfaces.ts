interface car{
    name:string
    readonly engineType:string //read only type
    seating:number
    price:number | string //literal type
}

enum mobile{
     Apple = "iPhone",
     Android = "Google Pixel"
}