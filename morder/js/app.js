// icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

// Themes var
const userTheme = localStorage.getItem("theme");
const system = window.matchMedia("preferes-color-scheme: dark").matches;


// icons toggline
const iconToggle = ()=> {

    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");

};

// initial theme check

const themeCheck = () => {
    if(userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList("display-none");
        return;

    }
    sunIcon.classList.add("display-none");

};

// manual theme switch

const themeSwitch = () => {
        if(document.documentElement.classList.contains("dark")){

            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
            iconToggle();
            return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme","dark");
    iconToggle();
};

// call them switch on clicking buttons

sunIcon.addEventListener("click",() => {
    themeSwitch();
});

moonIcon.addEventListener("click",() => {
    themeSwitch();
});

// invoke them check on initial Load

themeCheck();