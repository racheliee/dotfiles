# Karabiner
## Installation
1. Using the following repository, we can edit the `karabiner.json` file more easily and efficiently.
    ```
    git clone https://github.com/mxstbr/karabiner
    ```
    Source github repo : [mxstbr/karabiner](www.github.com/mxstbr/karabiner)

2. Delete the default `~/.config/karabiner` directory.
    ```
    rm -rf ~/.config/karabiner
    ```

3. Create a symlink to the cloned repository.
    ```
    ln -s {path to the cloned repository} ~/.config
    ```

4. Restart the `karabiner_console_user_server` service.
    ```
    launchctl kickstart -k gui/`id -u`/org.pqrs.karabiner.karabiner_console_user_server
    ```

## Making your own key mappings
1. Make your changed under `rules.ts` file.
2. Install dependencies (once; idempotent)
    ```
    yarn install
    ```

3. rebuild `karabiner.json` with `rule.ts`

    ```
    yarn run build
    ```

    If you want to watch the changes of `rule.ts` and rebuild `karabiner.json` automatically, you can use `nodemon`

    ```
    yarn run watch
    ```

## Karabiner Complex Key Mappings

This file configures custom key mappings to enhance keyboard efficiency, enabling faster navigation, window management, and application launching. Below is a breakdown of the main key mappings configured in this Karabiner-Elements setup.

## Key Mappings Overview

### 1. **Shift + Delete - Forward Delete**

-   **Key:** `Shift + Delete`
-   **Behaviour:** Forward Delete
-   **Description:** Enables forward delete functionality using `Shift + Delete` key combination.

### 2. **Tab Key - Tab Held Hyper Key**

-   **Key:** `Tab`
-   **Tap Behaviour**: `Tab`
-   **Hold Behaviour**: Activates `tab_held` layer
    -   This technically is a hyper key, but I use it as a control key.


#### Hyper Key Sublayers

- **`tab_held + d`**: Left Control Key


### 3. **Caps Lock Key - Hyper Key Layer**

-   **Key:** `Caps Lock`
-   **Tap Behavior:** Acts as `Escape`.
-   **Hold Behavior:** Activates `hyper` layer for application and arrow navigation sublayers.

#### Utility Hyper Key Sublayers

-   **`hyper + q`**: Left Control + Left Command + Left Option + Left Shift
    - just used as a modifier key to make more shortcuts

-  **`hyper + w`**: Left Control + Left Command + Left Option
   -  used for aerospace window management (mac OS default key mapping are changed in system settings)

-  **`hyper + space`**: F18
   -  used for language input source change (mac OS default key mapping are changed in system settings)

-  **`hyper + f`**: F17
   -  used for mission control and desktop switching

-  **`hyper + d`**: F16
   - for more shortcuts without conflict with other shortcuts

-   **`hyper + o`**: Application Launcher

    -   **`a`**: Open Arc browser.
    -   **`b`**: Open Obsidian.
    -   **`c`**: Open Calendar.
    -   **`d`**: Open Discord.
    -   **`e`**: Open Notes.
    -   **`f`**: Open Finder.
    -   **`i`**: Open Warp terminal.
    -   **`j`**: Open IntelliJ IDEA.
    -   **`k`**: Open KakaoTalk.
    -   **`m`**: Open Messages.
    -   **`n`**: Open Notion.
    -   **`p`**: Open Preview.
    -   **`s`**: Open Slack.
    -   **`t`**: Open Reminder.
    -   **`v`**: Open Visual Studio Code.
    -   **`y`**: Open Spotify.

-   **`hyper + s`**: Arrow Key Navigation
    -   **`j`**: Volume Down.
    -   **`i`**: Volume Up.
    -   **`h`**: Brightness Down.
    -   **`u`**: Brightness Up.
    -   **`m`**: Mute/Unmute.


-  **`hyper + v`**: Arrow Key Navigation
    -   **`h`**: Left Arrow.
    -   **`j`**: Down Arrow.
    -   **`k`**: Up Arrow.
    -   **`l`**: Right Arrow.
    -   **`u`**: Page Down.
    -   **`i`**: Page Up.
    -   **`y`**: Horizontal Wheel Up.
    -   **`o`**: Horizontal Wheel Down.

## Usage

1. **Activate Layers**: Hold the designated key (Tab or Caps Lock) to enable the respective layer, and press the mapped keys to perform the desired actions.
2. **Single Press**: Tapping Caps Lock or Tab without holding will retain their original function (Escape or Tab).

This configuration enables efficient window management and application launching directly from the keyboard, enhancing productivity with minimal hand movement.

## Troubleshooting

If the key mappings are not working as expected, delete symlink and recreate.