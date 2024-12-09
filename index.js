

var sumbitbt = document.getElementById("sumbit");
var updatebtnn = document.getElementById("updatebtn");
var siteNameInput = document.getElementById("SiteName");
var siteURLInput = document.getElementById("URL");
var searchBookInput=document.getElementById("search")



// var allSite = [];



// if (JSON.parse(localStorage.getItem("array"))) {
//     allSite = ((allSite = JSON.parse(localStorage.getItem("array"))))    



// }


var allSite = JSON.parse(localStorage.getItem("array") || []) //اختصار
// بيخليها محتفظ بيها في local storage مهما عملنا refresh
display();



sumbitbt.addEventListener("click", function () {


    addSite()
    display()
    clear()

})

function addSite() {
    var Site = {
        siteName: siteNameInput.value,
        siteurl: siteURLInput.value,

    }

    allSite.push(Site)

    localStorage.setItem("array", JSON.stringify(allSite));
    console.log(allSite);

}


function clear() {
    siteNameInput.value = "";
    siteURLInput.value = "";
}



function display() {
    var cartona = '';
    for (let i = 0; i < allSite.length; i++) {
        cartona += `
         <tr>
<th>${i + 1}</th>
<th>${allSite[i].siteName}</th>
<th><button onclick="VisitSite(${i})" class="btn btn-primary style-btn " >Visit</button></th>
<th><button onclick="deleteItem(${i})" class="btn btn-danger style-btn  ">Delete</button></th>
<th><button onclick="update(${i})" class="btn btn-success style-btn  ">Update</button></th>
</tr>
    `

    }


    document.getElementById("rows").innerHTML = cartona;
}
function deleteItem(i) {
    console.log(i);
    allSite.splice(i, 1);
    localStorage.setItem("array", JSON.stringify(allSite));
    display();

}


function VisitSite(i) {
    window.open(allSite[i].siteurl)

}




var indexofUpdate; //عملناها  عشان نحفظ فيها ال I  
function update(i) {

    indexofUpdate = i
    siteNameInput.value = allSite[i].siteName;
    siteURLInput.value = allSite[i].siteurl;                     //بنمسك ال input value = array  بتاعنا اللي جواه الداتا 
    sumbitbt.classList.add("d-none")
    updatebtnn.classList.remove("d-none")




}
updatebtnn.addEventListener("click", function () {

    var Site = {
        siteName: siteNameInput.value,
        siteurl: siteURLInput.value,

    }


    allSite.splice(indexofUpdate, 1, Site)
    localStorage.setItem("array", JSON.stringify(allSite));

    sumbitbt.classList.remove("d-none")

    updatebtnn.classList.add("d-none")
    display();
    clear();


})


searchBookInput.addEventListener("input" ,function () {
    console.log(searchBookInput.value);
    
    var cartona ="";
    for (let i = 0; i < allSite.length; i++) {
      if (allSite[i].siteName.toLowerCase().includes(searchBookInput.value.toLowerCase())) {
        cartona+=    `
         
         
          <tr>
<th>${i + 1}</th>
<th>${allSite[i].siteName}</th>
<th><button onclick="VisitSite(${i})" class="btn btn-primary style-btn " >Visit</button></th>
<th><button onclick="deleteItem(${i})" class="btn btn-danger style-btn  ">Delete</button></th>
<th><button onclick="update(${i})" class="btn btn-success style-btn  ">Update</button></th>
</tr>
    `
         
         
        
      }
      document.getElementById("rows").innerHTML = cartona; 
    }
    
    
})