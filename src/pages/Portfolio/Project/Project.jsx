const Project = (props) => {
    return (
        <div className="section columns">
            <div className="column is-two-thirds is-offset-2">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                        <img src={ props.image } alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                            <img src={props.hostimage} alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4"><a
                                href={`https://github.com/${ props.hostname }/${ props.reponame }`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >{ props.reponame }</a></p>
                            <p className="subtitle is-6">{ props.date }</p>
                        </div>
                        </div>

                        <div className="content">
                            { props.description }
                            <br/>
                            <a target="_blank" rel="noopener noreferrer" href={`https://github.com/${props.hostname}`}>@{props.hostname}</a>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;