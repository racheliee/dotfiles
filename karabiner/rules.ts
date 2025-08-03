import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open, rectangle, shell } from "./utils";

const rules: KarabinerRules[] = [
  // Define the Hyper key itself
  {
    description: "Hyper Key (⌃⌥⇧⌘)",
    manipulators: [
      {
        description: "caps_lock -> Hyper Key",
        from: {
          key_code: "caps_lock",
          modifiers: {
            optional: ["any"],
          },
        },
        to: [
          {
            set_variable: {
              name: "hyper",
              value: 1,
            },
          },
        ],
        to_after_key_up: [
          {
            set_variable: {
              name: "hyper",
              value: 0,
            },
          },
        ],
        to_if_alone: [
          {
            key_code: "escape",
          },
        ],
        type: "basic",
      },
      //      {
      //        type: "basic",
      //        description: "Disable CMD + Tab to force Hyper Key usage",
      //        from: {
      //          key_code: "tab",
      //          modifiers: {
      //            mandatory: ["left_command"],
      //          },
      //        },
      //        to: [
      //          {
      //            key_code: "tab",
      //          },
      //        ],
      //      },
    ],
  },
  {
    description: "Tab as Extra Control (⌃)",
    manipulators: [
      {
        type: "basic",
        from: {
          key_code: "tab",
          modifiers: {
            optional: ["any"]
          }
        },
        to: [
          {
            set_variable: {
              name: "tab_held",
              value: 1
            }
          }
        ],
        to_after_key_up: [
          {
            set_variable: {
              name: "tab_held",
              value: 0
            }
          }
        ],
        to_if_alone: [
          {
            key_code: "tab"
          }
        ]
      },
      {
        type: "basic",
        from: {
          key_code: "d",
          modifiers: {
            optional: ["any"]
          }
        },
        conditions: [
          {
            type: "variable_if",
            name: "tab_held",
            value: 1
          }
        ],
        to: [
          {
            key_code: "left_control",
          }
        ]
      }
    ]
  },  
  {
    description: "Remap Shift + Delete to Forward Delete",
    manipulators: [
      {
        type: "basic",
        from: {
          key_code: "delete_or_backspace",
          modifiers: {
            mandatory: ["left_shift"]
          }
        },
        to: [
          {
            key_code: "delete_forward"
          }
        ]
      }
    ]
  },  
  ...createHyperSubLayers({
    // aerospace ctrl+alt+key (focus, mode changei)
    h: {
      to: [
        {
          key_code: "h",
          modifiers: ["left_control", "left_option"],
        },
      ],
    },

    j: {
      to: [
        {
          key_code: "j",
          modifiers: ["left_control", "left_option"],
        },
      ],
    },

    k: {
      to: [
        {
          key_code: "k",
          modifiers: ["left_control", "left_option"],
        },
      ],
    },

    l: {
      to: [
        {
          key_code: "l",
          modifiers: ["left_control", "left_option"],
        },
      ],
    },

    semicolon: {
      to: [
        {
          key_code: "semicolon",
          modifiers: ["left_control", "left_option", "left_shift"],
        },
      ],
    },

    comma: {
      to: [
        {
          key_code: "comma",
          modifiers: ["left_control", "left_option"],
        },
      ],
    },

    slash: {
      to: [
        {
          key_code: "slash",
          modifiers: ["left_control", "left_option"],
        },
      ],
    },

    // aerospace : ctrl + alt + shift + key
    w: {
      h: {
        to: [
          {
            key_code: "h",
            modifiers: ["left_control", "left_option", "left_shift"],
          },
        ],
      },

      j: {
        to: [
          {
            key_code: "j",
            modifiers: ["left_control", "left_option", "left_shift"],
          },
        ],
      },

      k: {
        to: [
          {
            key_code: "k",
            modifiers: ["left_control", "left_option", "left_shift"],
          },
        ],
      },

      l: {
        to: [
          {
            key_code: "l",
            modifiers: ["left_control", "left_option", "left_shift"],
          },
        ],
      },

      f: {
        to: [
          {
            key_code: "f",
            modifiers: ["left_control", "left_option", "left_shift"],
          },
        ],
      },

      equal_sign: {
        to: [
          {
            key_code: "equal_sign",
            modifiers: ["left_control", "left_option", "left_shift"],
          },
        ],
      },

      hyphen: {
        to: [
          {
            key_code: "hyphen",
            modifiers: ["left_control", "left_option", "left_shift"],
          },
        ],
      },
    },

    // ; = "spacebar" for f18
    spacebar: {
      to: [{ key_code: "f18" }],
    },
    1: {
      to: [{ key_code: "caps_lock" }],
    },
    f: {
      to: [{ key_code: "f17" }],
    },
    d: {
      to: [{ key_code: "f16" }],
    },
    q: {
      to: [
        {
          key_code: "left_shift",
          modifiers: ["left_command", "left_control", "left_option"],
        },
      ],
    },

    // o = "Open" applications
    o: {
      c: app("Calendar"),
      v: app("Visual Studio Code"),
      j: app("IntelliJ IDEA Ultimate"),
      i: app("Warp"),
      b: app("Obsidian"),
      a: app("Arc"),
      t: app("Reminders"),
      d: app("Discord"),
      k: app("KakaoTalk"),
      s: app("Slack"),
      f: app("Finder"),
      p: app("Preview"),
      n: app("Notion"),
      e: app("Notes"),
      m: app("Messages"),
      y: app("Spotify"),
    },

    // TODO: This doesn't quite work yet.
    // l = "Layouts" via Raycast's custom window management
    // l: {
    //   // Coding layout
    //   c: shell`
    //     open -a "Visual Studio Code.app"
    //     sleep 0.2
    //     open -g "raycast://customWindowManagementCommand?position=topLeft&relativeWidth=0.5"

    //     open -a "Terminal.app"
    //     sleep 0.2
    //     open -g "raycast://customWindowManagementCommand?position=topRight&relativeWidth=0.5"
    //   `,
    // },

    // s = "System"
    s: {
      i: {
        to: [
          {
            key_code: "volume_increment",
          },
        ],
      },
      j: {
        to: [
          {
            key_code: "volume_decrement",
          },
        ],
      },
      u: {
        to: [
          {
            key_code: "display_brightness_increment",
          },
        ],
      },
      h: {
        to: [
          {
            key_code: "display_brightness_decrement",
          },
        ],
      },
      m: {
        to: [
          {
            key_code: "mute",
          },
        ],
      },
      l: {
        to: [
          {
            key_code: "q",
            modifiers: ["right_control", "right_command"],
          },
        ],
      },
      e: open(
        `raycast://extensions/thomas/elgato-key-light/toggle?launchType=background`
      ),
      // "D"o not disturb toggle
      d: open(
        `raycast://extensions/yakitrak/do-not-disturb/toggle?launchType=background`
      ),
      // "T"heme
      t: open(`raycast://extensions/raycast/system/toggle-system-appearance`),
      c: open("raycast://extensions/raycast/system/open-camera"),
    },

    // v = "moVe" which isn't "m" because we want it to be on the left hand
    // so that hjkl work like they do in vim
    v: {
      h: {
        to: [{ key_code: "left_arrow" }],
      },
      j: {
        to: [{ key_code: "down_arrow" }],
      },
      k: {
        to: [{ key_code: "up_arrow" }],
      },
      l: {
        to: [{ key_code: "right_arrow" }],
      },
      u: {
        to: [{ key_code: "page_down" }],
      },
      i: {
        to: [{ key_code: "page_up" }],
      },
      y: {
        to: [
          {
            mouse_key: {
              horizontal_wheel: 32,
            },
          },
        ],
      },
      o: {
        to: [
          {
            mouse_key: {
              horizontal_wheel: -32,
            },
          },
        ],
      },
    },

    // c = Musi*c* which isn't "m" because we want it to be on the left hand
    // c: {
    //   p: {
    //     to: [{ key_code: "play_or_pause" }],
    //   },
    //   n: {
    //     to: [{ key_code: "fastforward" }],
    //   },
    //   b: {
    //     to: [{ key_code: "rewind" }],
    //   },
    // },

    // r = "Raycast"
    r: {
      e: open(
        "raycast://extensions/raycast/emoji-symbols/search-emoji-symbols"
      ),
      h: open(
        "raycast://extensions/raycast/clipboard-history/clipboard-history"
      ),
      1: open(
        "raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-1"
      ),
      2: open(
        "raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-2"
      ),
    },
  }),
];

fs.writeFileSync(
  "karabiner.json",
  JSON.stringify(
    {
      global: {
        show_in_menu_bar: false,
      },
      profiles: [
        {
          name: "Default",
          complex_modifications: {
            rules,
          },
        },
      ],
    },
    null,
    2
  )
);
