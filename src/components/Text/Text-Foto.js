import data from '../../idk.json';
import './Text.css';

export function Text() {
  return (
    <div className="text">
      <h1>{data.subject.name}</h1>
      {data.chapters.map((chapter) => (

        <div key={chapter.chapter_id} className="chapter">
          <h2>{chapter.name}</h2>
          <p>{chapter.text}</p>
          {chapter.photos_list.map((photo, index) => (
            <img key={index} src={`/img/${photo}`} alt={chapter.name} />
          ))}

        </div>
        
      ))}
    </div>
  );
}


export default Text