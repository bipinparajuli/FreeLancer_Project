import React from 'react'
import {category} from '../data/postProjectMetaData' 
import '../components/styles/PostProject.css'
import Button from './Button'


const PostProjectHero = () => {
    
    return (
        <main>
            <div className="discription">
                <h2>Tell us what you need to be done</h2>
                <p>Contact skilled freelancers within minutes. View profiles, rating, portfolio and chat with them. Pay the freelancer only when you are 100% satsify with their work</p>
            </div>

            <div className="project-form">

                <label  className="details">
                    <strong>
                    Choose a name for you project    
                    </strong>
                </label><br />
                <input type="text" placeholder="eg: Urget logo needed" /> <br />

                <label  className="details">
                    <strong>
                    Describe your project
                    </strong>    
                </label>

                <textarea rows="4" cols="50" placeholder="I'm looking for..." >
                    
                </textarea><br />
                   
                <label  className="details">
                    <strong>
                    Choose a category
                    </strong>    
                </label>

                <select name="" id="">
                {category.map(data=>(
                <option value={data}>{data}</option>    
                ))}
                </select> <br />

                <label  className="details">
                    <strong>
                    Choose a sub-category
                    </strong>    
                </label>

                <select name="" id="">
                {category.map(data=>(
                <option value={data}>{data}</option>    
                ))}
                </select> <br />

                <label  className="details">
                    <strong>
                    What is your budget for this service?
                    </strong>    
                </label>

                <input type="text" placeholder="NPR..." />

                <Button primary="true" big="true" round="true" text="Submit" ></Button>
                    
            </div>
        </main>
    )
}

export default PostProjectHero

