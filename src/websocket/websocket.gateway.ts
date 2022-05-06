import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";
import { Data, Ping } from "src/utils/types";

@WebSocketGateway()
export class WebSocketHandler {
     @WebSocketServer() ws: Server;

     @SubscribeMessage('ping')
     handlePing(data: Ping) {
          let serverTime = new Date();
          let clientTime = data.time;

          console.log(serverTime, clientTime);

          let time = serverTime.getTime() - clientTime.getTime();

          console.log(time);

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