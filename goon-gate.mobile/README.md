
# Setup:

```

# Use Linux or OSX. RIP if you are on Windows

# Setup zsh:
sudo apt install zsh

# Setup oh-my-zsh:
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

# Get NVM
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash

# Get node and npm version 8. Find latest version number at nodejs.org
nvm i 8

# Get react-native
npm i -g react-native

# Make a project directory:
mkdir ~/pro/; cd ~/pro/

# Setup SSH, or use https to clone

# Clone the repo:
git clone git@github.com:louisgv/goon-gate.git #

cd goon-gate/GoonGate
npm i

# Setup Android Studio or XCode. For android make sure all the paths are setup correctly:
# https://facebook.github.io/react-native/docs/getting-started.html

# Reverse proxy your adb:
adb reverse tcp:8081 tcp:8081

# Get tmux:
sudo apt install tmux

# Initiate a tmux session:
tmux new

# Split tmux then Run react-native dev server:
tmux splitw -h; npm start

# Run on android
npm run android
```

# Kaviat:
+ DOES NOT WORK WITH CHEAP PHONE! (You can try to downgrade gradle to 1.2.3, but keep that change local)
