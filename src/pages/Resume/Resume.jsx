import './resume.css'
import resume from './Vess_Stewart_Resume.pdf'

const Resume = () => {
    return (
        <div className="resume has-background-grey">
            <object title="Vess Resume" data={ resume } type="application/pdf" width="100%" height="100%">
                <p className="has-text-white">If the PDF did not load, check it out here on my <a className="has-text-warning" href="https://github.com/angel-pup/resume">GitHub!</a></p>
            </object>
        </div>
    );
}

export default Resume;