var topsection=[
    {   id:1,
        image:"images/tag1bg.png",
        color:"darkslategray",
        title:"Space",
        text:"FEATURED 28,291 posts",        
    },
    {   id:2,
        image:"images/tag2bg.jpg",
        color:"darkslateblue",
        title:"Imgur13",
        text:"7,842 posts"
      },
      {  id:3,
        image:"images/tag3bg.jpg",
        color:"seagreen",
        title:"Vintage",
        text: "8,926 posts",
      },
      {  id:4,
        image:"images/tag4bg.jpg",
        color:"indianred",
        title:"Pokemon",
        text:"52,584 posts"
      },
      { id:5,
        image: "images/tag5bg.jpg",
        color:"#328d67",
        title: "Black History",
        text:"184 posts"
      },
      {  id:6,
        image:"images/tag6bg.jpg",
        color:"#e47d57",
        title:"Science And Tech",
        text:"44,943 posts",
      },
      { id:7,
        image:"images/tag7bg.jpg",
        color:"#132d31",
        title:"Staff Picks",
        text:"6,536 posts"
      },
      { id:8,
        image: "images/tag8bg.jpg",
        color:"#2b1a5a",
        title: "Gaming",
        text: "298,228 posts",
      },
      { id:9,
        image:"images/tag9bg.jpg",
        color: "#ba519f",
        title: "Memes",
        text: "571,088 posts"     
      },
      { id:10,
        image:"images/tag10bg.jpg",
        color:"#ab80b8",
        title:"OC",
        text:"39,274 posts",
      },
]

topsection.forEach((value)=>{
    var tagdiv= document.getElementById("tagContainer");
    var tagdiv2=document.createElement("div")

    var firstbox=document.createElement("div");
    var imgs=document.createElement("img");
    imgs.style.backgroundImage= `url(${value.image})`;
    firstbox.append(imgs);

    var secondbox=document.createElement("div");
    tagdiv2.style.backgroundColor=value.color;
    var head=document.createElement("h5");
    head.textContent=value.title;
    var para=document.createElement("p");
    para.textContent=value.text;
    secondbox.style.backgroundColor=value.color;
    secondbox.id=value.id;
    secondbox.append(head,para);

    tagdiv2.append(firstbox,secondbox);
    tagdiv.append(tagdiv2)

})