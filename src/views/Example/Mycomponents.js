import React from 'react';

import Childcomponents from './Childcomponents.js';

class Mycomponents extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    state = {
        fname: '',
        lname: ''
    }
    handleChangefname = (event) => {
        this.setState({ fname: event.target.value })
    }

    handleChangelname = (event) => {
        this.setState({ lname: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert('Submit')
    }
    render() {
        return (
            <>
                <div>
                    <form >
                        <label htmlFor="fname">First name:</label><br />
                        <input type="text"
                            value={this.state.fname}

                            onChange={(event) => this.handleChangefname(event)}

                        /><br />
                        <label htmlFor="lname">Last name:</label><br />
                        <input type="text"

                            value={this.state.lname}

                            onChange={(event) => this.handleChangelname(event)}
                        /><br />
                        <input type="submit"
                            onClick={(event) => this.handleSubmit(event)}
                        />
                    </form>
                </div>
                <Childcomponents name={this.state.fname} />
                <Childcomponents name={this.state.lname} />
            </>

        );
    }
}
export default Mycomponents;