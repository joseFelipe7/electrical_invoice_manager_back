import { User } from "@/domain/entities/User"

export class UserResponse {
  name:string;
  email:string;

  constructor(user:User){
    this.name = user.props.name,
    this.email = user.props.email
  }
  static collection(users:Array<User>):Array<any>{
    return users.map(item=>{
      return {
        name:item.props.name,
        email:item.props.email        
      }
    })
  }
}