import { HttpResponse, HttpRequest } from "../protocols/http";
import { MissingParamError } from '../errors/missing-param-error';
import { badRequest } from "../helpers/http-helper";

export class SignUpController {
    handle (httpRequest: any): any {
        if (!httpRequest.body.name) {
            return  {
                statusCode: 400,
                body: new Error('Missing param: name')
            }
        }
        if (!httpRequest.body.email) {
            return  {
                statusCode: 400,
                body: new MissingParamError('email')
            }
        }
        return {
            statusCode: 400,
            body: new MissingParamError('name')
        }
    }
}