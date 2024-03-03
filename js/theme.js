;(function($){
    "use strict"

	/*----------------------------------------------------*/
    /*  Parallax Effect js
    /*----------------------------------------------------*/
	function parallaxEffect() {
    	$('.bg-parallax').parallax();
	}
	parallaxEffect();

	/*----------------------------------------------------*/
    /*  Isotope Fillter js
    /*----------------------------------------------------*/
	function gallery_isotope(){
        if ( $('.gallery_f_inner').length ){
       
			$(".gallery_f_inner").imagesLoaded( function() {
                $(".gallery_f_inner").isotope({
                    layoutMode: 'fitRows',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                }); 
            });
			
       
            $(".gallery_filter li").on('click',function(){
                $(".gallery_filter li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".gallery_f_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    }
    gallery_isotope();
	

})(jQuery)

let project_descriptions = {
    "job-portal": `Created a Job Portal using MERN stack with features to register as applicant/recruiter and apply/create jobs respectively. The aplication also allows required updation/deletion of jobs and applications as and when required.`,
    "turing": `Produced an e-magazine in a team of 10 with articles along with categories, tags, authors etc. and filters for the same.<br><br>The website is planned to host all the projects made by the UG 2k19 batch as a part of Algorithm Analysis and Design course.`,
    "discord": `Developed a discord bot to manage transactions by 20 organizers for 71 participants for a college event <br><br>The bot was created using Discord.py and connected to sqlite for data storage, hosted and used in the event server with options to view the scoreboard, change scores, view history etc.`,
    "dbms": ` Collaborated on a command line applications to be used to perform CRUD operations on a database of a publication company <br><br>The CLI had functionalities like creating new articles and issues, change their details like author, editor, retrieve results after applying filters, analyze the change in subscribers, check sponsor and contributer details etc.`,
    "ubuntu": `Created a desktop app for WhatsApp to be used in linux distros using the chromium command line application and ubuntu .desktop configurations`,
    "wa": ` Building a flask app as a way to summarize WhatsApp chats in a visual way <br><br>The application uses pandas to retrieve dataframes from the WhatsApp chats, regex to clean data and the wordcloud library for visualisation`,
    "heibi": `Making a cross platform flutter app linked with Firebase for data storage and easy access, as a part of a team of 7 <br><br>The app aims to make day to day functions for college student easier with features like managing laundry, getting food from food courts, using amenities like TT, badminton courts etc.`,
    "joystick": `Created a river crossing game as a part of Intro to Software Systems course in Python, and using the PyGame library <br><br>This is a two-player game, with increasing difficulty as the game progresses. The aim is to dodge the moving and fixed obstacles and reach the other end.`,
    "japan": `Created a website initially aimed to help in my journey of learning the 46 alphabets of the hiragana script of the Japanese language<br><br>Displays random hiragana alphabets with blanks to enter the pronounciation, giving options to hear it and display the score in the end`,
    "todo": `Designed a ToDo List App in Java connected to a MySQL database for data storage<br><br>The features include creation of new tasks, modification of the old taks, along with an option to delete them`,
    "filter": `Designed a cutoff filter to help choosing colleges during JoSAA counselling 2019 based on different filters like opening ranks, closing ranks, categories etc.`
}


function henlo(txt, img){
    Swal.fire({
            html: txt,
            showCloseButton: true,
            showConfirmButton: false,
            focusConfirm: false,
            imageUrl: img
        }
    )
}

function generateHtml(title, tech, img, gh = "#", lnk = "#"){
    let final = ""
    let gh_shiz = ""
    let lnk_shiz = ""
    let social_shiz = ""

    if(gh != "#"){
        gh_shiz = `<a href="` + gh + `"><i class="fa fa-github fa-2x"></i></a>`
    }
    if(lnk != "#"){
        lnk_shiz = `<a href="` + lnk + `"><i class="fa fa-link fa-2x"></i></a>`
    }

    if(lnk_shiz != "" || gh_shiz != ""){
        social_shiz = `<div class="social_icon">
        ` + gh_shiz + `
        ` + lnk_shiz + `
        </div>`;
    }

    final = `
            <div class="blog_right_sidebar">
                <aside class="single_sidebar_widget author_widget">
                    <!--<img class="author_img rounded-circle popup-img" src="img/gallery/` + img + `.png" alt="">-->
                    <h4>` + title + `</h4>
                    <p>` + tech + `</p>
                    ` + social_shiz + `
                    <p>` + project_descriptions[img] + `</p>
                    <div class="br"></div>
                </aside>
            </div>`

    img = "img/gallery/" + img + ".png"


    henlo(final, img)
}
