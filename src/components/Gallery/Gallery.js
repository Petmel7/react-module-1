import PropTypes from 'prop-types';

export function Gallery({ d, i: arrayImages, children }) {
    
    console.log(children)
    return (
        <section>
            {children}
            <p>{d}</p>
            <ul>
                {arrayImages.map((imageObj) => {
                    console.log(imageObj)
                    return <li key={imageObj.id}>1</li>
                })}
            </ul>
        </section>
    );
}
Gallery.defaultProps = {
    d: 'Default text for description',
}

Gallery.propTypes = {
    d: PropTypes.string,
    i: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        source: PropTypes.string,
    })),
    children: PropTypes.arrayOf(PropTypes.element),
}