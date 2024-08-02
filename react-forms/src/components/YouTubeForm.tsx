export const YouTubeForm = () => {
    return (
        <div>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="john.doe"/>

                <label htmlFor="email">E-Mail</label>
                <input type="email" id="email" name="email" placeholder="john.doe@gmail.com"/>

                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" name="channel" placeholder="JohnDoe"/>

                <button>Submit</button>
            </form>
        </div>
    );
};