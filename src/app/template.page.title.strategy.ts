import { Injectable, NgModule } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { TitleStrategy, RouterStateSnapshot, RouterModule } from "@angular/router";

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Lyfe company | ${title}`);
    }
  }
}

