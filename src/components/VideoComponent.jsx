
const VideoComponent = ({id , small})=>{
    return(
        <iframe
        width={"100%"}
        height={small ? '150px' :'500px'}
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube Video Player"
        allowFullScreen
        >

        </iframe>
    )
}

export default VideoComponent