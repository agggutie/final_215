var MODEL = (function () {

var homeContent = ` <div class="site-container">
    
<div class="backImg">
    <div class="imgText">
        <h1>Header goes here</h1>
        <h2>Less important text goes here</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Fugiat aliquid minus nemo sed est.</p>
        <button>Read More</button>
    </div>
</div>

<div class="quote">
    <p>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo”
    </p>
    <div class="author">
        <h1>John Smith</h1>
        <h2>Corporate CEO, books author.</h2>
    </div>
</div>

<div class="upcoming">
    <h1>UPCOMING EVENTS:</h1>
    <div class="row">
        <div class="event">
            <div class="left">
                <div class="date">
                    <h3>06</h3>
                    <h4>JUN</h4>
                </div>
            </div>
            <div class="right">
                <h2>Sed et persipiatis unde omnis iste natus
                </h2>
                <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit placeat explicabo recusandae soluta
                </h3>
            </div>
        </div>
        <div class="event">
            <div class="left">
                <div class="date">
                    <h3>06</h3>
                    <h4>JUN</h4>
                </div>
            </div>
            <div class="right">
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </h2>
                <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit placeat explicabo recusandae soluta
                </h3>
            </div>
        </div>
        <div class="event">
            <div class="left">
                <div class="date">
                    <h3>06</h3>
                    <h4>JUN</h4>
                </div>
            </div>
            <div class="right">
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </h2>
                <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit placeat explicabo recusandae soluta
                </h3>
            </div>
        </div>
        <div class="event">
            <div class="left">
                <div class="date">
                    <h3>06</h3>
                    <h4>JUN</h4>
                </div>
            </div>
            <div class="right">
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </h2>
                <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit placeat explicabo recusandae soluta
                </h3>
            </div>
        </div>
        <div class="event">
            <div class="left">
                <div class="date">
                    <h3>06</h3>
                    <h4>JUN</h4>
                </div>
            </div>
            <div class="right">
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </h2>
                <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit placeat explicabo recusandae soluta
                </h3>
            </div>
        </div>
        
    </div>
</div>
</div>`

var aboutContent = `<div class="about-container">
   <div class="aboutHolder">
   <img src="images/historyHero.png" alt="">
   </div>
   <div class="history">
       <p>OUR HISTORY:</p>
   </div>
<div class="aboutText">
   <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>`

var galleryContent = ` <div class="gallery-container">
        
<div class="galleryHeader">
    <p>GALLERY:</p>
</div>

<div class="rowOne">
    <img src="images/galleryOne.png" alt="">
    <img src="images/galleryTwo.png" alt="">
    <img src="images/galleryThree.png" alt="">
</div>
<div class="rowTwo">
    <img src="images/galleryFour.png" alt="">
    <img class="five" src="images/torontoGallery.png" alt="">
</div>
</div>`

var blogContent = ` <div class="blog-container">

<div class="blogH2">
    <p>BLOG:</p>
</div>

<div class="blogHeader">
    <div class="row">
        <div class="blogEvent">
            <div class="left">
                <div class="date">
                    <p class="one">06</p>
                    <p class="two">JUN</p>
                </div>
            </div>
            <div class="right">
                <img src="images/blogPage.png" alt="">
                <p class="black">Sed et persipiatis unde omnis iste natus</p>
                <p class="red">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            </div>

        </div>
        <div class="blogEvent">
            <div class="left">
                <div class="date">
                    <p class="one">30</p>
                    <p class="two">JUL</p>
                </div>
            </div>
            <div class="right">
                <img src="images/blogPage.png" alt="">
                <p class="black">Sed et persipiatis unde omnis iste natus</p>
                <p class="red">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            </div>

        </div>
    </div>
    <div class="row">
        <div class="blogEvent">
            <div class="left">
                <div class="date">
                    <p class="one">30</p>
                    <p class="two">AUG</p>
                </div>
            </div>
            <div class="right">
                <img src="images/blogPage.png" alt="">
                <p class="black">Sed et persipiatis unde omnis iste natus</p>
                <p class="red">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            </div>

        </div>
        <div class="blogEvent">
            <div class="left">
                <div class="date">
                    <p class="one">23</p>
                    <p class="two">NOV</p>
                </div>
            </div>
            <div class="right">
                <img src="images/blogPage.png" alt="">
                <p class="black">Sed et persipiatis unde omnis iste natus</p>
                <p class="red">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            </div>

        </div>
    </div>
    <div class="row">
        <div class="blogEvent">
            <div class="left">
                <div class="date">
                    <p class="one">23</p>
                    <p class="two">DEC</p>
                </div>
            </div>
            <div class="right">
                <img src="images/blogPage.png" alt="">
                <p class="black">Sed et persipiatis unde omnis iste natus</p>
                <p class="red">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            </div>

        </div>
    </div>


</div>
</div>`

var _changePageContent = function (pageName) {

    let contentName = pageName + "Content";
    $("#app").html(eval(contentName));

};

// Makes the results accesible in app.js
return {

    // makes it seen as updateView
    changePageContent: _changePageContent,

};
})();