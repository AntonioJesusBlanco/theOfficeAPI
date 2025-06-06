import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ViewportScroller, CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  mostrarMenu = false;

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {}

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
          this.viewportScroller.scrollToAnchor(fragment);
      }
    });
  }
}
