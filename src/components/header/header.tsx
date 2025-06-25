import "./header.scss"

export default function Header(){
    return(
        <header className="hdr">
            <h1>Wilmer's Portfolio</h1>
            <ul>
                <li><a href="">About me</a></li>
                <li><a href="">Experience</a></li>
                <li><a href="">Abilities</a></li>
                <li><a href="">Project</a></li>
            </ul>
        </header>
    )
}