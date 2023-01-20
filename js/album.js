
let albumTitle = document.querySelector('.album__name');
let imgContainer = document.querySelector('.album__container__imgs');
let link = document.querySelector('.to-album-name');
let link1 = document.querySelector('.to-album-img');
let next = document.querySelector('.album__container__right-arrow');
let prev = document.querySelector('.album__container__left-arrow');

let myImg = imgContainer.querySelectorAll('img');

function Album(albumName, albumPage, imgs, alt) {
    this.albumName = albumName,
    this.albumPage = albumPage,
    this.imgs =  imgs,
    this.alt = alt
}

let albumAustralia = new Album('Australie', 'albumAu.html', ['.././Img/galery/carouselle/au1.jpg', '.././Img/galery/carouselle/au2.jpg', '.././Img/galery/carouselle/au3.jpg'], ['photo album australie', 'photo album australie', 'photo album australie']);
let albumNewZeland = new Album('Nouvelle Zelande', 'albumNZ.html', ['.././Img/galery/carouselle/nz1.jpg', '.././Img/galery/carouselle/nz2.jpg', '.././Img/galery/carouselle/nz3.jpg'], ['photo album NZ', 'photo album NZ', 'photo album NZ']);
let albumVan = new Album('Van', 'album-van.html', ['.././Img/galery/carouselle/van1.jpg', '.././Img/galery/carouselle/van2.jpg', '.././Img/galery/carouselle/van3.jpg'], ['photo album Van', 'photo album Van', 'photo album Van']);

let albums = [albumAustralia, albumNewZeland, albumVan];
let albumPos = 0;

function setAlbum(album) {

    setTimeout(() => {
        albumTitle.textContent = album.albumName;

        link.setAttribute('href', album.albumPage);
        link1.setAttribute('href', album.albumPage);

        myImg.forEach(function(elem, index) {
            elem.setAttribute('src', album.imgs[index]);
            elem.setAttribute('alt', album.alt[index]);
        });
    }, 500);
}

function nextAlbum() {

    albumNameAnnimation('0%', '30%', '-30%')
    albumImgAnnimation()        
    if (albumPos == albums.lastIndexOf(albums[albums.length-1])) {
        albumPos = 0;
        setAlbum(albums[albumPos]);
    }
    else {
        albumPos++;    
        setAlbum(albums[albumPos]);
    }
} 

function prevAlbum() {

    albumNameAnnimation('0%', '-30%', '30%')
    albumImgAnnimation()
    if (albumPos == 0) {
        albumPos = albums.lastIndexOf(albums[albums.length-1])
        setAlbum(albums[albumPos]);
    }
    else {
        albumPos--;
        setAlbum(albums[albumPos]);
    }
}


function albumNameAnnimation(origine, fin, debut) {
    albumTitle.animate({
        transform: ['translateX(' + origine + ')','translateX(' + fin + ')','translateX(' + debut + ')' ,'translateX(' + origine + ')'],
        opacity: [1, 0, 0, 1],
        easing: [ 'ease-in', 'ease-out' ],
    }, 1000);
}

function albumImgAnnimation() {
    myImg.forEach(function(elem) {
        elem.animate({
            opacity: [1, 0, 0, 1]
        }, 1000); 
    });
}

next.addEventListener('click', nextAlbum);
prev.addEventListener('click', prevAlbum);

    let footer = document.querySelector('footer');
    let startX = 0;
    let distance = 100;

    footer.addEventListener('touchstart', function(evt) {
        let touches = evt.changedTouches[0];
        startX = touches.pageX;
        //between = 0;
    });

    window.addEventListener('touchmouve', function(evt) {
        evt.preventDefault();
        evt.stopPropagation();
    })

    footer.addEventListener('touchend', function(evt) {
        let touches = evt.changedTouches[0];
        let between = touches.pageX - startX;

        if(between >= 0) {
            var direction = 'leftToRight';
        }
        else {
             direction = 'rightToLeft';
        }

        if(Math.abs(between) >= distance && direction == 'leftToRight') {
            prevAlbum();
        }
        if(Math.abs(between) >= distance && direction == 'rightToLeft') {
            nextAlbum();
        }
    })

