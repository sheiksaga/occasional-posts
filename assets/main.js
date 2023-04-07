// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error('Something went wrong, make sure tthat ${selector} exists or is typed correctly.')
};


//Nav styles on scroll
const scrollHeader = () => {
    const headerElement = selectElement ('#header');
    if(this.scrollY >= 15){
        headerElement.classList.add('activated');
    }
    else{
        headerElement.classList.remove('activated');
    }
}

window.addEventListener('scroll', scrollHeader)

/*
// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

/*
if(currentTheme){
    bodyElement.classList.add('dark-theme');
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-theme');

    if(bodyElement.classList.contains('dark-theme')){
        localStorage.setItem('currentTheme', 'themeActive')
    }
    else{
        localStorage.removeItem('currentTheme')
    }
});
*/


//dark mode
$('#theme-toggle-btn').click(function() {
    $('body').toggleClass('dark-theme');
  });

//back to top
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > $(this).height() * 0.4) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});


