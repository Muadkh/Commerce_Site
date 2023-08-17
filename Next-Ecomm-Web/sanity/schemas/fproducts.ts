import { type } from "os";

export default{

name:"fproducts",
title:"Fproducts",
type:"document",
fields:[
    {
name:"image",
title:"Image",
type:"array",
of: [{type:"image"}],
Option:{
    hotspot:true,

}
},

{
    name:"name",
    title:"Name",
    type:"string"
},
{
    name:"slug",
    title:"Slug",
    type:"slug",
    options:{
        source:"name",
        maxLength:180
    }
},

{ 
    name:"type",
    title:"Type",
    type:"string"


}
,
{
    name:"detail",
    title:"Detail",
    type:"string"
},
{
        name:"sale",
        title:"Sale",
        type:"string"
    
},
{
    name:"shop",
    title:"Shop",
    type:"string"
},
{

    name: 'care',
    title: 'Care', 
        type: 'array', 
        of: [{type: 'block'}]
    
},
{
    name:"price",
    title:"Price",
    type:"number"

}




]




}