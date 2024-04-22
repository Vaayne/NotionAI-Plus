# Changelog

## v0.1.6 - 2024-04-22

### Changed

- Introduce langchain as backend engine provider

## v0.1.5 - 2024-01-07

### Fixed

- Fix NotionAI return 400 error [issue](https://arc.net/l/quote/cgkrtahy)

## v0.1.4 - 2023-12-17

### Added

- Support [GoogleAI](https://ai.google.dev) as backend engine

## v0.1.3 - 2023-12-02

### Added

-   Add context menu for input box
-   OpenAI API settings support set url and model

### Fixed

-   fix init atom value issue
-   fix input box shortcut issue

## v0.1.2 - 2023-12-01

### Fixed

-   Fix contexnt menu and main window position issue

## v0.1.1 - 2023-11-30

### Fixed

-   fix port message connection issue

## v0.1.0 - 2023-11-29

### Added

-   Support Dropdown Menu
-   Better UI
-   jotai for state manage
-   radix-theme for theme
-   remove unused packages
-   refactor code

## v0.0.25 - 2023-11-11

### Fixed

-   Fix chatgpt web, claude web and google bard engine

## v0.0.24 - 2023-08-08

### Added

-   Support Claude as backend engine

## v0.0.23 - 2023-07-18

### Added

-   support set openai proxy host

## v0.0.22 - 2023-06-02

### Fixed

-   Resolved authentication issue on ChatGPT Web
-   Added animation to send button for better user experience
-   Revised ChatGPT Mobile model to text-davinci-002-render-sha-mobile, improving speed and overall performance.

## v0.0.21 - 2023-06-01

### Fixed

-   Fix NotionAI not working issue
-   Improve ChatGPT Web error message
-   Bard support image

## v0.0.20 - 2023-05-19

### Fixed

-   Fix port message API not responsing issue

## v0.0.19 - 2023-04-28

### Fixed

-   Fix fetch API not working.

## v0.0.18 - 2023-04-27

### Fixed

-   Fix using chatgpt web
-   Enhance error message

## v0.0.17 - 2023-04-25

### Added

-   Support new bing as backend engine
-   Support Google Bard as backend engine

## v0.0.16 - 2023-04-24

### Added

-   support stream response, so you can see the response in real time.
-   markdown support code highlight

### Fixed

-   Fixed an issue when typing in input box, will trigger global shortcut key on github.
-   Fixed chatgpt web not working.

## v0.0.15 - 2023-04-06

### Added

-   support NotionBoy as backend engine

## v0.0.14 - 2023-03-28

### Fixed

-   Fixed an issue that can not set the default engine in the options page.

## v0.0.13 - 2023-03-27

### Fixed

-   Fixed an issue that NotionAI continue writing not working

## v0.0.12 - 2023-03-26

### Added

-   Added a new icon from midjourney.
-   Add a dragable button.
-   Add more context menu items.

### Improved

-   Improved the UI, auto show prompt options when focus on input.

## v0.0.11 - 2023-03-25

### Added

-   Added a new feature that allows you to drag the window to any position on the screen.
-   Added a new feature that allows you to activate the window by using context menu.
-   Redesign the UI
-   Add instructions for popup and options page.

### Fixed

-   Fixed UI issues caused by the daisy ui.

## v0.0.10 - 2023-03-13

### Fixed

-   Resolved an issue that occurred while setting the Notion space ID and default engine in the options page.

## v0.0.9 - 2023-03-07

### Fixed

-   Fixed an issue with the ChatGPT web.

### Added

-   Added support for ChatGPT API and ChatGPT web.
-   Support for automatically getting space ID for NotionAI.
-   Added a full mode feature.
-   Added "append" and "replace" buttons for input boxes in the webpage.
