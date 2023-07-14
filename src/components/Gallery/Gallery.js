import PropTypes from 'prop-types';
import { GalleryItem } from '../GalleryItem/GalleryItem.js';

export function Gallery({ d, i: arrayImages, children }) {
    
    return (
        <section>
            {children}
            <p>{d}</p>
            <ul>
                {arrayImages.map(({ id, source }) => 
                    <GalleryItem id={id} source={source} />
                )}
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