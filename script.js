var startTest = document.getElementById("btn-start");
var timeLeft = document.getElementById("time-remaining");
var initialContent = $('#box').html();
var initialButton = $('btn-start').html();

let intervalID;
let count = 30;
let score = 0;


localStorage.setItem('highScore', score);
var high = localStorage.getItem('highScore');

console.log(high);

$("#hs").prepend("<br><hr>" + high);

//var heyThere = $(startTest).click(function();


/*
document.getElementById("btn-start").addEventListener("click", function(){
    document.getElementById("time-remaining").innerHTML = "Hello World";
  });
  */


//startTest.addEventListener("click", function () {


    $( '#highs' ).click(function() {
        $('#box').html('<p>High Scores</p>\
        <p id = "hs"></p>');
    
      });
    
  
    
    
    $(startTest).click(function() {

        console.log("Hey!");



        //console.log(hi);


        intervalID = setInterval(function () {
            count -= 1;
            timeLeft.textContent = count;

            if (count === 0) {
                alert("Out of time!");
                $('#box').html(initialContent);
                //$('#btn-start').html(initialButton);
                //count = 30;
                //$(startTest).click(function(){} ;
                //everything();
                //hi;



                    

            };
    
    
    
        }, 1000);

        

       

        




        $('#box').html('<p>What is the capital of Minnesota?</p>\
        <button id = "Minneapolis">Minneapolis</button>\
        <button id = "Duluth">Duluth</button>\
        <button id = "Rochester">Rochester</button>\
        <button id = "stPaul">St. Paul</button>');
        $(document.body).css("background-image", "url('https://bringmethenews.com/.image/t_share/MTU0MDQ2MDMwNzkxNjQ5MDE5/minnesota-lake-itasca-state-park-near-dusk-view-of-the-mississippis-source.jpg')");


    

        jQuery(':button').click(function () {
            if (this.id == 'stPaul') {
                console.log('Correct!');
                score += 1;
                console.log(score);
               
            }
            else if (this.id == 'Duluth' | this.id == 'Rochester' | this.id == 'Minneapolis') {
                console.log('Wrong!');
                count -= 15;
            }
      

            
        $('#box').html('<p>What is the capital of Illinois?</p>\
        <button id = "springfield">Springfield</button>\
        <button id = "champaign">Champaign</button>\
        <button id = "chicago">Chicago</button>\
        <button id = "rockfort">Rockfort</button>');

        $(document.body).css("background-image", "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDBWh-aNuW7u78YvGNWH-84UZ1C8i1yXcjyQgz2wqWh_BybSBX')");

        jQuery(':button').click(function () {
            if (this.id == 'springfield') {
                console.log('Correct!');
                score += 1;
                console.log(score);
            }
            else if (this.id == 'champaign' | this.id == 'chicago' | this.id == 'rockfort') {
                alert('Wrong!');
                count -= 15;
            }




            $('#box').html('<p>What is the capital of New Yorks?</p>\
            <button id = "newYork">New York</button>\
            <button id = "brooklyn">Brooklyn</button>\
            <button id = "manhattan">Manhattan</button>\
            <button id = "rochester">Rochester</button>');
    
            jQuery(':button').click(function () {
                if (this.id == 'newYork') {
                    console.log('Correct!');
                score += 1;
                console.log(score);
                }
                else if (this.id == 'brooklyn' | this.id == 'manhattan' | this.id == 'rochester') {
                    alert('Wrong!');
                    count -= 15;
                }





                
            $('#box').html('<p>What is the capital of California?</p>\
            <button id = "la">Los Angeles</button>\
            <button id = "sandiego">San Diego</button>\
            <button id = "sanfrancisco">San Francisco</button>\
            <button id = "sacramento">Sacramento</button>');
    
            jQuery(':button').click(function () {
                if (this.id == 'la') {
                    console.log('Correct!');
                score += 1;
                console.log(score);
                }
                else if (this.id == 'sandiego' | this.id == 'sanfrancisco' | this.id == 'sacramento') {
                    alert('Wrong!');
                    count -= 15;
                }

            


            $('#box').html('<p>Nice job!</p>\
            <p>Your score is "score"</p>' + score + '<form id = "heyThere"></form>');


            $('#heyThere').append('<input type="submit" value="button">');

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
        
