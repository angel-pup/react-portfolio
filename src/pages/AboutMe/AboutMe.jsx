import me from './images/me.png';

const AboutMe = () => {
    return (
        <div className="section has-background-grey">
            <div className="tile is-ancestor ">
                <div className="tile is-vertical is-12">
                    <div className="tile">
                    <div className="tile is-parent is-vertical">
                        <article className="tile is-child notification is-info has-text-black">
                        <p className="title">Vess Dominique Jasmine Stewart</p>
                        <p className="subtitle">Junior Full Stack Web Developer</p>
                        <p className="has-background-grey-lighter section">
                            Ever learning and developing her coding skills, Vess is a studious, caring, and well
                            meaning individual who loves to cook, game, and hang out with friends. Currently she is 
                            utilizing her knowledge in MERN stack development to build cool websites for personal growth.
                            Beyond studies, Vess enjoys the soaking in all the beauty of the outdoors, and finds time day
                            to day to catch a fresh breath of air. It helps with her ability to stay focused and prevents
                            from getting too overwhelmed. She is thankful for all of her supporting friends, and tries to
                            be equally available to everyone. She loves helping others both physically and mentally in times
                            of need, and loves conversation (mosts days). 
                            <br/>
                            <br/>
                            During her time off, she loves hopping into a VOIP call and talking with people from all over
                            the globe. Playing games like Risk of Rain 2 or Deep Rock galatic, sometimes single player shooters
                            or strategy games, and party games online with her close friends abroad. In person, she enjoys
                            building MtG decks and socializing with groups of like-minded fellow nerds.
                        </p>
                        </article>
                        <article className="tile is-child notification is-info has-text-black">
                        <p className="title">Bottom Text</p>
                        <p className="subtitle"></p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-info has-text-black">
                        <p className="title">Feeling Pretty</p>
                        <p className="subtitle">"Behold! It is Vess, devourer of souls!"</p>
                        <figure className="image is-3by5">
                            <img src={ me } />
                        </figure>
                        </article>
                    </div>
                    </div>
                    <div className="tile is-parent">
                    <article className="tile is-child notification is-info has-text-black">
                        <p className="title">About Bulma Tiles</p>
                        <p className="subtitle">You know... I thought this would look better</p>
                        <div className="content">
                            Turns out bulma tiles are just.... not the best for aligning content. I'll have to revisit this
                            'About Me' page at some point in the future.
                        </div>
                    </article>
                    </div>
                </div>
            </div>

            {/* <div className="aboutMe tile is-ancestor">
                <div className="tile is-4">
                    <div className="level">

                        <h1>ABOUT ME</h1>
                    </div>
                    
                    <p>Name: Vess Dominique Jasmine Stewart</p>
                    <p></p>
                </div>
                <div className="tile is-4">
                    
                </div>
                <div className="tile is-4">
                    
                </div>
                <div className="tile is-4">
                    
                </div>
                <div className="tile is-4">
                    
                </div>
                <div className="tile is-4">
                    
                </div>
                { <a href="https://vess-tech-blog.herokuapp.com" target="_blank" rel="noopener noreferrer">Vess Tech Blog</a> }
            </div> */}
        </div>
    );
}

export default AboutMe;