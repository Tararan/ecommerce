import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import Observer from '../shared/lazy-loading/lazy-loading-observer';
import uniqid from 'uniqid';

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1248&q=80',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1228&q=80',
                    id: 2
                },
                {
                    title: 'shoes',
                    imageUrl: 'https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
                    id: 3
                },
                {
                    title: 'womens',
                    imageUrl: 'https://images.unsplash.com/photo-1484329081568-bed9ba42793d?ixlib=rb-1.2.1&auto=format&fit=crop&w=3452&q=80',
                    id: 4
                },
                {
                    title: 'mens',
                    imageUrl: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
                    id: 5
                },
                {
                    title: 'hats',
                    imageUrl: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1248&q=80',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1228&q=80',
                    id: 2
                },
                {
                    title: 'shoes',
                    imageUrl: 'https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
                    id: 3
                },
                {
                    title: 'womens',
                    imageUrl: 'https://images.unsplash.com/photo-1484329081568-bed9ba42793d?ixlib=rb-1.2.1&auto=format&fit=crop&w=3452&q=80',
                    id: 4
                },
                {
                    title: 'mens',
                    imageUrl: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
                    id: 5
                },
                {
                    title: 'shoes',
                    imageUrl: 'https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
                    id: 3
                },
                {
                    title: 'womens',
                    imageUrl: 'https://images.unsplash.com/photo-1484329081568-bed9ba42793d?ixlib=rb-1.2.1&auto=format&fit=crop&w=3452&q=80',
                    id: 4
                },
                {
                    title: 'mens',
                    imageUrl: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
                    id: 5
                },
                {
                    title: 'womens',
                    imageUrl: 'https://images.unsplash.com/photo-1484329081568-bed9ba42793d?ixlib=rb-1.2.1&auto=format&fit=crop&w=3452&q=80',
                    id: 4
                },
                {
                    title: 'mens',
                    imageUrl: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
                    id: 5
                },
                {
                    title: 'shoes',
                    imageUrl: 'https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
                    id: 3
                },
                {
                    title: 'womens',
                    imageUrl: 'https://images.unsplash.com/photo-1484329081568-bed9ba42793d?ixlib=rb-1.2.1&auto=format&fit=crop&w=3452&q=80',
                    id: 4
                },
                {
                    title: 'womens',
                    imageUrl: 'https://images.unsplash.com/photo-1484329081568-bed9ba42793d?ixlib=rb-1.2.1&auto=format&fit=crop&w=3452&q=80',
                    id: 4
                },
                {
                    title: 'mens',
                    imageUrl: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
                    id: 5
                },
                {
                    title: 'hats',
                    imageUrl: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1248&q=80',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1228&q=80',
                    id: 2
                },
                {
                    title: 'shoes',
                    imageUrl: 'https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
                    id: 3
                },
                {
                    title: 'womens',
                    imageUrl: 'https://images.unsplash.com/photo-1484329081568-bed9ba42793d?ixlib=rb-1.2.1&auto=format&fit=crop&w=3452&q=80',
                    id: 4
                },
                {
                    title: 'mens',
                    imageUrl: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
                    id: 5
                },
                {
                    title: 'shoes',
                    imageUrl: 'https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
                    id: 3
                },
                {
                    title: 'womens',
                    imageUrl: 'https://images.unsplash.com/photo-1484329081568-bed9ba42793d?ixlib=rb-1.2.1&auto=format&fit=crop&w=3452&q=80',
                    id: 4
                },
                {
                    title: 'mens',
                    imageUrl: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
                    id: 5
                },
                {
                    title: 'womens',
                    imageUrl: 'https://images.unsplash.com/photo-1484329081568-bed9ba42793d?ixlib=rb-1.2.1&auto=format&fit=crop&w=3452&q=80',
                    id: 4
                },
                {
                    title: 'mens',
                    imageUrl: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
                    id: 5
                },
                {
                    title: 'shoes',
                    imageUrl: 'https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
                    id: 3
                },
                {
                    title: 'womens',
                    imageUrl: 'https://images.unsplash.com/photo-1484329081568-bed9ba42793d?ixlib=rb-1.2.1&auto=format&fit=crop&w=3452&q=80',
                    id: 4
                },
                {
                    title: 'mens',
                    imageUrl: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
                    id: 5
                }
            ]
        }
    }

    render() {
        {/* directory-menu is menu */}
         return(
            <div key={uniqid()} className="menu">
                {
                    this.state.sections.map(({ title, imageUrl }) => (
                        <Observer key={uniqid()}>
                            { (shouldLoad) => 
                                <MenuItem 
                                    key={uniqid()} 
                                    shouldLoad={shouldLoad} 
                                    title={title} 
                                    imageUrl={imageUrl} 
                                />
                            }
                        </Observer>
                    ))
                }
            </div>
         )
    }
}

export default Menu; 