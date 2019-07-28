import React, { Component } from "react";
 
class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoaded: false };
    }

    onLoad = () => {
        this.setState({ isLoaded: !this.state.isLoaded });
    };

    render() {
        const { title, imageUrl, isVisible } = this.props;
        const { isLoaded } = this.state;
        if (isVisible) {
            return (
                <div 
                    img-src={ imageUrl }
                    data-loaded={`${isLoaded}`} 
                    className='menu__item'
                    style={{backgroundImage: `url(${ imageUrl })`}}
                >
                    <img src={ imageUrl }
                        className="hidden" 
                        onLoad={this.onLoad}
                    />
                    <div className="menu__item-content">
                        <h1 className="menu__item-content-title">
                            { title }
                        </h1>
                        <p className="menu__item-content-subtitle">
                            shop now
                        </p>
                    </div>
                </div>
            ) 
        } else {
            return (
                <div className={`menu__item ${isVisible}`} 
                    img-src={ imageUrl }
                >
                    <div className="menu__item-content">
                        <h1 className="menu__item-content-title">
                            { title }
                        </h1>
                        <p className="menu__item-content-subtitle">
                            shop now
                        </p>
                    </div>
                </div>
            )
        }
    }
}

export default MenuItem;