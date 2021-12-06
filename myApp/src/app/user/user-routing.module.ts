import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  
		
  { path: '',
  component: UserComponent,
  children: [
    {
          path: '/user/login',
          component: LoginComponent,
          data: {
            title: 'Login',
          
          }
      
      },
  
      {
        path: '/user/logout',
        component: LogoutComponent,
        data: {
          title: 'Logout',
        
        }
    
    }
  ]



   }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
