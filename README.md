# Randomize-it: Username and Avatar Generator
A lightweight library for generating random usernames and avatars, inspired by Reddit-style naming conventions. This library is customizable, supports multiple themes, and includes avatar generation using the DiceBear API.

### Demo

## Features
- Random Username Generation: Create unique usernames with customizable themes.
- Avatar Generation: Generate visually appealing avatars for each username using DiceBear API.
- Themes:
  - Classic: Adjective + Noun + Number (Geometric avatars)
  - Emotional: Emotion + Verb + Element (Emoji avatars)
  - Elemental: Element + Color + Verb (Glass avatars)
  - Tech: Tech Term + Element + Number (Bot avatars)
- Easy integration with modern JavaScript frameworks.

## Installation
```
npm i randomize-it
```

## Usage
### Basic example
```javascript
import { generateUsernameAndAvatar } from 'randomize-it';

async function generateUser() {
  const { username, avatar } = await generateUsernameAndAvatar("classic");
  console.log("Username:", username);
  console.log("Avatar URL:", avatar);
}
generateUser();

```

### React
```javascript
import React from 'react';
import { generateUsernameAndAvatar } from 'randomize-it';

const App = () => {
  const {username, avatarUrl} = generateUsernameAndAvatar('classic);
  return (
    <div>
      <h1>{username}</h1>
      <img src={avatarUrl} alt="User Avatar" />
    </div>
  );
};
export default App;

```

### Angular
```javascript
import { Component, OnInit } from '@angular/core';
import { generateUsernameAndAvatar, generateAvatar } from 'randomize-it';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{ username }}</h1>
      <img [src]="avatarUrl" alt="User Avatar" />
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username: string = '';
  avatarUrl: string = '';

  ngOnInit() {
    this.username = generateUsernameAndAvatar();
    this.avatarUrl = generateAvatar('classic', this.username);
  }
}

```

## Functions
### generateUsernameAndAvatar(theme:string, separator:boolean): Promise<{ username: string; avatar: string }>
- Description: Generates a username based on the theme.
- Parameters:
  - theme: One of classic, emotional, elemental, tech.
  - separator: Determines whether to add separator or not in the username.
  - Example: BrightTiger42
### generateAvatar(theme: string, username: string): string
- Description: Generates an avatar URL based on the selected theme and username.
- Parameters:
  - theme: One of classic, emotional, elemental, tech.
  - username: The username to generate the avatar for.                                                                                            |
