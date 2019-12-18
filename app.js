const accountName = '9gag';
const numberOfImages = 6;

const insertImgDiv = (imgSrc, shortCode) => {
    $('#instagram').append(`
    <div class="box">
        <a href="https://www.instagram.com/p/${shortCode}">
            <img src="${imgSrc}"/>
        </a>
    </div>`);
}

$(document).ready(() => {
    const url = `https://www.instagram.com/${accountName}/?__a=1`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const nodes = data.graphql.user.edge_owner_to_timeline_media.edges;
        for (let i = 0; i < numberOfImages; i++) {
            let post = nodes[i.toString()].node;
            insertImgDiv(post.thumbnail_src, post.shortcode);
        }
    });
});