// sale alert part
const body = document.querySelector('body')
const head = document.querySelector('head')
const foot = document.createElement('div')
const conatiner = body.appendChild(foot)
conatiner.className='container'
conatiner.innerText = 'SALE ALERT: 30% off sitewide | Code : MEMORIAL - 20% Off Fine | Code: FINE20'
conatiner.style.textAlign = 'center'
conatiner.style.color = 'white'
conatiner.style.backgroundColor = 'black'
conatiner.style.padding = '10px'
body.style.padding ='0px'
body.style.margin ='0px'

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

            // CSS for mobile screen responsiveness
            const style = document.createElement('style');
            style.innerHTML = `
            body {
                width: 100%; /* Default width */
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
           height:60px
            }
                .container {
                    width: 180%; /* Container width for mobile */
                }
            }
        `;
head.appendChild(style);

