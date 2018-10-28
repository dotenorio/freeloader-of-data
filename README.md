# Freeloader of Data
A simple crawler or scraper to get open graph and other meta data from any website.

<a href="https://nodei.co/npm/freeloader-of-data/"><img src="https://nodei.co/npm/freeloader-of-data.png"></a>

## To install

```
$ npm install -S freeloader-of-data
```

## Examples

Simple:

```
 $ node examples/simple.js
```

Result: 

```
{ 
  title: 'Freeloader of Data',
  type: 'website',
  url: 'https://raw.githubusercontent.com/dotenorio/freeloader-of-data/master/examples/site/index.html',
  site_name: 'Freeloader of Data',
  description: 'This is a test for Freeloader of Data.',
  image: {
    url: 'https://raw.githubusercontent.com/dotenorio/freeloader-of-data/master/examples/site/image.jpg'
  },
  author: 'Fernando M Tenório'
 }
```

### License

[MIT](LICENSE)
