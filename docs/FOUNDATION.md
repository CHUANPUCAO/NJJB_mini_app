# Foundation and implementation stages

## Current choice
Native JavaScript + WXML + WXSS, no third-party runtime. Layout data is independent of presentation. Use a lightweight 2D foundation now; choose pixel/isometric/full 3D after reviewing the venue and a visual prototype. A full 3D renderer would be a separate implementation decision.

## Boundaries for the online version
- Venue: floors, fixtures, tables and seats, all with stable IDs.
- Presence: avatar's virtual floor and position; physical check-in and actual seat must be separate fields.
- Identity: authenticated user ID, chosen profile and avatar. Current demo IDs are fictional.
- Social: server-stored conversations, messages, reactions; visibility, invitations, block/report and moderation rules remain undecided.
- Gifts/orders: server-owned catalogue, recipient acceptance, order state, payment confirmation and staff fulfillment. Never fulfill from a client-side payment result alone.
- Staff: authenticated operations console for orders and venue resources.
- Optional later modules: pool queue, music requests, TV reservations, moderated blackboard and private consumption history. Keep these outside the initial social milestone.

Do not use the current page's local state as production storage. Backend provider is unselected; decide based on account capabilities, hosting region, realtime needs and operating cost. Secrets belong on the server. Client positions, identity and order amounts are untrusted inputs.

## Next stages
1. Import and compile the local starter in WeChat Developer Tools; check phone sizes and tap coordinates.
2. Survey the venue and replace the sample layout; pick an art direction.
3. Build authenticated presence and social interactions with a backend; define guest consent, reporting, rate limits and retention.
4. Integrate the bar's catalogue and staff fulfillment, then payment in the appropriate merchant setup.
5. Test with the owner and a small invited group before broader release.

## Acceptance checks in Developer Tools
Both floors render; stairs and floor buttons work; furniture cannot be selected as a standing destination; guest selection does not move the avatar; likes toggle; blank messages do not send; text stays local; drink preview explicitly says no order/payment. Test touch positioning on an actual device before calling the movement implementation verified.
