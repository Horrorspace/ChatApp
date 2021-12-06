import {Injectable, Inject, UnauthorizedException} from '@nestjs/common';
import {PassportSerializer} from '@nestjs/passport';
import {User} from '../users/users.model';
import {UsersService} from '../users/users.service';

@Injectable()
export class LocalSerializer extends PassportSerializer {
    constructor(
      @Inject(UsersService) private readonly usersService: UsersService,
    ) {
      super();
    }

    public serializeUser(user: User, done: CallableFunction) {
        console.log('1');
        done(null, user.id);
    }

    public async deserializeUser(id: number, done: CallableFunction) {
      try {
          console.log('2');
          const user = await this.usersService.getUserById(id);

          if(user) {
              return done(null, user);
          }
          else {
              throw new UnauthorizedException();
          }
      }
      
      catch(error) {
          done(error)
      }  

    }
}
