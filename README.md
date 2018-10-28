# freeloader
A simple crawler or scraper to get open graph and other meta data from any website.

<a href="https://nodei.co/npm/freeloader/"><img src="https://nodei.co/npm/freeloader.png"></a>

## To install

```
$ npm install -S freeloader
```

## Examples

Simple:

```
 $ node examples/simple.js
```

Result: 

```
{ 
  title: 'Freeloader',
  type: 'website',
  url: 'https://raw.githubusercontent.com/dotenorio/freeloader/master/examples/site/index.html',
  site_name: 'Freeloader',
  description: 'This is a test for Freeloader.',
  image: {
    url: 'https://raw.githubusercontent.com/dotenorio/freeloader/master/examples/site/image.jpg'
  },
  author: 'Fernando M Tenório'
 }
```

### License

[MIT](LICENSE)
