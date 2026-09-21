// sidey.config.ts

export const sideyConfig = {
  /**
   * Global SEO and Site Identity
   * -------------------------------------------------------------------------
   * These values populate your HTML meta tags, RSS feed definitions,
   * and structural header components across the template.
   */
  site: {
    // The main title displayed in browser tabs and search engine results
    title: "Above Hoarded Gold",

    // A short fallback summary of your site used for SEO and social share cards
    description: "A pencils-paper-and-dice adventure game about journeys and returns.",

    // The production domain where your site is deployed (no trailing slash)
    url: "https://.com",  //todo

    // Your name, utilized in copyright strings and author meta tags
    author: "Jake Schreuder",

    // The primary language attribute for HTML accessibility engines (e.g., "en", "id")
    locale: "en",
  },

  /**
   * Primary Sidebar Navigation
   * -------------------------------------------------------------------------
   * Controls the links rendered inside your fixed navigation panel.
   * You can add, reorder, or remove objects here to update your site's structure.
   */
  navigation: [
    { label: "Home", href: "/" },
    { label: "Character", href: "/character" },
    { label: "Inventory", href: "/inventory" },
    { label: "Play", href: "/playing-the-game" },
    { label: "Referee", href: "/running-the-game" },
    { label: "Travel", href: "/travel" },
    // { label: "Writings", href: "/writings" }
    // { label: "RSS", href: "/rss.xml" },
  ],
}

export type SideyConfigType = typeof sideyConfig
