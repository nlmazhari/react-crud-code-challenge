import React, { Component } from 'react'

class Home extends Component {

    render() {
        return (
            <div>
                {/* <Header /> and <SideMenu /> could be added here */}
                <div className="mainbar">
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home