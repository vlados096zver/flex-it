import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isShowPopupSearch = false;
  isShowMenu = false;
  activePointMenu = 0;
  menu: any[] = [
    {
      point: 'Home',
      key: 'home',
      isOpen: false,
      submenu: [
        {
          link: 'Home',
        },
        {
          link: 'Home 2',
        },
        {
          link: 'Home 3',
        },
        {
          link: 'Home 4',
        }
      ]
    },
    {
      point: 'Services',
      key: 'services'
    },
    {
      point: 'About',
      key: 'about'
    },
    {
      point: 'Portfolio',
      key: 'portfolio'
    },
    {
      point: 'Pricing',
      key: 'pricing'
    },
    {
      point: 'Testimonials',
      key: 'testimonials'
    },
    {
      point: 'FAQ',
      key: 'faq'
    },
    {
      point: 'Contact Us',
      key: 'contact'
    },
  ];

  openLink(e: any, key: any) {
    e.preventDefault();
    if (window.innerWidth <= 960) {
      key.isOpen = !key.isOpen;
    }
  }

  toggleMenu() {
    this.isShowMenu = !this.isShowMenu;
  }

  showSearch() {
    this.isShowPopupSearch = !this.isShowPopupSearch;
  }

  changeTheme(){
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
  }

  public scroll(event: string) {
    const element = document.getElementById(event);
    console.log(element)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      window.scroll({
        top: elementPosition + window.pageYOffset ,
        behavior: "smooth",
      });
    }
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent() {
    const sections: HTMLCollectionOf<Element> = document.getElementsByClassName('section');
    if (sections && sections.length > 0) {
      for (let i = 0; i < sections.length; i++) {
        let section: any = sections[i];
        let heightHeader = document.getElementById('header')?.offsetHeight || 100;
        let top = section.offsetTop;
        if(i > 0) {
          top = section.offsetTop - heightHeader;
        } else {
          top = top - 100;
        }
        let bottom = section.offsetHeight + top;
        let scrollDistance = window.scrollY;
        if(scrollDistance > top && scrollDistance < bottom) {
          this.activePointMenu = i;
        }
      }
    }
  }
}
