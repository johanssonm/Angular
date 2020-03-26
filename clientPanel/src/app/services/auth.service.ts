import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authModule: AngularFireAuth) { }

  login(email: string, password: string){
    return new Promise((resolve, reject) =>{
      this.authModule.auth.signInWithEmailAndPassword(email, password)
      .then(userData => resolve(userData),
      err => reject(err))
    })
  }

  logout(){
    this.authModule.auth.signOut();
  }

  getAuth(){
    return this.authModule.authState.pipe(map(auth => auth));
  }
}
