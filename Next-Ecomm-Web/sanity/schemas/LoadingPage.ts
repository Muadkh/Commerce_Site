import { type } from "os";

export default{

name:"loading",
title:"Loadingpage",
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
    name:"detail",
    title:"Detail",
    type:"string"
},






]




}