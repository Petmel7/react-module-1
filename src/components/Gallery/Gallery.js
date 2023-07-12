import PropTypes from 'prop-types';

export function Gallery({ d, i, children }) {
    
    console.log(children)
    return (
        <section>
            {children}
            <p>{d}</p>
            <ul>
                <li>1</li>
            </ul>
        </section>
    );
}
Gallery.defaultProps = {
    d: 'Default text for description',
}

Gallery.PropTypes = {
    d: '',
    i: '',
    children: '',
}