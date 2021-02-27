function Figure(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
}

function Line(x, y, x2, y2, color) {
    Figure.call(this, x, y, color);
    this.x2 = x2;
    this.y2 = y2;

    this.draw = (ctx) => {
        const {x, y, x2, y2, color} = this;
        ctx.lineWidth = 2;
        ctx.strokeStyle = color;
        ctx.beginPath();

        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
}

function Rect(x, y, x2, y2, color) {
    Figure.call(this, x, y, color);
    this.x2 = x2;
    this.y2 = y2;
    this.draw = (ctx) => {
        const {x, y, x2, y2, color,} = this;
        ctx.fillStyle = color;
        ctx.fillRect(x, y, x2, y2);
    }
}

function Circle(x, y, radius, color) {
    Figure.call(this, x, y, color);
    this.radius = radius;
    this.draw = (ctx) => {
        const {x, y, color, radius} = this;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
    }
}

function Zigzag(x, y, x2, color) {
    Figure.call(this, x, y, color);
    this.x2 = x2;
    this.draw = (ctx) => {
        const {x, y, x2, color,} = this;
        let startX = x;
        let startY = y;
        let zigzag = x2;
        ctx.lineWidth = 2;
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        for (let n = 0; n < 40; n++) {
            let x = startX + ((n + 1) * zigzag);
            let y;
            if (n % 2 == 0) {
                y = startY + 20;
            } else {
                y = startY;
            }
            ctx.lineTo(x, y);
        }
        ctx.stroke();


}
}
function Canvas(canvasID) {
    this.canvas = document.getElementById("canvasID");
    this.ctx = this.canvas.getContext('2d');

    this.add = (...figures) => {
        figures.forEach(figure => figure.draw(this.ctx));
    }
}

let canvas = new Canvas('canvasID');

let line1 = new Line(150, 650, 400, 460, 'rgba(255, 0, 0, 1)');
let line2 = new Line(150, 670, 400, 480, 'rgba(255, 0, 0, 1)');
let rect1 = new Rect(500, 150, 150, 300, 'rgba(17, 240, 39, 0.5)'); // green
let rect2 = new Rect(550, 125, 220, 120, 'rgba(236, 23, 255, 0.5)'); // purple
let rect3 = new Rect(720, 175, 150, 100, 'rgba(255, 255, 0, 0.5)'); // yellow
let circle1 = new Circle(200, 250, 120, 'rgba(0, 0, 255, 0.5)');
let circle2 = new Circle(120, 180, 80, 'rgba(0, 0, 255, 0.5)');
let zzg = new Zigzag(0, 0, 30, 'rgba(255, 0, 0, 1)');

canvas.add(line1, line2, rect1, rect2, rect3, circle1, circle2, zzg);
