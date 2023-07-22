# Project REST-Rant

REST-Rant is an app where users can review restaurants.

Method | Path       |  Purpose
GET    |    /       |   Home page
GET    | /places    |   Places index page
POST   | /places    |   create new place
GET    | /places/new  |   Form page for creating a new place
GET    | /places:id    |   details about a page
PUT    | /places:id    |   Update a page
GET    | /places:id/edit    |   form page for editing a place
DELETE | /places:id  |  delete a place
POST   | /places:id/rant   |   create a rant about a place
DELTE  | /places:id/rantId   |   delete a rant
GET    |  *  |  404 page