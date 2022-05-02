import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";
import { User } from "src/utils/database/user.schema";

@WebSocketGateway()
export class WebSocketHandler {
     @WebSocketServer() ws: Server;

     @SubscribeMessage('verification')
     verificationHandler(@MessageBody() data: any) {
          console.log(data);
     }

     verificationComplete(user: User) {
          this.ws.emit('VERIFICATION_COMPLETE', user);
     }
}