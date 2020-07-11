# jrm_unit4_project

## Hello World

Three Models: Book, Guest, and Checkout

Book:
- Title
- Author
- Publication Date
- Genre
- ISBN
- has many: Guests

Guest
- Name
- Address
- has many: Books

Checkout
- Book
- Guest
- Start Date
- End Date

Unit 4 Project Report

- Tools Used:
    - Basics
        - React
        - Ruby on Rails
        - SQL
    - Special Features
        - Fakes
        - React Router
            - There’s a title and nav in App.js, but all other content is contained within individual components included in a single <Switch>
- Challenges
    - Getting pages to automatically refresh/redirect to show updated data. I remember that there’s a means to do it using the basic functionality of React, but it seems as if I somehow threw a wrench in it.
    - Getting the Models to play nice
        - Couldn’t solve the issue of deleting multiple checkouts *through* book or guest.
        - Successfully sent json for all three models when the SHOW route for book or guest was accessed. Using this I was able to make the page display all guests who had checked out a specific book, or all the books checked out by a specific guest
    - I couldn’t accurately gauge how long each step of the process took, because while working on the project I would switch between different tasks as ideas came to me. Looking at one problem would lead me so a solution to a different problem, and vice versa.
