export default function Card1 ({
    employee= "none",
    degree="none",
    age="none",
    depart="none",
    colour = "purple",
    font = 0,
    image = 'icon/persontwo.png'
}) {
    return (
        <div style = {{backgroundColor: colour, fontSize: font}}>
            {
                colour === "red" ? <img src = { 'icon/person.png'} width = '50' />:
                colour === "blue" ? <img src = { 'icon/personThree.png'} width = '50' />: 
                                    <img src = {image} width = "50" />
            }
            {employee}
            {age}
            {degree}
            {depart}
        </div>
    )
}