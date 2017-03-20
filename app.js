
var gm = require('gm').subClass({
    imageMagick: true
});

//var newpic = gm(pic.template);
let newpic = gm("./tt.png");
newpic.size(function(err, value){
        if(err) return console.log(err);
        console.log(value);
        let drawing = {
                fontSize:40,
                fontColor:"yellow",
                x:0,
                y:0,
                text:"aha",
                direction:"East"
        }        
        newpic.fontSize(drawing.fontSize).fill(drawing.fontColor);
        if (drawing.fontFile) {
                newpic.font(drawing.fontFile);
        }
        newpic.gravity(drawing.direction).drawText(drawing.x, drawing.y, drawing.text)
        .gravity('SouthEast').drawText(drawing.x, drawing.y, drawing.text)
        .write('./tt_out.png', function (err) {
        if (!err) console.log('done');
        });



}) 
//pic.drawings.forEach(function(drawing) {

//})
