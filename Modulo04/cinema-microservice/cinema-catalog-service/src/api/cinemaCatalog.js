module.exports = (app, repository) => {
    app.get('/cities', async (req, res, next) => {
        const cities = await repository.getAllCities();
        if(!cities) return res.sendStatus(404);
        return res.json(cities);
    })

    app.get('/cities/:cityId/movies', async (req, res, next) => {
        const movies = await repository.getMoviewByCityId(req.params.cityId);
        if(!movies) return res.sendStatus(404);

        return res.json(movies);
    })

    app.get('/cities/:cityId/movies/:movieId', async (req, res, next) => {
        const sessions = await repository.getMovieSessionByCityId(req.params.movieId, req.params.cityId);
        if(!sessions) return res.sendStatus(404);

        return res.json(sessions);
    })

    app.get('/cities/:cityId/cinemas', async(req, res, next) => {
        const cinemas = await repository.getCinemasByCityId(req.params.cityId);
        if(!cinemas) return res.sendStatus(404);

        return res.json(cinemas);
    })
    
    app.get('/cinemas/:cinemaId/movies', async(req, res, next) => {
        const movies = await repository.getMoviesByCinemaId(req.params.cinemaId);
        if(!movies) return res.sendStatus(404);

        return res.json(movies);
    })

    app.get('/cinemas/:cinemaId/movies/:movieId', async(req, res, next) => {
        const sessions = await repository.getMovieSessionByCinemaId(req.params.movieId, req.params.cinemaId);
        if(!sessions) return res.sendStatus(404);

        return res.json(sessions);
    })

}