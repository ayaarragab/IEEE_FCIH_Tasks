async function fetchingNews(country)
{
    const apiKey = '05355de9607f43f5bfc879f957fd3972'
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=${apiKey}`;
    var response = await fetch(apiUrl);
    var jsonData = await response.json();
    console.log(jsonData);
    const content = document.getElementById('newsContent');
    let htmlcontent = ``;
    for (let i = 0; i < jsonData.articles.length; i++) {
        const article = jsonData.articles[i];
        htmlcontent += `
    <div class="card col-md-3">
        <p>${article.title}</p>
        <button type="button" class="btn btn-danger"><a href="${article.url}" target="_blank">Read More</a></button>
    </div>
        `
    };
    content.innerHTML=htmlcontent;
}
const navItems = document.querySelectorAll('.nav-item');
for (let index = 0; index < navItems.length; index++) {
    const navItem = navItems[index];
    navItem.addEventListener('click', function(){
        const country = this.dataset.country;
        fetchingNews(country);
    });
}