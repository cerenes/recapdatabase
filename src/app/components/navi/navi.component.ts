import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { AuthService } from 'src/app/services/auth.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private authService: AuthService,
    private localStorageService: LocalstorageService,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }
  isAuth() {
    return this.authService.isAuthenticated();
 }

 logout() {
    this.localStorageService.removeToken();
    this.localStorageService.removeCurrentCustomer();
    this.toastrService.success('Çıkış yapıldı', 'Başarılı');

    return this.router.navigate(['login']);
 }

 getCurrentCustomer(): Customer {
    return this.localStorageService.getCurrentCustomer()
 }
}
