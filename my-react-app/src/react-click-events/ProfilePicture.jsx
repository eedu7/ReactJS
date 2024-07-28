function ProfilePicture() {
    const image_url = "./src/assets/son-goku.jpg";

    const handleClick = (e) => e.target.style.display = "none";

    return (
        <img alt="Profile Image" onClick={(e) => handleClick(e)} src={image_url}/>
    )
}

export default ProfilePicture;