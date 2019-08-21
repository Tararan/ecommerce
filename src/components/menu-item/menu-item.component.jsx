import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoaded: false };
    }

    onLoad = () => {
        this.setState({ isLoaded: true });
    };

    render() {
        const { title, imageUrl, shouldLoad, size, history, linkUrl, match } = this.props;
        const { isLoaded } = this.state;
    
        if (shouldLoad) {
            return (
                <div className={`menu__item ${size}`}
                    should-load={`${ shouldLoad }`}
                    data-loaded={`${ isLoaded }`} 
                    onClick={() => history.push(`${match.url}${linkUrl}`)}
                > 
                    <div className="menu__item-content"
                        onClick= { this.onClick }
                        img-src={ imageUrl }
                        style={{ backgroundImage: `url(${ imageUrl })` }}
                    >
                        <div className="menu__item-content-info">
                            <h1 className="menu__item-content-info-title">
                                { title }
                            </h1>
                            <p className="menu__item-content-info-subtitle">
                                ~ shop now ~
                            </p>
                        </div>
                        <img className="hidden" 
                            img-src={ imageUrl }
                            src={ imageUrl }
                            onLoad = { this.onLoad }
                        />
                    </div>
                    <div className="menu__item-shadow-img" 
                        style={{backgroundImage: `url(${ imageUrl })`}}
                    />
                </div>
            ) 
        } else {
            return (
                <div className="menu__item"
                    should-load={`${ shouldLoad }`}
                    data-loaded={`${ isLoaded }`} 
                >
                    <div className='menu__item-content'
                        onClick= { this.onClick }
                        img-src={ imageUrl }
                    >
                        <div className="menu__item-content-info">
                            <h1 className="menu__item-content-info-title">
                                { title }
                            </h1>
                            <p className="menu__item-content-info-subtitle">
                                shop now
                            </p>
                        </div>
                        <img className="hidden" 
                            img-src={ imageUrl }
                        />
                    </div>
                    <div className="menu__item-shadow-img" 
                        img-src={ imageUrl }
                    />
                </div>
            )
        }
    }
}

export default withRouter(MenuItem);