import useGenres from "../hooks/useGenre";

const GenreList = () => {
  // const {data} = useData<Genre>('/genres'); //bad practice: neeed to avoid component about knowing the endpoint
  const {data} = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
