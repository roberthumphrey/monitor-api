import { Module } from "@nestjs/common";
import { HANDLERS } from "src/utils/constants";
import { WebSocketHandler } from "./websocket.gateway";

@Module({
     imports: [],
     controllers: [],
     providers: [
          { provide: HANDLERS.WEBSOCKET, useClass: WebSocketHandler }
     ],
     exports: [
          { provide: HANDLERS.WEBSOCKET, useClass: WebSocketHandler }
     ]
})
export class WebSocketModule {}