import { type } from "os";

export default{

name:"promotions",
title:"Promotions",
type:"document",
fields:[
    {
name:"image1",
title:"Image1",
type:"image"
},

{
    name:"name1",
    title:"Name1",
    type:"string"
},
{
    name:"slug1",
    title:"Slug1",
    type:"slug",
    options:{
        source:"name1",
        maxLength:180
    }
},


{
        name:"sale1",
        title:"Sale1",
        type:"string"
    
},
{
    name:"season1",
    title:"Season1",
    type:"string"
},
{
name:"image2",
title:"Image2",
type:"image"
},

{
    name:"name2",
    title:"Name2",
    type:"string"
},
{
    name:"slug2",
    title:"Slug2",
    type:"slug",
    options:{
        source:"name2",
        maxLength:180
    }
},


{
        name:"sale2",
        title:"Sale2",
        type:"string"
    
},
{
    name:"season2",
    title:"Season2",
    type:"string"
},


{
    name:"image3",
    title:"Image3",
    type:"image"
    },
    
    {
        name:"name3",
        title:"Name3",
        type:"string"
    },
    {
        name:"slug3",
        title:"Slug3",
        type:"slug",
        options:{
            source:"name3",
            maxLength:180
        }
    },
    
    
    {
            name:"sale3",
            title:"Sale3",
            type:"string"
        
    },
    {
        name:"season3",
        title:"Season3",
        type:"string"
    },



]




}