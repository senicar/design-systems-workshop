# Design mit System Workshop: Skalierbare Design Systems mit Storybook und Angular

[Your Workshop](https://www.angulararchitects.io/schulungen/design-mit-system-skalierbare-design-systems-mit-storybook-und-angular/)

Your trainer: [Andreas Wissel](https://twitter.com/andreas_wissel), Freelance Consultant

## Setup

### Step 1: Devices and Software

Please bring your developer devices and install the following software. [Already done? Click here for step 2.](#step-2-demo-repository)

**NOTE:** As web technologies move fast and quickly, there might be new releases in the meantime. To ensure everything works as intended, I recommend you stick to the versions noted below. Thanks!

#### Devices

- Laptop with recent Windows/macOS/Linux version
  - Make sure you can access the Internet without any proxies and install software without group policies etc.
  - When in doubt, use your private notebook.

#### Browsers (Desktop)

- [Microsoft Edge](https://www.microsoft.com/en-us/edge), or any Chromium equivalent @ version 104 or later

#### Developer Tools

- [Git](https://git-scm.com/)
  - Optional: Git UI tool such as TortoiseGit, Tower, SourceTree, GitKraken, …
- [Node.js](https://nodejs.org/en/), version 16.17.0
- [Visual Studio Code](https://code.visualstudio.com/), recent version

#### Design Tools

- Create a free account at [Figma](https://figma.com)

### Step 2: Demo Repository

On your favorite terminal, please run:

```
npm uninstall -g @angular/cli @storybook/cli
npm cache verify
npm install -g @angular/cli@14.2.1
```

Next, navigate to a folder of your choice and execute:

```
git clone https://github.com/andreaswissel/design-systems-workshop.git
cd design-systems-workshop
```

If you prefer SSH, you can use this checkout URL: `git@github.com:andreaswissel/design-systems-workshop.git`
