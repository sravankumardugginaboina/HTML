let target = document.getElementById("carousel");
let createImgs = document.createElement("img");
target.append(createImgs);
createImgs.setAttribute("src","https://images.unsplash.com/photo-1561424412-6c2125ecb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyb3VzZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60");

let imgArr = [
    "https://images.unsplash.com/photo-1561424412-6c2125ecb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyb3VzZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1460176449511-ff5fc8e64c35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyb3VzZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1502136969935-8d8eef54d77b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2Fyb3VzZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1601755486554-451db07cb308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcm91c2VsfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1533302229631-95b8bea33df3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
   
]

let count = 0;

setInterval(()=>{
    if(count<imgArr.length){
        createImgs.src=imgArr[count];
        count++;
    }
    else{
        count = 0;
    }
},2000);


