import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const PlayListCard = props => {
  const {eachSong, onDelete} = props
  const {id, imageUrl, name, genre, duration} = eachSong
  const onClickButton = () => {
    onDelete(id)
  }

  return (
    <li className="list-style">
      <div className="cover-pic-container">
        <img className="cover-pic" src={imageUrl} alt="track" />
        <div className="song-des">
          <p>{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="song-duration">
        <p>{duration}</p>
        <button
          type="button"
          className="button"
          onClick={onClickButton}
          data-testid="delete"
        >
          <AiOutlineDelete />.
        </button>
      </div>
    </li>
  )
}

export default PlayListCard
