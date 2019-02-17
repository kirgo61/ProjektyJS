
            var notesList = null;
            var notesForm = null;
            var notesSearch = null;
            var i = 1;
            function addTask(text) {
                localStorage.setItem('Note' + [i],text);
                i++;
                //element note
                var notes = document.createElement('div');
                notes.classList.add('notesEl');
                //belka gorna
                var notesBar = document.createElement('div');
                notesBar.classList.add('notesElBar');
                var notesDate = document.createElement('div');
                notesDate.classList.add('notesElBar');
                var date = new Date();
                var dateText = date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear() + ' godz.: ' + date.getHours() + ':' + date.getMinutes();
                notesDate.innerText = dateText;
                //przycisk usuwania
                var notesDelete = document.createElement('button');
                notesDelete.classList.add('notesElDelete');
                notesDelete.classList.add('button');
                notesDelete.innerHTML = '<i class="fas fa-times-circle"></i>';
                //wrzucamy elementy do belki
                notesBar.appendChild(notesDate);
                notesBar.appendChild(notesDelete);
                //element z tekstem
                var notesText = document.createElement('div');
                notesText.classList.add('notesElText');
                notesText.innerText = text;
                //laczymy calosc
                notes.appendChild(notesBar);
                notes.appendChild(notesText);
                //i wrzucamy do listy
                notesList.append(notes);
            }
            document.addEventListener('DOMContentLoaded', function() {
                notesList = document.querySelector('#notesLists');
                notesForm = document.querySelector('#notesInput');
                notesSearch = document.querySelector('#notesSearch');
                notesForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    var textarea = this.querySelector('textarea');
                    if (textarea.value !== '') {
                        addTask(textarea.value);
                        textarea.value = '';
                    }
                });
                notesSearch.addEventListener('input', function() {
                    var val = this.value;
                    var elems = notesList.querySelectorAll('.notesEl');
                    [].forEach.call(elems, function(el) {
                        var text = el.querySelector('.notesElText').innerText;
                        if (text.indexOf(val) !== -1) {
                            //znaleziono text, pokaz
                            el.style.setProperty('display', '');
                        } else {
                            el.style.setProperty('display', 'none');
                        }
                    });
                });
                notesList.addEventListener('click', function(e) {
                    if (e.target.closest('.notesElDelete') !== null) {
                        e.target.closest('.notesEl').remove();
                    }
                });
            });
        