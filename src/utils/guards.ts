import { CanActivate, ExecutionContext, Inject, Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class AuthorizationGuard implements CanActivate {
     async canActivate(context: ExecutionContext) {
          const request = context.switchToHttp().getRequest<Request>();
          const API_KEY = process.env.API_KEY;
          const valid = request.headers['authorization'] === API_KEY ? true : false;

          return valid;
     }
}