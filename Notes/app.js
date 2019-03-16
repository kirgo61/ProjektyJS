  //notepocket, możliwość edytowania tylko ostatnio dodanej notatki
{
    var i = 0; //id notatek
    
    
    document.querySelector('#not').addEventListener('submit',(e)=>{
        e.preventDefault();
        let title = document.querySelector(`input[name="title"]`).value
        let text = document.querySelector(`input[name="text"]`).value
        //aktualna data
        let date = new Date();
        let dateText = date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear() + ' godz.: ' + date.getHours() + ':' + date.getMinutes();
        function addNote(note){
            document.querySelector('#sendedNotes').innerHTML += '<div id="n'+i+'">'+'Title: '+note.title+ '<br/>' +'Text: ' + note.text +'<br/>'+ 'Date: ' +dateText +'<br/>'+'<select id="color'+i+'"><option value = "green">Green</option><option value = "blue">Blue</option><option value = "red">Red</option></select>'+'<button class="x'+i+'">Remove</button>' +'</div>';
            var wid = document.querySelector('#n'+i);
            // style notatek
            wid.style.borderRadius = "10px";
            wid.style.fontSize = "40px";
            wid.style.marginBottom = "10px";
            wid.style.background = "green";
            ++i;
            //zmiana koloru
            document.getElementById('color'+(i-1)).addEventListener('change', changeColor);
            function changeColor(){
                var color = document.getElementById('color'+(i-1)).value;
                wid.style.background = color;
                
            }
            //usunięcie notatki
            document.querySelector('.x'+(i-1)).addEventListener('click', function(){
                document.querySelector('#n'+(i-1)).outerHTML = "";
            });
            
            
        }
        //sprawdzenie czy jest tekst w tytule jak i w treści
        if(title.length&&text.length){
            let noteObj = {
                title:title,
                text:text,
            };
            //dodanie notatki do localstorage
            localStorage.setItem('Notatka'+[i], JSON.stringify(noteObj));
            //dodanie notatki
            addNote(noteObj);
        }
    });
    }
    
    