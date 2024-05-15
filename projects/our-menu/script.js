import {menu} from './menu.js';

const content = document.querySelector('.content');
const navList = document.querySelectorAll('.navlist ul li');
const navListArr = Array.from(navList);
const sectionCenter = document.querySelector('.section-center');
const filterBtn = document.querySelectorAll('.filter-btn');

console.log(filterBtn);
// let filterBtnArr = Array.from(filterBtn);
// console.log(filterBtnArr);
// menu.forEach((item)=>{
    
// })

// let a = 20;

// a = 30;

// a = 50;

// a = 60;

// console.log(a);


// for (let i = 0; i < menu.length; i++) {
//     sectionCenter.innerHTML = sectionCenter.innerHTML + `
//     <article class="menu-item">
//             <img src="	https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg" class="photo" alt="buttermilk" pancakes="">
//             <div class="item-info">
//               <header>
//                 <h4>${menu[i].title}</h4>
//                 <h4 class="price">$${menu[i].price}</h4>
//               </header>
//               <p class="item-text">
//                 ${menu[i].desc}
//               </p>
//             </div>
//           </article>
//     `;
// }

menu.forEach(function(item){
    sectionCenter.innerHTML = sectionCenter.innerHTML + `
    <article class="menu-item">
            <img src="	https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg" class="photo" alt="buttermilk" pancakes="">
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>
    `;
})

filterBtn.forEach((item) => {
    item.addEventListener('click', function(elem){
        // console.log(elem.target.innerText.toLowerCase());
        let clickedItem = elem.target.innerText.toLowerCase();

        let FilterMenuItem = menu.filter(function(elem){
            //  if return false; then element will not store in filterMenuItem array
            //  if return true; then element will store in filterMenuItem array
            let menuItem = elem.category.toLowerCase();
            
            if (clickedItem == 'all') {
                return true;
            }else{
                return menuItem == clickedItem;
            }
        });
        sectionCenter.innerHTML = '';
        FilterMenuItem.forEach(function(item){
            sectionCenter.innerHTML = sectionCenter.innerHTML + `
                <article class="menu-item">
                        <img src="	https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg" class="photo" alt="buttermilk" pancakes="">
                        <div class="item-info">
                        <header>
                            <h4>${item.title}</h4>
                            <h4 class="price">$${item.price}</h4>
                        </header>
                        <p class="item-text">
                            ${item.desc}
                        </p>
                        </div>
                    </article>
                `;
        })
    })
});

