
import { client } from "../../typeDef/gameTypeDefs";

export default function vectorDirectionUI( renderContext: CanvasRenderingContext2D, client: client['key'] ) {

    renderContext.beginPath();
    renderContext.moveTo( client.x, client.y)
    renderContext.lineTo(  client.x + client.dx * -5, client.y )
    renderContext.strokeStyle = "red";
    renderContext.stroke();

    renderContext.beginPath();
    renderContext.moveTo( client.x, client.y)
    renderContext.lineTo(  client.x,  client.y + client.dy * -5 )
    renderContext.strokeStyle = "blue";
    renderContext.stroke();

}