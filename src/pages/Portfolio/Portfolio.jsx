import { projects } from './projects'
import Project from './Project/Project' 

const Portfolio = () => {
    return (
        <div className="portfolio has-background-grey">
            <br/>
            <div className="columns">
                <div className="column is-two-thirds is-offset-2 has-text-centered">
                    <h1 className="title has-text-white">My Projects</h1>
                </div>
            </div>
            {projects.map(( { reponame, image, hostimage, hostname, date, description }) => {
                return (
                    <Project
                        key = {reponame}
                        reponame = { reponame }
                        image = { image }
                        hostimage = { hostimage }
                        hostname = { hostname }
                        date = { date }
                        description = { description }
                    />
                );
            })}
        </div>
    );
}

export default Portfolio;