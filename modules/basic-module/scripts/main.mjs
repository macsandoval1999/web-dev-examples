import {
    create,
    createReportList
}

from './canvas.mjs';

import {
    name,
    draw,
    reportArea,
    reportPerimeter
}

from './square.mjs';
import randomSquare from './square.mjs';

let myCanvas=create('myCanvas', document.body, 480, 320);
let reportList=createReportList(myCanvas.id);

let square1=draw(myCanvas.ctx, 50, 50, 100, 'blue');
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);

// Use the default
let square2=randomSquare(myCanvas.ctx);