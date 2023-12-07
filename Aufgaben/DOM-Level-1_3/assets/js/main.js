const gallery = document.querySelector("#gallery");
let link = './assets/img/raoul-droog-yMSecCHsIBc-unsplash.jpg'

gallery.innerHTML = "<figure><img src="+link+" alt='Fig.1' width=80%></figure>"
gallery.innerHTML += "<figcaption>Fig.1</figcaption>"

gallery.innerHTML += "<br><br><figure><img src="+link+" alt='Fig.2' width=80%></figure>"
gallery.innerHTML += "<figcaption>Fig.2</figcaption>"

gallery.innerHTML += "<br><br><figure><img src="+link+" alt='Fig.3' width=80%></figure>"
gallery.innerHTML += "<figcaption>Fig.3</figcaption>"