# Microblog Client

The Microblog Client is an app which gives an interface that consumes for the Microblog API. Feel free to modify it on your way.

### [Live Demo](https://microblog-client-stg.herokuapp.com/)

### Dependencies

* Ruby 2.3.4
* Rails 5.0.1
* Node.js

### Instalation

```sh
$ cd microblog_client
$ bundle install && npm install
```

### Running

First, create your database.yml from scratch or use our sample:
```sh
$ cp config/database.yml.sample config/database.yml
```

Before run your app, you must to create and apply the app's migrations:
```sh
$ cd microblog_api
$ bundle install
```

To run the server, you'll need to use the gem [foreman](https://github.com/ddollar/foreman). Install it and then you can run the server with the default Procfile.dev configuration:

Now, you can start the server:
```sh
$ foreman start -f Procfile.dev 
```

That's it! ;)
