$(document).ready(function(){
    $('#output').hide();
    $('#start').click(startGame)
    $('#checkLock').click(openLock);
    var ourSecretNum = '';

    function openLock(){
        var win = 0;
        for(x=0; x < $('input[type="number"]').length; x++){
            var guessNum = $('input[type="number"]').eq(x);
            var result = checkNumber(guessNum.val(),ourSecretNum[x])
            guessNum.css({
                backgroundColor: result.backgrd
            })
            if (result.checker) {
                win++
            }
        }
        if(win === 3){
            $('#start').show();
            $('small').html('You got it <br> ' + ourSecretNum )
        }
    }

    function checkNumber(a,b){
        var response = {};
        if(a < b){
            response.checker = false
            response.backgrd = 'red'
        }
        if(a > b){
            response.checker = false
            response.backgrd = 'blue'
        }
        if(a == b){
            response.checker = true
            response.backgrd = 'green'
        }
        return response 
    }

    function startGame(){
        ourSecretNum = Math.floor(Math.random()*(999-100+1)+100).toString();
        $('#start').hide();
        $('#output').show();
        for(x=0;x<$('input[type="number"]').length;x++){
            $('input[type="number"]').eq(x).val('5');
        }
    }

    $('small').html('Red Background: Too Low <br> Blue Background: Too high');

    $('input[type="number"]').css({
        color:'white',
        fontSize:'3em',
        width:'60px',
        border:'1px solid black',
        backgroundColor:'black'
    })

    $('#start').css({
        backgroundColor:'black',
        color:'white',
        fontSize:'2em',
        width:'60px',
        padding:'15px',
        border:'1px solid black',
    })

    $('.btn').css({
        backgroundColor:'black',
        color:'white',
        width:'160px',
        fontSize:'1.5em',
        padding:'15px',
        margin:'25px auto 0px',
        border:'1px solid black',
        textAlign:'center'
    })
    $('#output').css({
        backgroundColor:'#333',
        width:'300px',
        padding:'15px',
        border:'1px solid black',
        textAlign:'center',
        margin:'auto'
    })

    $('small').css({
        color:'white',
        fontSize:'1.5em',
        padding:'15px',
        marginBottom:'15px',
        display:'block'
    })


})