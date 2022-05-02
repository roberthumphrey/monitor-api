import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";
import { User } from "src/utils/database/user.schema";
import { Data } from "src/utils/types";

@WebSocketGateway()
export class WebSocketHandler {
     @WebSocketServer() ws: Server;

     @SubscribeMessage('verification')
     verificationHandler(@MessageBody() data: any) {
          console.log(data);
     }

     verificationComplete(data: Data) {
          this.ws.emit('VERIFICATION_COMPLETE', data);
     }
}