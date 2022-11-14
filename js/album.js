let albumTitle = document.querySelector('.album__name');
let imgContainer = document.querySelector('.container__imgs');
let link = document.querySelector('.to-album-name');
let link1 = document.querySelector('.to-album-img');
let next = document.querySelector('.container__right-arrow');
let prev = document.querySelector('.container__left-arrow')
let myImg = imgContainer.querySelectorAll('img');

function Album(albumName, albumPage, imgs, alt, newImg) {
    this.albumName = albumName,
    this.albumPage = albumPage,
    this.imgs =  imgs,
    this.alt = alt
};

let albumAustralia = new Album('Australie', 'albumAu.html', ['./Img/galery/carouselle/au1.jpg', './Img/galery/carouselle/au2.jpg', './Img/galery/carouselle/au3.jpg'], ['photo album australie', 'photo album australie', 'photo album australie']);
let albumNewZeland = new Album('Nouvelle Zelande', 'albumNZ.html', ['./Img/galery/carouselle/nz1.jpg', './Img/galery/carouselle/nz2.jpg', './Img/galery/carouselle/nz3.jpg'], ['photo album NZ', 'photo album NZ', 'photo album NZ']);
let albumVan = new Album('Van', 'album-van.html', ['./Img/galery/carouselle/van1.jpg', './Img/galery/carouselle/van2.jpg', './Img/galery/carouselle/van3.jpg'], ['photo album Van', 'photo album Van', 'photo album Van']);

let albums = [albumAustralia, albumNewZeland, albumVan];
let albumPos = 0;

function setAlbum(album) {

    albumTitle.textContent = album.albumName;

    link.setAttribute('href', album.albumPage);
    link1.setAttribute('href', album.albumPage);

    myImg.forEach(function(elem, index) {
        elem.setAttribute('src', album.imgs[index]);
        elem.setAttribute('alt', album.alt[index]);
    });

}

function nextAlbum() {
    if (albumPos == albums.lastIndexOf(albums[albums.length-1])    ) {
        albumPos = 0;
        setAlbum(albums[albumPos]);
    }
    else {
        albumPos++;    
        setAlbum(albums[albumPos]);
    }
} 

function prevAlbum() {
    if (albumPos == 0) {
        albumPos = albums.lastIndexOf(albums[albums.length-1])
        setAlbum(albums[albumPos]);
    }
    else {
        albumPos--;
        setAlbum(albums[albumPos]);
    }
}
next.addEventListener('click', nextAlbum);
prev.addEventListener('click', prevAlbum);
