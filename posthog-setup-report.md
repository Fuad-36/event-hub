<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into your **Event Hub** Next.js App Router project. Here's a summary of every change made:

- **`posthog-js`** was installed as a dependency via npm.
- **`instrumentation-client.ts`** (new file) — initializes PostHog client-side using the Next.js 15.3+ `instrumentation-client` pattern. Configured with a reverse proxy (`/ingest`), error tracking (`capture_exceptions`), and debug mode in development.
- **`next.config.ts`** — added reverse proxy rewrites for PostHog ingestion (`/ingest/*` → `https://us.i.posthog.com/*`) and `skipTrailingSlashRedirect: true`.
- **`.env.local`** — `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables written and `.gitignore`-protected.
- **`components/ExploreBtn.tsx`** — added `posthog.capture('explore_events_clicked')` inside the existing `onClick` handler.
- **`components/EventCard.tsx`** — converted to a client component (`'use client'`) and added `posthog.capture('event_card_clicked', { event_title, event_slug, event_location, event_date })` on the link's `onClick`.
- **`app/page.tsx`** — converted to a client component and added `posthog.capture('home_page_viewed')` in a `useEffect` that fires once on mount.

## Events instrumented

| Event Name | Description | File |
|---|---|---|
| `home_page_viewed` | User lands on the home page — top of the event discovery funnel | `app/page.tsx` |
| `explore_events_clicked` | User clicks the "Explore Events" CTA button, showing intent to browse | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks an event card to view details (includes title, slug, location, date) | `components/EventCard.tsx` |

## Next steps

We've built a dashboard and five insights in PostHog to help you monitor user behaviour from day one:

### Dashboard
- [Analytics basics](https://us.posthog.com/project/318761/dashboard/1294750)

### Insights
- [Event Discovery Funnel](https://us.posthog.com/project/318761/insights/wKWoXc3z) — Ordered conversion funnel: Home Page Viewed → Explore Events Clicked → Event Card Clicked
- [All Events Daily Trend](https://us.posthog.com/project/318761/insights/HIhGm5qP) — Daily line graph of all three tracked events together
- [Unique Visitors to Event Hub](https://us.posthog.com/project/318761/insights/Ri4gEzS3) — Daily active users (DAU) based on home page views
- [Event Card Click Rate](https://us.posthog.com/project/318761/insights/LixUmAs8) — Weekly bar chart comparing event card clicks vs page views
- [Explore Button Engagement](https://us.posthog.com/project/318761/insights/wDTSw2Ak) — Weekly unique users who clicked the Explore Events button

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/posthog-integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
