import React from "react";

const EventExample = () => {
    const handleClick = (e: React.MouseEvent) => {
        // e.preventDefault();
    };

    return (
        <div className="eventExample">
            <form>
                <input type="text" placeholder="Search for anything..." />
                <button onClick={handleClick}>Search</button>
            </form>
            <form className="post">
                <h1>Lorem ipsum dolor sit amet consectetur 1</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi dicta ipsa consequuntur. Ipsa quasi incidunt aliquam
                    dolorum. Provident architecto obcaecati dolorem numquam iure
                    delectus, iste temporibus mollitia, repellendus incidunt
                    itaque.
                </p>
                <button>Delete</button>
            </form>
            <form className="post">
                <h1>Lorem ipsum dolor sit amet consectetur 2</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi dicta ipsa consequuntur. Ipsa quasi incidunt aliquam
                    dolorum. Provident architecto obcaecati dolorem numquam iure
                    delectus, iste temporibus mollitia, repellendus incidunt
                    itaque.
                </p>
                <button>Delete</button>
            </form>
        </div>
    );
};

export default EventExample;
