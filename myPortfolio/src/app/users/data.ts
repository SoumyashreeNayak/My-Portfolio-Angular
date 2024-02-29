export class Data {
      constructor(private username:String, private email:String,private password:String){}


      public getUsername():String{
            return this.username;
      }
      public getEmail():String{
            return this.email;
      }
      public getPassword():String{
            return this.password;
      }
}
