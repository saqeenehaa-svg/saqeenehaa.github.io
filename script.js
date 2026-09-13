document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';});

const icon = document.querySelector('.icon');
const cake = document.querySelector('.cake');
const song = document.querySelector('.song');
const kata = document.querySelector('.kata');
const container = document.querySelector('.container');
const line = document.querySelector('#line');
const garis = document.querySelector('.garis');
const gallery = document.querySelector('.gallery');

icon.addEventListener('click', function() {
    container.style.display = 'flex'
    container.style.flexDirection = 'column';
    container.style.justifyContent = 'flex-start';
    container.style.alignItems = 'center';
    container.style.height = '100vh';
    container.style.minHeight = '100vh';
    container.style.width = '100%';
    container.style.maxWidth = '400px';
    container.style.margin = '0 auto';
    container.style.padding = '10px 15px 30px 15px';
    container.style.boxSizing = 'border-box';
    container.style.overflow = 'hidden';

    icon.style.display = 'none';
    cake.style.display = 'block'; 
    song.style.display = 'block';
    song.style.width = '280px';
    kata.style.display = 'block';

    kata.style.height = '90px';
    kata.style.width = '100%'
    kata.style.marginBottom = '50px';
    kata.style.marginTop = '200px';

    cake.style.height = '150px';
    cake.style.width = 'auto';
    cake.style.marginBottom = '50px';
    
    document.body.style.backgroundColor = '#F5EEDD';
});


song.addEventListener('play', function() {
    line.style.display = 'block';
    line.style.position = 'absolute';
    line.style.top = '0';
    line.style.left = '0';
    line.style.width = '100%';
    line.style.height = '100px'
    line.style.marginTop = '0px';
    line.style.zIndex = '10';
    
    gallery.style.display = 'inherit';
    gallery.style.zIndex = '9999';
});