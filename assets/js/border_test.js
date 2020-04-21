function border(id){
  this.id = id;
  this.element = document.getElementById(id),
  this.x= 0;
  this.y= 0;
  this.w = document.getElementById('workBorder').parentElement.clientWidth;
  this.h = document.getElementById('workBorder').parentElement.clientHeight;
  this.border = 10;
  this.multiply = 1;
  this.scale = 1;
  this.radius= 5;
  this.speed = [1, 5];
  this.color = 'none';
  this.stroke = true;
  this.strokeColor = 'red';
  this.strokeWidth = 6;
  this.strokeLineCap = 'square'; //square, butt or round
}


const SVG_NAMESPACE_URI = 'http://www.w3.org/2000/svg';





function createBorderPath(borders) {

  this.borders = borders;

  let path = borders.element;

  this.x = borders.x + borders.strokeWidth / 2;
  this.y = borders.y + borders.strokeWidth / 2;
  this.h = borders.h;
  this.w = borders.w;
  this.r = borders.border;
  this.scale = borders.scale;

  this.data;
  this.points = [];
  this.pointsTween = [];

  this.padding = parseFloat(window.getComputedStyle(borders.element.parentElement.parentElement.parentElement).paddingTop) * 2;

  this.getPath(this);

}

createBorderPath.prototype.getDataPoints = function() {
  
  this.h = this.h - this.borders.strokeWidth;
  this.w = this.w - this.borders.strokeWidth;

  let points = [];
  let pointsTween = [];

  let borders = this.borders

  if (this.r > this.w / 2){
    return this.r = this.w / 2 - 10;
  }

  
  let getPositions = function(){
    return {
      position0: {
        x: this.x + this.r,
        y: this.y
      },
      position1: {
        x: this.x + this.w - this.r,
        y: this.y
      },
      position2: {
        x: this.x + this.w,
        y: this.y + this.r
      },
      position3: {
        x: this.x + this.w,
        y: this.y + this.h - this.r
      },
      position4: {
        x: this.x + this.w - this.r,
        y: this.y + this.h
      },
      position5: {
        x: this.x + this.r,
        y: this.y + this.h
      },
      position6: {
        x: this.x,
        y: this.y + this.h - this.r
      },
      position7: {
        x: this.x,
        y: this.y + this.r
      }
    }
  }
  

  let positions = getPositions.call(this);




    //----svg path-------------------------





    function getLine(positions,num) {

      let line = " ";
      let points = [];

      if (borders.multiply <= 1) {

        line += "L" + positions['position'+num].x + " " + positions['position'+0].y;

        points.push({
          x: positions['position'+num].x,
          y: positions['position'+num].y
        });

      } else {

        let slice = borders.multiply;

        let length = {
          x: positions['position'+num].x - positionMinus(num).x,
          y: positions['position'+num].y - positionMinus(num).y
        }

        for (let j = slice; j > 0; j--) {

          line += "L";

          line += positions['position'+num].x + length.x / j + " ";
          line += positions['position'+num].y + length.y / j + " ";

          points.push({
            x: positions['position'+num].x + length.x / j,
            y: positions['position'+num].y + length.y / j
          })

        }

      }

      return {
        line: line,
        points: points
      }

    }

    function getCardinal(positions, num) {

      let r = borders.border;
      let cardinal = " ";
      let points = [];
      
      let x1, y1, x2, y2;


      if (positions['position'+num].x - positionPlus(num).x == 0) {

        x1 = positions['position'+num].x - positionMinus(num).x > 0 ? positionMinus(num).x + r / 2 : positionMinus(num).x - r / 2;
        y1 = positionMinus(num).y;

        x2 = positions['position'+num].x;
        y2 = positions['position'+num].y - positionMinus(num).y > 0 ? positions['position'+num].y - r / 2 : positions['position'+num].y + r / 2;

      } else {

        x1 = positionMinus(num).x;
        y1 = positions['position'+num].y - positionMinus(num).y > 0 ? positionMinus(num).y + r / 2 : positionMinus(num).y - r / 2;

        x2 = positions['position'+num].x - positionMinus(num).x > 0 ? positions['position'+num].x - r / 2 : positions['position'+num].x + r / 2;
        y2 = positions['position'+num].y;

      }

      cardinal += "C" + x1 + " " + y1 + " " + x2 + " " + y2 + " " + positions['position'+num].x + " " + positions['position'+num].y;

      points.push({
        x: positions['position'+num].x,
        y: positions['position'+num].y
      });

      return {
        cardinal: cardinal,
        points: points
      };
    }




    //---get positions of an object------------------------------------------------------------------------------------------------------------  






    function positionMinus(num) {
      function getMinus(num) {
        let getMinus = (num - 1 + Object.keys(positions).length) % Object.keys(positions).length;

        return getMinus;
      }

      return positions['position' + getMinus(num)];
    }

    function positionPlus(num) {
      function getPlus(num) {
        let getPlus = (num + 1 + Object.keys(positions).length) % Object.keys(positions).length;

        return getPlus;
      }

      return positions['position' + getPlus(num)];
    }


  //-------Scale----------------------------------------------------------------------------------------------------------------------------------------





  let oldW = this.w;
  let oldH = this.h;

  this.w = this.w * borders.scale;
  this.h = this.h * borders.scale;

  positions = getPositions.call(this);


  for (let i = 0; Object.keys(positions).length > i; i++) {
    positions['position'+i].x = positions['position'+i].x - (this.w - oldW) / 2;
    positions['position'+i].y = positions['position'+i].y - (this.h - oldH) / 2; 
  }



    //----------------------------------




    data = "M" + positions['position'+0].x + " " + positions['position'+0].y + getLine(positions, 1).line + getCardinal(positions, 2).cardinal + getLine(positions, 3).line + getCardinal(positions, 4).cardinal + getLine(positions, 5).line + getCardinal(positions, 6).cardinal + getLine(positions, 7).line + getCardinal(positions, 0).cardinal;

    pushPoints(getCardinal, 0);
    pushPoints(getLine, 1);
    pushPoints(getCardinal, 2);
    pushPoints(getLine, 3);
    pushPoints(getCardinal, 4);
    pushPoints(getLine, 5);
    pushPoints(getCardinal, 6);
    pushPoints(getLine, 7);

    function pushPoints(curve, num) {
      for (let i = 0; i < curve(positions, num).points.length; i++) {
        points.push(curve(positions, num).points[i]);
      }
    }
  
    

}

createBorderPath.prototype.getPath = function() {

  this.getDataPoints(this);

 
}


//-----   finish creating border   >>>-----------------------------------------------------------------



function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  if (min > max) {
    var tmp = min;
    min = max;
    max = tmp;
  }
  return min + (max - min) * Math.random();
}




//----expandMenu-------------------------------------------------------------------------


let workBorder = new border('work');

new createBorderPath(workBorder);