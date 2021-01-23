
// api.giphy.com/v1/gifs/search gif url
const apiKey=  "8TMafzazCyXbj3e2FgbkgQFI2NTAWKzY"
let url = `//api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1&q=`
let imageSection = document.querySelector('.images');
const searchBtn = document.querySelector('.searchBtn');
const removeBtn = document.querySelector(".remove");


function init(){


    searchBtn.addEventListener("click", function(e){
        e.preventDefault();
        let query = document.querySelector(".searchInput").value.trim();
        let combinedUrl = url.concat(query);
        console.log(query);
        console.log(url);
        console.log(combinedUrl);
        getGiffy(combinedUrl);

    });
    removeBtn.addEventListener("click",e => {
        e.preventDefault();
        while(imageSection.firstChild){
            imageSection.removeChild(imageSection.lastChild);
        }
    });

}


async function getGiffy(url){
    const res = await axios.get(url);
    console.log(res);
    let fig = document.createElement("figure");
    let img = document.createElement("img");
    img.src= res.data.data[0].images.downsized.url;
    img.id= "result"
    fig.appendChild(img)
    imageSection.insertAdjacentElement('afterbegin',img);
}
init();
