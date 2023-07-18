import PropTypes from "prop-types";
import { GalleryItem } from "../GalleryItem/GalleryItem.js";
import styled from "styled-components";

// З бібліотеки styled-components
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export function Gallery({ d, i: arrayImages, children }) {
  return (
    <section>
      {children}
      <p>{d}</p>
      <ul>
        {arrayImages.map(({ id, source }) => (
          <GalleryItem id={id} source={source} />
        ))}
      </ul>
      {/* З бібліотеки styled-components */}
      <Title>
        <p>Lorem</p>
      </Title>
    </section>
  );
}
Gallery.defaultProps = {
  d: "Default text for description",
};

Gallery.propTypes = {
  d: PropTypes.string,
  i: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      source: PropTypes.string,
    }),
  ),
  children: PropTypes.arrayOf(PropTypes.element),
};
