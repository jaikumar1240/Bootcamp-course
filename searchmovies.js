const form = document.querySelector('#searchForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(form.elements.query.value);
    searchtext = form.elements.query.value;
    const config = { params: { q :  searchtext}}
    await axios.get(`https://api.tvmaze.com/search/shows`, config).then((res)=>{
        console.log(res);
        const datas = res.data;
        for (const data of datas) {       
            const imagePath = data.show.image.medium;
            const showName = data.show.name;
            const img = document.createElement('IMG');
            img.src = imagePath;
            document.body.append(img)
            const nameText = document.createElement('H2');
            nameText.innerText = showName;
            document.body.append(nameText);
        }
    })
    form.elements.query.value = '';
})
