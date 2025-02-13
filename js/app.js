document.addEventListener("DOMContentLoaded", function(){
    //Efecto de desenfoque al hacer scroll
    
    
    const container= document.querySelector(".relevant");
    const content= document.querySelector(".content");
    const background= document.querySelector(".background");
    
    let routes= {
        'home': '',
        'about': 'acerca-de',
        'products': 'productos',
        'login': 'iniciar-sesion',
        'register': 'registrarse',
    }
    let routesInverse= {
        '/': 'home',
        '/acerca-de': 'about',
        '/productos': 'products',
        '/iniciar-sesion': 'login',
        '/registrarse': 'register',
    }
    
    window.previousSection= document.querySelector("#about.relevant-content");
    
    content.addEventListener("scroll", ()=> {
        console.log("scrolling")
        const scrollTop= content.scrollTop;
        background.style.filter= `blur(${scrollTop / 65}px)`;
        updateFigure()
        if(content.scrollTop > 230){
            if(document.querySelector(".link.active")?.id=="home-link"){
                document.querySelector(".link.active").classList.remove("active");
                document.querySelector(`.link#${previousSection.id}-link`).classList.add("active");
                document.querySelector(".relevant-content.active")?.classList.remove("active");
                previousSection.classList.add("active");
                history.pushState({page: 1}, "", `/${routes[previousSection.id]}`);
            }
        }else{
            previousSection= document.querySelector(".relevant-content.active")?? previousSection;
            previousSection.classList.remove("active");
            document.querySelector(".link.active")?.classList.remove("active");
            document.querySelector(".link#home-link").classList.add("active");
            history.pushState({page: 1}, "", `/${routes["home"]}`);
        }
    });
    


    //Links de navegación
    const links= document.querySelectorAll(".link");
    links.forEach(link=> {
        link.addEventListener("click", function(ev){
            ev.preventDefault();
            const section= document.querySelector(`#${this.id.replace("-link", "")}`);
            autoScrollHeaderTop()
            document.querySelector(".relevant-content.active")?.classList.remove("active");
            document.querySelector(".link.active").classList.remove("active");
            this.classList.add("active")
            section?.classList.add("active");
            if(section)section.scrollTop= 0
            history.pushState({page: 1}, "", `/${routes[this.id.replace("-link", "")]}`);
            if(this.id=="home-link"){
                autoScrollHeaderBottom()
                
            }else{
                previousSection= section?? previousSection;
            }  
        });  
    });
    if(!(window.location.pathname== "/" || window.location.pathname== "" || window.location.pathname== "/index.html")){
        let section= window.location.pathname.replace(".html", "");
        document.querySelector(`.link#${routesInverse[section]}-link`).click();
    }
    //Auto scroll del contenido para mayor visibilidad
    function autoScrollHeaderTop(){
        container.querySelector("nav").scrollIntoView({ "behavior": "smooth", inline: "center", block: "start" }) 
    }
    function autoScrollHeaderBottom(mode){
        if(typeof mode != "undefined"){
            if(mode == "abrupt"){
                container.querySelector("nav").scrollIntoView({ "behavior": "auto", inline: "center", block: "end" })
                return
            }
        }
        container.querySelector("nav").scrollIntoView({ "behavior": "smooth", inline: "center", block: "end" }) 
    }
    
    if(["/", ""].includes(window.location.pathname))autoScrollHeaderBottom("abrupt")
    
    document.querySelector(".relevant-content").addEventListener("scroll", function(){
        autoScrollHeaderTop()
    }) 

landingPages = {
    about:
        `<section class="bottom">
    <figure>
        <img
        src="resources/TRIVIUM_recortado.png"
        alt="Tres cervezas artesanales Trivium" />
    </figure>
    <article class="relevant">
        <nav>
        <div><a data-title="Iniciar Sesión" data-link="login" href>Iniciar
            Sesión</a><a data-title="Productos" data-link="products"
            href>Ver Productos</a></div>
        <div><a data-title="Acerca De" data-link="about" class="active"
            href>Acerca De</a><a data-title="Registrarse"
            data-link="register" href>Registrarse</a></div>
        </nav>
        <section class="login relevant-content">
        <form action>
            <label for="username">
            <i class="fa-solid fa-user"></i>
            <input type="text" name="username">
            </label>
            <label for="password">
            <i class="fa-solid fa-key"></i>
            <input type="password" name="password">
            </label>
            <button type="submit" class="fa-solid fa-arrow-right-to-bracket"></button>
        </form>
        <figure>
            <img src="resources/TRIVIUM-Texto-Sin Fondo.png" alt="">
        </figure>
        </section>
        <section class="about relevant-content active">
        <div class="paragraph">
            <img src="resources/TRIVIUM-36.jpg" alt>
            <p>
            Así fue como nació Trivium, nuestro emprendimiento de cerveza
            artesanal. Desde hace años, los tres compartimos una pasión
            profunda por la buena cerveza. Nos encantaba explorar diferentes
            estilos y probar cervezas artesanales de todo el mundo,
            maravillándonos con la variedad de sabores, aromas y la calidad
            que estas ofrecían, gracias a sus técnicas tradicionales y
            cuidado
            artesanal.
            <br>
            <br>
            En 2022, decidimos que era momento de llevar nuestra pasión un
            paso más allá. Nos inscribimos en un curso intensivo de cerveza
            artesanal, donde aprendimos desde los fundamentos básicos hasta
            técnicas avanzadas de elaboración. Durante semanas, nos
            sumergimos en el proceso detallado de malteado, maceración,
            hervido, fermentación y embotellado. Aprendimos sobre la
            importancia de los ingredientes de calidad, las levaduras
            adecuadas
            para cada estilo y cómo controlar parámetros clave como la
            temperatura y el pH para obtener resultados consistentes y
            deliciosos.
            </p>
        </div>
        <div class="paragraph">
            <p>
            Así fue como nació XXXX, nuestro emprendimiento de cerveza
            artesanal. Desde hace años, los tres compartimos una pasión
            profunda por la buena cerveza. Nos encantaba explorar diferentes
            estilos y probar cervezas artesanales de todo el mundo,
            maravillándonos con la variedad de sabores, aromas y la calidad
            que estas ofrecían, gracias a sus técnicas tradicionales y
            cuidado
            artesanal.
            <br>
            <br>
            En 2022, decidimos que era momento de llevar nuestra pasión un
            paso más allá. Nos inscribimos en un curso intensivo de cerveza
            artesanal, donde aprendimos desde los fundamentos básicos hasta
            técnicas avanzadas de elaboración. Durante semanas, nos
            sumergimos en el proceso detallado de malteado, maceración,
            hervido, fermentación y embotellado. Aprendimos sobre la
            importancia de los ingredientes de calidad, las levaduras
            adecuadas
            para cada estilo y cómo controlar parámetros clave como la
            temperatura y el pH para obtener resultados consistentes y
            deliciosos.
            </p>
            <img src="resources/TRIVIUM-36.jpg" alt>
        </div>
        <div class="paragraph vertical">
            <img src="resources/TRIVIUM-38.jpg" alt>
            <p>
            Así fue como nació XXXX, nuestro emprendimiento de cerveza
            artesanal. Desde hace años, los tres compartimos una pasión
            profunda por la buena cerveza. Nos encantaba explorar diferentes
            estilos y probar cervezas artesanales de todo el mundo,
            maravillándonos con la variedad de sabores, aromas y la calidad
            que estas ofrecían, gracias a sus técnicas tradicionales y
            cuidado
            artesanal.
            <br>
            <br>
            En 2022, decidimos que era momento de llevar nuestra pasión un
            paso más allá. Nos inscribimos en un curso intensivo de cerveza
            artesanal, donde aprendimos desde los fundamentos básicos hasta
            técnicas avanzadas de elaboración. Durante semanas, nos
            sumergimos en el proceso detallado de malteado, maceración,
            hervido, fermentación y embotellado. Aprendimos sobre la
            importancia de los ingredientes de calidad, las levaduras
            adecuadas
            para cada estilo y cómo controlar parámetros clave como la
            temperatura y el pH para obtener resultados consistentes y
            deliciosos.
            </p>
        </div>
        </section>
        <section id="register" class="relevant-content">
            <form>
            <label for="fullname">
                <i class="fa-solid fa-id-card"></i>
                <input type="text" name="fullname"
                placeholder="Nombres y apellidos">
            </label>
            <label for="username">
                <i class="fa-solid fa-user"></i>
                <input type="text" name="username"
                placeholder="Crea un nombre de usuario">
            </label>
            <label for="phone">
                <i class="fa-solid fa-mobile-screen-button"></i>
                <input type="text" name="phone"
                placeholder="Número de celular">
            </label>
            <label for="email">
                <i class="fa-solid fa-envelope"></i>
                <input type="email" name="email"
                placeholder="Correo electrónico">
            </label>
            <label for="emailconfirmation">
                <i class="fa-solid fa-envelope"></i>
                <input type="email" name="emailconfirmation"
                placeholder="Confirma el correo electrónico">
            </label>
            <label for="password">
                <i class="fa-solid fa-key"></i>
                <input type="password" name="password"
                placeholder="Crea una contraseña">
            </label>
            <label for="passwordconfirmation">
                <i class="fa-solid fa-key"></i>
                <input type="password" name="passwordconfirmation"
                placeholder="Confirma la contraseña">
            </label>
            <button type="submit"
                class="fa-solid fa-user-plus"></button>
            </form>
            <figure>
            <img src="resources/TRIVIUM-Texto-Sin Fondo.png" alt>
            </figure>
        </section>
    </article>
</section>`
}


function updateFigure() {
    let e = document.querySelector(".content")
    if (e.scrollTopMax - e.scrollTop < 75) {

        document.querySelector(".bottom").style.paddingTop = `${e.scrollTopMax - e.scrollTop}px`
        document.querySelector(".content figure img").style.width = `${85 + e.scrollTopMax - e.scrollTop}px`
        if (e.scrollTopMax - e.scrollTop < 5) {
            document.querySelector(".content figure").style.paddingTop = `${5 - (e.scrollTopMax - e.scrollTop)}px`
        } else {
            document.querySelector(".content figure").style.paddingTop = `0px`

        }

    } else {
        document.querySelector(".bottom").style.paddingTop = "75px"
        document.querySelector(".content figure img").style.width = "160px"
    }
}

window.addEventListener("resize", updateFigure)
const productDetailClose = document.querySelector(".product-detail .close")
const products = document.querySelector("#products")
const productCards = document.querySelectorAll(".product")

productDetailClose.addEventListener("click", () => {
    products.classList.remove("details")
})
productCards.forEach((card) => {
    card.addEventListener("click", () => {
        products.classList.add("details")
    })
})

const nextImage = document.querySelector(".next-image")
const slideshowContainer = document.querySelector(".slideshow-container")
const slideshowImages = slideshowContainer.querySelectorAll(".slideshow img");
const controls = document.querySelector(".controls");
const slideshowThumbnailImages = controls.querySelectorAll("img");
const slideshowThumbnailsFiltered = Array.from(slideshowThumbnailImages);
    nextImage.addEventListener("mouseup", function () {
    index = slideshowContainer.getAttribute("data-index")
    index++
    if (index > slideshowImages.length - 1) {
        index = 0
    }
    slideshowContainer.setAttribute("data-index", index)
    slideshowImages[index].scrollIntoView({ "behavior": "smooth", inline: "center" })
    controls.querySelector(".active").classList.remove("active")
    slideshowThumbnailImages[index].classList.add("active")
    slideshowThumbnailImages[index].scrollIntoView({ "behavior": "smooth", inline: "center" })

    clearTimeout(intervalThumbnails)
    controls.classList.add("visible")
    scrollRightControls.classList.add("visible")
    scrollLeftControls.classList.add("visible")
    intervalThumbnails= setTimeout(function(){
        controls.classList.remove("visible")
        scrollRightControls.classList.remove("visible")
        scrollLeftControls.classList.remove("visible")
    }, 523)
})
const prevImage = document.querySelector(".prev-image")
prevImage.addEventListener("mouseup", function () {
    index = slideshowContainer.getAttribute("data-index")
    index--
    if (index < 0) {
        index = slideshowImages.length - 1
    }
    slideshowContainer.setAttribute("data-index", index)
    slideshowImages[index].scrollIntoView({ "behavior": "smooth", inline: "center" })
    controls.querySelector(".active").classList.remove("active")
    slideshowThumbnailImages[index].classList.add("active")
    slideshowThumbnailImages[index].scrollIntoView({ "behavior": "smooth", inline: "center" })

    clearTimeout(intervalThumbnails)
    controls.classList.add("visible")
    scrollRightControls.classList.add("visible")
    scrollLeftControls.classList.add("visible")
    intervalThumbnails= setTimeout(function(){
        controls.classList.remove("visible")
        scrollRightControls.classList.remove("visible")
        scrollLeftControls.classList.remove("visible")
    }, 523)
})

slideshowThumbnailImages.forEach(im=>{
    im.addEventListener("click", function(ev){
        let index= Array.prototype.indexOf.call(ev.target.parentNode.children, ev.target);
        slideshowContainer.setAttribute("data-index", index)
        slideshowImages[index].scrollIntoView({ "behavior": "smooth", inline: "center" })
        controls.querySelector(".active").classList.remove("active")
        slideshowThumbnailImages[index].classList.add("active")
        slideshowThumbnailImages[index].scrollIntoView({ "behavior": "smooth", inline: "center"})

        clearTimeout(intervalThumbnails)
        controls.classList.add("visible")
        scrollRightControls.classList.add("visible")
        scrollLeftControls.classList.add("visible")
        intervalThumbnails= setTimeout(function(){
            controls.classList.remove("visible")
            scrollRightControls.classList.remove("visible")
            scrollLeftControls.classList.remove("visible")
        }, 984)
    })
})
const scrollRightControls= document.querySelector(".scroll-right-controls")
const scrollLeftControls= document.querySelector(".scroll-left-controls")
let intervalScroll= null;
let intervalThumbnails= null
scrollLeftControls.addEventListener("mouseenter", function () {
    clearInterval(intervalScroll)
    intervalScroll= setInterval(function(){
        controls.scrollLeft-= 1
        clearTimeout(intervalThumbnails)
        controls.classList.add("visible")
        scrollRightControls.classList.add("visible")
        scrollLeftControls.classList.add("visible")
        intervalThumbnails= setTimeout(function(){
            controls.classList.remove("visible")
            scrollRightControls.classList.remove("visible")
            scrollLeftControls.classList.remove("visible")
        }, 984)
    }, 2)
})
scrollRightControls.addEventListener("mouseenter", function () {
    clearInterval(intervalScroll)
    intervalScroll= setInterval(function(){
        controls.scrollLeft+= 1
        clearTimeout(intervalThumbnails)
        controls.classList.add("visible")
        scrollRightControls.classList.add("visible")
        scrollLeftControls.classList.add("visible")
        intervalThumbnails= setTimeout(function(){
            controls.classList.remove("visible")
            scrollRightControls.classList.remove("visible")
            scrollLeftControls.classList.remove("visible")
        }, 984)
    }, 2)
})
scrollLeftControls.addEventListener("mouseleave", function () {
    clearInterval(intervalScroll)
})
scrollRightControls.addEventListener("mouseleave", function () {
    clearInterval(intervalScroll)
})
slideshowContainer.addEventListener("mousemove", function(){
    clearTimeout(intervalThumbnails)
    controls.classList.add("visible")
    scrollRightControls.classList.add("visible")
    scrollLeftControls.classList.add("visible")
    intervalThumbnails= setTimeout(function(){
        controls.classList.remove("visible")
        scrollRightControls.classList.remove("visible")
        scrollLeftControls.classList.remove("visible")
    }, 984)
})



})