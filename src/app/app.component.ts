import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClicked() {
    let characters = '';

    if(this.includeLetters) {
      characters += 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    }

    if(this.includeNumbers) {
      characters += '1234567890';
    }

    if(this.includeSymbols) {
      characters += '?¿+*-_!|@#·$%&¬=/ºª()¡';
    }

    if(characters.length === 0) return;

    let password = '';
    for(let i=0; i<this.length; i++) {
      password += characters[Math.floor(Math.random()*characters.length)];
    }
    
    this.password = password;
  }
}
