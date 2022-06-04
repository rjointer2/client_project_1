"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function vectorDirectionUI(renderContext, client) {
    renderContext.beginPath();
    renderContext.moveTo(client.x, client.y);
    renderContext.lineTo(client.x + client.dx * -5, client.y);
    renderContext.strokeStyle = "red";
    renderContext.stroke();
    renderContext.beginPath();
    renderContext.moveTo(client.x, client.y);
    renderContext.lineTo(client.x, client.y + client.dy * -5);
    renderContext.strokeStyle = "blue";
    renderContext.stroke();
}
exports.default = vectorDirectionUI;
