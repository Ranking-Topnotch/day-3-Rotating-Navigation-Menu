function App(){
    const [state, setState] = React.useState(false)
    function toggle(){
        setState(prev => !prev)
    }
    console.log(state)
    return(
        <div className="con">
            <div className="nav-con">
            <div className="navigation">
                <div className="nav"></div>
                {state === false && <i onClick={toggle} className="bi bi-list"></i>}
                {state && <i onClick={toggle} className="bi bi-x-lg"></i>} 
            </div>
            </div>
            <div className={state ? 'article1' : 'article'}>
                <h2>Amazing Article</h2>
                <p>Florin Pop</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos, iste ut blanditiis vitae illo, officia magni labore consectetur nobis rem eius! Temporibus, eum! Numquam debitis, repudiandae blanditiis nemo nisi eligendi doloribus ipsa ex unde, deleniti qui esse ipsum! Earum quidem sit aliquam dolor iure nihil tempora iusto magnam? Praesentium excepturi eum mollitia vitae incidunt earum optio quibusdam expedita officiis exercitationem totam, magni cupiditate aliquam sapiente modi, reiciendis et ipsa explicabo. Soluta, at minima. In quaerat adipisci sunt esse facilis exercitationem necessitatibus ipsum beatae. Laborum quidem ipsum ea aliquam, tempore voluptatem voluptas, cum consequuntur corrupti ducimus error! Cum, molestiae nihil.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
                <h2> My Perfume</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos, iste ut blanditiis vitae illo, officia magni labore consectetur nobis rem eius! Temporibus, eum! Numquam debitis, repudiandae blanditiis nemo nisi eligendi doloribus ipsa ex unde, deleniti qui esse ipsum! Earum quidem sit aliquam dolor iure nihil tempora iusto magnam? Praesentium excepturi eum mollitia vitae incidunt earum optio quibusdam expedita officiis exercitationem totam, magni cupiditate aliquam sapiente modi, reiciendis et ipsa explicabo. Soluta, at minima. In quaerat adipisci sunt esse facilis exercitationem necessitatibus ipsum beatae. Laborum quidem ipsum ea aliquam, tempore voluptatem voluptas, cum consequuntur corrupti ducimus error! Cum, molestiae nihil.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex hic laborum.
                </p>
            </div>
            { state && <div className="contact">
                <div>
                    <i className="bi bi-house-door"></i>
                    <span>Home</span>  
                </div>
                <div className="second">
                    <i className="bi bi-person-lines-fill"></i>
                    <span>About</span>  
                </div>
                <div className="third">
                    <i className="bi bi-envelope"></i>
                    <span>Contact</span>  
                </div>

            </div>}
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'))