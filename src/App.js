
import React, { useState } from 'react';
import Filter from './filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Father Stu',
      description: 'Father Stu is a 2022 biographical drama film starring Mark Wahlberg as Stuart Long, a boxer-turned-Catholic priest who lives with a progressive muscle disorder. The film is written and directed by Rosalind Ross in her directorial debut. ',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/d/db/Father_Stu.jpg',
      rating: 'pg',
    },
    {
      id: 2,
      title: 'sound of music',
      description: 'Set in Austria on the eve of the Anschluss in 1938, the musical tells the story of Maria, who takes a job as governess to a large family while she decides whether to become a nun. She falls in love with the children, and eventually their widowed father, Captain von Trapp.',
      posterURL: 'https://cinesocialuk.com/wp-content/uploads/2021/02/sound-of-music-poster.jpg',
      rating: 'all rating',
    },
  
  ]);

  const addMovie = () => {
    const newMovie = {
      id: movies.length + 1,
      title: 'Encanto',
      description: 'This is a new movie',
      posterURL: 'https://musicart.xboxlive.com/7/2d0e5200-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
      rating: 'all rating',
    };
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="app">
      <Filter movies={movies} />
      <button onClick={addMovie}>Add new movie</button>
    </div>
  );
};

export default App;
