# Bloc Chat

Bloc Chat is a web-based chat room for friend to talk with each other. The app was built with purely front-end technology. Firebase provided the back-end with a no-sql database. Using AngularJS the app works in real time communicating with Firebase to listening devices.

When creating this application the chief issue was to build this project using only JavaScript. Frameworks can be used but no back-end languages could be used in the application itself.

The solution to this issue was Firebase. Firebase serves as a back-end system with a noSQL database. This allows a developer to quickly set-up web or mobile applications without worrying about large infrastructure. Using AngularJS my application communicates with Firebase in real-time to allow users to chat with each other.

## Run Locally

Prerequisites: Ruby on Rails 5.1.4

* Fork and Clone Repository
* In the root run
```
bundle install --without production
```
* Set-up the database:
```
rake db:create
rake db:migrate
rake db:seed
```
* Serve the app
```
rails s
```
* View the site at localhost:3000

## Who

Created and maintained by [Matt Musser](http://www.github.com/mattMusser)
