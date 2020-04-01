let workBorder = {
  id: 'workBorder',
  element: document.getElementById("workBorder"),
  x: 0,
  y: 0,
  w: document.getElementById('workBorder').parentElement.clientWidth,
  h: document.getElementById('workBorder').parentElement.clientHeight,
  border: 10,
  multiply: 1,
  scale: 1,
  radius: 9,
  speed: [1, 5],
  color: 'none',
  stroke: true,
  strokeColor: 'red',
  strokeWidth: 4,
  strokeLineCap: 'square' //square, butt or round
}




function createPath(borders) {

  let path = borders.element;

  let x = borders.x + borders.strokeWidth / 2;
  let y = borders.y + borders.strokeWidth / 2;
  let h = borders.h - borders.strokeWidth;
  let w = borders.w - borders.strokeWidth;
  let r = borders.border;
  let scale = borders.scale;

  let data;
  let points = [];
  let pointsTween = [];

  function getPath(borders) {
    if (r > w / 2)
      r = w / 2 - 10;

    let positions = {
      position0: {
        x: x + r,
        y: y
      },
      position1: {
        x: x + w - r,
        y: y
      },
      position2: {
        x: x + w,
        y: y + r
      },
      position3: {
        x: x + w,
        y: y + h - r
      },
      position4: {
        x: x + w - r,
        y: y + h
      },
      position5: {
        x: x + r,
        y: y + h
      },
      position6: {
        x: x,
        y: y + h - r
      },
      position7: {
        x: x,
        y: y + r
      }
    }




    //----svg path-------------------------




    function line(positions, num) {

      let line = " ";
      let points = [];

      if (borders.multiply <= 1) {

        line += "L" + position(num).x + " " + position(num).y;

        points.push({
          x: position(num).x,
          y: position(num).y
        });

      } else {

        let slice = borders.multiply;

        let length = {
          x: position(num).x - positionMinus(num).x,
          y: position(num).y - positionMinus(num).y
        }

        for (let j = slice; j > 0; j--) {

          line += "L";

          line += positionMinus(num).x + length.x / j + " ";
          line += positionMinus(num).y + length.y / j + " ";

          points.push({
            x: positionMinus(num).x + length.x / j,
            y: positionMinus(num).y + length.y / j
          })

        }

      }

      return {
        line: line,
        points: points
      }

    }

    function cardinal(positions, num) {

      let cardinal = " ";
      let cardinalTween;
      let points = [];


      let x1, y1, x2, y2;

      if (position(num).x - positionPlus(num).x == 0) {

        x1 = position(num).x - positionMinus(num).x > 0 ? positionMinus(num).x + r / 2 : positionMinus(num).x - r / 2;
        y1 = positionMinus(num).y;

        x2 = position(num).x;
        y2 = position(num).y - positionMinus(num).y > 0 ? position(num).y - r / 2 : position(num).y + r / 2;

      } else {

        x1 = positionMinus(num).x;
        y1 = position(num).y - positionMinus(num).y > 0 ? positionMinus(num).y + r / 2 : positionMinus(num).y - r / 2;

        x2 = position(num).y - positionMinus(num).y > 0 ? position(num).x + r / 2 : position(num).x - r / 2;
        y2 = position(num).y;

      }

      cardinal += "C" + x1 + " " + y1 + " " + x2 + " " + y2 + " " + position(num).x + " " + position(num).y;

      points.push({
        x: position(num).x,
        y: position(num).y
      });

      return {
        cardinal: cardinal,
        points: points
      };
    }




    //---get positions of an object------------------------------------------------------------------------------------------------------------  




    function position(num) {
      return positions['position' + num];
    }

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




    //---------------------------------------------------------------------------------------------------------------------------------------------------




    let oldW = w;
    let oldH = h;

    w = w * scale;
    h = h * scale;

    setPositions();

    for (let i = 0; Object.keys(positions).length > i; i++) {
      position(i).x = position(i).x - (w - oldW) / 2;
      position(i).y = position(i).y - (h - oldH) / 2;
    }

    data = "M" + position(0).x + " " + position(0).y + line(positions, 1).line + cardinal(positions, 2).cardinal + line(positions, 3).line + cardinal(positions, 4).cardinal + line(positions, 5).line + cardinal(positions, 6).cardinal + line(positions, 7).line + cardinal(positions, 0).cardinal;

    pushPoints(cardinal, 0);
    pushPoints(line, 1);
    pushPoints(cardinal, 2);
    pushPoints(line, 3);
    pushPoints(cardinal, 4);
    pushPoints(line, 5);
    pushPoints(cardinal, 6);
    pushPoints(line, 7);

    function pushPoints(curve, num) {

      for (let i = 0; i < curve(positions, num).points.length; i++) {
        points.push(curve(positions, num).points[i]);
      }
    }

    function getTweenPoints(borders, cardinal, line) {

      let radius = borders.radius;

      w = w - radius * 2;
      h = h - radius * 2;

      setPositions();

      for (let i = 0; Object.keys(positions).length > i; i++) {
        position(i).x = position(i).x - (w - borders.w) / 2;
        position(i).y = position(i).y - (w - borders.w) / 2;
      }

      pushPointsTween(cardinal, 0);
      pushPointsTween(line, 1);
      pushPointsTween(cardinal, 2);
      pushPointsTween(line, 3);
      pushPointsTween(cardinal, 4);
      pushPointsTween(line, 5);
      pushPointsTween(cardinal, 6);
      pushPointsTween(line, 7);

      function pushPointsTween(curve, num) {
        for (let i = 0; i < curve(positions, num).points.length; i++) {
          pointsTween.push(curve(positions, num).points[i]);
        }
      }
    }


    getTweenPoints(borders, cardinal, line);


    function setPositions() {
      return positions = {
        position0: {
          x: x + r,
          y: y
        },
        position1: {
          x: x + w - r,
          y: y
        },
        position2: {
          x: x + w,
          y: y + r
        },
        position3: {
          x: x + w,
          y: y + h - r
        },
        position4: {
          x: x + w - r,
          y: y + h
        },
        position5: {
          x: x + r,
          y: y + h
        },
        position6: {
          x: x,
          y: y + h - r
        },
        position7: {
          x: x,
          y: y + r
        }
      };
    }

    path.setAttribute("d", data);
    path.setAttributeNS(null, 'fill', borders.color);




    //---Stroke--------------------------------------------------------------------




    if (borders.stroke === true) {
      path.setAttributeNS(null, 'stroke', borders.strokeColor);
      path.setAttributeNS(null, 'stroke-width', borders.strokeWidth);
    }
  }

  getPath(borders);
  //---Update Size----------------------------------------------------------------------


  function updateSize(borders) {

    w = document.getElementById(borders.id).parentElement.clientWidth - borders.strokeWidth;
    h = document.getElementById(borders.id).parentElement.clientHeight - borders.strokeWidth;

    getPath(borders);
  }

  window.addEventListener("resize", function() {
    updateSize(workBorder);
  });




  //---onClick---------------------------------------------------------------


  document.getElementById('work').addEventListener('click', () => {
    animateBorder()
  });

  function animateBorder() {

    let tl = new TimelineMax({
      onUpdate: update
    });

    for (let i = 0; i < points.length; i++) {

      let duration = random(borders['speed'][0], borders['speed'][1]);

      let tween = TweenMax.to(points[i], duration, {
        x: pointsTween[i].x,
        y: pointsTween[i].y,
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut
      });

      tl.add(tween, -random(duration));
    }

    function tweenCardinal(data, closed, tension) {

      if (data.length < 1) return "M0 0";
      if (tension == null) tension = 1;

      var size = data.length - (closed ? 0 : 1);
      var path = "M" + data[0].x + " " + data[0].y + " C";

      for (var i = 0; i < size; i++) {

        var p0, p1, p2, p3;

        if (closed) {
          p0 = data[(i - 1 + size) % size];
          p1 = data[i];
          p2 = data[(i + 1) % size];
          p3 = data[(i + 2) % size];

        } else {
          p0 = i == 0 ? data[0] : data[i - 1];
          p1 = data[i];
          p2 = data[i + 1];
          p3 = i == size - 1 ? p2 : data[i + 2];
        }

        var x1 = p1.x + (p2.x - p0.x) / 6 * tension;
        var y1 = p1.y + (p2.y - p0.y) / 6 * tension;

        var x2 = p2.x - (p3.x - p1.x) / 6 * tension;
        var y2 = p2.y - (p3.y - p1.y) / 6 * tension;

        path += " " + x1 + " " + y1 + " " + x2 + " " + y2 + " " + p2.x + " " + p2.y;
      }

      return closed ? path + "z" : path;
    }

    function update() {
      path.setAttribute("d", tweenCardinal(points, true, 1));

      // console.log(window.getComputedStyle(work).getPropertyValue('width'));
      // h = window.getComputedStyle(work).getPropertyValue('height');

      getPath(borders);

    }
  }

}

// function updateSize(borders){

//   console.log('updating..')

//   let path = borders.element;

//   borders.w = document.getElementById(borders.id).parentElement.clientWidth;
//   borders.y = document.getElementById(borders.id).parentElement.clientHeight;

//   path.setAttribute("d", data);
//   //document.getElementById(borders.id).parentElement.clientWidth = borders.w;
// }

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

createPath(workBorder);
// updateSize(workBorder);
// window.addEventListener("resize", function() {
//   updateSize(workBorder); 
// });