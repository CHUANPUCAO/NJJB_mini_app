# Nanjie Bar — starter Mini Program

A native WeChat Mini Program foundation for a social digital version of Nanjie Bar in Sanlitun, Beijing.

## Start on your Mac

1. Download the macOS stable release of **WeChat Developer Tools** from https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html . Choose Apple Silicon or Intel to match Apple menu → About This Mac.
2. Install and open it, then use your own WeChat account to scan its sign-in QR code.
3. Import this `nanjie-miniapp` folder (the folder containing `project.config.json`). Choose Mini Program as the project type.
4. The AppID is intentionally blank. Use the tool's test-account option if available; otherwise obtain a Mini Program AppID at https://mp.weixin.qq.com/ and enter it during import. A normal WeChat account is not a Mini Program AppID. Do not enter an AppSecret in this project.
5. Select no cloud service for this local demo if prompted, then compile in the simulator.
6. Switch floors, tap empty floor to reposition your avatar, select a guest, toggle a like, and try a local message or drink-gift preview.

The project requires no npm packages or build command. Phone preview and account capabilities depend on the account and developer-tool configuration. Developer Tools has not yet been installed or used to compile this project on this Mac.

## What exists

- Two sample floors with tables, chairs, bar, pool table, DJ booth, TV, blackboard and stairs.
- Tap-to-position avatar with checks against furniture footprints. This is not walking/pathfinding; movement is instantaneous.
- Fictional guest selection, session-only likes and local message display.
- Drink gift preview with no transaction.
- Separate venue data so reference photos can replace the invented layout.

No real accounts, online users, message delivery, purchases, persistence, reservations, moderation service, music controls or alcohol tracking are implemented. Messages clear when changing guest or floor; likes reset when the page instance is recreated. The map is a neutral top-down placeholder, not a finished pixel or 3D art direction.

## Project guide

- `miniprogram/app.*`: application entry and global appearance.
- `miniprogram/pages/bar/`: map screen and local interactions.
- `miniprogram/data/venue.js`: floor layout, fictional guests and movement validation.
- `docs/FOUNDATION.md`: architecture and staged implementation.
- `docs/VENUE-SURVEY.md`: capture checklist for the actual bar.
- `tests/venue.test.js`: basic layout and furniture-boundary checks; run with `node tests/venue.test.js` when Node is available.

## Account setup later

Coordinate with the owner before registering the production Mini Program so the bar controls its account and identity. Confirm the applicable account category and capabilities in the WeChat platform before adding social messaging or payments. Account verification, sign-in and publication are owner actions; this starter does not register or publish anything.
