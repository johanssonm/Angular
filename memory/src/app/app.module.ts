import { MaterialModule } from './modules/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MemoryCardComponent } from './components/memory-card/memory-card.component';
import { MemoryGameComponent } from './components/memory-game/memory-game.component';
import { ClickDirectiveDirective } from './directive/click-directive.directive';
import { TestCardComponent } from './components/test-card/test-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    MemoryCardComponent,
    MemoryGameComponent,
    ClickDirectiveDirective,
    TestCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
