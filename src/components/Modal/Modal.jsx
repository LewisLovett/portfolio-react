import "./Modal.scss";

const Modal = ({setShown, title,image,skills,description, projectLink, repoLink}) => {
    const imgURL = require(`../../assets/images/${image}`);
    return(
        <div className="modal">
            <div className="modal__content">
                <a className="modal__close-btn" onClick={setShown}>X</a>
                <h1 className="modal__title">{title}</h1>
                <img className="modal__image" alt={`${title} image`} src={imgURL}/>
                <a className="modal__link"  href={projectLink}>Click here for project page</a>
                <a className="modal__link" href={repoLink}>Click here for github page</a>
                <p>Skills Used:</p>
                <ul>
                {skills.map(skill => (<li>{skill}</li>))}
                </ul>
                <p className="modal__description">{description}</p>
            </div>
        </div>
    )
}

export default Modal;