let movies = [
    {
        "id": 1,
        "title": "m1",
        "director": "d1",
        "created_at": "2024-03-19T08:47:53.707Z",
        "updated_at": "2024-03-19T08:47:53.707Z",
        "average_score": 4.0
    },
    {
        "id": 2,
        "title": "titulo2",
        "director": "d2",
        "created_at": "2024-03-19T08:47:53.707Z",
        "updated_at": "2024-03-19T08:47:53.707Z",
        "average_score": 4.0
    },    {
        "id": 3,
        "title": "aquele",
        "director": "ele",
        "created_at": "2024-03-19T08:47:53.707Z",
        "updated_at": "2024-03-19T08:47:53.707Z",
        "average_score": 4.0
    },];

const pseudo_mdb = {
    getMovies: () => {
        return movies;
    }
}   
export default pseudo_mdb;