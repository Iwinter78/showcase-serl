# ShowcaseSERL

ShowcaseSERL is a curated collection of student and researcher- developed projects. It serves as a public portfolio for finished projects and inspires students to contribute their project ideas.
![Image of the main page of the site](https://github.com/user-attachments/assets/47fc3833-9c6c-43cf-a9f3-26ee1d67ea22)

## Prerequisite
In order to get the software to work you need to check that Node and NPM are installed on the system. You can check that by using the following commands:
```bash
which node
which npm
```
If you are getting a result from both the command, you can then procced to the next step. If not, please follow with the next step.

### Install Node.js
1. For installing Node.js, please visit their [website](https://nodejs.org/en/download/package-manager)

1. If you are using Windows, please select "Prebuilt Installer" in the menu. If you are using Linux, please select the "Package Manager" tab in the menu. 

1. Then follow the instructions stated in the screen. 

1. Done! You should now have Node.js and NPM installed.

## How to use

First, install all the dependencies that are required:
```bash
npm install
```
This will install all the required dependencies. To see what dependencies have been installed,
please look in `package.json` for more details.

Secondly, build the server:

```bash
npm run build
```

Then start the server using:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

To run the tests for the project. Simply run the following command:
```bash
npm test
```

## License

MIT License

Copyright (c) 2024 Ericsson Space

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
