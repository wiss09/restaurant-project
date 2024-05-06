import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PopularDishesComponent } from './components/popular-dishes/popular-dishes.component';
import { OurHistoryComponent } from './components/our-history/our-history.component';
import { PopularMenuComponent } from './components/popular-menu/popular-menu.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { NewsComponent } from './components/news/news.component';
import { FooterComponent } from './components/footer/footer.component';
import { DishComponent } from './components/popular-dishes/dish/dish.component';
import { MenuComponent } from './components/popular-menu/menu/menu.component';
import { MemberComponent } from './components/team-member/member/member.component';
import { NewComponent } from './components/news/new/new.component';
import { BodyComponent } from './components/body/body.component';
import { BannerComponent } from './components/banner/banner.component';
import { VideoComponent } from './components/video/video.component';
import { ReviewComponent } from './components/review/review.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AddMenuComponent } from './components/add-menu/add-menu.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { AdminComponent } from './components/admin/admin.component';
import { PlatsComponent } from './components/plats/plats.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SinglePlatComponent } from './components/single-plat/single-plat.component';
import { SingleChefComponent } from './components/single-chef/single-chef.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopularDishesComponent,
    OurHistoryComponent,
    PopularMenuComponent,
    TeamMemberComponent,
    ReservationComponent,
    NewsComponent,
    FooterComponent,
    DishComponent,
    MenuComponent,
    MemberComponent,
    NewComponent,
    BodyComponent,
    BannerComponent,
    VideoComponent,
    ReviewComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AddMenuComponent,
    AddNewsComponent,
    AddMemberComponent,
    AdminComponent,
    PlatsComponent,
    ChefsComponent,
    AddPlatComponent,
    AddChefComponent,
    SinglePlatComponent,
    SingleChefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
