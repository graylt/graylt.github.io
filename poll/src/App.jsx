import { useState } from 'react'

const PopularMovie =  ({ movie, votes }) => (
  <div>
    <p>{movie}</p>
    <p>has {votes} votes</p>
  </div>
)

const Popular = ({ movies, votes }) => {
  const maxVotes = Math.max( ...votes )
  const mostVotedIndex = votes.indexOf(maxVotes)

  if (maxVotes === 0) {
    return (
      <div>
        <p>no votes yet</p>
      </div>
    )
  }

  return (
    <PopularMovie movie={movies[mostVotedIndex]} votes={maxVotes} />
  )
}

const App = () => {

  const movies = [
    'Jeanne Dielman, 23, quai du Commerce, 1080 Bruxelles',
    'Tokyo Story',
    'In the Mood for Love',
    'Beau travail',
    'The Rules of the Game',
    'Cléo from 5 to 7',
    'Meshes of the Afternoon',
    'Close-up',
    'Persona',
    'Seven Samurai',
    'The Passion of Joan of Arc',
    'Late Spring',
    'PlayTime',
    'Au hasard Balthazar',
    'Daisies',
    '8 1/2',
    'Mirror',
    'L\'Atalante',
    'Pather Panchali',
    'City Lights',
    'M',
    'Breathless',
    'Bicycle Thieves',
    'Rashomon',
    'Stalker',
    'The Battle of Algiers',
    'Ordet',
    'Wanda',
    'The 400 Blows',
    'Ali: Fear Eats the Soul',
    'News from Home',
    'Contempt',
    'Battleship Potemkin',
    'Sans Soleil',
    'The Third Man',
    'Touki bouki',
    'Andrei Rublev',
    'La Jetée',
    'The Red Shoes',
    'The Gleaners and I',
    'Metropolis',
    'L\'avventura',
    'Journey to Italy',
    'Sansho the Bailiff',
    'A Brighter Summer Day',
    'Modern Times',
    'Céline and Julie Go Boating',
    'The Spirit of the Beehive',
    'Chungking Express',
    'Yi Yi',
    'Ugetsu',
    'The Earrings of Madame de . . .',
    'A Man Escaped',
    'Black Girl',
    'The General'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0,0,0,
                                      0,0,0,0,0,0,0,0,0,0,
                                      0,0,0,0,0,0,0,0,0,0,
                                      0,0,0,0,0,0,0,0,0,0,
                                      0,0,0,0,0,0,0,0,0,0,
                                      0,0,0,0,0,0,0,0,0,0,
                                      0,0,0,0,0,0,0,0,0,0,
                                      0,0,0,0,0,0,0,0,0,0,
                                      0,0,0,0,0,0,0,0,0,0,
                                      0,0,0,0,0,0,0,0,0,0])

    const handleVotes = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }



   return (
    <div>
      <h2>Sight and Sound Critics' Poll: Greatest Films of All Time</h2>
  <button onClick={() => setSelected(Math.floor(Math.random() * 50))}>
        Movie
      </button>
      <button onClick={handleVotes}>
        Vote
      </button>

      <h3>{movies[selected]}</h3>
      <p>This movie has: {votes[selected]} votes</p>
      <Popular movies={movies} votes={votes} />
    </div>
  )
}

export default App;