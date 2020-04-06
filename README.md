# TechFlix

Welcome to the TechFlix app.
Thanks to TheMovieDatabase for providing public data and images.

## Structure
The system has
- techswitch-ui: the main UI of the application
- techswitch-api: the central api used by the ui.
- a collection of other services from which the API collects data.

## Setup
Setup is mostly handled by docker and docker-compose.
You'll want both of these installed.

### docker-secret.env
The only part not done for you is the setup of a the `docker-secret.env` file.
You'll need to create this file and keep it secret - it contains passwords!

This file should contain a single environment variable
- 'TMDB_API_KEY'

You can apply for your own key by creating an account at: https://www.themoviedb.org/.
(or you could probably ask your trainer nicely and share theirs)

### Running the code.
You should now be able to run the code with `docker-compose up --build`.