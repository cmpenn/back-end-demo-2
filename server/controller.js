const movies = require('./db.json')

module.exports = {
    getMovies:(req, res) => {
        res.send(movies)
    } ,
    deleteMovie:(req, res) =>{
        const deleteId = req.params.id
        let index = movies.findIndex(element => element.id === +deleteId)
        movies.splice(index, 1)
        res.status(200).send(movies)
    },
    createMovie:(req, res) => {
        const {title, rating, imageURL} = req.body
       
        let greatesId = -1
        
        for (i=0; i< movies.length; i++){
            if (movies[i].id > greatesId){
                greatesId = movies[i].id
            }
        }
        let nextId = greatesId +1

        let newMovie ={
            id: nextId,
            title,
            rating,
            imageURL
        }
        movies.push(newMovie)
        res.status(200).send(movies)
    }
}