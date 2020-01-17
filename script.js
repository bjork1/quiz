var startTest = document.getElementById("btn-start");
var timeLeft = document.getElementById("time-remaining");
//var initialContent = $('#box').html();
//var initialButton = $('btn-start').html();

let intervalID;
let count = 50;
let score = 0;



//var heyThere = $(startTest).click(function();


/*
document.getElementById("btn-start").addEventListener("click", function(){
    document.getElementById("time-remaining").innerHTML = "Hello World";
  });
  */


//startTest.addEventListener("click", function () {


    $( '#highs' ).click(function() {
        
        var hello = localStorage.getItem("email");
        var names = localStorage.getItem("update");
        console.log(hello);
        $('#box').html('<p>High Scores</p>\
        <p id = "hs"></p>'+ names + " " + hello);

        



     


});

      //var high = localStorage.getItem('high-score');

      //alert(high);
      
      //var send = $("#something").localStorage.prepend("<br><hr>" + high);
  
    
    
    $(startTest).click(function() {

        console.log("Hey!");



        //console.log(hi);


        intervalID = setInterval(function () {
            count -= 1;
            timeLeft.textContent = count;

            if (count <= 0) {
               
                clearInterval(intervalID);
                $('#box').html('<p>Out of time!</p>\
            <p>Your score is </p>' + score + '<form id = "fail"></form>');
                $('#fail').append('<input type="submit" value="Try Again">');



                    

            };
    
    
    
        }, 1000);

        

       document.getElementById("box").innerHTML = 
       '<p>What is the capital of Minnesota?</p>\
        <button id = "Minneapolis" type="button" class="btn btn-warning">Minneapolis</button>\
        <button id = "Duluth" type="button" class="btn btn-warning">Duluth</button>\
        <button id = "Rochester" type="button" class="btn btn-warning">Rochester</button>\
        <button id = "stPaul" type="button" class="btn btn-warning">St. Paul</button>';

        document.body.style.backgroundImage = "url('https://bringmethenews.com/.image/t_share/MTU0MDQ2MDMwNzkxNjQ5MDE5/minnesota-lake-itasca-state-park-near-dusk-view-of-the-mississippis-source.jpg')";

/*

        $('#box').html('<p>What is the capital of Minnesota?</p>\
        <button id = "Minneapolis" type="button" class="btn btn-warning">Minneapolis</button>\
        <button id = "Duluth" type="button" class="btn btn-warning">Duluth</button>\
        <button id = "Rochester" type="button" class="btn btn-warning">Rochester</button>\
        <button id = "stPaul" type="button" class="btn btn-warning">St. Paul</button>');
        $(document.body).css("background-image", "url('https://bringmethenews.com/.image/t_share/MTU0MDQ2MDMwNzkxNjQ5MDE5/minnesota-lake-itasca-state-park-near-dusk-view-of-the-mississippis-source.jpg')");

*/
    

        jQuery(':button').click(function () {
            if (this.id == 'stPaul') {
                console.log('Correct!');
                score += 10;
                console.log(score);
               
            }
            else if (this.id == 'Duluth' | this.id == 'Rochester' | this.id == 'Minneapolis') {
                console.log('Wrong!');
                count -= 15;
            }
      
        document.getElementById("box").innerHTML =
        '<p>What is the capital of Illinois?</p>\
        <button id = "springfield" type="button" class="btn btn-warning">Springfield</button>\
        <button id = "champaign" type="button" class="btn btn-warning">Champaign</button>\
        <button id = "chicago" type="button" class="btn btn-warning">Chicago</button>\
        <button id = "rockfort" type="button" class="btn btn-warning">Rockfort</button>';



        document.body.style.backgroundImage =  "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDBWh-aNuW7u78YvGNWH-84UZ1C8i1yXcjyQgz2wqWh_BybSBX')";


        /*
            
        $('#box').html('<p>What is the capital of Illinois?</p>\
        <button id = "springfield" type="button" class="btn btn-warning">Springfield</button>\
        <button id = "champaign" type="button" class="btn btn-warning">Champaign</button>\
        <button id = "chicago" type="button" class="btn btn-warning">Chicago</button>\
        <button id = "rockfort" type="button" class="btn btn-warning">Rockfort</button>');

        $(document.body).css("background-image", "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDBWh-aNuW7u78YvGNWH-84UZ1C8i1yXcjyQgz2wqWh_BybSBX')");
        


        */


        jQuery(':button').click(function () {
            if (this.id == 'springfield') {
                console.log('Correct!');
                score += 10;
                console.log(score);
            }
            else if (this.id == 'champaign' | this.id == 'chicago' | this.id == 'rockfort') {
                count -= 15;
            }


            document.getElementById("box").innerHTML =
            '<p>What is the capital of New Yorks?</p>\
            <button id = "newYork" type="button" class="btn btn-warning">New York</button>\
            <button id = "brooklyn" type="button" class="btn btn-warning">Brooklyn</button>\
            <button id = "manhattan" type="button" class="btn btn-warning">Manhattan</button>\
            <button id = "rochester" type="button" class="btn btn-warning">Rochester</button>';


            document.body.style.backgroundImage = "url('https://www.telegraph.co.uk/content/dam/Travel/Destinations/North%20America/USA/New%20York/Attractions/statue-of-liberty-new-york-p.jpg?imwidth=450')";


            /*


            $('#box').html('<p>What is the capital of New Yorks?</p>\
            <button id = "newYork" type="button" class="btn btn-warning">New York</button>\
            <button id = "brooklyn" type="button" class="btn btn-warning">Brooklyn</button>\
            <button id = "manhattan" type="button" class="btn btn-warning">Manhattan</button>\
            <button id = "rochester" type="button" class="btn btn-warning">Rochester</button>');
    
            
            $(document.body).css("background-image", "url('https://www.telegraph.co.uk/content/dam/Travel/Destinations/North%20America/USA/New%20York/Attractions/statue-of-liberty-new-york-p.jpg?imwidth=450')");

            */
            

            jQuery(':button').click(function () {
                if (this.id == 'newYork') {
                    console.log('Correct!');
                score += 10;
                console.log(score);
                }
                else if (this.id == 'brooklyn' | this.id == 'manhattan' | this.id == 'rochester') {
                    count -= 15;
                }


            document.getElementById("box").innerHTML =

            '<p>What is the capital of California?</p>\
            <button id = "la" type="button" class="btn btn-warning">Los Angeles</button>\
            <button id = "sandiego" type="button" class="btn btn-warning">San Diego</button>\
            <button id = "sanfrancisco" type="button" class="btn btn-warning">San Francisco</button>\
            <button id = "sacramento" type="button" class="btn btn-warning">Sacramento</button>';


            document.body.style.backgroundImage = "url('http://cdn.shopify.com/s/files/1/0012/4695/3536/files/California_1_2048x.jpg?v=1548713962')";

            

            /*
                
            $('#box').html('<p>What is the capital of California?</p>\
            <button id = "la" type="button" class="btn btn-warning">Los Angeles</button>\
            <button id = "sandiego" type="button" class="btn btn-warning">San Diego</button>\
            <button id = "sanfrancisco" type="button" class="btn btn-warning">San Francisco</button>\
            <button id = "sacramento" type="button" class="btn btn-warning">Sacramento</button>');
    
           
            $(document.body).css("background-image", "url('http://cdn.shopify.com/s/files/1/0012/4695/3536/files/California_1_2048x.jpg?v=1548713962')");

            */
           
            jQuery(':button').click(function () {
                if (this.id == 'la') {
                    console.log('Correct!');
                score += 10;
                console.log(score);
                }
                else if (this.id == 'sandiego' | this.id == 'sanfrancisco' | this.id == 'sacramento') {
                    count -= 15;
                }




                document.getElementById("box").innerHTML ='<p>What is the capital of Nebraska?</p>\
                <button id = "grand" type="button" class="btn btn-warning">Grand Island</button>\
                <button id = "lincoln" type="button" class="btn btn-warning">Lincoln</button>\
                <button id = "omaha" type="button" class="btn btn-warning">Omaha</button>\
                <button id = "nc" type="button" class="btn btn-warning">Nebraska City</button>';

                document.body.style.backgroundImage = 
                "url('https://cdn.britannica.com/39/82639-050-2836A494/Nebraska-grasslands.jpg')";


                /*

                $('#box').html('<p>What is the capital of Nebraska?</p>\
                <button id = "grand" type="button" class="btn btn-warning">Grand Island</button>\
                <button id = "lincoln" type="button" class="btn btn-warning">Lincoln</button>\
                <button id = "omaha" type="button" class="btn btn-warning">Omaha</button>\
                <button id = "nc" type="button" class="btn btn-warning">Nebraska City</button>');
        
               
                $(document.body).css("background-image", "url('https://cdn.britannica.com/39/82639-050-2836A494/Nebraska-grasslands.jpg')");

                */
               
                jQuery(':button').click(function () {


                    if (this.id == 'lincoln') {
                        console.log('Correct!');
                    score += 10;
                    console.log(score);
                    }
                    else if (this.id == 'grand' | this.id == 'omaha' | this.id == 'nc') {
                        count -= 15;
                    }
            

              
                clearInterval(intervalID);

                if (count > 40 ) {
                    score += 50;
                }
                else if (count <= 40 && count > 35) {
                    score += 40;
                }
                else if (count <= 35 && count > 30) {
                    score += 30;
                }
                else if (count <= 30 && count > 20) {
                    score += 20;
                }
                else if (count <= 20 && count > 10) {
                    score += 10;
                }


 //Add to Local Storage

/*
                function (){

                    



                }
                
localStorage.setItem('high-score', score);

var high = localStorage.getItem('high-score');
$("#something").localStorage.prepend("<br><hr>" + high);

*/


            
                    $('#box').html('<p>Nice job!</p>\
            <p>Your score is </p>' + score + '<form id = "heyThere"></form>\
            <p>Enter initials here</p><input type="text" id="myText" value="">\
            <button id = "initials" >Submit</button>');
            $('#heyThere').append('<input type="submit" value="Play Again">');



            localStorage.setItem("email", score);
           
            jQuery(':button').click(function () {
                this.id = "initials";
                var variable = document.getElementById("myText").value;
                console.log(variable);
                localStorage.setItem("update", variable);


                /*
    
                if (this.id == 'initials') {
           
            
            console.log(variable);


        };

        */
    });



        
               
         
           
           
            



            
            });


           


            

           // localStorage.setItem(score);
           // var existing = localStorage.getItem('highScore');
            
            /*
            existing = existing ? JSON.parse(existing) : {};

            existing['drink'] = 'soda';

            localStorage.setItem('highScore', JSON.stringify(existing));

                */

            


           
/*
            document.getElementById('all').innerHTML = localStorage.getItem('highScore');


   */        
                

/*

jQuery(':button').click(function () {
            
                $('#box').html('<p>What is the capital of California?</p>\
                <button id = "la">Los Angeles</button>\
                <button id = "sandiego">San Diego</button>\
                <button id = "sanfrancisco">San Francisco</button>\
                <button id = "sacramento">Sacramento</button>');

            }

*/


            });

            });

        });




        });

    });
