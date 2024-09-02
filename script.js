// sale alert part
const body = document.querySelector('body')
const head = document.querySelector('head')
const foot = document.createElement('div')
const conatiner = body.appendChild(foot)
conatiner.className = 'container'
conatiner.innerText = 'SALE ALERT: 30% off sitewide | Code : MEMORIAL - 20% Off Fine | Code: FINE20'
conatiner.style.textAlign = 'center'
conatiner.style.color = 'white'
conatiner.style.backgroundColor = 'black'
conatiner.style.padding = '10px'
body.style.padding = '0px'
body.style.margin = '0px'

// nav bar
const navDiv = document.createElement('div')
const nav = document.createElement('div')
nav.className = 'nav'
// const navClass = document.querySelector('.nav')
nav.innerHTML = `
   <div style="display: flex; gap: 40px; justify-content:space-between; align-items: center">
              <div style='display:flex'>
              <div>
              <img class='menu' style="height:20px ;" src='https://imgs.search.brave.com/EDQcTVQZdMP8ueZhPRioA9pEZ3Bqf43n2UtMZ3kjxw0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzA3LzYwLzA4/LzM2MF9GXzgwNzYw/MDg5Ml9scVZKUVNB/dE5yR2ZTSkNrVEdt/TlpIWjBjcU5uYk93/eS5qcGc' />
              </div>
          <div class='new' style='display:flex; gap:10px'>
           <span>New</span>
           <span>Shop By</span>
           <span>Best Sellers</span>
           <span>Bridal</span>
           <span>Clearance</span>
          </div>
           </div>
           <div >
           <span class='middle'>J A M E S <span> M I C H E L L E</span></span>
           </div>
           <div style='display:flex; gap:10px ; align-items:center'>
          <div style='display:flex; gap:10px' class='search'>
           <span>Search</span>
           <span>Account</span>
           <span>Cart</span>
          </div>
          <span > <img class='cart' style='height:30px' src='https://imgs.search.brave.com/wWBBowv7fwcGJinK54XINsvym0DlERgkckIHFUAjmQk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzA4LzY0Lzc0/LzM2MF9GXzEwODY0/NzQ0Ml9rbm45SGVD/MFluVEZvSXE1QWJM/dWhGYjVHNkZlTnpF/eS5qcGc'/></span>
           </div>
   </div>
           
            `
nav.style.padding = '10px'
nav.style.backgroundColor = 'white';

const navBar = navDiv.appendChild(nav);
body.appendChild(navBar);

// image
const imgDiv = document.createElement('div')
imgDiv.className = 'img-div'
imgDiv.innerHTML = `
           <div class='item-img'>
           <div style='width:70px'>
           <a href="https://jamesmichelle.com/products/jaws-necklace-1"> <img style='background-color:rgb(241,238,239); height:80px; border-radius:50%' src="https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/best-sellers.png" /></a>
           <a href="https://jamesmichelle.com/products/jaws-necklace-1"> <p style='text-align:center'>Best Seller</p></a>
           </div>
            <div style='width:70px'>
              <a href="https://jamesmichelle.com/products/starfish-necklace">
            <img style='background-color:rgb(241,238,239);height:80px; border-radius:50%' src="https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/new.png" />
            </a>
              <a href="https://jamesmichelle.com/products/starfish-necklace">
            <p style='text-align:center'>New</p>
            </a>
             </div>
              <div style='width:70px'>
               <a href="https://jamesmichelle.com/products/luna-moon-necklace">
            <img style='background-color:rgb(241,238,239);height:80px; border-radius:50%' src="https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/necklaces.png" />
            </a>
             <a href="https://jamesmichelle.com/products/luna-moon-necklace">
             <p style='text-align:center'>Necklaces</p>
             </a>
             </div>
                <div style='width:70px'>
                 <a href="https://jamesmichelle.com/products/abyss-ring">
            <img style='background-color:rgb(241,238,239);height:80px; border-radius:50%' src="https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/rings.png" />
            </a>
              <a href="https://jamesmichelle.com/products/abyss-ring">
             <p style='text-align:center'>Rings</p>
             </a>
             </div>
               <div style='width:70px'>
                 <a href="https://jamesmichelle.com/products/shell-collector-necklace">
            <img style='background-color:rgb(241,238,239);height:80px; border-radius:50%' src="https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/bracelets.png" />
            </a>
               <a href="https://jamesmichelle.com/products/shell-collector-necklace">
              <p style='text-align:center'>Earrings</p>
              </a>
             </div>
             <div style='width:70px'>
              <a href="https://jamesmichelle.com/products/favorite-quote-ring">
            <img style='background-color:rgb(241,238,239);height:80px; border-radius:50%' src="https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/personalized.png" />
            </a>
             <a href="https://jamesmichelle.com/products/favorite-quote-ring">
             <p style='text-align:center'>Braceles</p>
             </a>
             </div>
               <div style='width:70px'>
                 <a href="https://jamesmichelle.com/products/seafolly-charm-necklace">
            <img style='background-color:rgb(241,238,239);height:80px; border-radius:50%' src="https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/fine.png" />
            </a>
             <a href="https://jamesmichelle.com/products/seafolly-charm-necklace">
            <p style='text-align:center'>personalized</p>
            </a>
             </div>
                <div style='width:70px'>
                <a href="https://jamesmichelle.com/products/reef-charm-necklace">
            <img style='background-color:rgb(241,238,239);height:80px; border-radius:50%' src="https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/clearance.png" />
            </a>
            <a href="https://jamesmichelle.com/products/reef-charm-necklace">
             <p style='text-align:center'>Fine</p>
             </a>
             </div>
           </div>
            `
body.appendChild(imgDiv);

// card
const cardDiv = document.createElement('div')
cardDiv.className = 'card-div'
cardDiv.innerHTML = `
<div class='card'>
 <div class='card-container' style=''>
        <a href="https://jamesmichelle.com/products/luna-moon-necklace">    <img style='background-color:rgb(241,238,239);height:300px; width:300px' src="https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/necklaces.png" /></a>
            <a href="https://jamesmichelle.com/products/luna-moon-necklace">
             <p style='text-align:center; text-decoration:none ; color:black'>Necklaces</p></a>
             </div>
 <div class='card-container'>
         <a href="https://jamesmichelle.com/products/initial-ring">
            <img style='background-color:rgb(241,238,239);height:300px; width:300px' src="https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/bracelets.png" />
         </a>
             <a href="https://jamesmichelle.com/products/initial-ring"><p style='text-align:center'>Earrings</p></a>
             </div>
 <div class='card-container'>
          <a href="https://jamesmichelle.com/products/tablet-ring">  <img style='background-color:rgb(241,238,239);height:300px;width:300px ' src="https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/rings.png" /></a>
            <a href="https://jamesmichelle.com/products/tablet-ring"> <p style='text-align:center'>Rings</p></a>
             </div>
</div>
`
body.appendChild(cardDiv);


// CSS for mobile screen responsiveness
const style = document.createElement('style');
style.innerHTML = `
            body {
                width: 100%;
                 height:2000px;
                    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
            }
        
            @media (min-width: 769px) {
                body {
                    width: 100%; /* Width for desktop screens */
                    margin: 0 auto; /* Center the body content */
                   
                }
                .container {
                    width: 1260px; /* Container width for desktop */
                    margin: 0 auto; /* Center the container content */
                    padding:0px
                }
                    .middle{
                    display:flex;
                    gap:25px; 
                    font-size:20px;
                    }
                    .menu{
                     visibility: hidden;
                    }
                     .item-img{
                   display:flex ;
                    gap:40px; 
                    justify-content:center
                     }
                    .card{
                    display:flex; 
                    gap:100px ;
                     justify-content:center;
                     margin-top:40px
                    }
                     .card-container{
                     width:250px}
                      a {
                text-decoration: none;
                color: inherit;
            }
            }
        
            @media (max-width: 768px) {
                body {
                    width: 100%; /* Full width for mobile screens */
                }
                .new {
                    visibility: hidden;
                }
                .search {
                    visibility: hidden;
                }
                .middle {
            display: flex; 
            gap: 15px;
            font-size: 14px;
            width: 180px  
        }
            .cart{
           height:60px;
            }
                .container {
                    width: 190%; /* Container width for mobile */
                }
                    .item-img{
                    overflow-x: scroll;
                   display:flex;
                   gap:50px;
                   width:800px;
                  padding: 10px; 
                    }
                     .item-img img {
        height: auto; /* Maintains aspect ratio */
    }
         .card{
                   overflow-x: scroll;
                    display:flex; 
                    gap:120px ;
                    width:800px;
                     justify-content:center;
                     margin-x:80px
                    padding-left: 20px; 
                    }
                     .card-container{
                     width:190px
                   
                     }
                      a {
                text-decoration: none;
                color: inherit;
            }
            }
        `;
head.appendChild(style);

