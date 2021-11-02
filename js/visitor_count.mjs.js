"use strict"

import * as md5Alg from "/js/md5.js"

function countVisitor(namespace, key) {
    let xhr = new XMLHttpRequest();
    let permalink_md5 = md5Alg.md5(key);
    let url = `https://api.chenqingze.com/visitor-count/${namespace}/${permalink_md5}`
    xhr.open("PUT", url);
    xhr.responseType = "text/plain";
    xhr.onload = function() {
        visitor_count_view.innerText = this.response;
        container_view.classList.remove("onflight");
        container_view.classList.add("done");
    }
    xhr.send();
}
let container_view = document.getElementById('visitor_count_container');
let visitor_count_view = document.getElementById('visitor_count');
let namespace = visitor_count_view.dataset.namespace;
let key = visitor_count_view.dataset.key;
countVisitor(namespace, key);