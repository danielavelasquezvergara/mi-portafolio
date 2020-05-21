$(funtion(){
    $("a").click(funtion(event){
        if(this.hash !==""){
            event.preventDefault();

            var gato = this.hash;
            $("html, body").animate({
                scrollTop: $(gato).offset().top
            },800, funtion(){
                window.location.hash = gato
            });
        }
    });
    $('[data-togle="popover"]').popover();

    $('[data-toggle="tooltip"]').tooltip()
});
