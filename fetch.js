
var button=document.getElementById('btn');


function fetchdata(){
    
    fetch("https://jsonplaceholder.typicode.com/posts").then(response => {

        return response.json();
    })
    .then(data => {
        data.forEach(el => {
            
            const html=`<div class="firstdiv">
            <h1>${el.title}</h1>   
             </div>`;
        document.querySelector(".container").insertAdjacentHTML("afterbegin",html);
        })
    })
    .catch(error => {
        console.log(error);
    })
}


// fetchdata();

button.addEventListener('click',function(e){
    e.preventDefault();
    fetchdata();
});
