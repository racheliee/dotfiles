# Dotfiles Repository

use symlinks for better management of dotfiles

## Karabiner kemapping

[Karabiner README](./karabiner/README.md)

## Manual Installations

- app store apps
- setapp apps
- vscode extension

## VS code

- keybindings
- settings

## .zshrc

- z shell config, alias, functions

## BrewFile

auto install formulae and cask \
run following command from directory that `BrewFile` is located

```zsh
brew bundle
```

> caution: mactex require whole a lot of time, so install seperately

## Symlink creation

1. remove existing dotfiles (if they exist)

```zsh
rm -rf ~/.zshrc
rm -rf /Users/${USER}/.config/karabiner/karabiner.json
rm -rf /Users/${USER}/Library/Application\ Support/Code/User/settings.json
rm -rf /Users/${USER}/Library/Application\ Support/Code/User/keybindings.json
```

2. create symlink for dotfiles

```zsh
ln -s {path for repo clone}/.zshrc /Users/${USER}/.zshrc
ln -s {path for repo clone}/karabiner/karabiner.json /Users/${USER}/.config/karabiner/karabiner.json
ln -s {path for repo clone}/vscode/settings.json /Users/${USER}/Library/Application\ Support/Cursor/User/settings.json
ln -s {path for repo clone}/vscode/settings.json /Users/${USER}/Library/Application\ Support/Cursor/User/keybindings.json
```

i think this is the newest one i used
```shell
echo "Setting up Karabiner Elements configuration..."
echo "Removing old configuration if it exists..."
rm -rf $HOME/.config/karabiner/
echo "Creating Karabiner configuration symlink…"
ln -sf $HOME/dotfiles/karabiner $HOME/.config/karabiner
echo "Karabiner configuration setup complete"
```

## zsh configurations

```shell
# autosuggestions
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions
echo "source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh" >> ~/.zshrc

# syntax highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.zsh/zsh-syntax-highlighting
echo "source ~/.zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ~/.zshrc
```