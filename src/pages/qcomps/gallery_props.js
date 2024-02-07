function Avatar({person, width, height}) {
  return (
      <img
          className="avatar"
          src={'https://i.imgur.com/' + person.imageId + 's.jpg'}
          alt={person.name}
          width={width}
          height={height}
      />
  );
}

function Bio({profession, awards, discroverd}) {
  return (
      <ul>
        <li>
          <b>Profession: </b>
            {profession}
        </li>
        <li>
          <b>Awards: 4 </b>
            {awards}
        </li>
        <li>
          <b>Discovered: </b>
            {discroverd}
        </li>
      </ul>
  );
}

export default function Gallery() {
  return (
      <div>
        <h1>Scientists</h1>
        <section className="profile">
          <h2>Maria Skłodowska-Curie</h2>
            <Avatar
                person={{name: 'Maria Skłodowska-Curie', imageId: 'szV5sdG'}}
                width={70}
                height={70} />
          <ul>
          <li>
            <b>Profession: </b>
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src='https://i.imgur.com/YfeOqp2s.jpg'
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}
