export const GalleryItem = ({ id, source }) =>
    <li key={id}>
        <img src={source} alt={id} width={300} />
    </li>