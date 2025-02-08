

export interface Product{
    _id : string;
    name : string;
    _types : "products";
    image?: {
        asset :{
            _ref : string;
            _type : "image";
        }
    };
    price : number;
    description? : string;

}