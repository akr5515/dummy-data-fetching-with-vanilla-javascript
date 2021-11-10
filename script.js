// const fetch=require('node-fetch')

const element=document.querySelector('#data');
const table=document.querySelector('.table');
const details= document.querySelector('.details');

async function getCountry(){
    try{
        details.style.display="none";
        const fetchedData= await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data= await fetchedData.json();

        let temp = "";
        data.map((itemData)=>{
            temp += "<tr onclick='getDetails("+itemData.id+")'>";
            temp += "<td>" + itemData.id + "</td>";
            temp += "<td>" + itemData.title + "</td></tr>";
            // console.log(itemData);
        });
        document.getElementById('data').innerHTML = temp;

    }catch(err){
        console.error(err);
    }
}

// element.addEventListener("click", () => {
// 	alert('hello');
// });

async function getDetails(id){
    table.style.display="none";
    details.style.display="block";
    const fetchedData= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data= await fetchedData.json();
    console.log(data.title);
    let temp=`<h1>ID is ${id}</h1>
        <h2>${data.title}</h2>
        <p>${data.body}</p>
        <button onclick='backHome()'>Back</button>
    `

    details.innerHTML=temp;
}

function backHome(){
    table.style.display="block";
    details.style.display="none";
    details.innerHTML="";
}


getCountry();