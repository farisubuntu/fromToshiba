console.log('starting script.js ');
var article,section,p;
var canvas,cntx;

window.onload=init;

function init(){
console.log('starting init');


// first: the parent element 'article':

article=document.querySelector('article').addEventListener('click',function (evt) {console.log('article clicked');console.log('target: ['+evt.target.type+']');});
// next you can: article.addEventListener(...)
article=document.querySelector('article').addEventListener('mouseleave',function (evt) {console.log('article-mouseleave');console.log('target: ['+evt.target.type+']');});
article=document.querySelector('article').addEventListener('mouseover',function (evt) {console.log('article -  mouseover');console.log('target: ['+evt.target.type+']');});
article=document.querySelector('article').addEventListener('mouseenter',function (evt) {console.log('article - mouseenter');console.log('target: ['+evt.target.type+']');});
article=document.querySelector('article').addEventListener('mouseenter',function (evt) {console.log('article - mouseenter');console.log('target: ['+evt.target.type+']');});

/*
> use an array to dynamically add listeners ??
var eventNames=['mouseleave','mouseout','mouseover','mouseenter','mouseup','mousedown','mouseclick','mousemove'};

*/


section=document.querySelector('section');
p=document.querySelector('p');
//canvas=document.querySelector('#myCanvas');
//cntx=canvas.getContext('2d');


console.log('finish init');
}
