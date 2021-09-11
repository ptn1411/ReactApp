import React from 'react';


class Childcomponents extends React.Component {
    render() {
        return (
            <>
                <div>
                    <h1>
                        Hello :{this.props.name}
                    </h1>
                </div>
            </>

        )
    }

}
export default Childcomponents;