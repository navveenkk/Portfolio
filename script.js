
/*Fixing the container height in the homepage */
function homePage() {

    var i = 0;
    if (i == 0) {
        i = 1;
        var meter = document.getElementById('meter');
        var meterVal = document.getElementById('meter-value');
        var meterWidth = 1;
        var id = setInterval(frame, 30);
        function frame() {
            if (meterWidth >= 100) {
                meter.style.display = 'none';
                clearInterval(id);
                i = 0;
            } else {
                var scrHeight = window.innerHeight;
                var headerHeight = 68; //Change the header height when header element is re-worked
                var bannerHeight = scrHeight - headerHeight;
                var banner = this.document.getElementById('banner');
                banner.style.height = bannerHeight + 'px';
            meterWidth++;
            meterVal.style.width = meterWidth + "%";
            }
        }
    } 
    
    var load_id = setInterval(loaderHide, 3000);
    function loaderHide() {
        document.getElementById('loader').style.display = 'none';
        document.body.style.overflowY = 'scroll';
        clearInterval(load_id);
    }
    
}

/*Changing the container height when window changes to fullscreen */
window.addEventListener('resize', function homePage2() {
    var scrHeight = window.innerHeight;
    console.log(scrHeight);
    var headerHeight = 68; //Change the header height when header element is re-worked
    console.log(headerHeight);
    var bannerHeight = scrHeight - headerHeight;
    console.log(bannerHeight);
    var banner = this.document.getElementById('banner');
    banner.style.height = bannerHeight + 'px';
})
/*Switching Light-Dark modes */
function switchLight() {
var bodySwitchMode = document.getElementById('mainpage');
bodySwitchMode.classList.toggle('night-mode');
}
/*Custom cursor operations */
var t = document.getElementById("cursor");
const links = document.querySelectorAll("a"); 
document.getElementsByTagName("body")[0].addEventListener('mousemove', (n)=> {
    //Getting cursor position
    t.style.left = n.clientX + "px", 
	t.style.top = n.clientY + "px"
});
//Cursor changes when hovered over links
links.forEach((links) => {
    links.addEventListener("mouseover", () => {
      cursor.classList.add("big");
    });
  
    links.addEventListener("mouseout", () => {
      cursor.classList.remove("big");
    });
});

/*Display modal */
function projectModal(element) {
    element.classList.toggle("modal");
}
/*Hide error when input field is typed */
function clearInput() {
    var inValue;
    inValue = document.getElementById('filter-search').value;
    if (inValue !== '') {
        document.getElementById('error-message').classList.remove('show');
    } 
}
/*Filter operations */
function filterSearch() {
    var i, inValue, filter, description, desCount, desContent;
    inValue = document.getElementById('filter-search').value;
    filter = inValue.toUpperCase();
    description = document.getElementsByClassName('project-description');
    desCount = description.length;

    if (inValue !== '') {
        document.getElementById('show-all-button').classList.remove('hide');
        for (i = 0; i < desCount; i++) {
            desContent = description[i].getElementsByClassName('description-content')[0].innerText;

            if (desContent.toUpperCase().indexOf(filter) > -1) {
                description[i].parentElement.parentElement.style.display = '';
                description[i].parentElement.parentElement.classList.add("for-count");
            } else {
                description[i].parentElement.parentElement.style.display = 'none';
                description[i].parentElement.parentElement.classList.remove("for-count");
            }

        }
        //Get the count of the filtered elements to display error if there are no filtered items
        finalCount = document.getElementsByClassName('for-count').length;
            console.log(finalCount);
            if (finalCount == 0) {
                document.getElementById('no-items').classList.add('show');
            } else {
                document.getElementById('no-items').classList.remove('show');
            }
        
    } else {
        document.getElementById('error-message').classList.add('show');
    }
}
/* Clear filters*/
function showAll() {
    location.reload();
}
