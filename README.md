## Open source search app

wikiviewer is an open source search app that searches Wikipedia. The app is built with React, SCSS and Webpack.

See the site [here](http://wiki-viewer.com).

<br>

## Use cases

Use this app to search Wikipedia!

<br>

## Guide
- [Open source search app](#open-source-search-app)
- [Use cases](#use-cases)
- [Guide](#guide)
- [Develop locally](#develop-locally)
- [Deploy site](#deploy-site)
- [Configuration](#configuration)
  - [.env variables](#env-variables)
  - [API endpoints](#api-endpoints)
- [Team](#team)
  - [Hire](#hire)
  - [Members](#members)
  - [Contributing](#contributing)
- [Project information](#project-information)
  - [Built with](#built-with)
  - [License](#license)
- [Issues](#issues)
  - [Posting issues](#posting-issues)
  - [Resolving issues](#resolving-issues)
  
<br>

## Develop locally

***Note***

CSS is not hot-reloaded.

[Configure](#configuration). Run `yarn install` then run `yarn run dev`.

<br>

## Deploy site

***Note***

A `.css` and `.js` file will be put into `dist/`. Make sure your `.env` has `NODE_ENV` as `production`.

[Configure](#configuration). Run `yarn install`, then `yarn run build`. Your production files will be in `dist/`.

<br>

## Configuration

### .env variables

Save these key, value pairs to an .env file, using this syntax:

```
VARIABLE_NAME=VALUE
VARIABLE_NAME_2=VALUE
```
<br>

| variable name  | datatype  | description |
|---|---|---|
| NODE_ENV  | String  | Either `production` or `development`. |
| API | String | The full API. Include trailing `/`. |

<br><br>

### API endpoints

***Note***

Enable CORS.

<br>

| end point  | authorized | body | return type  | description |
|---|---|---|---|---|
| *GET* wikiviewer/search?q={ QUERY }  | No | `QUERY: String (queryParameter)` | Object  | Search Wikipedia and return a Search Object. |

<br><br>

## Team

`wikiviewer` was built using various technologies, and having to deploy for production on S3's website hosting was a learning experience. Various issues came up, but it was fun to work through all that!


### Hire

`wikiviewer` was remade alongside [bookshelf](https://github.com/GerardVee/bookshelf), my newest and toughest project yet. [Contact me](https://gerardvee.com/contact) if you're interested in my skills.


### Members

- [gerardvee](https://github.com/GerardVee)


### Contributing

Please post an issue if you believe you've found one. I'll get right to work on it. Additionally, you can post features under issues. Just make sure to clarify that it is a feature!

<br>

## Project information

Specifics of the project. Technologies and licensing are displayed here.

### Built with

**Base**

- [React](https://github.com/facebook/react)
- [SCSS](https://github.com/sass/sass)
- [Webpack](https://github.com/webpack/webpack)

**Supported by**

- Babel

### License

All code in this repository is provided under the [MIT License](https://github.com/GerardVee/wikiviewer/blob/master/LICENSE).

<br>

## Issues

Issues are a part of life. That doesn't mean we have to live with them though! If you encounter an issue, make sure it hasn't been [resolved](https://github.com/GerardVee/wikiviewer/issues?utf8=%E2%9C%93&q=is%3Aresolved) yet.


### Posting issues

New issue structure:

```
## Reproduce

How this issue can be reproduced.

## Work Around

(Potential work arounds), not necessary.

Potential Solutions

1. (Potential solution)
2. (Potential solution)
not necessary.

Extra information.
```

<br>

### Resolving issues

Issue resolved structure:

```
## What caused this

The specifics of what caused this.

## What was done

What was done to help resolve this.

## What technology was used

What extra technology if any was implemented/imported to help resolved this issue.

### Before

The code core to the issue before the change.

### After

The fixed code.

```
