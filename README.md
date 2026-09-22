# Denise Nadal's MLDS Test Page

## Installation

This project uses [Node](https://nodejs.org/en) and [Node Package Manager](https://www.npmjs.com/) to run build processes and manage packages, install both before proceeding. I recommend using [NVM](https://www.nvmnode.com/) to manage your Node versions.

Use `npm install` to install all packages and scripts for this project.

## Run Locally

This project uses [11ty](https://www.11ty.dev/docs/) to build webpages from liquid templates and markdown files. 11ty is installed by npm, and use the scripts below to build and serve the webpages.

`npm run start` to run a local dev server
`npm build` to execute the build script, which will dump a static version of the site in the `build` folder

## Deploy to Production

This site is hosted on [Netlify](netlify.com) using a [github integration](https://docs.netlify.com/start/quickstarts/deploy-from-repository/). New commits on the 'Main' branch of the repository will automatically trigger new builds on the production site.

## Documentation

This documentation is focused around several themes:

### Data Sources

The first report is provided by the Maryland Longitudinal Data Systems Center and follows there existing security protocols. The 3 additional reports were created by Denise, and use publically accesible data provided by the US Department of Education. This data is accessed via API.

### Security

The data sources used to create the reports are publically accessible and contain no identifying information in them, and are sourced and vetted by the Department of Education, thus meeting FERPA requirements. The data is linked to Power BI via the API, using a secure AKI key. This key is not accessible via the front-end code or server. Each report uses as little data as possible.
The site is hosted on Netlify's secure CDN network and connections are secured via the service's built-in SSL. New builds can only be triggered by admins with access to the Netlify account this site is hosted on, or github users with permission to commit to the repo. While the github repo is public, only Denise has access to commit code.

### Accessibility

This site uses accessibility best practices by using semantic HTML to name landmark areas of the page, and hierarchical page headings to delineate seperate topics. All embedded charts use title attributes to describe the content, and all links have descriptive text content. The page can be navigated via keyboard, and all elements meet WCAG color contrast requirements. The default text size on all charts is at least 14px, but this can vary based on screen size and zoom level.

### Design System

Since this is a very simple webpage, the design system contains only color variables. There are as follows:

```
	--color-bg: #fff;
	--color-fg: #000;
	--color-primary: #C40E3D;
	--color-primary-contrast: #fff;
	--color-secondary: #FEC232;
```

### Site Structure/Build Processes

Files are organized as follows:

```
_site         -> public build files
_node_modules -> node
_notes        -> internal planning files
src
    _includes -> common page components: head, header, footer
    _layouts  -> base page layout assembles all of the common components
    assets    -> folder for public assets: css & images
    index.html > the actual page that gets compiled using the base layout.
```

### Power Bi Reports

To build the reports, I connected the [College Scorecard](https://collegescorecard.ed.gov/data/api-documentation/) as a data source in Power Bi. I created a report theme based on the Maryland State brand guidelines in terms of colors and fonts (I used Corbel, which is visually similar to Montserrat). The charts in Example 3 are both from the Schools data endpoint, with a filter on all schools in Maryland that are currently active. The query only calls for a few fields: ID,name, city, zip, ownership, highest degree awarded, latest student size, admission acceptance rate.

The chart in example 2 queries for student body size for specific years instead of the latest year. I selected the 5 most recent years available: 2019 - 2024. I had to unpivot the data to be able to graph it in a linear chart.

After creating all of the reports, I published them to my own power bi web instance, and from there, published to the web, copying the embed codes to add to my website.
