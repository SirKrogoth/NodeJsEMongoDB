const cinemaCatalog = [
    [{
        cidade: "Gravataí",
        uf: "RS",
        cinemas: []
    }, {
        cidade: "Porto Alegre",
        uf: "RS",
        pais: "BR",
        cinemas: [{
            _id: ObjectId(),
            nome: "Cinemark Bourbon Ipiranga",
            salas: [{
                nome: 1,
                sessoes: [{
                    data: ISODate("2021-12-01T09:00:00Z"),
                    idFilme: ObjectId("605e57238ed0562b5da2f87d"),
                    filme: "Vingadores: Guerra Infinita",
                    valor: 25.00,
                    assentos: [{
                        numero: 1,
                        disponivel: true
                    }, {
                        numero: 2,
                        disponivel: false
                    }]
                }, {
                    data: ISODate("2021-12-01T11:00:00Z"),
                    idFilme: ObjectId("615df5a81071da7cf7c7d8d5"),
                    filme: "Vingadores: Guerra Infinita",
                    valor: 25.00,
                    assentos: [{
                        numero: 1,
                        disponivel: true
                    }, {
                        numero: 2,
                        disponivel: true
                    },]
                }, {
                    data: ISODate("2021-12-01T13:00:00Z"),
                    idFilme: ObjectId("615df5a81071da7cf7c7d8d6"),
                    filme: "Vingadores: Era de Ultron",
                    valor: 20.00,
                    assentos: [{
                        numero: 1,
                        disponivel: true
                    }, {
                        numero: 2,
                        disponivel: false
                    }, {
                        numero: 2,
                        disponivel: true
                    },]
                }]
            }, {
                nome: 2,
                sessoes: [{
                    data: ISODate("2021-12-01T09:00:00Z"),
                    idFilme: ObjectId("615df5a81071da7cf7c7d8d6"),
                    filme: "Vingadores: Era de Ultron",
                    valor: 25.00,
                    assentos: [{
                        numero: 1,
                        disponivel: true
                    }, {
                        numero: 2,
                        disponivel: false
                    },]
                }, {
                    data: ISODate("2021-12-01T11:00:00Z"),
                    idFilme: ObjectId("615df5a81071da7cf7c7d8d4"),
                    filme: "Vingadores: Ultimato",
                    valor: 25.00,
                    assentos: [{
                        numero: 1,
                        disponivel: true
                    }, {
                        numero: 2,
                        disponivel: true
                    },]
                }, {
                    data: ISODate("2021-12-01T13:00:00Z"),
                    idFilme: ObjectId("615df5a81071da7cf7c7d8d4"),
                    filme: "Vingadores: Ultimato",
                    valor: 20.00,
                    assentos: [{
                        numero: 1,
                        disponivel: true
                    }, {
                        numero: 2,
                        disponivel: false
                    }, {
                        numero: 2,
                        disponivel: true
                    },]
                }]
            }]
        }, {
            _id: ObjectId(),
            nome: "GNC Lindóia",
            salas: [{
                nome: 100,
                sessoes: [{
                    data: ISODate("2021-12-30T19:00:00Z"),
                    idFilme: ObjectId("615df5a81071da7cf7c7d8d4"),
                    filme: "Vingadores: Ultimato",
                    valor: 25.00,
                    assentos: [{
                        numero: 1,
                        disponivel: true
                    }, {
                        numero: 2,
                        disponivel: false
                    },]
                }, {
                    data: ISODate("2021-12-30T11:00:00Z"),
                    idFilme: ObjectId("615df5a81071da7cf7c7d8d4"),
                    filme: "Vingadores: Ultimato",
                    valor: 25.00,
                    assentos: [{
                        numero: 1,
                        disponivel: true
                    }, {
                        numero: 2,
                        disponivel: true
                    },]
                }, {
                    data: ISODate("2021-12-30T13:00:00Z"),
                    idFilme: ObjectId("615df5a81071da7cf7c7d8d6"),
                    filme: "Vingadores: Era de Ultron",
                    valor: 20.00,
                    assentos: [{
                        numero: 1,
                        disponivel: true
                    }, {
                        numero: 2,
                        disponivel: false
                    }, {
                        numero: 2,
                        disponivel: true
                    },]
                }]
            }]
        }]
    }]
    
    
]; 

async function getAllMovies(){
    return movies;
}

async function getMovieById(id){
    movies[0]._id = id;
    return movies[0];
}

async function getMoviePremieres(){
    movies[0].dataLancamento = new Date();
    return [movies[0]];
}

module.exports = {
    getAllMovies,
    getMoviePremieres,
    getMovieById
}