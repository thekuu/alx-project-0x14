# ALX Project 0x14: MoviesDatabase API Integration

This project involves interacting with the **MoviesDatabase API** to fetch and manipulate movie-related data. Below is an overview of the API, its endpoints, request/response formats, authentication, and best practices.

## API Overview

The **MoviesDatabase API** provides access to a comprehensive collection of movie data, including titles, release dates, ratings, cast, and more. Key features include:
- Fetching movie details by ID, title, or genre.
- Searching for movies with filters (year, rating, etc.).
- Retrieving actor/actress information.
- Accessing posters, trailers, and other media.

## Version

The current version of the API is **v1**, as documented on the [MoviesDatabase API website](https://moviesdatabase.example.com/docs).

## Available Endpoints

Here are the main endpoints available:

1. **`/titles`**  
   - Fetch a list of movies with optional filters (e.g., `/titles?year=2020&genre=action`).
   
2. **`/titles/{id}`**  
   - Retrieve detailed information about a specific movie by its ID.

3. **`/search`**  
   - Search for movies by title, actor, or keyword (e.g., `/search?query=Inception`).

4. **`/actors`**  
   - Get a list of actors or details about a specific actor.

5. **`/ratings`**  
   - Fetch or submit ratings for movies (requires authentication).

## Request and Response Format

### Request Structure
- **Method**: Typically `GET` (for fetching data) or `POST` (for submitting data).
- **Headers**:  
  - `Content-Type: application/json`  
  - `Authorization: Bearer {API_KEY}` (if required).

Example request to fetch a movie by ID:
```bash
curl -X GET 'https://moviesdatabase.example.com/api/v1/titles/123' \
-H 'Authorization: Bearer your_api_key_here'