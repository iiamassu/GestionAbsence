import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GestionAbsence';

  ngOnInit():void{
    const body = document.querySelector('body');
    const sidebar = document.querySelector('nav');
    const toggle = document.querySelector(".toggle");
    const searchBtn = document.querySelector(".search-box");
    const modeSwitch = document.querySelector(".toggle-switch");
    const modeText = document.querySelector(".mode-text");


if (body && sidebar && toggle && searchBtn && modeSwitch && modeText) {
    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
    })

    searchBtn.addEventListener("click", () => {
        sidebar.classList.remove("close");
    })

    modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            modeText.innerHTML = "Light mode";
        } else {
            modeText.innerHTML = "Dark mode";

        }
    });
}
  }

}
