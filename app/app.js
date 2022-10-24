function initListeners() { 
        $("nav .navRight a ").click(function (e){
            let btnId = e.currentTarget.id;
            MODEL.changePageContent(btnId);
        });
}




// Code runs when HTML is ready 
$(document).ready(function () {
    initListeners();
    MODEL.changePageContent("home");
});

