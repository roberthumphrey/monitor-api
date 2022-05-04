import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";
import { Data } from "src/utils/types";

@WebSocketGateway()
export class WebSocketHandler {
     @WebSocketServer() ws: Server;

     @SubscribeMessage('ping')
     handlePing() {
          let time = new Date().getTime();

          this.ws.emit('pong', { time });
     }

     @SubscribeMessage('verification')
     verificationHandler(@MessageBody() data: any) {
          console.log(data);
     }

     verificationComplete(data: Data) {
          this.ws.emit('VERIFICATION_COMPLETE', data);
     }
}