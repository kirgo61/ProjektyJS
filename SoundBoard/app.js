{
document.addEventListener('keydown', function(e){
    if(e.keyCode==81){play(0);}
    if(e.keyCode==87){play(1);}
    if(e.keyCode==69){play(2);};
    if(e.keyCode==82){play(3);}
    if(e.keyCode==84){play(4);}
    if(e.keyCode==89){play(5);}
    if(e.keyCode==85){play(6);}
});
function play(e){
    samples[e].play();
}
const samples =  [new Audio("Hits/roblox.wav"),new Audio("Hits/bamboo.wav"),new Audio("Hits/golf.wav"),new Audio("Hits/micro.wav"),new Audio("Hits/spade.wav"), new Audio("Hits/vase1.wav"),
new Audio("Hits/vase2.wav")];
}

{
    navigator.mediaDevices.getUserMedia({audio:true})
	.then(stream => {
		rec1 = new MediaRecorder(stream);
		rec1.ondataavailable = e => {
			audioChunks1.push(e.data);
			if (rec1.state == "inactive"){
        let blob1 = new Blob(audioChunks1,{'type' : 'audio/wav; codecs=opus'});
        recordedAudio1.src = URL.createObjectURL(blob1);
        recordedAudio1.controls=true;
        recordedAudio1.autoplay=true;
        audioDownload1.href = recordedAudio1.src;
        audioDownload1.download = 'Plik Audio1';
        audioDownload1.innerHTML = 'download';
     }
		}
	})
	.catch(e=>console.log(e));
  
startRecord1.onclick = e => {
  startRecord1.disabled = true;
  stopRecord1.disabled=false;
  audioChunks1 = [];
  rec1.start();
}
stopRecord1.onclick = e => {
  startRecord1.disabled = false;
  stopRecord1.disabled=true;
  rec1.stop();
}
navigator.mediaDevices.getUserMedia({audio:true})
	.then(stream => {
		rec2 = new MediaRecorder(stream);
		rec2.ondataavailable = e => {
			audioChunks2.push(e.data);
			if (rec2.state == "inactive"){
        let blob2 = new Blob(audioChunks2,{'type' : 'audio/wav; codecs=opus'});
        recordedAudio2.src = URL.createObjectURL(blob2);
        recordedAudio2.controls=true;
        recordedAudio2.autoplay=true;
        audioDownload2.href = recordedAudio2.src;
        audioDownload2.download = 'Pilk Audio 2';
        audioDownload2.innerHTML = 'download';
     }
		}
	})
	.catch(e=>console.log(e));
  
startRecord2.onclick = e => {
  startRecord2.disabled = true;
  stopRecord2.disabled=false;
  audioChunks2 = [];
  rec2.start();
}
stopRecord2.onclick = e => {
  startRecord2.disabled = false;
  stopRecord2.disabled=true;
  rec2.stop();
}
navigator.mediaDevices.getUserMedia({audio:true})
	.then(stream => {
		rec3 = new MediaRecorder(stream);
		rec3.ondataavailable = e => {
			audioChunks3.push(e.data);
			if (rec3.state == "inactive"){
        let blob3 = new Blob(audioChunks3,{'type' : 'audio/wav; codecs=opus'});
        recordedAudio3.src = URL.createObjectURL(blob3);
        recordedAudio3.controls=true;
        recordedAudio3.autoplay=true;
        audioDownload3.href = recordedAudio3.src;
        audioDownload3.download = 'Plik Audio 3';
        audioDownload3.innerHTML = 'download';
     }
		}
	})
	.catch(e=>console.log(e));
  
startRecord3.onclick = e => {
  startRecord3.disabled = true;
  stopRecord3.disabled=false;
  audioChunks3 = [];
  rec3.start();
}
stopRecord3.onclick = e => {
  startRecord3.disabled = false;
  stopRecord3.disabled=true;
  rec3.stop();
}
navigator.mediaDevices.getUserMedia({audio:true})
	.then(stream => {
		rec4 = new MediaRecorder(stream);
		rec4.ondataavailable = e => {
			audioChunks4.push(e.data);
			if (rec4.state == "inactive"){
        let blob4 = new Blob(audioChunks4,{'type' : 'audio/wav; codecs=opus'});
        recordedAudio4.src = URL.createObjectURL(blob4);
        recordedAudio4.controls=true;
        recordedAudio4.autoplay=true;
        audioDownload4.href = recordedAudio4.src;
        audioDownload4.download = 'Plik Audio 4';
        audioDownload4.innerHTML = 'download';
     }
		}
	})
	.catch(e=>console.log(e));
  
startRecord4.onclick = e => {
  startRecord4.disabled = true;
  stopRecord4.disabled=false;
  audioChunks4 = [];
  rec4.start();
}
stopRecord4.onclick = e => {
  startRecord4.disabled = false;
  stopRecord4.disabled=true;
  rec4.stop();
}
}



