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
		rec = new MediaRecorder(stream);
		rec.ondataavailable = e => {
			audioChunks.push(e.data);
			if (rec.state == "inactive"){
        let blob = new Blob(audioChunks,{'type' : 'audio/wav; codecs=opus'});
        recordedAudio.src = URL.createObjectURL(blob);
        recordedAudio.controls=true;
        recordedAudio.autoplay=true;
        audioDownload.href = recordedAudio.src;
        audioDownload.download = 'mp3';
        audioDownload.innerHTML = 'download';
     }
		}
	})
	.catch(e=>console.log(e));
  
startRecord.onclick = e => {
  startRecord.disabled = true;
  stopRecord.disabled=false;
  audioChunks = [];
  rec.start();
}
stopRecord.onclick = e => {
  startRecord.disabled = false;
  stopRecord.disabled=true;
  rec.stop();
}
}



