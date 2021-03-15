    let arr = new Array();
show();
document.getElementById("addbtn").addEventListener("click", function () {
    getdata();
    show();
    let head = document.getElementById("head").value;
    let mess = document.getElementById("message").value;
    let box = {
        title: head,
        message: mess,
    }
    arr.push(box);
    localStorage.setItem("note", JSON.stringify(arr));
    head.value = "";
    mess.value = "";
    
});
function show(){
  getdata();
    let html="";
    arr.forEach(function (element, index) {
   html += `<div class="textcon">
      <h1 id="headd">${element.title}</h1>
     <p id="para">${element.message}</p>
     <button class="delbtn" id="${index}" onclick="del(this.id)">delete</button>
       </div>`
    });
    document.getElementById("display").innerHTML=html;
}

function getdata() {
    let local = JSON.parse(localStorage.getItem("note"));
    if (local != null) {
        arr = local;
    }
}
function del(index){

    arr.splice(index,1);
    localStorage.setItem("note", JSON.stringify(arr));
    show()
    
}