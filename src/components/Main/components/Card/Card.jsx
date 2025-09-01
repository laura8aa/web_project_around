function Card(props) {
  const { name, link, isLiked } = props.card;
  return (
    <template id="cardtemplate">
      <div className="elements__card">
        <img className="elements__card-photo" src={link} alt="" />

        <div className="elements__content">
          <p className="elements__title">{name}</p>
          <button className="elements__like-button" alt="Boton like"></button>
          <button className="elements__trash-button"></button>
        </div>
      </div>
    </template>
  );
}

export default Card;
