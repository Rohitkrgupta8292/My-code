function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr
    if (views < 1000000 && views > 999) {
        viewStr = views / 1000 + 'K'
    }
    else if (views >= 1000000) {
        viewStr = views / 1000000 + "M"
    }
    else {
        viewStr = views
    }
    let old
    if (monthsOld === 12) {
        old = 1 + " year"
    }
    else if (monthsOld > 12) {
        let years = Math.ceil(monthsOld / 12)
        let months = (monthsOld % 12)
        old = years + " year " + months + " months"
        if(monthsOld >= 24){
            old = years + " years " + months + " months"
        }
    }
    else {
        old = monthsOld + " months"
    }
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="thumbnail">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewStr} views . ${old} ago</p>
    </div>
</div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", 754000, 2, "31:06", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

/*
<div class="card">
            <div class="image">
                <img src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
                    alt="thumbnail">
            </div>
            <div class="text">
                <h1>Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1</h1>
                <p>codeWithHarry . 754K views . 2 months ago</p>
            </div>
        </div>
 */