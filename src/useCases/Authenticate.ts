import { IUserRepository } from "@/repositories/IUserRepository";
import { InvalidCredentialsError } from "@/useCases/errors/InvalidCredentialsError";

type AuthenticateRequest = {
    email: string;
    password: string;
}
export class Authenticate {
  constructor(private userRepository: IUserRepository) {}

  async execute( data: AuthenticateRequest ) {

    const user = await this.userRepository.findByEmail(data.email)
    
    if(!user) throw new InvalidCredentialsError()
    
    if(user.props.password != data.password) throw new InvalidCredentialsError()
    
    return user
  }
}