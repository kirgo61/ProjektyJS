document.getElementById('addImage').onchange = function(e){
    var image = new Image();
    image.src = URL.createObjectURL(this.files[0]);
    image.onload = draw;
    image.onerror = failed;
    
};
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
function draw(){
    canvas.width = this.width;
    canvas.height = this.height;
    ctx.drawImage(this, 0,0);   
    
}
function failed() {
    alert('zły plik');
}
var brightnessFilter = document.getElementById('brightness');
brightnessFilter.addEventListener('change', function(e){
    var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
    var d = imgData.data;
    for(let i = 0; i<d.length; i+=4){
        var barInfo = parseInt(brightnessFilter.value, 10);
        d[i] += (barInfo/100)*255;
        d[i+1]+=(barInfo/100)*255;;
        d[i+2]+=(barInfo/100)*255;;
    }
    
});

